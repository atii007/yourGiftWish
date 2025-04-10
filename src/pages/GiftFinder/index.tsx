import { Box, Grid, Stepper, Step, StepLabel, Typography } from "@mui/material";
import { colors } from "src/theme/colors";
import { globalConstant } from "@constant";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import { StepperIcon } from "@common";
import { StepFive } from "./components/StepFive";
import { useStepperData } from "./useStepperData";
import { commonStyle } from "./style";

const GiftFinder = () => {
  const {
    handleSelectedData,
    handleChangeAddMoreInput,
    handleSubmitData,
    handlePriceRangeClick,
    handleChangeInput,
    handleTileForMobileView,
    handleClickStepper,
    handleDescriptionOnStepper,
    handleRelationClick,
    handleOcassionClick,
    handleCloseOpenRelationModal,
    handleCloseOpenOcassionModal,
    handleCloseRelationModal,
    handleCloseOcassionModal,
    handleBack,
    handleNext,
    selectedData,
    activeStep,
    ColorLibConnector,
    isDetailApiLoading,
    detailIdeasData,
    OtherModalOpen,
    isMobile,
    selectedOccasionItem,
    selectedRelationItem,
    addMoreInputValue,
    optionalDetail,
  } = useStepperData();

  return (
    <Box>
      <Grid container justifyContent={"space-between"}>
        <Grid item xs={12} md={3.5} sx={commonStyle.sidebarSticky}>
          <Box sx={commonStyle.sidebarBox}>
            <Box
              textAlign={"center"}
              mb={5}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              <Typography variant="h6" sx={{ color: colors.black.main }}>
                {handleTileForMobileView}
              </Typography>
              {handleDescriptionOnStepper(activeStep)}
            </Box>
            <Stepper
              orientation={isMobile ? "horizontal" : "vertical"}
              activeStep={activeStep}
              connector={<ColorLibConnector />}
            >
              {globalConstant.steps.map((item, index) => (
                <Step
                  key={item.label}
                  onClick={() => {
                    // Update active step when a previous step is clicked
                    if (index < activeStep) {
                      handleClickStepper(index);
                    }
                  }}
                  sx={{
                    // Show pointer cursor only for clickable steps
                    cursor: index < activeStep ? "pointer" : "default",
                    px: { xs: 1, md: "inherit" },
                    "& .MuiStepLabel-iconContainer": {
                      pr: { xs: 0, md: 2 },
                    },
                  }}
                >
                  <StepLabel StepIconComponent={StepperIcon}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color:
                          activeStep === index || index < activeStep
                            ? colors.primary.main
                            : colors.neutral[400],
                      }}
                    >
                      {isMobile ? "" : item.label}
                    </Typography>
                    {isMobile ? "" : handleDescriptionOnStepper(index)}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={8.2}
          sx={{
            mt: { xs: 3, md: 0 },
          }}
        >
          {activeStep === 0 && (
            <StepOne
              handleNext={handleNext}
              handleBack={handleBack}
              selectedItem={selectedOccasionItem}
              handleCardClick={handleOcassionClick}
              activeStep={activeStep}
              modalOpen={OtherModalOpen.occasionModal}
              handleCloseOcassionModal={handleCloseOcassionModal}
              handleOpenCloseModal={handleCloseOpenOcassionModal}
            />
          )}
          {activeStep === 1 && (
            <StepTwo
              handleNext={handleNext}
              handleBack={handleBack}
              selectedItem={selectedRelationItem}
              handleCardClick={handleRelationClick}
              activeStep={activeStep}
              modalOpen={OtherModalOpen.relationModal}
              handleCloseRelationModal={handleCloseRelationModal}
              handleOpenCloseModal={handleCloseOpenRelationModal}
            />
          )}
          {activeStep === 2 && (
            <StepThree
              activeStep={activeStep}
              handleBack={handleBack}
              handleNext={handleNext}
              handleSubmitData={handleSubmitData}
              handleChangeInput={handleChangeInput}
              handlePriceRangeClick={handlePriceRangeClick}
              optionalDetail={optionalDetail}
            />
          )}
          {activeStep === 3 && (
            <StepFour
              activeStep={activeStep}
              handleBack={handleBack}
              handleNext={handleNext}
              detailIdeasData={detailIdeasData?.items}
              isDetailApiLoading={isDetailApiLoading}
              handleChangeAddMoreInput={handleChangeAddMoreInput}
              addMoreInputValue={addMoreInputValue}
              handleSelectedData={handleSelectedData}
              handleSubmitData={handleSubmitData}
            />
          )}
          {activeStep === 4 && <StepFive selectedData={selectedData} />}
        </Grid>
      </Grid>
    </Box>
  );
};

export default GiftFinder;
