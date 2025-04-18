import { LayoutProps } from "@schemas";
import { Box, Container } from "@mui/material";

export const Wrappers = ({ children }: LayoutProps) => {
  return (
    <>
      <Box
        sx={{
          minHeight: "calc(100dvh - 150px)",
          marginTop: "0px",
          opacity: "0.9",
        }}
      >
        <Box sx={{ display: "flex", flex: 1 }}>
          <Box
            sx={{
              flex: 1,
              // overflow: "auto",
              // overflowX: "hidden",
              mt: 18.5,
              p: 3,
              px: { xs: 4, sm: 5.5 },
              pt: { xs: 4, sm: 4 },
            }}
          >
            <Container>{children}</Container>
          </Box>
        </Box>
      </Box>
    </>
  );
};
