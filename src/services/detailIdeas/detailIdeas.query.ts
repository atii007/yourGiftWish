// import { yourGiftWishApiSlice } from "@rtk";
import { DetailIdeaApiResponse, DetailIdeaPayloadDataType } from "@schemas";
import { yourGiftWishApiSlice } from "../../rtk";
import { queries } from "./detailIdeas.api";

const detailIdeasEnhancedSlice = yourGiftWishApiSlice.enhanceEndpoints({});

const detailIdeasUserApi = detailIdeasEnhancedSlice.injectEndpoints({
  endpoints: (builder) => ({
    postDetailIdeas: builder.mutation<DetailIdeaApiResponse, DetailIdeaPayloadDataType>({
      query: queries.Ideas.query,
    }),
  }),
  overrideExisting: true,
});

export const { usePostDetailIdeasMutation } = detailIdeasUserApi;

export default detailIdeasUserApi;
