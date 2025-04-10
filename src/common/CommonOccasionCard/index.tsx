import { Box, Typography } from "@mui/material";
import { colors } from "src/theme/colors";

export const CommonOccasionCard = ({
  data,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  screen,
  handleClick,
  selected,
}: {
  data: { image: string; title: string };
  screen?: string;
  handleClick: () => void;
  selected?: boolean;
}) => {
  return (
    <Box
      sx={{
        border: selected
          ? `3px solid ${colors.primary.main}`
          : `3px solid transparent`,
        borderRadius: 6,
        p: 1.5,
        transition: "all 200ms ease",
      }}
    >
      <Box
        onClick={handleClick}
        sx={{
          cursor: "pointer",
          minHeight: "100%",
          minWidth: "100%",
          backgroundImage: `url(${data.image})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: 4,
        }}
      >
        <Box
          sx={{
            background: `rgba(0,0,0,0.55)`,
            minWidth: "100%",
            minHeight: { xs: "145px", md: "175px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            py: 10,
            px: 4,
            borderRadius: 4,
            transition: "all 500ms ease",
            "&:hover": {
              background: `rgba(0,0,0,0.5)`,
              transition: "all 500ms ease",
            },
          }}
        >
          <Typography
            variant="h6"
            textAlign={"center"}
            sx={{
              color: colors.white.main,
              fontWeight: 600,
              fontSize: `clamp(16px , 3vw, 20px)`,
            }}
          >
            {data.title}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
