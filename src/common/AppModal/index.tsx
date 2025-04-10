import * as React from "react";
import Dialog from "@mui/material/Dialog";
interface AppModalProps {
  handleCloseOpen: () => void;
  open: boolean;
  children: React.ReactNode;
  maxWidth?: "lg" | "md" | "sm" | "xs" | "xl";
}

export const AppModal = ({
  handleCloseOpen,
  open,
  children,
  maxWidth,
}: AppModalProps) => {
  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        open={open}
        keepMounted
        onClose={handleCloseOpen}
        maxWidth={maxWidth ?? "md"}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiPaper-root": {
            borderRadius: 4,
          },
        }}
      >
        {children}
      </Dialog>
    </React.Fragment>
  );
};
