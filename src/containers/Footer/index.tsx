import { Typography, Box, Container } from "@mui/material";
import { colors } from "src/theme/colors";

export const Footer = () => {
  return (
    <>
      <Box
        sx={{
          background: colors.secondary.main,
          py: 2,
          mt: 3,
        }}
      >
        <Container>
          <Typography
            variant="body2"
            textAlign={"center"}
            sx={{ fontSize: { xs: 12, md: 14 } }}
          >
            © 2025 yourgiftwish is an amazon associate and contains affiliate
            links. This means that if you click on a link and make a purchase we
            may earn a commission at no extra cost to you.{" "}
            <span style={{ fontWeight: 600 }}>Stay calm and, gift on.</span>
          </Typography>
        </Container>
      </Box>
      <Box py={5}>
        <Typography
          variant="body2"
          sx={{
            textDecoration: "none",
            textAlign: "center",
            fontSize : {xs : 12, md :14},
            color: colors.black.main,
            display: "block",
          }}
          component="a"
          href="mailto:admin@yourgiftwish.com"
        >
          Contact admin@yourgiftwish.com
        </Typography>
      </Box>
    </>
  );
};
