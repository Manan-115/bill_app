'use client';

import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Stack,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

export default function PartyList({ parties }) {
  return (
    <Box sx={{ px: 2, mt: 2 }}>
      {parties.map((party) => (
        <Card
          key={party.id}
          elevation={0}
          sx={{
            mb: 2,
            borderRadius: 3,
            border: '1px solid #e8e9f0',
            transition: 'all 0.2s ease-in-out',
          }}
        >
          <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
            <Stack direction="row" spacing={2} alignItems="center">
              {/* Avatar Section */}
              <Box sx={{ position: 'relative' }}>
                <Avatar
                  variant="rounded"
                  sx={{
                    bgcolor: party.color,
                    color: '#2c2b38',
                    fontWeight: 700,
                    fontSize: 18,
                    width: 48,
                    height: 48,
                    borderRadius: 2,
                  }}
                >
                  {party.avatar}
                </Avatar>
                {party.hasIcon && (
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: -4,
                      right: -4,
                      bgcolor: '#ff6b35',
                      borderRadius: '50%',
                      p: 0.5,
                      border: '2px solid white',
                      boxShadow: '0 3px 8px rgba(0,0,0,0.15)',
                    }}
                  >
                    <PhoneAndroidIcon sx={{ fontSize: 14, color: 'white' }} />
                  </Box>
                )}
              </Box>

              {/* Content Section */}
              <Box sx={{ flex: 1, minWidth: 0 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: '#1a1a2e',
                    fontSize: 15,
                    mb: 0.3,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {party.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: '#8b8d9e',
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  {party.type}
                </Typography>
              </Box>

              {/* Amount Section */}
              <Box sx={{ textAlign: 'right' }}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: party.amount === 0 ? '#8b8d9e' : '#1a1a2e',
                    fontSize: 16,
                    mb: 0.3,
                  }}
                >
                  ₹ {party.amount}
                </Typography>
                {/* <IconButton
                  size="small"
                  sx={{
                    color: '#8b8d9e',
                    '&:hover': { bgcolor: '#f5f6fa' },
                  }}
                >
                  <MoreVertIcon fontSize="small" />
                </IconButton> */}
              </Box>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}
