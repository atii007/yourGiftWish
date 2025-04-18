interface StepTwoProps {
  handleCardClick: (item: {
    title: string;
    image: string;
    slug: string;
  }) => void;
  selectedItem: string | null;
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
  modalOpen: boolean;
  handleOpenCloseModal: () => void;
  handleCloseRelationModal: () => void;
}

interface StepThreeProps {
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
  handleSubmitData: () => void;
  handleChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePriceRangeClick: (priceData: { label: string; value: string }) => void;
  optionalDetail: optionalDetailType;
}
interface optionalDetailType {
  age: string;
  interest: string;
  giftCategory: string;
  giftStyle: string;
  priceRange: string;
}
interface StepOneProps {
  handleCardClick: (item: {
    title: string;
    image: string;
    slug: string;
  }) => void;
  selectedItem: string | null;
  activeStep: number;
  handleBack: () => void;
  handleNext: () => void;
  modalOpen: boolean;
  handleOpenCloseModal: () => void;
  handleCloseOcassionModal: () => void;
  setOccasionItem: React.Dispatch<React.SetStateAction<string | null>>;
}
interface DetailIdeaPayloadDataType {
  keywords: string;
  age: string | undefined;
  country: string | null;
  event: string | undefined;
  giftCategory: string | null;
  giftStyle: string | null;
  hobbies: string[];
  person: string | undefined;
  priceRange: string;
  suggestion: string[] | null;
}
interface StepFourProps {
  activeStep?: number;
  handleBack: () => void;
  handleNext: () => void;
  isDetailApiLoading: boolean;
  detailIdeasData?: DetailIdeaDataProp[];
  handleChangeAddMoreInput: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  addMoreInputValue: string;
  handleSubmitData: (screen?: number) => void;
  handleSelectedData: (data: DetailIdeaDataProp) => void;
}

interface DetailIdeaApiResponse {
  suggestion: string[];
  items: DetailIdeaDataProp[];
}

interface DetailIdeaDataProp {
  redirectURL: string;
  imageUrl: string;
  title: string;
  description: string;
  tag: string;
  color: string;
}
interface FetchBaseQueryError {
  status: number;
  data?: {
    message?: string;
    status?: number;
  };
}
export {
  StepOneProps,
  StepTwoProps,
  StepThreeProps,
  StepFourProps,
  DetailIdeaApiResponse,
  DetailIdeaDataProp,
  DetailIdeaPayloadDataType,
};
