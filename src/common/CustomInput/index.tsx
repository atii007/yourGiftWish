import { styles } from "./styles";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import { colors } from "src/theme/colors";

interface CustomInputProps {
  label?: string;
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  type: string;
  screen?: string;
  error?: string | false | undefined;
  startAdornment?: React.ReactNode | string;
  endAdornment?: React.ReactNode | string;
  name: string;
  disabled?: boolean;
  minDate?: string;
  showOptionalTag?: boolean;
}

export const CustomInput = ({
  label,
  placeholder,
  handleChange,
  value,
  type,
  name,
  screen,
  error,
  startAdornment,
  disabled,
  minDate,
  endAdornment,
  showOptionalTag = true,
}: CustomInputProps) => {
  return (
    <>
      <Box sx={styles.parentInputBox}>
        {label && (
          <Box mb={1.3}>
            <Typography variant="subtitle1" sx={styles.textLabel}>
              {label}{" "}
              {showOptionalTag && (
                <Typography
                  component={"span"}
                  color={`rgba(150, 147, 163, 1)`}
                  fontSize={"0.9rem"}
                  fontWeight={500}
                >
                  (optional)
                </Typography>
              )}
            </Typography>
          </Box>
        )}
        <TextField
          fullWidth
          variant="outlined"
          placeholder={placeholder}
          size="small"
          id={label}
          name={name}
          type={"text"}
          value={value}
          helperText={error ?? ""}
          onChange={handleChange}
          disabled={disabled}
          inputProps={type === "date" ? { min: minDate } : {}}
          sx={{
            "& .MuiOutlinedInput-root": {
              ...styles.muiOutlinedInputroot,
              backgroundColor: disabled ? colors.secondary.main : "",
              "& fieldset": {
                borderColor: colors.borderColor.main,
              },

              "&:hover fieldset": {
                borderColor: "primary.main",
              },
              "&.Mui-focused fieldset": {
                borderColor: "primary.main",
              },
            },
            "& .MuiOutlinedInput-input": {
              backgroundColor: "transparent !important",
              cursor: disabled ? "not-allowed" : "inherit",
              minHeight: name === "search" ? "27px" : "30px",
              "&:-webkit-autofill": styles.webkit_autofill,
              "&::placeholder": {
                color: "rgba(111, 108, 144, 1)",
                opacity: 0.7,
                fontSize: ".8rem",
              },
            },
            "& input:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 30px rgba(0,0,0,0) inset !important",
              WebkitTextFillColor: "#000 !important",
              transition: "background-color 5000s ease-in-out 0s",
            },
            "& .MuiFormHelperText-root": {
              color: colors.error.main,
              fontWeight: 500,
            },
            "& .Mui-disabled": {
              background: "transparent",
              opacity: 0.8,
            },
            ...(type === "number"
              ? {
                  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                    {
                      WebkitAppearance: "none",
                      margin: 0,
                    },
                  "& input[type=number]": {
                    MozAppearance: "textfield",
                  },
                }
              : {}),
          }}
          InputProps={{
            style: styles.input,
            endAdornment: endAdornment && (
              <InputAdornment
                position="end"
                sx={{
                  "& p": {
                    color: "rgba(111, 108, 144, 1)",
                    opacity: 0.8,
                    fontSize: ".9rem",
                  },
                }}
              >
                {endAdornment}
              </InputAdornment>
            ),
            startAdornment: startAdornment && (
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            ),
          }}
        />
      </Box>
    </>
  );
};
