import { useRef, useState } from 'react';
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
import { formatDistance, subMonths, subDays } from 'date-fns';
import TodayTwoToneIcon from '@mui/icons-material/TodayTwoTone';
import { Link as RouterLink } from 'react-router-dom';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Text from 'src/components/Text';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { styled } from '@mui/material/styles';

const VoteButton = styled(Button)(
  ({ theme }) => `
    margin: 10px;
    width: 90%;
    `,
);
const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`,
);

const proposals = [{proposalNum:'0', proposalType: "Expense", proposalDescription:"Buy 100 Jungle Cats for DAO vault" },{proposalNum:'1', proposalType: "Aquisition", proposalDescription:"Take Over World." }]

const ProposalCards = (props: any) => {
    
  const handleDelete = () => {};

  const handleClick = () => {};

  return  props.proposals.map((proposal: any)=>{ return<Grid item xs={12} md={4}>
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
                  onClick={handleClick}
                  onDelete={handleDelete}
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
       })

}


function TaskSearch() {

  const periods = [
    {
      value: 'popular',
      text: 'Most popular',
    },
    {
      value: 'recent',
      text: 'Recent tasks',
    },
    {
      value: 'updated',
      text: 'Latest updated tasks',
    },
    {
      value: 'oldest',
      text: 'Oldest tasks first',
    },
  ];

  const actionRef1 = useRef<any>(null);
  const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
  const [period, setPeriod] = useState<string>(periods[0].text);

  return (
    <>
      <FormControl variant="outlined" fullWidth>
        <OutlinedInputWrapper
          type="text"
          placeholder="Search terms here..."
          endAdornment={
            <InputAdornment position="end">
              <Button variant="contained" size="small">
                Search
              </Button>
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start">
              <SearchTwoToneIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      <Box
        py={3}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography variant="subtitle2">
            Showing{' '}
            <Text color="black">
              <b>57 Proposals</b>
            </Text>
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle2" sx={{ pr: 1 }}>
            Sort by:
          </Typography>
          <Button
            size="small"
            variant="outlined"
            ref={actionRef1}
            onClick={() => setOpenMenuPeriod(true)}
            endIcon={<ExpandMoreTwoToneIcon fontSize="small" />}
          >
            {period}
          </Button>
          <Menu
            anchorEl={actionRef1.current}
            onClose={() => setOpenMenuPeriod(false)}
            open={openPeriod}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {periods.map((_period) => (
              <MenuItem
                key={_period.value}
                onClick={() => {
                  setPeriod(_period.text);
                  setOpenMenuPeriod(false);
                }}
              >
                {_period.text}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Box>
      <Grid container spacing={3}>
        <ProposalCards proposals={proposals}/>
      </Grid>
      <Box
        sx={{ py: 3 }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Pagination
          showFirstButton
          showLastButton
          count={15}
          defaultPage={1}
          siblingCount={0}
          size="large"
          shape="rounded"
          color="primary"
        />
      </Box>
    </>
  );
}

export default TaskSearch;
