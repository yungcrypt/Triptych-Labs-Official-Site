let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd /noshit/triptych_labs/homepage
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
argglobal
%argdel
edit src/content/overview/index.tsx
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 31 + 182) / 365)
exe '2resize ' . ((&lines * 53 + 54) / 108)
exe 'vert 2resize ' . ((&columns * 166 + 182) / 365)
exe '3resize ' . ((&lines * 52 + 54) / 108)
exe 'vert 3resize ' . ((&columns * 166 + 182) / 365)
exe 'vert 4resize ' . ((&columns * 166 + 182) / 365)
argglobal
enew
file NERD_tree_1
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal nofen
wincmd w
argglobal
balt src/App.tsx
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 41 - ((40 * winheight(0) + 26) / 53)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 41
normal! 012|
wincmd w
argglobal
if bufexists("src/content/overview/Hero/index.tsx") | buffer src/content/overview/Hero/index.tsx | else | edit src/content/overview/Hero/index.tsx | endif
if &buftype ==# 'terminal'
  silent file src/content/overview/Hero/index.tsx
endif
balt src/content/overview/index.tsx
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 79 - ((20 * winheight(0) + 26) / 52)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 79
normal! 011|
wincmd w
argglobal
if bufexists("src/router.tsx") | buffer src/router.tsx | else | edit src/router.tsx | endif
if &buftype ==# 'terminal'
  silent file src/router.tsx
endif
balt src/App.tsx
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 18 - ((0 * winheight(0) + 53) / 106)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 18
normal! 0
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 31 + 182) / 365)
exe '2resize ' . ((&lines * 53 + 54) / 108)
exe 'vert 2resize ' . ((&columns * 166 + 182) / 365)
exe '3resize ' . ((&lines * 52 + 54) / 108)
exe 'vert 3resize ' . ((&columns * 166 + 182) / 365)
exe 'vert 4resize ' . ((&columns * 166 + 182) / 365)
tabnext 1
badd +5 src/App.tsx
badd +18 src/router.tsx
badd +27 src/content/overview/index.tsx
badd +82 src/content/overview/Hero/index.tsx
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 shortmess=filnxtToOF
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
