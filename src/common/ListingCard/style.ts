import { colors } from "src/theme/colors";

export const ListingCardStyle = {
  mainBoxStyle: {
    background: `rgba(253, 243, 232, 0.6)`,
    p: 3,
    px: 5,
    borderLeft: `4px solid ${colors.primary.main}`,
    borderRadius: "10px",
  },
  imageStyling: {
    border: "4px solid red",
    width: "200px",
    height: "200px",
  },
  buttonStyle: {
    textTransform: "capitalize",
    color: colors.primary.main,
    textDecoration: "underline",
    pl: 0,

    "&:hover": {
      textDecoration: "underline",
      background: "transparent",
      pl: 0,
    },
  },
  heading: {
    fontSize: "clamp(18px , 3vw , 20px)",
    color: colors.black.main,
    width: "100%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  paragraphStyle: {
    color: colors.neutral[500],
    fontSize: "clamp(13px, 2vw, 14px)",
    width: "80%",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
};
