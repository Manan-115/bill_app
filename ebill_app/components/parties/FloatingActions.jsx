'use client';

import { Box, Button, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

export default function FloatingActions() {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 90,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 2,
        alignItems: 'center',
        zIndex: 999,
      }}
    >
      {/* <Button
        variant="contained"
        startIcon={<FolderSharedIcon />}
        sx={{
          bgcolor: '#2196F3',
          color: 'white',
          borderRadius: 8,
          px: 3,
          py: 1.5,
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(33, 150, 243, 0.4)',
          '&:hover': { bgcolor: '#1976D2' },
        }}
      >
        SharedLedgers
      </Button>

      <Fab
        size="medium"
        sx={{
          bgcolor: '#424242',
          color: 'white',
          '&:hover': { bgcolor: '#303030' },
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        }}
      >
        <CameraAltIcon />
      </Fab>

      <Button
        variant="contained"
        startIcon={<AddIcon />}
        sx={{
          bgcolor: '#5a49e5',
          color: 'white',
          borderRadius: 8,
          px: 3,
          py: 1.5,
          textTransform: 'none',
          fontWeight: 600,
          boxShadow: '0 4px 12px rgba(90, 73, 229, 0.4)',
          '&:hover': { bgcolor: '#4335b8' },
        }}
      >
        Create Party
      </Button> */}
    </Box>
  );
}
