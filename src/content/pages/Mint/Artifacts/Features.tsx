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
import pic1 from './30.jpg';
import pic2 from './39.jpg';
import pic3 from './48.jpg';
import './index.css';

const ButtonWrapper = styled(Button)(
  ({ theme }) => `
`,
);
export const Features = () => {
  return (
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
                  a NFT that represents a Triptych Artifact. This artifact is
                  your forever whitelist into our expeditions.
                </Paper>
                <Paper className={'paper-img'}>
                  Want first access to new tooling we are developing? Want to be
                  in the special part of our discord where we can help you and
                  talk good blockchain talk?
                </Paper>
                <Paper className={'paper-img'}>
                  You will be forever whitelisted to our NFT drops and collabs.
                  Dont forget about real life events to party and build!
                </Paper>
                <Paper className={'paper-img'}>
                  these Whitelist Token NFTs are rendered using an vintage piece
                  of 3d abandonware and we love the result. We have also
                  retained all 3d models for future metaverse integrations
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
                  dedicated to open source end to end technologies, rapidly
                  accelerating decentralization. <br />
                </Paper>
                <Paper className={'paper-img'}>
                  Building tools for the alternate timelines <br />
                </Paper>
                <Paper className={'paper-img'}>
                  Increase Ops and development agility <br />
                </Paper>
                <Paper className={'paper-img'}>
                  Dedicated to open sourcing the proprietorship amassed
                  interally so that rockets go brrrrr to Ganymede and beyond{' '}
                  <br />
                </Paper>
              </Typography>
              <br />
              <Typography variant={'h1'}>The Team</Typography>
              <br />
              <Typography variant={'h2'}>
                <Container>
                  <Paper className={'paper-img'}>
                    WhyMidnight
                    <br />
                    <br />
                    <div style={{ fontSize: '12px' }}>
                      Some say he exists. Many have heard. Few have seen.
                      Whymidnight is our Nucleus, our Smart Contracting
                      Architect, and our Vision. A fully capable Systems
                      Architect / Full Stack Engineer.
                    </div>
                  </Paper>
                  <Paper className={'paper-img'}>
                    HumbleHamster
                    <br />
                    <br />
                    <div style={{ fontSize: '12px' }}>
                      The one who brought us together. Our guide and bridge in
                      the Solana and NFT landscape. Our visionary. Our
                      Talky-Talky Word Guy
                    </div>
                  </Paper>
                  <Paper className={'paper-img'}>
                    Carrot
                    <br />
                    <br />
                    <div style={{ fontSize: '12px' }}>
                      an illusive creature last seen in the metaverse developing
                      web3 apps to talk to Whymidnight's Solana Programs. Smart
                      Contractor / Front End Web3 developer. Blockhain O.G. (who
                      remembers MCX?)
                    </div>
                  </Paper>
                </Container>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0} className={'cssanimation hu__hu__1 paper-img'}>
            <img src={pic2} style={{ borderRadius: '10px', marginLeft: '' }} />
          </Paper>
          <Card className="griditem">
            <CardContent>
              <Typography variant={'h1'}>Our Plans</Typography>
              <br />
              <Typography variant={'subtitle1'}>
                <Paper className={'paper-img'}>
                  Step 1: Release the whitelist NFTs. Its a pre-party!
                  <br />
                </Paper>
                <Paper className={'paper-img'}>
                  Step 2: Finish work with our 3d Artist for Gen 0 Triptych NFT
                  Drop.
                </Paper>
                <Paper className={'paper-img'}>
                  Step 3: Release SteakHouse UI paired with our SteakHouse
                  backend
                </Paper>
                <Paper className={'paper-img'}>
                  Step 4: Big Collabs in the works
                </Paper>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={0} className={'cssanimation hu__hu__1 paper-img'}>
            <img src={pic3} style={{ borderRadius: '10px', marginLeft: '' }} />
          </Paper>
          <Card className="griditem">
            <CardContent>
              <Typography variant={'h1'}>
                Check out our Github Repos! <br />
                <br />
              </Typography>
              <Typography>
                <Paper className={'paper-img'}>
                  <Link>SteakHouse: Staking System</Link>
                </Paper>
                <Paper className={'paper-img'}>
                  <Link>NFT Loyalty Rewards</Link>
                </Paper>
                <Paper className={'paper-img'}>
                  <Link>
                    Card Pack like metadata preperation for CandyMachine
                  </Link>
                </Paper>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Features;
