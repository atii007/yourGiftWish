import { CustomButton, CustomInput } from "@common";
import { globalConstant } from "@constant";
import { Box, Divider, Grid, Stack, Typography } from "@mui/material";
import { StepThreeProps } from "@schemas";
// import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { colors } from "src/theme/colors";
import { commonStyle } from "../../style";

const StepThree = ({
  activeStep,
  handleBack,
  handleNext,
  handleSubmitData,
  handleChangeInput,
  handlePriceRangeClick,
  optionalDetail,
}: StepThreeProps) => {
  const navigate = useNavigate();
  const { occasion, relation } = useParams();
  const handlePreviousButtonClick = () => {
    if (occasion === globalConstant.other) {
      navigate(
        `/${globalConstant.globalRoutePrefix}/${occasion}/${relation}/${location.search}`
      );
    } else if (relation === globalConstant.other) {
      {
        navigate(
          `/${globalConstant.globalRoutePrefix}/${occasion}/${relation}/${location.search}`
        );
      }
    } else {
      navigate(`/${globalConstant.globalRoutePrefix}/${occasion}/${relation}`);
    }
    // handleNext();
    handleBack();
  };

  const handleDataSubmission = () => {
    handleSubmitData();
    handleNext();
  };

  return (
    <Box>
      <Typography
        variant="h5"
        fontWeight={500}
        py={3}
        sx={{ color: colors.black.main, fontSize: `clamp(20px, 2vw, 24px)` }}
      >
        Optional details
      </Typography>
      <Divider />
      <Box py={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <CustomInput
              handleChange={handleChangeInput}
              value={optionalDetail.age}
              label={`Your ${relation} age`}
              type="text"
              name="age"
              placeholder="Eg: 32"
              endAdornment={"Years old"}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CustomInput
              handleChange={handleChangeInput}
              value={optionalDetail.interest}
              label={`Your ${relation} tastes and interests`}
              type="text"
              name="interest"
              placeholder="Eg: Online gaming, art and design, camping and hiking, etc"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CustomInput
              handleChange={handleChangeInput}
              value={optionalDetail.giftCategory}
              label={`Gift Category`}
              type="text"
              name="giftCategory"
              placeholder="Eg: Camping"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CustomInput
              handleChange={handleChangeInput}
              value={optionalDetail.giftStyle}
              label={`Gift Style`}
              type="text"
              name="giftStyle"
              placeholder="Eg: thoughtful, humorous, fun, luxurious"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: { xs: ".85rem", md: ".9rem" },
                fontWeight: 500,
                textTransform: "capitalize",
                color: colors.black.main,
              }}
            >
              Price range{" "}
              <Typography
                component={"span"}
                color={`rgba(150, 147, 163, 1)`}
                fontWeight={500}
                fontSize={"0.9rem"}
              >
                (optional)
              </Typography>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              {globalConstant.priceRangeData.map((item, index) => {
                const selectedButton = item.value === optionalDetail.priceRange;
                return (
                  <Grid item xs={6} sm={2.4} md={2.4} lg={2.2} key={index}>
                    <CustomButton
                      onClick={() => handlePriceRangeClick(item)}
                      text={item.label}
                      type="button"
                      variant="outlined"
                      sx={{
                        width: "100%",
                        borderColor: selectedButton
                          ? `${colors.primary.main} !important`
                          : `${colors.borderColor.main} !important`,
                        color: selectedButton
                          ? colors.primary.main
                          : `rgba(111, 108, 144, 1)`,
                        px: 5,
                        py: 2.5,
                        fontWeight: 400,
                        borderRadius: 1.2,
                      }}
                    />
                  </Grid>
                );
              })}
            </Grid>
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
          text="Find a Gift Wish"
          variant="contained"
          onClick={handleDataSubmission}
          //   disabled={!selectedItem}
          sx={commonStyle.containedButtonStyle}
        />
      </Stack>
    </Box>
  );
};

export default StepThree;
