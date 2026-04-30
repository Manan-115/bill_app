'use client';

import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import RecommendIcon from '@mui/icons-material/Recommend';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const getValueFromPath = (path) => {
    if (path === '/') return 0;
    if (path.includes('/parties')) return 1;
    if (path.includes('/items')) return 2;
    if (path.includes('/for-you')) return 3;
    if (path.includes('/more')) return 4;
    return 0;
  };

  const [value, setValue] = React.useState(getValueFromPath(pathname));

  React.useEffect(() => {
    setValue(getValueFromPath(pathname));
  }, [pathname]);

  const handleChange = (_event, newValue) => {
    console.log('Navigation clicked:', newValue);
    setValue(newValue);
    const routes = ['/', '/parties', '/items', '/for-you', '/more'];
    if (routes[newValue]) {
      console.log('Navigating to:', routes[newValue]);
      router.push(routes[newValue]);
    }
  };

  return (
    <Box 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: 0, 
        right: 0,
        zIndex: 1000,
        boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
        bgcolor: 'white'
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={handleChange}
        sx={{
          height: 70,
          bgcolor: 'white',
          '& .MuiBottomNavigationAction-root': {
            minWidth: 'auto',
            padding: '6px 8px 8px',
            color: '#7b7e94',
            '&.Mui-selected': {
              color: '#5a49e5',
            },
          },
          '& .MuiBottomNavigationAction-label': {
            fontSize: '11px',
            '&.Mui-selected': {
              fontSize: '11px',
            },
          },
        }}
      >
        <BottomNavigationAction 
          label="Dashboard" 
          icon={<HomeIcon />}
          sx={{ cursor: 'pointer' }}
        />
        <BottomNavigationAction 
          label="Parties" 
          icon={<PeopleIcon />}
          sx={{ cursor: 'pointer' }}
        />
        <BottomNavigationAction 
          label="Items" 
          icon={<InventoryIcon />}
          sx={{ cursor: 'pointer' }}
        />
        <BottomNavigationAction 
          label="For You" 
          icon={<RecommendIcon />}
          sx={{ cursor: 'pointer' }}
        />
        <BottomNavigationAction 
          label="More" 
          icon={<MoreHorizIcon />}
          sx={{ cursor: 'pointer' }}
        />
      </BottomNavigation>
    </Box>
  );
}
