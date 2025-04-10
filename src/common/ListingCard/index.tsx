import { Box, Stack, Typography } from "@mui/material";
import { CustomButton } from "../CustomButton";
import { ListingCardStyle } from "./style";
import { colors } from "src/theme/colors";
import { DetailIdeaDataProp } from "@schemas";

export const ListingCard = ({
  data,
  handleSelectedData,
}: {
  data: DetailIdeaDataProp;
  handleSelectedData: (data: DetailIdeaDataProp) => void;
}) => {
  return (
    <Box sx={ListingCardStyle.mainBoxStyle}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={3}
      >
        <img
          src={data.imageUrl}
          alt={data.title}
          style={ListingCardStyle.imageStyling}
        />
        <Typography variant="h6" my={1} sx={ListingCardStyle.heading}>
          {data?.title}
        </Typography>
        <Box
          sx={{
            px: 3,
            py: 1,
            fontSize: "clamp(13px, 2vw, 13px)",
            background: data.color ?? colors.tertiary.main,
            color: colors.white.main,
            borderRadius: "40px",
          }}
        >
          {data.tag}
        </Box>
      </Stack>
      <Typography variant="body2" my={1} sx={ListingCardStyle.paragraphStyle}>
        {data.description}
      </Typography>
      <CustomButton
        text="View image and purchase options"
        variant="text"
        onClick={() => handleSelectedData(data)}
        sx={ListingCardStyle.buttonStyle}
      />
    </Box>
  );
};
