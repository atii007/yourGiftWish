import { CustomButton, CustomInput, ListingCard } from "@common";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { colors } from "src/theme/colors";
import LoadingStep from "../LoadingStep";
import React from "react";
import { StepFourProps } from "@schemas";
import { commonStyle } from "../../style";
import { isValidArray } from "@helpers";
import { globalConstant } from "@constant";

const StepFour = ({
  activeStep,
  handleBack,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleNext,
  isDetailApiLoading,
  detailIdeasData,
  handleChangeAddMoreInput,
  addMoreInputValue,
  handleSubmitData,
  handleSelectedData
}: StepFourProps) => {
  const navigate = useNavigate();
  const { occasion, relation } = useParams();
  const params = new URLSearchParams(location.search);

  const handlePreviousButtonClick = () => {
    navigate(`/${globalConstant.globalRoutePrefix}/${occasion}/${relation}/?${params.toString()}`);
    handleBack();
  };

  return (
    <Box>
      {isDetailApiLoading ? (
        <LoadingStep />
      ) : (
        <>
          <Typography
            variant="h5"
            fontWeight={500}
            py={3}
            sx={commonStyle.commonHeadingStyle}
          >
            Here are the best gift suggestions for you!
          </Typography>
          <Divider />
          <Stack direction={"column"} gap={4} py={4}>
            {detailIdeasData &&
              isValidArray(detailIdeasData) &&
              detailIdeasData.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <ListingCard data={item} handleSelectedData={handleSelectedData} />
                  </React.Fragment>
                );
              })}
          </Stack>

          <Box
            sx={{
              pt: 5,
              pb: 2,
              borderBlock: `2px dashed ${colors.neutral[300]}`,
            }}
          >
            <Grid container justifyContent={"space-between"}>
              <Grid item xs={8.5} sm={10}>
                <CustomInput
                  label="Add More Details"
                  placeholder="E.g suggest another brand"
                  handleChange={handleChangeAddMoreInput}
                  value={addMoreInputValue}
                  showOptionalTag={false}
                  type="text"
                  name="details more"
                />
              </Grid>
              <Grid item xs={3} sm={1.5} mt={8}>
                <CustomButton
                  text="Add"
                  variant="outlined"
                  onClick={()=>handleSubmitData(3)}
                  sx={{
                    width: "100%",
                    borderColor: colors.primary.main,
                    color: colors.primary.main,
                    minHeight: "47px",
                  }}
                />
              </Grid>
            </Grid>
          </Box>
          <Stack direction={"row"} justifyContent={"space-between"} mt={12}>
            <CustomButton
              text="Previous"
              variant="outlined"
              disabled={activeStep === 0}
              onClick={handlePreviousButtonClick}
              sx={commonStyle.outlinedButtonStyle}
            />
           <CustomButton
              text="Start Over"
              variant="outlined"
              onClick={() => window.location.href = '/suggestion/'}
              sx={commonStyle.outlinedButtonStyle}
            />
            {/* <CustomButton
              text="Next"
              variant="contained"
              onClick={handleNext}
              //   disabled={!selectedItem}
              sx={commonStyle.containedButtonStyle}
            /> */}

          </Stack>
        </>
      )}
    </Box>
  );
};

export default StepFour;
