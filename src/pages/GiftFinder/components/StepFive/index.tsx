// import { productImage } from "@assets";
import { CustomButton } from "@common";
import { Box, Typography } from "@mui/material";
import { DetailIdeaDataProp } from "@schemas";
import { colors } from "src/theme/colors";
import { commonStyle } from "../../style";
import { stepFiveStyle } from "./style";

export const StepFive = ({
  selectedData,
}: {
  selectedData: DetailIdeaDataProp | null;
}) => {
  const handleBuyNowClick = () => {
    window.open(selectedData?.redirectURL);
  };
  return (
    <>
      <Box sx={stepFiveStyle.mainBox}>
        <img
          src={selectedData?.imageUrl}
          alt=""
          style={{
            maxHeight: 300,
          }}
        />
      </Box>
      <Box textAlign={"center"}>
        <Typography
          variant="h5"
          fontWeight={600}
          py={3}
          sx={commonStyle.commonHeadingStyle}
        >
          {selectedData?.title}
        </Typography>
        <Typography variant="body2" sx={{ color: colors.neutral[500] }}>
          {selectedData?.description}
        </Typography>
        <Box mt={3}>
          <CustomButton
            text="Buy On Amazon"
            variant="contained"
            onClick={handleBuyNowClick}
            sx={commonStyle.containedButtonStyle}
          />
        </Box>
      </Box>
    </>
  );
};
