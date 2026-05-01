'use client';

import { Box, Typography, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LinkIcon from '@mui/icons-material/Link';
import SettingsIcon from '@mui/icons-material/Settings';

export default function PartyHeader() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        p: 2,
        bgcolor: 'white',
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, color: '#2c2b38' }}>
        Parties
      </Typography>
      <Box sx={{ display: 'flex', gap: 1 }}>
        <IconButton size="small" sx={{ color: '#5a49e5' }}>
          <SearchIcon />
        </IconButton>
        <IconButton size="small" sx={{ color: '#5a49e5' }}>
          <LinkIcon />
        </IconButton>
        <IconButton size="small" sx={{ color: '#5a49e5' }}>
          <SettingsIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
