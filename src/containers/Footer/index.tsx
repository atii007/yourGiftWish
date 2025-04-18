import { Box, Container, Typography, Link } from "@mui/material";
import { colors } from "src/theme/colors";

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f3f4f7",
        color: "#fff",
        padding: "32px 0",
      }}
    >
      <Box sx={{ width: "90%", margin: "0 auto", textAlign: "center" }}>
        <Typography
          component="p"
          sx={{
            marginTop: "12px",
            fontStyle: "normal",
            fontWeight: "normal", // or 400
            fontSize: "1.4rem",
            lineHeight: "1.6",
            fontFamily: "Merriweather",
            color: "#3e4c59",
          }}
        >
          © 2025 yourgiftwish is an amazon associate and contains affiliate
          links. This means that if you click on a link and make a purchase we
          may earn a commission at no extra cost to you.
          <br />
          Stay calm and, gift on.
        </Typography>

        <Typography
          component="p"
          sx={{
            marginTop: "12px",
            fontStyle: "normal",
            fontWeight: "normal", // or 400
            fontSize: "1.4rem",
            lineHeight: "1.6",
            fontFamily: "Merriweather",
            color: "#3e4c59",
          }}
        >
          Contact: admin@yourgiftwish.com
        </Typography>

        <Typography
          component="p"
          sx={{
            marginTop: "12px",
            fontStyle: "normal",
            fontWeight: "normal", // or 400
            fontSize: "1.4rem",
            lineHeight: "1.6",
            fontFamily: "Merriweather",
            color: "#3e4c59",
          }}
        >
          <Link
            href="https://yourgiftwish.com/privacy-policy/"
            sx={{
              textDecoration: "underline",
              backgroundColor: "transperant",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            Privacy Policy
          </Link>
        </Typography>

        <Typography
          component="p"
          sx={{
            marginTop: "12px",
            fontStyle: "normal",
            fontWeight: "normal", // or 400
            fontSize: "1.4rem",
            lineHeight: "1.6",
            fontFamily: "Merriweather",
            color: "#e47b02",
          }}
        >
          <Link
            href="https://yourgiftwish.com/terms-and-conditions/"
            sx={{
              textDecoration: "underline",
              backgroundColor: "transperant",
              "&:hover": {
                color: "#fff",
              },
            }}
          >
            Terms and Conditions
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
