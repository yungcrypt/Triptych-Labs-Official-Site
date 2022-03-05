import React, { useState, useEffect, useMemo } from 'react';
import { styled } from '@mui/material/styles';
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Divider,
  Typography,
  Paper,
  Container,
  Link,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import pic1 from './30.jpg';
import pic2 from './39.jpg';
import pic3 from './48.jpg';
import './index.css';

/*
        <Grid item xs={6}>
          <Card className={'griditem'}>
            <CardContent>
              <Typography variant={'h1'}>
                <Paper className={'paper-img'}>
                  <NavLink to="/spaces/mint">Join our Twitter Space!</NavLink>
                </Paper>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
*/
export const Features = () => {
  return (
    <>
      <Container maxWidth={'md'} className={'cssanimation hu__hu__1'}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 1, md: 1 }}
          columns={{ xs: 6, sm: 6, md: 6, lg: 6 }}
        >
          <Grid item xs={6}>
            <Card className={'griditem'}>
              <CardContent>
                <Typography variant={'h1'}>What am I minting?</Typography>
                <br />
                <Typography variant={'subtitle1'}>
                  <Paper className={'paper-img'}>
                    A NFT that represents a Triptych Artifact.
                  </Paper>
                  <Paper className={'paper-img'}>
                    We developed a Candy Machine feature to accept NFTs as
                    Whitelist Spots. These NFTs will be Forever Whitelisted for
                    our Future Mints and More.
                  </Paper>
                  <Paper className={'paper-img'}>
                    We wanted to share these rendered NFTs of a vintage piece of
                    3D Abandonware, called - Byce from Daz 3D. We have retained
                    every 3D Model for Future Metaverse Integrations.
                  </Paper>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={0} className={'cssanimation hu__hu__1 paper-img'}>
              <img src={pic1} style={{ borderRadius: '10px', width: '100%' }} />
            </Paper>
            <Card className="griditem">
              <CardContent>
                <Typography variant={'h1'}>Triptych Labs?</Typography>
                <br />
                <Typography variant={'subtitle1'}>
                  <Paper className={'paper-img'}>
                    Dedicated to Open Source End to End (E2E) Technologies for
                    Rapid Acceleration to Decentralization. <br />
                  </Paper>
                  <Paper className={'paper-img'}>
                    Building Tools for the Alternate Timelines <br />
                  </Paper>
                  <Paper className={'paper-img'}>
                    Increase Ops and Development Agility <br />
                  </Paper>
                </Typography>
                <br />
                <Typography variant={'h1'}>The Team</Typography>
                <br />
                <Typography variant={'h2'}>
                  <Container>
                    <Paper className={'paper-img'}>
                      Dom
                      <br />
                      <br />
                      <div style={{ fontSize: '12px' }}>
                        Totally don't exist. May be an Elephant. whymidnight is
                        our Nucleus, our Crusader, and our Vision. Rusty Systems
                        Architect / Full Stack Technologist.
                      </div>
                    </Paper>
                    <Paper className={'paper-img'}>
                      HumbleHamster
                      <br />
                      <br />
                      <div style={{ fontSize: '12px' }}>
                        The one who brought us together. Our Guide and Bridge in
                        the Solana and NFT Landscape; Our Visionary; Our
                        Talky-Talky Word Guy.
                      </div>
                    </Paper>
                    <Paper className={'paper-img'}>
                      Carrot
                      <br />
                      <br />
                      <div style={{ fontSize: '12px' }}>
                        An illusive creature last seen in the metaverse
                        developing web3 apps to talk to whymidnight's Solana
                        Programs. Smart Contractor / Front End Web3 developer.
                        Blockhain O.G. (Who remembers MCX?)
                      </div>
                    </Paper>
                  </Container>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={0} className={'cssanimation hu__hu__1 paper-img'}>
              <img
                src={pic2}
                style={{ borderRadius: '10px', marginLeft: '' }}
              />
            </Paper>
            <Card className="griditem">
              <CardContent>
                <Typography variant={'h1'}>Our Plans</Typography>
                <br />
                <Typography variant={'subtitle1'}>
                  <Paper className={'paper-img'}>
                    Step 1: Release the Whitelist NFTs.
                    <br />
                  </Paper>
                  <Paper className={'paper-img'}>
                    Step 2: Finish work with our 3D Artist for Gen 0 Triptych
                    NFT Drop.
                  </Paper>
                  <Paper className={'paper-img'}>
                    Step 3: Open Source SteakHouse UI for our Staking Backend
                    System.
                  </Paper>
                  <Paper className={'paper-img'}>
                    Step 4: Persist Innovative Endeavours.
                  </Paper>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Paper elevation={0} className={'cssanimation hu__hu__1 paper-img'}>
              <img
                src={pic3}
                style={{ borderRadius: '10px', marginLeft: '' }}
              />
            </Paper>
            <Card className="griditem">
              <CardContent>
                <Typography variant={'h1'}>
                  Check out our Github Repos! <br />
                  <br />
                </Typography>
                <Typography>
                  <Paper className={'paper-img'}>
                    <NavLink to="/github/steakhouse">
                      SteakHouse: Staking Contract + L2
                    </NavLink>
                  </Paper>
                  <Paper className={'paper-img'}>
                    <NavLink to="/github/nftloyalty">
                      NFT Loyalty Rewards
                    </NavLink>
                  </Paper>
                  <Paper className={'paper-img'}>
                    <NavLink to="/github/cardpacks">
                      Card Pack like Metadata Preperation for Candy Machine
                    </NavLink>
                  </Paper>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Features;
