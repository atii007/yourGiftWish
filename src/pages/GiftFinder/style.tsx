import { colors } from "src/theme/colors";

export const commonStyle = {
  outlinedButtonStyle: {
    textTransform: "capitalize",
    borderColor: colors.primary.main,
    color: colors.primary.main,
    px: { xs: "25px", md: "40px" },
    fontSize: { xs: ".9rem", md: "1rem" },
    py: "10px",
  },
  containedButtonStyle: {
    textTransform: "capitalize",
    fontWeight: 500,
    borderColor: colors.primary.main,
    color: colors.white.main,
    px: { xs: "25px", md: "40px" },
    fontSize: { xs: ".9rem", md: "1rem" },
    py: "10px",
  },
  commonHeadingStyle: {
    color: colors.black.main,
    fontSize: `clamp(18px, 2vw, 24px)`,
    // textAlign: "center",
  },
  sidebarSticky: {
    position: { xs: "block", md: "sticky" },
    top: 80,
    height: "100%",
  },
  sidebarBox: {
    border: { xs: 0, md: `1px solid ${colors.neutral[200]}` },
    borderRadius: 3,
    p: { xs: 0, md: 4 },
  },
};
