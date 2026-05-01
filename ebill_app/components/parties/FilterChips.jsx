'use client';

import * as React from 'react';
import { Box, Chip, Menu, MenuItem } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CloseIcon from '@mui/icons-material/Close';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';

export default function FilterChips({ activeFilter, onFilterChange }) {
  const [categoryDrawerOpen, setCategoryDrawerOpen] = React.useState(false);
  const [filterAnchor, setFilterAnchor] = React.useState(null);
  const [categoryName, setCategoryName] = React.useState('');

  const toggleFilter = (filter) => {
    if (activeFilter === filter) {
      onFilterChange(null);
    } else {
      onFilterChange(filter);
    }
  };

  const isFilterActive = (filter) => activeFilter === filter;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
          p: 2,
          overflowX: 'auto',
          bgcolor: '#f8f9fa',
          borderBottom: '1px solid #e6e7ef',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        <Chip
          label="To Pay"
          deleteIcon={<CloseIcon sx={{ fontSize: 16, ml: 1 }} />}
          onDelete={isFilterActive('pay') ? () => toggleFilter('pay') : undefined}
          onClick={() => toggleFilter('pay')}
          sx={{
            bgcolor: isFilterActive('pay') ? '#e8e4ff' : '#e9ecef',
            color: isFilterActive('pay') ? '#5a49e5' : '#6c757d',
            fontWeight: 550,
            fontSize: '12px',
            border: isFilterActive('pay') ? '2px solid #5a49e5' : '2px solid transparent',
            borderRadius: '20px',
            px: 1.5,
            height: '30px',
            '&:hover': { bgcolor: isFilterActive('pay') ? '#ddd6fe' : '#dee2e6' },
            '& .MuiChip-deleteIcon': {
              color: '#5a49e5',
              fontSize: '16px',
              marginLeft: '8px',
              '&:hover': {
                color: '#4335b8',
              },
            },
            '& .MuiChip-label': {
              px: 0.5,
              pr: isFilterActive('pay') ? 0 : 0.5,
            },
          }}
        />
        <Chip
          label="To Collect"
          deleteIcon={<CloseIcon sx={{ fontSize: 16, ml: 1 }} />}
          onDelete={isFilterActive('collect') ? () => toggleFilter('collect') : undefined}
          onClick={() => toggleFilter('collect')}
          sx={{
            bgcolor: isFilterActive('collect') ? '#e8e4ff' : '#e9ecef',
            color: isFilterActive('collect') ? '#5a49e5' : '#6c757d',
            fontWeight: 550,
            fontSize: '13px',
            border: isFilterActive('collect') ? '2px solid #5a49e5' : '2px solid transparent',
            borderRadius: '20px',
            px: 1.5,
            height: '30px',
            '&:hover': { bgcolor: isFilterActive('collect') ? '#ddd6fe' : '#dee2e6' },
            '& .MuiChip-deleteIcon': {
              color: '#5a49e5',
              fontSize: '16px',
              marginLeft: '8px',
              '&:hover': {
                color: '#4335b8',
              },
            },
            '& .MuiChip-label': {
              px: 0.5,
              pr: isFilterActive('collect') ? 0 : 0.5,
            },
          }}
        />
        <Chip
          label="Category"
          deleteIcon={<KeyboardArrowDownIcon />}
          onDelete={() => {}}
          onClick={() => setCategoryDrawerOpen(true)}
          sx={{
            bgcolor: '#e9ecef',
            color: '#495057',
            fontWeight: 550,
            fontSize: '13px',
            border: '2px solid transparent',
            borderRadius: '20px',
            px: 1.5,
            height: '30px',
            '&:hover': { bgcolor: '#dee2e6' },
            '& .MuiChip-deleteIcon': {
              color: '#495057',
              fontSize: '18px',
              marginLeft: '4px',
            },
            '& .MuiChip-label': {
              px: 0.5,
            },
          }}
        />
        <Chip
          label="Filter By"
          deleteIcon={<FilterListIcon sx={{ fontSize: 16 }} />}
          onDelete={() => {}}
          onClick={(e) => setFilterAnchor(e.currentTarget)}
          sx={{
            bgcolor: '#e9ecef',
            color: '#495057',
            fontWeight: 550,
            fontSize: '13px',
            border: '2px solid transparent',
            borderRadius: '20px',
            px: 1.5,
            height: '30px',
            '&:hover': { bgcolor: '#dee2e6' },
            '& .MuiChip-deleteIcon': {
              color: '#495057',
              fontSize: '16px',
              marginLeft: '6px',
            },
            '& .MuiChip-label': {
              px: 0.5,
              order: -1,
            },
          }}
        />
      </Box>

      {/* Category Drawer */}
      <Drawer open={categoryDrawerOpen} onOpenChange={setCategoryDrawerOpen}>
        <DrawerContent className="max-h-[85vh]">
          <DrawerHeader className="border-b pb-4">
            <div className="flex items-center justify-between">
              <DrawerTitle className="text-xl font-semibold text-gray-900">
                Create Category
              </DrawerTitle>
              <DrawerClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
                <CloseIcon className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </DrawerClose>
            </div>
          </DrawerHeader>
          
          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <label 
                htmlFor="categoryName" 
                className="text-sm font-medium text-gray-700"
              >
                Category Name
              </label>
              <input
                id="categoryName"
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Enter category name"
              />
            </div>

            <button
              onClick={() => {
                // Handle save logic here
                console.log('Category saved:', categoryName);
                setCategoryName('');
                setCategoryDrawerOpen(false);
              }}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200"
            >
              Save
            </button>
          </div>
        </DrawerContent>
      </Drawer>

      {/* Filter Menu */}
      <Menu
        anchorEl={filterAnchor}
        open={Boolean(filterAnchor)}
        onClose={() => setFilterAnchor(null)}
      >
        <MenuItem onClick={() => setFilterAnchor(null)}>Name (A-Z)</MenuItem>
        <MenuItem onClick={() => setFilterAnchor(null)}>Amount (High to Low)</MenuItem>
        <MenuItem onClick={() => setFilterAnchor(null)}>Amount (Low to High)</MenuItem>
      </Menu>
    </>
  );
}
