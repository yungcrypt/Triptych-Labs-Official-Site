import { ReactNode } from 'react';

import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
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
            name: 'Evan',
            link: '/twitters/humblehamster',
          },
          {
            name: 'Peyton',
            link: '/twitters/peytonleginge',
          },
          {
            name: 'Dom',
            link: '/twitters/_whymidnight',
          },
        ],
      },
    ],
  },
];

export default menuItems;
