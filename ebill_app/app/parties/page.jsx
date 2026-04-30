"use client";

import * as React from "react";
import {
  Box,
  Typography,
  IconButton,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Fab,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LinkIcon from "@mui/icons-material/Link";
import SettingsIcon from "@mui/icons-material/Settings";
import FilterListIcon from "@mui/icons-material/FilterList";
import AddIcon from "@mui/icons-material/Add";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function PartiesPage() {
  const [activeTab, setActiveTab] = React.useState("collect");
  const [categoryAnchor, setCategoryAnchor] = React.useState(null);
  const [filterAnchor, setFilterAnchor] = React.useState(null);

  const parties = [
    {
      id: 1,
      name: "Cash Sale",
      type: "Customer",
      amount: 0,
      avatar: "C",
      color: "#FFE4E1",
    },
    {
      id: 2,
      name: "KADAM AAYUSH",
      type: "Customer",
      amount: 0,
      avatar: "K",
      color: "#E8F5E9",
      hasIcon: true,
    },
  ];

  return (
    <Box sx={{ pb: 10, minHeight: "100vh", bgcolor: "#f6f7fb" }}>
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
          bgcolor: "white",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 600, color: "#2c2b38" }}>
          Parties
        </Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton size="small" sx={{ color: "#5a49e5" }}>
            <SearchIcon />
          </IconButton>
          <IconButton size="small" sx={{ color: "#5a49e5" }}>
            <LinkIcon />
          </IconButton>
          <IconButton size="small" sx={{ color: "#5a49e5" }}>
            <SettingsIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Filter Tabs */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          p: 2,
          overflowX: "auto",
          bgcolor: "white",
          borderBottom: "1px solid #e6e7ef",
        }}
      >
        <Chip
          label="To Pay"
          onClick={() => setActiveTab("pay")}
          sx={{
            bgcolor: activeTab === "pay" ? "#f1edff" : "#f6f7fb",
            color: activeTab === "pay" ? "#5a49e5" : "#7b7e94",
            fontWeight: 600,
            "&:hover": { bgcolor: "#f1edff" },
          }}
        />
        <Chip
          label="To Collect"
          onClick={() => setActiveTab("collect")}
          sx={{
            bgcolor: activeTab === "collect" ? "#f1edff" : "#f6f7fb",
            color: activeTab === "collect" ? "#5a49e5" : "#7b7e94",
            fontWeight: 600,
            "&:hover": { bgcolor: "#f1edff" },
          }}
        />
        <Chip
          label="Category"
          deleteIcon={<KeyboardArrowDownIcon />}
          onDelete={() => {}}
          onClick={(e) => setCategoryAnchor(e.currentTarget)}
          sx={{
            bgcolor: "#f6f7fb",
            color: "#7b7e94",
            fontWeight: 600,
            "&:hover": { bgcolor: "#f1edff" },
          }}
        />
        <Chip
          label="Filter By"
          icon={<FilterListIcon sx={{ fontSize: 18 }} />}
          onClick={(e) => setFilterAnchor(e.currentTarget)}
          sx={{
            bgcolor: "#f6f7fb",
            color: "#7b7e94",
            fontWeight: 600,
            "&:hover": { bgcolor: "#f1edff" },
          }}
        />
      </Box>

      {/* Category Menu */}
      <Menu
        anchorEl={categoryAnchor}
        open={Boolean(categoryAnchor)}
        onClose={() => setCategoryAnchor(null)}
      >
        <MenuItem onClick={() => setCategoryAnchor(null)}>All</MenuItem>
        <MenuItem onClick={() => setCategoryAnchor(null)}>Customer</MenuItem>
        <MenuItem onClick={() => setCategoryAnchor(null)}>Supplier</MenuItem>
      </Menu>

      {/* Filter Menu */}
      <Menu
        anchorEl={filterAnchor}
        open={Boolean(filterAnchor)}
        onClose={() => setFilterAnchor(null)}
      >
        <MenuItem onClick={() => setFilterAnchor(null)}>Name (A-Z)</MenuItem>
        <MenuItem onClick={() => setFilterAnchor(null)}>
          Amount (High to Low)
        </MenuItem>
        <MenuItem onClick={() => setFilterAnchor(null)}>
          Amount (Low to High)
        </MenuItem>
      </Menu>

      {/* Parties List */}
      <List sx={{ bgcolor: "white", mt: 2, px: 1 }}>
        {parties.map((party) => (
          <ListItem
            key={party.id}
            sx={{
              bgcolor: "white",
              border: "1px solid #e6e7ef",
              borderRadius: 2,
              mb: 1.5,
              boxShadow: "0 2px 8px rgba(36, 34, 56, 0.06)",
            }}
          >
            <ListItemAvatar>
              <Avatar
                sx={{
                  bgcolor: party.color,
                  color: "#2c2b38",
                  fontWeight: 600,
                  position: "relative",
                }}
              >
                {party.avatar}
                {party.hasIcon && (
                  <Box
                    sx={{
                      position: "absolute",
                      bottom: -2,
                      right: -2,
                      bgcolor: "white",
                      borderRadius: "50%",
                      p: 0.3,
                    }}
                  >
                    <Box
                      sx={{
                        width: 14,
                        height: 14,
                        bgcolor: "#ff6b35",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Typography sx={{ fontSize: 8, color: "white" }}>
                        📱
                      </Typography>
                    </Box>
                  </Box>
                )}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography
                  sx={{ fontWeight: 600, color: "#2c2b38", fontSize: 15 }}
                >
                  {party.name}
                </Typography>
              }
              secondary={
                <Typography sx={{ color: "#7b7e94", fontSize: 13 }}>
                  {party.type}
                </Typography>
              }
            />
            <Typography sx={{ fontWeight: 600, color: "#2c2b38" }}>
              ₹ {party.amount}
            </Typography>
          </ListItem>
        ))}
      </List>

      {/* Floating Action Buttons */}
      <Box
        sx={{
          position: "fixed",
          bottom: 90,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 2,
          alignItems: "center",
          zIndex: 999,
        }}
      >
        <Button
          variant="contained"
          startIcon={<FolderSharedIcon />}
          sx={{
            bgcolor: "#2196F3",
            color: "white",
            borderRadius: 8,
            px: 3,
            py: 1.5,
            textTransform: "none",
            fontWeight: 600,
            boxShadow: "0 4px 12px rgba(33, 150, 243, 0.4)",
            "&:hover": { bgcolor: "#1976D2" },
          }}
        >
          SharedLedgers
        </Button>

        <Fab
          size="medium"
          sx={{
            bgcolor: "#424242",
            color: "white",
            "&:hover": { bgcolor: "#303030" },
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
          }}
        >
          <CameraAltIcon />
        </Fab>

        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            bgcolor: "#5a49e5",
            color: "white",
            borderRadius: 8,
            px: 3,
            py: 1.5,
            textTransform: "none",
            fontWeight: 600,
            boxShadow: "0 4px 12px rgba(90, 73, 229, 0.4)",
            "&:hover": { bgcolor: "#4335b8" },
          }}
        >
           Party
        </Button>
      </Box>
    </Box>
  );
}
