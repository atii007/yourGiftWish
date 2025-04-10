import { colors } from "src/theme/colors";

export const headerStyles = {
  appBarBackground: {
    background: colors.white.main,
    boxShadow: "0 2px 8px 1px rgba(34,34,34,0.07)",
    width: {
      xs: "100%",
    },
  },
  smallScreenLogoBoxStyles: {
    display: "flex",
    alignItems: "center",
    objectFit: "contain",
    cursor: "pointer",
  },
  headerToolbarStyles: {
    justifyContent: "center",
    "&": {
      py: 3,
      px: 5,
    },
  },
  headerTitle: {
    flexGrow: 1,
    textAlign: { xs: "center", md: "start" },
    fontSize: { xs: "18px", md: "22px" },
    display: "block",
  },
};
