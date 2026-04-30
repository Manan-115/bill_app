'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import useMediaQuery from '@mui/material/useMediaQuery';
import { actionButtonConfigs } from './actionButtonsConfig';

const pillBaseSx = {
  borderRadius: 999,
  textTransform: 'none',
  fontWeight: 600,
  boxShadow: '0 6px 16px rgba(36, 34, 56, 0.18)',
  whiteSpace: 'nowrap',
};

const fabBaseSx = {
  boxShadow: '0 6px 16px rgba(36, 34, 56, 0.2)',
};

export default function ActionButtonsBar({ variant, actions, containerSx }) {
  const isCompact = useMediaQuery('(max-width:420px)');
  const resolved = actions ? { actions } : actionButtonConfigs[variant];

  if (!resolved || !resolved.actions || resolved.actions.length === 0) {
    return null;
  }

  const { actions: actionItems, bottom = 90 } = resolved;
  const pillCount = actionItems.filter((action) => action.type !== 'fab').length;
  const shouldGrowPills = pillCount > 1;

  return (
    <Box
      sx={{
        position: 'fixed',
        left: '50%',
        bottom,
        transform: 'translateX(-50%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isCompact ? 1 : 2,
        width: isCompact ? 'calc(100% - 20px)' : 'calc(100% - 32px)',
        maxWidth: 520,
        zIndex: 999,
        flexWrap: 'nowrap',
        ...containerSx,
      }}
    >
      {actionItems.map((action) => {
        const Icon = action.icon;
        const circleSize = isCompact ? 18 : 20;
        const iconNode = Icon ? (
          action.iconVariant === 'circle' ? (
            <Box
              sx={{
                width: circleSize,
                height: circleSize,
                borderRadius: '50%',
                bgcolor: 'white',
                color: action.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.6)',
              }}
            >
              <Icon fontSize="small" />
            </Box>
          ) : (
            <Icon />
          )
        ) : null;

        if (action.type === 'fab') {
          return (
            <Fab
              key={action.key}
              size={isCompact ? 'small' : action.size || 'medium'}
              aria-label={action.ariaLabel || action.label}
              sx={{
                bgcolor: action.color,
                color: 'white',
                '&:hover': {
                  bgcolor: action.hoverColor || action.color,
                },
                ...fabBaseSx,
                ...action.sx,
              }}
            >
              {iconNode}
            </Fab>
          );
        }

        return (
          <Button
            key={action.key}
            variant="contained"
            size={isCompact ? 'small' : 'medium'}
            startIcon={iconNode}
            sx={{
              bgcolor: action.color,
              '&:hover': {
                bgcolor: action.hoverColor || action.color,
              },
              px: isCompact ? 2 : 3,
              py: isCompact ? 1.1 : 1.4,
              fontSize: isCompact ? 12 : 14,
              minHeight: isCompact ? 36 : 44,
              minWidth: 0,
              flex: shouldGrowPills ? '1 1 0' : '0 1 auto',
              ...pillBaseSx,
              ...action.sx,
            }}
          >
            {action.label}
          </Button>
        );
      })}
    </Box>
  );
}
