import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
import { WalletDialogProvider, WalletMultiButton } from '@solana/wallet-adapter-material-ui';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SlopeWalletAdapter,
    SolflareWalletAdapter,
    SolletExtensionWalletAdapter,
    SolletWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { useSnackbar } from 'notistack';
import React, { FC, ReactNode, useCallback, useMemo } from 'react';
import { MintButton } from './mint/MintButton';
import { Theme } from './Theme';
import logo from './labs.png';
import lambda from './lambda.gif';
import { Features } from './Features';
import Home from './mint/Home';
import * as anc from '@project-serum/anchor';
import { Paper, Container } from '@mui/material';


export const MintApp: FC = () => {
    return (
        <Theme>
            <Context>
                <div className={'App-header'}>
                    <Content />
                </div>
            </Context>
        </Theme>
    );
};
const Context: FC<{ children: ReactNode }> = ({ children }) => {
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
        [network]
    );

    const { enqueueSnackbar } = useSnackbar();
    const onError = useCallback(
        (error: WalletError) => {
            enqueueSnackbar(error.message ? `${error.name}: ${error.message}` : error.name, { variant: 'error' });
            console.error(error);
        },
        [enqueueSnackbar]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} onError={onError} autoConnect>
                <WalletDialogProvider>{children}</WalletDialogProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

const Content: FC = () => {
    const getCandyMachineId = (): anc.web3.PublicKey | undefined => {
        try {
            const candyMachineId = new anc.web3.PublicKey('AEsFGqC7CbMp35Lv18o8qRWYsKgjDfnJNCkhGqTdXNf2');

            return candyMachineId;
        } catch (e) {
            console.log('Failed to construct CandyMachineId', e);
            return undefined;
        }
    };
    const candyMachineId = getCandyMachineId();
    const network = 'devnet';
    const rpcHost = 'https://api.devnet.solana.com';
    const connection = new anc.web3.Connection(rpcHost ? rpcHost : anc.web3.clusterApiUrl('devnet'));

    const startDateSeed = parseInt('10');
    const txTimeoutInMilliseconds = 30000;

    const endpoint = useMemo(() => clusterApiUrl(network), []);
    return (
        <>
            <img src={logo} style={{marginTop:'8%'}}/>
            <br />
            <div className={'mint-spot'}>
                <WalletMultiButton />
                <div style={{margin:'20px'}}>
                <Home
                    candyMachineId={candyMachineId}
                    connection={connection}
                    startDate={startDateSeed}
                    txTimeout={txTimeoutInMilliseconds}
                    rpcHost={rpcHost}
                />
                </div>
            </div>
            <div style={{ marginTop: '8%' }} />
            <div className={'feature-spot'}>
            {//@ts-ignore
                <Features className={'features'} />
                }
            </div>
        </>
    );
};
