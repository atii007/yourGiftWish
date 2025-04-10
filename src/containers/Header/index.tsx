import {
  AppBar,
  Box,
  Container,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { headerStyles } from "./styles";
import { Logo } from "@assets";
// import { CustomButton } from "@common";
// import { colors } from "src/theme/colors";
import { useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <AppBar component="nav" sx={headerStyles.appBarBackground}>
        <Container>
          <Toolbar sx={headerStyles.headerToolbarStyles}>
            <Box
              sx={headerStyles.smallScreenLogoBoxStyles}
              onClick={() => navigate("/suggestion")}
            >
              <img
                src={Logo}
                alt="logo"
                style={{
                  objectFit: "contain",
                  width: isMobile ? "140px" : "190px",
                }}
              />
            </Box>
            {/* <CustomButton
              variant="outlined"
              type="button"
              onClick={() => navigate("/")}
              text="Find Gift Idea"
              sx={{
                textTransform: "capitalize",
                borderColor: colors.primary.main,
                color: colors.primary.main,
              }}
            /> */}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Index;
