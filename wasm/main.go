package main

import (
	"encoding/base64"
	"fmt"
	"io/ioutil"
	"net/http"
	"syscall/js"

	qrcode "github.com/skip2/go-qrcode"
)

const (
	recoveryLevel = qrcode.Medium
	imageSize     = 256
)

func main() {
	done := make(chan struct{})

	global := js.Global()

	generateQRCodeFunc := js.FuncOf(generateQRCode)
	defer generateQRCodeFunc.Release()
	global.Set("generateQRCode", generateQRCodeFunc)

	getShwiftyFunc := js.FuncOf(getShwifty)
	defer getShwiftyFunc.Release()
	global.Set("register", getShwiftyFunc)

	<-done
}

func generateQRCode(this js.Value, args []js.Value) interface{} {
	content := args[0].String()
	callback := args[1]

	png, err := qrcode.Encode(content, recoveryLevel, imageSize)
	if err != nil {
		callback.Invoke(err.Error(), nil)
	} else {
		callback.Invoke(nil, base64.StdEncoding.EncodeToString(png))
	}

	return js.Undefined()
}

var handler = js.FuncOf(func(this js.Value, args []js.Value) interface{} {
	resolve := args[0]
	reject := args[1]

	go func() {
		requestUrl := "https://taylorswiftapi.herokuapp.com/get"
		fmt.Println(requestUrl)
		res, err := http.DefaultClient.Get(requestUrl)
		if err != nil {
			errorConstructor := js.Global().Get("Error")
			errorObject := errorConstructor.New(err.Error())
			reject.Invoke(errorObject)
			return
		}
		defer res.Body.Close()

		data, err := ioutil.ReadAll(res.Body)
		if err != nil {
			errorConstructor := js.Global().Get("Error")
			errorObject := errorConstructor.New(err.Error())
			reject.Invoke(errorObject)
			return
		}

		resolve.Invoke(string(data))
	}()

	return nil
})

func getShwifty(this js.Value, args []js.Value) interface{} {

	promiseConstructor := js.Global().Get("Promise")
	return promiseConstructor.New(handler)
}
