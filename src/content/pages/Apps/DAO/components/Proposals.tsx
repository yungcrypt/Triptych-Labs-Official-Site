import {
  Button,
  Card,
  Grid,
  Box,
  CardContent,
  FormControl,
  CardActions,
  Typography,
  Avatar,
  Divider,
  Link,
  Rating,
  OutlinedInput,
  Chip,
  Tooltip,
  AvatarGroup,
  Pagination,
  InputAdornment,
  Menu,
  MenuItem,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import type ProposalsT from 'src/content/pages/Apps/DAO/structs/proposals';
import { styled } from '@mui/material/styles';
import { useRecoilState } from 'recoil';
import { session } from 'src/content/pages/Apps/DAO/atoms/session';

type Props = {};

declare function fetchProposals(programKey: string): Promise<string>;

async function callFetchProposals(
  programKey: string,
  setProposals: any,
  setErrorMessage: any,
) {
  try {
    const resp = await fetchProposals(programKey);
    setProposals(JSON.parse(resp));
  } catch (e) {
    console.log(e);
    console.log(programKey);
    setErrorMessage('Unauthorized');
  }

  console.log('Made it');
}

const VoteButton = styled(Button)(
  ({ theme }) => `
    margin: 10px;
    width: 90%;
    `,
);

const DAOProposals: React.FC<Props> = (props) => {
  const [sessionKey] = useRecoilState(session);
  const [proposals, setProposals] = useState<ProposalsT[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    callFetchProposals(sessionKey, setProposals, setErrorMessage);
  }, []);

  return (
    <>
      {proposals.length &&
        proposals.map((proposal: any) => (
          <Grid item xs={12} md={4}>
            <Card>
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Link
                  href="#"
                  variant="h3"
                  color="text.primary"
                  underline="hover"
                >
                  Proposal #{proposal.proposalNum}
                </Link>
                <Box sx={{ py: 2 }}>
                  <Chip
                    sx={{ mr: 0.5 }}
                    size="small"
                    label={proposal.proposalType}
                    color="secondary"
                  />
                </Box>
                <Typography sx={{ pb: 2 }} color="text.secondary">
                  {proposal.proposalDescription}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                  <VoteButton
                    sx={{ background: 'green' }}
                    size="small"
                    variant="contained"
                  >
                    Yay
                  </VoteButton>
                  <VoteButton
                    sx={{ background: 'red' }}
                    size="small"
                    variant="contained"
                  >
                    Nay
                  </VoteButton>
                </Box>
              </CardContent>
              <Divider />
              <CardActions
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography
                  display="flex"
                  alignItems="center"
                  variant="subtitle2"
                >
                  <TodayTwoToneIcon sx={{ mr: 1 }} />6 Days 3 Hrs left
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        ))}
      {proposals.length === 0 && <div> no proposals :( </div>}
    </>
  );
};

export default DAOProposals;
