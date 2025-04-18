import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
  Typography,
  Link as MuiLink,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Tech & Gaming", href: "/category/tech-and-gaming-gifts" },
  {
    label: "Beauty & Wellness",
    href: "/category/beauty-and-wellness-gift-ideas",
  },
  { label: "Lifestyle", href: "/category/lifestyle-gift-ideas-travel-hobbies" },
  {
    label: "House & Garden",
    href: "/category/house-and-garden-gift-ideas-kitchen-outdoor-smart-home-yard-lighting",
  },
  {
    label: "Kids",
    href: "/category/kids-gift-ideas-fun-babies-educational-sports",
  },
  { label: "Pets", href: "/category/pet-gift-ideas-nutrition-toys-bedding" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:1024px)");
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      {/* 🔝 Top Bar */}
      <Box
        sx={{
          backgroundColor: "rgba(228, 123, 2, 0.09)",
          py: 1,
          width: "100%",
        }}
      >
        <Container sx={{ textAlign: "center" }}>
          <Typography
            variant="body2"
            sx={{
              minHeight: "48px",
              fontSize: "20px",
              fontFamily: "Merriweather",
              lineHeight: 1.4,
              paddingTop: "8px",
              "& a": {
                color: "#1f2933",
                textDecoration: "underline",
                transition: "color 0.3s ease",
                "&:hover": {
                  color: "#000",
                },
              },
            }}
          >
            <a
              href="https://amzn.to/3BAxBg1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Want fast and free delivery + exclusive content? Try Amazon Prime
              here.
            </a>
          </Typography>
        </Container>
      </Box>

      {/* 🌐 Main Header */}
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
          width: "95%",
          margin: "0 auto",
        }}
      >
        {/* <Container> */}
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "16px 0",
          }}
        >
          {/* Logo */}
          <Box
            component={Link}
            to="/"
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          >
            <Box
              component="img"
              src="https://yourgiftwish.com/wp-content/uploads/2025/03/cropped-Your-Gift-Wish-Logo-01.png"
              alt="Your Gift Wish Logo"
              sx={{
                width: isMobile ? "140px" : "200px",
                objectFit: "contain",
              }}
            />
          </Box>

          {/* Toggle button on mobile */}
          {isMobile ? (
            <>
              <IconButton
                onClick={toggleDrawer}
                sx={{ color: "#3e4c59" }}
                edge="end"
              >
                <MenuIcon fontSize="large" />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer}
                PaperProps={{
                  sx: {
                    width: "90%",
                    backgroundColor: "#fffefb",
                    padding: 2,
                  },
                }}
              >
                <Box
                  sx={{
                    p: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {/* Close Button */}
                  <Box display="flex" justifyContent="flex-end">
                    <IconButton onClick={toggleDrawer}>
                      <CloseIcon />
                    </IconButton>
                  </Box>

                  {/* Menu Items */}
                  <List>
                    {menuItems.map((item) => (
                      <ListItem
                        button
                        component="a"
                        href={item.href}
                        key={item.label}
                        onClick={toggleDrawer}
                        sx={{
                          backgroundColor: drawerOpen ? "#fff" : "transparent",
                          borderBottom: "1px solid #7b8794",
                        }}
                      >
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontFamily: "Merriweather",
                            color: "#1f2933",
                            fontSize: "18px",
                            textAlign: "left",
                            paddingTop: "1em",
                            paddingBottom: "1em",
                            padding: ".6em .5em",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: "2px" }}>
              {menuItems.map((item) => (
                <MuiLink
                  key={item.label}
                  href={item.href}
                  sx={{
                    fontSize: "17px",
                    fontWeight: 400,
                    lineHeight: 1.6,
                    textTransform: "uppercase",
                    fontFamily: "Merriweather",
                    color: "#3e4c59",
                    letterSpacing: "-0.7px",
                    transform: "scaleY(1.2)",
                    transformOrigin: "center",
                    textDecoration: "none",
                    transition: "color 0.3s ease",
                    px: "0.6em",
                    py: "0.5em",
                    "&:hover": {
                      color: "#E47B02",
                    },
                  }}
                >
                  {item.label}
                </MuiLink>
              ))}
            </Box>
          )}
        </Toolbar>
        {/* </Container> */}
      </AppBar>
    </Box>
  );
};

export default Header;
