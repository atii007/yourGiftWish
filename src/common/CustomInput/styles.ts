import { colors } from "src/theme/colors";

export const styles = {
  parentInputBox: {
    mb: { xs: 3, md: 4 },
  },
  textLabel: {
    fontSize : {xs:'.85rem', md: '.9rem'},
    fontWeight: 500,
    textTransform: "capitalize",
    color: colors.black.main,
  },
  input: {
    paddingTop: 1.5,
    paddingBottom: 1.5,
  },
  muiOutlinedInputroot: {
    borderRadius: 1.2,
    fontSize: "14px",
  },
  webkit_autofill: {
    WebkitBoxShadow: "0 0 0 100px transparent inset !important",
    WebkitTextFillColor: "#000000 !important",
    borderRadius: "inherit",
    backgroundColor: "transparent !important",
  },
};
