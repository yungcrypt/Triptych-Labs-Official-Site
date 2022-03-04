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

const network = 'devnet';
const rpcHost =
  'https://sparkling-dark-shadow.solana-devnet.quiknode.pro/0e9964e4d70fe7f856e7d03bc7e41dc6a2b84452/';
const connection = new Connection(rpcHost);

const Mint: FC<{ children: ReactNode }> = ({ children }) => {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // @solana/wallet-adapter-wallets includes all the adapters but supports tree shaking and lazy loading --
  // Only the wallets you configure here will be compiled into your application, and only the dependencies
  // of wallets that your users connect to will be loaded.
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
      new LedgerWalletAdapter(),
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network }),
    ],
    [network],
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletDialogProvider>{children}</WalletDialogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

function Artifacts() {
  const getCandyMachineId = (): anchor.web3.PublicKey | undefined => {
    try {
      const candyMachineId = new anchor.web3.PublicKey(
        'C8vVdyfwjvoRiKBTjf3rC6SQFG5QYV76fqtwuXv86kfQ',
      );

      return candyMachineId;
    } catch (e) {
      console.log('Failed to construct CandyMachineId', e);
      return undefined;
    }
  };
  const candyMachineId = getCandyMachineId();

  const startDateSeed = parseInt('10');
  const txTimeoutInMilliseconds = 30000;

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
      <Mint>
        <MainContent>
          <WalletMultiButton />
          <Container maxWidth="md">
            <Container maxWidth="sm">
              <Card sx={{ textAlign: 'center', mt: 3, p: 4 }}>
                <Box textAlign="center">
                  <Home
                    candyMachineId={candyMachineId}
                    connection={connection}
                    startDate={startDateSeed}
                    txTimeout={txTimeoutInMilliseconds}
                    rpcHost={rpcHost}
                  />
                </Box>
                <Divider sx={{ my: 4 }}>OR</Divider>
                <Button href="/overview" variant="outlined">
                  Go to homepage
                </Button>
              </Card>
            </Container>
          </Container>
        </MainContent>
      </Mint>
    </>
  );
}

export default Artifacts;
