import CalculateIcon from '@mui/icons-material/Calculate';
import {Calculator, Gift, Monitor} from 'lucide-react';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import LinkIcon from '@mui/icons-material/Link';
import SearchIcon from '@mui/icons-material/Search';
import SettingsIcon from '@mui/icons-material/Settings';

export const topNavConfigs = {
  dashboard: {
    title: 'Business Name',
    titleType: 'menu',
    actionSx: {
      bgcolor: 'transparent',
      boxShadow: 'none',
      '&:hover': {
        bgcolor: 'rgba(90, 73, 229, 0.08)',
      },
    },
    actions: [
      {
        key: 'calculator',
        icon: Calculator,
        ariaLabel: 'Calculator',
      },
      {
        key: 'offers',
        icon: Gift,
        ariaLabel: 'Offers',
      },
      {
        key: 'desktop',
        icon: Monitor,
        ariaLabel: 'Desktop view',
      },
    ],
  },
  parties: {
    title: 'Parties',
    containerSx: {
      px: 2,
      py: 2,
      bgcolor: 'white',
    },
    actionSx: {
      bgcolor: 'transparent',
      boxShadow: 'none',
      '&:hover': {
        bgcolor: 'rgba(90, 73, 229, 0.08)',
      },
    },
    actions: [
      {
        key: 'search',
        icon: SearchIcon,
        ariaLabel: 'Search',
      },
      {
        key: 'link',
        icon: LinkIcon,
        ariaLabel: 'Link',
      },
      {
        key: 'settings',
        icon: SettingsIcon,
        ariaLabel: 'Settings',
      },
    ],
  },
  items: {
    title: 'Items',
    actionSx: {
      bgcolor: 'transparent',
      boxShadow: 'none',
      '&:hover': {
        bgcolor: 'rgba(90, 73, 229, 0.08)',
      },
    },
    actions: [
      {
        key: 'search',
        icon: SearchIcon,
        ariaLabel: 'Search',
      },
      {
        key: 'settings',
        icon: SettingsIcon,
        ariaLabel: 'Settings',
      },
    ],
  },
  forYou: {
    title: 'For You',
    actions: [],
  },
  more: {
    title: 'More',
    actions: [],
  },
};
