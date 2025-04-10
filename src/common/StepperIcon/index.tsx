import { TickIcon } from "@assets";
import { globalConstant } from "@constant";
import {
  Box,
  StepIconProps,
  styled,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { colors } from "src/theme/colors";

export const StepperIcon = (props: StepIconProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const ColorLibStepIconRoot = styled("div")<{
    ownerState: { completed?: boolean; active?: boolean };
  }>(({ theme }) => ({
    backgroundColor: "transparent",
    border: `1px solid ${colors.neutral[300]}`,
    zIndex: 1,
    width: isMobile ? 40 : 60,
    height: isMobile ? 40 : 60,
    color: "#fff",
    // px: isMobile ? 0 : 1,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...theme.applyStyles("dark", {
      backgroundColor: theme.palette.grey[700],
    }),
    variants: [
      {
        props: ({ ownerState }) => ownerState.active,
        style: {
          background: "transparent",
          border: `1px solid ${colors.primary.main}`,
        },
      },
      {
        props: ({ ownerState }) => ownerState.completed,
        style: {
          background: colors.primary.main,
          border: `1px solid ${colors.primary.main}`,
        },
      },
    ],
  }));
  const { active, completed, className } = props;
  const { occasion, relation } = useParams();

  return (
    <ColorLibStepIconRoot
      ownerState={{ completed, active }}
      className={className}
    >
      {active ? (
        // Display number when active
        <Typography
          variant="h6"
          sx={{
            color: "primary.main",
            fontSize: `clamp(14px, 2vw, 18px  )`,
            fontWeight: "bold",
          }}
        >
          {props.icon}
        </Typography>
      ) : completed ? (
        // Display image or tick when completed
        <>
          {props.icon === 1 && occasion ? (
            <Box
              sx={{
                width: { xs: 40, md: 58 },
                height: { xs: 40, md: 58 },
                background: colors.white.main,
                display: "flex",
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: 32, md: 50 },
                  height: { xs: 32, md: 50 },
                  display: "flex",
                  borderRadius: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  background: `url(${globalConstant.showOccasionImageInSelectedStepper[occasion]})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </Box>
          ) : props.icon === 2 && relation ? (
            <Box
              sx={{
                width: { xs: 40, md: 58 },
                height: { xs: 40, md: 58 },
                background: colors.white.main,
                display: "flex",
                borderRadius: "50%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: { xs: 32, md: 50 },
                  height: { xs: 32, md: 50 },
                  display: "flex",
                  borderRadius: "50%",
                  justifyContent: "center",
                  alignItems: "center",
                  background: `url(${globalConstant.showRelationImageInSelectedStepper[relation]})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              />
            </Box>
          ) : (
            <TickIcon height={isMobile ? "15" : "40"} />
          )}
        </>
      ) : (
        // Default view (number in gray color when inactive and not completed)
        <Typography
          variant="h6"
          sx={{
            color: "text.disabled",
            fontSize: `clamp(14px, 2vw, 18px)`,
          }}
        >
          {props.icon}
        </Typography>
      )}
    </ColorLibStepIconRoot>
  );
};
