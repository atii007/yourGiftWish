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
import React, { useState } from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import { useLocation, useNavigate, useParams } from "react-router-dom";
import { colors } from "src/theme/colors";
import { StepTwoProps } from "@schemas";
import { commonStyle } from "../../style";

const StepTwo = ({
  handleCardClick,
  selectedItem,
  activeStep,
  handleBack,
  handleNext,
  modalOpen,
  handleOpenCloseModal,
  handleCloseRelationModal,
}: StepTwoProps) => {
  const [otherRelationInputData, setOtherRelationInputData] = useState("");
  const { occasion } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);

  const handleNextButtonClick = () => {
    if (occasion === globalConstant.other) {
      navigate(`/${globalConstant.globalRoutePrefix}/${occasion}/${selectedItem}/?${params.toString()}`);
    } else {
      navigate(`/${globalConstant.globalRoutePrefix}/${occasion}/${selectedItem}`);
    }
    handleNext();
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setOtherRelationInputData(value);
  };

  const handleConfirmOtherInputData = () => {
    // const params = new URLSearchParams(location.search);
    // if (occasion === "other") {
    params.set("person", otherRelationInputData);
    navigate(`/${globalConstant.globalRoutePrefix}/${occasion}/${selectedItem}/?${params.toString()}`);
    // navigate(
    //   `/${selectedItem}/?ocassion=${otherRelationInputData}`
    // );
    // } else {
    // params.set("person", otherRelationInputData);
    // navigate(
    //   `/${occasion}/${selectedItem}/?${params.toString()}`
    // );
    // }
    // navigate(
    //   `/${selectedItem}/?ocassion=${otherRelationInputData}`
    // );
    handleOpenCloseModal();
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
        Who is your gift for?
      </Typography>
      <Divider />
      <Box py={4}>
        <Grid container spacing={1}>
          {globalConstant.RelationData.map((item, index) => {
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
          handleCloseOpen={handleCloseRelationModal}
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
                What is the person?
              </Typography>
              <IconButton onClick={handleCloseRelationModal}>
                <CloseRoundedIcon />
              </IconButton>
            </Stack>
            <Divider />
            <Box px={5} py={3}>
              <CustomInput
                type="text"
                label="Relation Name"
                name="relationName"
                placeholder="Eg : Sister in law"
                value={otherRelationInputData}
                handleChange={handleInputChange}
                showOptionalTag={false}
              />
            </Box>
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              px={5}
              pb={5}
            >
              <CustomButton
                text="Cancel"
                variant="outlined"
                onClick={handleCloseRelationModal}
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

export default StepTwo;
