import { ReactNode } from 'react';

import DesignServicesTwoToneIcon from '@mui/icons-material/DesignServicesTwoTone';
import BrightnessLowTwoToneIcon from '@mui/icons-material/BrightnessLowTwoTone';
import MmsTwoToneIcon from '@mui/icons-material/MmsTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BallotTwoToneIcon from '@mui/icons-material/BallotTwoTone';
import BeachAccessTwoToneIcon from '@mui/icons-material/BeachAccessTwoTone';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import HowToVoteTwoToneIcon from '@mui/icons-material/HowToVoteTwoTone';
import LocalPharmacyTwoToneIcon from '@mui/icons-material/LocalPharmacyTwoTone';
import RedeemTwoToneIcon from '@mui/icons-material/RedeemTwoTone';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import TrafficTwoToneIcon from '@mui/icons-material/TrafficTwoTone';
import VerifiedUserTwoToneIcon from '@mui/icons-material/VerifiedUserTwoTone';

export interface MenuItem {
  href?: string;
  link?: string;
  icon?: ReactNode;
  badge?: string;
  items?: MenuItem[];
  name: string;
}

export interface MenuItems {
  items: MenuItem[];
  heading: string;
}

const menuItems: MenuItems[] = [
  {
    heading: '',
    items: [
      {
        name: 'Overview',
        link: '/overview',
        icon: FilterVintageTwoToneIcon,
      },
    ],
  },
  {
    heading: 'Mints',
    items: [
      {
        name: 'Artifacts',
        icon: VerifiedUserTwoToneIcon,
        link: '/mint/artifacts',
      },
    ],
  },
  {
    heading: 'Discord',
    items: [
      {
        name: 'Verify',
        icon: VerifiedUserTwoToneIcon,
        link: '/discord/verify',
      },
    ],
  },
  {
    heading: 'Mission Crew',
    items: [
      {
        name: 'Twitter',
        icon: VerifiedUserTwoToneIcon,
        link: '/twitters',
        items: [
          {
            name: 'Official Triptych Labs',
            link: '/twitters/official',
          },
          {
            name: 'humblehamster',
            link: '/twitters/humblehamster',
          },
          {
            name: 'leginge',
            link: '/twitters/peytonleginge',
          },
          {
            name: 'whymidnight',
            link: '/twitters/_whymidnight',
          },
        ],
      },
    ],
  },
];

export default menuItems;
