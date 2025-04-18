import { globalConstant } from "@constant";
import styled from "@emotion/styled";
import {
  StepConnector,
  stepConnectorClasses,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { DetailIdeaDataProp } from "@schemas";
import { usePostDetailIdeasMutation } from "@service";
import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { colors } from "src/theme/colors";

export const useStepperData = () => {
  const { occasion, relation } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [
    handleSubmitDetailIdeas,
    { isLoading: isDetailApiLoading, data: detailIdeasData },
  ] = usePostDetailIdeasMutation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const ColorLibConnector = styled(StepConnector)(() => ({
    [`&.${stepConnectorClasses.lineVertical}`]: {
      top: 22,
      // textAlign: "center",
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        border: isMobile ? 0 : `.5px dashed ${colors.primary.main}`,
        background: isMobile ? colors.primary.main : "transparent",
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        border: isMobile ? 0 : `.5px dashed ${colors.primary.main}`,
        background: isMobile ? colors.primary.main : "transparent",
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      height: isMobile ? 2 : 3,
      background: isMobile ? colors.neutral[400] : "transparent",
      border: isMobile ? 0 : `.5px dashed ${colors.neutral[400]}`,
      width: isMobile ? "100%" : 1,
      marginLeft: isMobile ? 0 : 17,
    },
  }));
  const params = new URLSearchParams(location.search);

  // handle active stepper and redirect to first step if the ocassion and relation are not according to the specified data
  const isActiveStep = useMemo(() => {
    const isOccasionValid =
      occasion &&
      globalConstant.occasionTitles.includes(occasion.toLocaleLowerCase());

    const isRelationValid =
      relation && globalConstant.relationTitles.includes(relation);

    if (isOccasionValid) {
      return isRelationValid ? 2 : 0; // Step 2 if both occasion and relation are valid
    }

    if (isRelationValid) {
      return 2; // Step 2 if only relation is valid
    }

    return 0; // Default to 0 if neither is valid
  }, [occasion, relation]);

  const [activeStep, setActiveStep] = useState(isActiveStep);
  const [OtherModalOpen, setOtherModalOpen] = useState({
    occasionModal: false,
    relationModal: false,
  });
  const [selectedOccasionItem, setOccasionItem] = useState<null | string>(null);
  const [selectedRelationItem, setRelationItem] = useState<null | string>(null);
  const [addMoreInputValue, setAddMoreInputValue] = useState("");
  const [apiSuggestion, setApiSuggestion] = useState<null | string[]>(null);
  const [selectedData, setSelectedData] = useState<DetailIdeaDataProp | null>(
    null
  );
  const [optionalDetail, setOptionalDetails] = useState({
    age: "",
    interest: "",
    giftCategory: "",
    giftStyle: "",
    priceRange: "",
  });

  // handle Next section button
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  // handle Previous section button
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  // only handle close ocassion other modal for specific case
  const handleCloseOcassionModal = () => {
    if (OtherModalOpen.occasionModal) {
      setOtherModalOpen((prev) => ({
        ...prev,
        occasionModal: false,
      }));
      setOccasionItem(null);
    }
  };

  // only handle close relation other modal for specific case
  const handleCloseRelationModal = () => {
    if (OtherModalOpen.relationModal) {
      setOtherModalOpen((prev) => ({
        ...prev,
        relationModal: false,
      }));
      setRelationItem(null);
    }
  };

  // handle open and close ocassion other modal
  const handleCloseOpenOcassionModal = () => {
    setOtherModalOpen((prev) => ({
      ...prev,
      occasionModal: !prev.occasionModal,
    }));
  };

  // handle open and close relation other modal
  const handleCloseOpenRelationModal = () => {
    setOtherModalOpen((prev) => ({
      ...prev,
      relationModal: !prev.relationModal,
    }));
  };

  // handle click on ocassion card
  const handleOcassionClick = (data: {
    title: string;
    image: string;
    slug: string;
  }) => {
    if (data.slug === selectedOccasionItem) {
      setOccasionItem(null);
    } else if (data.slug === globalConstant.other) {
      setOtherModalOpen((prev) => ({
        ...prev,
        occasionModal: !prev.occasionModal,
      }));
      setOccasionItem(data.slug);
    } else {
      setOccasionItem(data.slug);
    }
  };

  // handle click on relation card
  const handleRelationClick = (data: {
    title: string;
    image: string;
    slug: string;
  }) => {
    if (data.slug === selectedRelationItem) {
      setRelationItem(null);
    } else if (data.slug === globalConstant.other) {
      setOtherModalOpen((prev) => ({
        ...prev,
        relationModal: !prev.relationModal,
      }));
      setRelationItem(data.slug);
    } else {
      setRelationItem(data.slug);
    }
  };

  // useEffect to check if param exist set the selected ocassion and relation according to that
  useEffect(() => {
    if (occasion) {
      if (occasion && globalConstant.occasionTitles.includes(occasion)) {
        setOccasionItem(occasion);
      } else {
        navigate(`/${globalConstant.globalRoutePrefix}`);
      }
    }
    if (relation) {
      if (relation && globalConstant.relationTitles.includes(relation)) {
        setRelationItem(relation);
      } else {
        navigate(`/${globalConstant.globalRoutePrefix}/${occasion}`);
      }
    }
    setActiveStep(isActiveStep);
  }, [isActiveStep]);

  // handle click for the stepper
  const handleClickStepper = (clickedStep: number) => {
    const params = new URLSearchParams(location.search);

    if (clickedStep === 0) {
      navigate(`/${globalConstant.globalRoutePrefix}`);
    } else if (clickedStep === 1) {
      navigate(
        `/${globalConstant.globalRoutePrefix}/${occasion}/?${params.toString()}`
      );
    } else if (clickedStep === 2) {
      navigate(
        `/${
          globalConstant.globalRoutePrefix
        }/${occasion}/${relation}/?${params.toString()}`
      );
    }
    setActiveStep(clickedStep);
  };

  // handle dynamic description for the different steps
  const handleDescriptionOnStepper = (step: number) => {
    switch (step) {
      case 0:
        return occasion ? (
          <Typography
            variant="subtitle2"
            sx={{
              color: colors.black.main,
              fontWeight: 400,
              textTransform: "capitalize",
            }}
          >
            {occasion}
          </Typography>
        ) : (
          <Typography
            variant="subtitle2"
            sx={{
              color: colors.neutral[400],
              fontWeight: 400,
            }}
          >
            Select your event
          </Typography>
        );
      case 1:
        return relation ? (
          <Typography
            variant="subtitle2"
            sx={{
              color: colors.black.main,
              fontWeight: 400,
              textTransform: "capitalize",
            }}
          >
            {relation}
          </Typography>
        ) : (
          <Typography
            variant="subtitle2"
            sx={{
              color: colors.neutral[400],
              fontWeight: 400,
            }}
          >
            Select your recipient
          </Typography>
        );
      case 2:
        return (
          <Typography
            variant="subtitle2"
            sx={{
              color: colors.neutral[400],
              fontWeight: 400,
            }}
          >
            Add more detail
          </Typography>
        );
      case 3:
        return (
          <Typography
            variant="subtitle2"
            sx={{
              color: colors.neutral[400],
              fontWeight: 400,
            }}
          >
            Review your suggestions
          </Typography>
        );
      default:
        return (
          <Typography
            variant="subtitle2"
            sx={{
              color: colors.neutral[400],
              fontWeight: 400,
            }}
          >
            Selected Category Will come
          </Typography>
        );
    }
  };

  // showing dynamic title for the mobile view
  const handleTileForMobileView = useMemo(() => {
    switch (activeStep) {
      case 0:
        return "Event";
      case 1:
        return "Person";
      case 2:
        return "Details";
      case 3:
        return "Ideas";
      case 4:
        return "Buy";
      default:
        return "Data";
    }
  }, [activeStep]);

  // handle change input for the optional details on third stepper
  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setOptionalDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // handle price click change
  const handlePriceRangeClick = (priceData: {
    label: string;
    value: string;
  }) => {
    if (optionalDetail.priceRange === priceData.value) {
      setOptionalDetails((prev) => ({
        ...prev,
        priceRange: "",
      }));
    } else {
      setOptionalDetails((prev) => ({
        ...prev,
        priceRange: priceData.value,
      }));
    }
  };

  // calling api for the submitting data
  const handleSubmitData = async (screen?: number) => {
    const otherSelectedPerson = params.get("person");
    const otherSelectedOcassion = params.get("ocassion");
    const ocassionWhenOtherIsSelected =
      occasion === globalConstant.other
        ? otherSelectedOcassion ?? globalConstant.other
        : occasion;
    const relationWhenOtherIsSelected =
      occasion === globalConstant.other
        ? otherSelectedPerson ?? globalConstant.other
        : relation;

    const selectedPrices = optionalDetail.priceRange.split("-");
    const minPrice = selectedPrices.length === 1 ? "500" : selectedPrices[0];
    const maxPrice =
      selectedPrices.length === 1 ? selectedPrices[0] : selectedPrices[1];

    const payload = {
      keywords: addMoreInputValue ?? "",
      age: optionalDetail.age,
      country: null,
      suggestion: screen === 3 ? apiSuggestion : null,
      event: ocassionWhenOtherIsSelected,
      giftCategory: optionalDetail.giftCategory,
      giftStyle: optionalDetail.giftStyle,
      hobbies: [optionalDetail.interest],
      person: relationWhenOtherIsSelected,
      priceRange: optionalDetail.priceRange
        ? globalConstant.convertPriceRangeTostring[optionalDetail.priceRange]
        : "",
      minPrice: parseInt(minPrice),
      maxPrice: parseInt(maxPrice),
    };
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await handleSubmitDetailIdeas(payload).unwrap();
      setApiSuggestion(response.suggestion);
      setAddMoreInputValue("");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.detail || "Something went wrong.", {
        autoClose: 2000,
      });
      setActiveStep(2);
    }
  };

  // handle change for the add more input
  const handleChangeAddMoreInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setAddMoreInputValue(value);
  };

  // handle selected data from detail idea listing
  const handleSelectedData = (selectedItem: DetailIdeaDataProp) => {
    setSelectedData(selectedItem);
    handleNext();
  };

  return {
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
    isActiveStep,
    isDetailApiLoading,
    detailIdeasData,
    OtherModalOpen,
    isMobile,
    selectedOccasionItem,
    selectedRelationItem,
    setOccasionItem,
    addMoreInputValue,
    optionalDetail,
  };
};
