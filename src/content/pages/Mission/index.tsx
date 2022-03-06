import {
  Box,
  Card,
  Typography,
  Container,
  Divider,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import TopbarLayout from 'src/layouts/TopbarLayout';
import { useMemo } from 'react';
import QrGenerator from './qrcode/QrGenerator';

import Wasm from 'react-wasm';
import { useAsBind } from 'use-as-bind';

import { styled } from '@mui/material/styles';

const MainContent = styled(Box)(
  ({ theme }) => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,
);

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`,
);

const ButtonSearch = styled(Button)(
  ({ theme }) => `
    margin-right: -${theme.spacing(1)};
`,
);

function Mission() {
  const { promoLoaded, promoProgram, programError } =
    useAsBind('static/main.wasm');
  useMemo(() => {
    console.log('na');
    console.log(promoLoaded);
    console.log(promoProgram);
    if (promoLoaded) {
      console.log(promoProgram.exports.sayHello('word'));
    }
  }, [promoLoaded]);
  return (
    <>
      <div>
        <TopbarLayout />
      </div>
      <Helmet>
        <title>Status - 404</title>
      </Helmet>
      <MainContent>
        <Container maxWidth="md">
          <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
            <QrGenerator />
            <FormControl variant="outlined" fullWidth>
              <OutlinedInputWrapper
                type="text"
                placeholder="Search terms here..."
                endAdornment={
                  <InputAdornment position="end">
                    <ButtonSearch variant="contained" size="small">
                      Search
                    </ButtonSearch>
                  </InputAdornment>
                }
                startAdornment={
                  <InputAdornment position="start">
                    <SearchTwoToneIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
            <Divider sx={{ my: 4 }}>OR</Divider>
            <Button href="/overview" variant="outlined">
              Go to homepage
            </Button>
          </Card>
        </Container>
      </MainContent>
    </>
  );
}

export default Mission;
