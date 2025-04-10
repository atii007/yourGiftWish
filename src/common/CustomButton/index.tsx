import { Button, SxProps } from "@mui/material";
import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { colors } from "src/theme/colors";
interface AppButtonProps {
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  text: string;
  variant: "contained" | "text" | "outlined";
  sx?: SxProps;
  isAuth?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  onClick?: () => void;
}

export const CustomButton = ({
  startIcon,
  text,
  endIcon,
  variant,
  type,
  disabled,
  sx = {},
  isLoading,
  onClick,
  color = "inherit",
}: AppButtonProps) => {
  const isContained = variant === "contained" ? true : false;

  return (
    <Button
      disableRipple={isContained}
      sx={{
        ...(isContained
          ? {
              backgroundColor: colors.primary.main,
              color: colors.azure.main,
              boxShadow: "none",
              fontSize: "16px",
              fontWeight: 700,
              py: 3.2,
              "&:hover": {
                backgroundColor: colors.primary.main,
                boxShadow: "none",
              },
            }
          : {}),
        ...(disabled ? { cursor: "not-allowed" } : {}),
        ...sx,
      }}
      onClick={onClick}
      color={color}
      startIcon={startIcon}
      endIcon={endIcon}
      variant={variant}
      disabled={disabled || isLoading}
      type={type || "submit"}
    >
      {isLoading ? <CircularProgress color="primary" size={24} /> : text}
    </Button>
  );
};
