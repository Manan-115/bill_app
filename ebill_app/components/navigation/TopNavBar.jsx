'use client';

import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { topNavConfigs } from './topNavConfig';

const baseTitleSx = {
  fontWeight: 700,
  color: '#2c2b38',
  letterSpacing: 0.2,
};

const baseActionSx = {
  bgcolor: '#f1edff',
  color: '#5a49e5',
  borderRadius: 2.5,
  boxShadow: '0 6px 14px rgba(36, 34, 56, 0.12)',
  '&:hover': {
    bgcolor: '#e7e0ff',
  },
};

export default function TopNavBar({
  variant,
  title,
  titleType,
  actions,
  containerSx,
  titleSx,
  actionSx,
}) {
  const isCompact = useMediaQuery('(max-width:420px)');
  const resolved = variant ? topNavConfigs[variant] : undefined;
  const resolvedTitle = title ?? resolved?.title;
  const resolvedTitleType = titleType ?? resolved?.titleType;
  const resolvedActions = actions ?? resolved?.actions ?? [];
  const resolvedContainerSx = containerSx ?? resolved?.containerSx;
  const resolvedTitleSx = titleSx ?? resolved?.titleSx;
  const resolvedActionSx = actionSx ?? resolved?.actionSx;

  if (!resolvedTitle && resolvedActions.length === 0) {
    return null;
  }

  const actionSize = isCompact ? 34 : 40;
  const iconSize = isCompact ? 20 : 22;

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        ...resolvedContainerSx,
      }}
    >
      {resolvedTitleType === 'menu' ? (
        <ButtonBase
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            px: 0.5,
            py: 0.25,
            borderRadius: 2,
          }}
        >
          <Typography
            sx={{
              ...baseTitleSx,
              fontSize: isCompact ? 16 : 20,
              ...resolvedTitleSx,
            }}
          >
            {resolvedTitle}
          </Typography>
          <KeyboardArrowDownIcon
            sx={{
              fontSize: isCompact ? 18 : 20,
              color: '#7b7e94',
            }}
          />
        </ButtonBase>
      ) : (
        <Typography
          sx={{
            ...baseTitleSx,
            fontSize: isCompact ? 16 : 20,
            ...resolvedTitleSx,
          }}
        >
          {resolvedTitle}
        </Typography>
      )}

      <Box sx={{ display: 'flex', alignItems: 'center', gap: isCompact ? 1 : 1.5 }}>
        {resolvedActions.map((action) => {
          const Icon = action.icon;
          return (
            <IconButton
              key={action.key}
              aria-label={action.ariaLabel || action.label || action.key}
              sx={{
                width: actionSize,
                height: actionSize,
                ...baseActionSx,
                ...resolvedActionSx,
                ...action.sx,
              }}
            >
              {Icon ? <Icon sx={{ fontSize: iconSize }} /> : null}
            </IconButton>
          );
        })}
      </Box>
    </Box>
  );
}
