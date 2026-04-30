import AddIcon from '@mui/icons-material/Add';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

export const actionButtonConfigs = {
  dashboard: {
    bottom: 84,
    actions: [
      {
        key: 'received',
        label: 'Received Payment',
        color: '#2e2b4b',
        hoverColor: '#232038',
      },
      {
        key: 'add',
        type: 'fab',
        icon: AddIcon,
        ariaLabel: 'Add',
        color: '#73c77a',
        hoverColor: '#5db567',
      },
      {
        key: 'bill',
        label: '+ Bill / Invoice',
        color: '#5a49e5',
        hoverColor: '#4335b8',
      },
    ],
  },
  parties: {
    bottom: 90,
    actions: [
      {
        key: 'shared-ledgers',
        label: 'SharedLedgers',
        icon: FolderSharedIcon,
        color: '#2196F3',
        hoverColor: '#1976D2',
      },
      {
        key: 'import',
        type: 'fab',
        icon: DriveFolderUploadIcon,
        ariaLabel: 'Import',
        color: '#424242',
        hoverColor: '#303030',
      },
      {
        key: 'create-party',
        label: 'Create Party',
        icon: AddIcon,
        iconVariant: 'circle',
        color: '#5a49e5',
        hoverColor: '#4335b8',
      },
    ],
  },
  items: {
    bottom: 90,
    actions: [
      {
        key: 'create-item',
        label: 'Create New Item',
        icon: AddIcon,
        iconVariant: 'circle',
        color: '#5a49e5',
        hoverColor: '#4335b8',
      },
      {
        key: 'bulk-action',
        label: 'Bulk Action',
        icon: DriveFolderUploadIcon,
        color: '#2e2b4b',
        hoverColor: '#232038',
      },
    ],
  },
  more: {
    bottom: 90,
    actions: [
      {
        key: 'help',
        label: 'Help',
        icon: SupportAgentIcon,
        color: '#2e2b4b',
        hoverColor: '#232038',
      },
    ],
  },
};
