import { MintApp } from './MintApp';
import React, { FC, ReactNode, useCallback, useMemo } from 'react';
import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
import {
  WalletDialogProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-material-ui';
import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import {
  LedgerWalletAdapter,
  PhantomWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl, Connection } from '@solana/web3.js';
import { useSnackbar } from 'notistack';
import * as anchor from '@project-serum/anchor';
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
import Home from './mint/Home';

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

function Artifacts() {
  return (
    <>
      <a
        href="https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '90px',
          height: '90px',
          background:
            "url('http://stfalcon.github.io/stopwar/img/stop-war-in-ukraine.png')",
          zIndex: 2013,
          border: 0,
        }}
        title="Do something to stop this war! Russians are killing our children and civilians!"
        target="_blank"
      />
      <Helmet>
        <title>Artifactory</title>
      </Helmet>
      <MainContent>
        <MintApp />
        <Divider sx={{ my: 4 }}>OR</Divider>
        <Button href="/overview" variant="outlined">
          Go to homepage
        </Button>
      </MainContent>
    </>
  );
}

export default Artifacts;
