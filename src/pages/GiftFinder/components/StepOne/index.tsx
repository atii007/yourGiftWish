import {
  AppModal,
  CommonOccasionCard,
  CustomButton,
  CustomInput,
} from "@common";
import { globalConstant } from "@constant";
import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { colors } from "src/theme/colors";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useState } from "react";
import { StepOneProps } from "@schemas";
import { commonStyle } from "../../style";
const StepOne = ({
  handleCardClick,
  selectedItem,
  activeStep,
  handleBack,
  handleNext,
  modalOpen,
  handleOpenCloseModal,
  handleCloseOcassionModal,
}: StepOneProps) => {
  const [otherOcassionInputData, setOtherOcassionInputData] = useState("");
  const navigate = useNavigate();

  const handleNextButtonClick = () => {
    navigate(`/${globalConstant.globalRoutePrefix}/${selectedItem}`);
    handleNext();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setOtherOcassionInputData(value);
  };

  const handleConfirmOtherInputData = () => {
    navigate(`/${globalConstant.globalRoutePrefix}/${selectedItem}/?ocassion=${otherOcassionInputData}`);
    handleOpenCloseModal();
    handleNext();
  };

  return (
    <Box>
      <Typography
        variant="h5"
        fontWeight={500}
        py={3}
        sx={commonStyle.commonHeadingStyle}
      >
        What is your gift wish for?
      </Typography>
      <Divider />
      <Box py={4}>
        <Grid
          container
          sx={{
            pl: { xs: 0, md: 1 },
            pt: { xs: 0, md: 1 },
          }}
        >
          {globalConstant.OccasionData.map((item, index) => {
            return (
              <Grid item xs={6} sm={4} md={3} key={index}>
                <CommonOccasionCard
                  data={item}
                  handleClick={() => handleCardClick(item)}
                  selected={selectedItem === item.slug}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <CustomButton
          text="Previous"
          variant="outlined"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={commonStyle.outlinedButtonStyle}
        />
        <CustomButton
          text="Next Step"
          variant="contained"
          onClick={handleNextButtonClick}
          disabled={!selectedItem}
          sx={commonStyle.containedButtonStyle}
        />
      </Stack>
      {modalOpen && (
        <AppModal
          open={modalOpen}
          handleCloseOpen={handleCloseOcassionModal}
          maxWidth="xs"
        >
          <Box>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              px={5}
              pt={2}
            >
              <Typography
                variant="h6"
                fontWeight={500}
                py={3}
                sx={{ color: colors.black.main }}
              >
                What is the occasion?
              </Typography>
              <IconButton onClick={handleCloseOcassionModal}>
                <CloseRoundedIcon />
              </IconButton>
            </Stack>
            <Divider />
            <Box px={5} py={3}>
              <CustomInput
                type="text"
                label="Ocassion Name"
                name="ocassionName"
                placeholder="Ex : Graduation"
                value={otherOcassionInputData}
                handleChange={handleInputChange}
                showOptionalTag={false}
              />
            </Box>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              px={5}
              gap={3}
              pb={5}
            >
              <CustomButton
                text="Cancel"
                variant="outlined"
                onClick={handleCloseOcassionModal}
                sx={commonStyle.outlinedButtonStyle}
              />
              <CustomButton
                text="Confirm"
                variant="contained"
                onClick={handleConfirmOtherInputData}
                sx={commonStyle.containedButtonStyle}
              />
            </Stack>
          </Box>
        </AppModal>
      )}
    </Box>
  );
};

export default StepOne;
