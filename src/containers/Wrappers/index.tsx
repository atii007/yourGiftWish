
import { LayoutProps } from "@schemas";
import Header from "../Header";
import { Box, Container } from "@mui/material";
import { Footer } from "../Footer";


export const Wrappers = ({ children }: LayoutProps) => {

  return (
    <>
      <Box
        sx={{
          minHeight: "calc(100dvh - 150px)",
        }}
      >
        <Header />
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
      <Footer />
    </>
  );
};
