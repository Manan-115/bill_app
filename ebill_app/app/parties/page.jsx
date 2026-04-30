"use client";

import * as React from "react";
import {
  Box,
  Typography,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ActionButtonsBar from "@/components/actions/ActionButtonsBar";
import TopNavBar from "@/components/navigation/TopNavBar";

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
      <TopNavBar variant="parties" />

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

      <ActionButtonsBar variant="parties" />
    </Box>
  );
}
