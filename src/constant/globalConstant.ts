import {
  christmasImage,
  anniversaryImage,
  fathersDayImage,
  mothersdayImage,
  babyShowerImage,
  birthdayImage,
  graduationImage,
  housewarmingImage,
  valentineDayImage,
  weddingImage,
  fatherImage,
  boyfriendImage,
  coworkerImage,
  daugtherImage,
  friendImage,
  girlfriendImage,
  motherImage,
  relationOthersImage,
  sonImage,
  workeventImage,
} from "@assets";

export const globalConstant = {
  OccasionData: [
    {
      image: christmasImage,
      title: "Christmas",
      slug: "christmas",
    },
    {
      image: birthdayImage,
      title: "Birthday",
      slug: "birthday",
    },
    {
      image: valentineDayImage,
      title: "Valentine's Day",
      slug: "valentinesday",
    },
    {
      image: anniversaryImage,
      title: "Anniversary",
      slug: "anniversary",
    },
    {
      image: weddingImage,
      title: "Wedding",
      slug: "wedding",
    },
    {
      image: mothersdayImage,
      title: "Mother's Day",
      slug: "mothersday",
    },
    {
      image: fathersDayImage,
      title: "Father's Day",
      slug: "fathersday",
    },
    {
      image: babyShowerImage,
      title: "Baby Shower",
      slug: "babyshower",
    },
    {
      image: graduationImage,
      title: "Graduation",
      slug: "graduation",
    },
    {
      image: housewarmingImage,
      title: "Housewarming",
      slug: "housewarming",
    },
    {
      image: workeventImage,
      title: "Work Event",
      slug: "workevent",
    },
    {
      image: relationOthersImage,
      title: "Other",
      slug: "other",
    },
  ],
  RelationData: [
    {
      image: motherImage,
      title: "Mother",
      slug: "mother",
    },
    {
      image: fatherImage,
      title: "Father",
      slug: "father",
    },
    {
      image: daugtherImage,
      title: "Daughter",
      slug: "daughter",
    },
    {
      image: sonImage,
      title: "Son",
      slug: "son",
    },
    {
      image: girlfriendImage,
      title: "Girlfriend",
      slug: "girlfriend",
    },
    {
      image: boyfriendImage,
      title: "Boyfriend",
      slug: "boyfriend",
    },
    {
      image: friendImage,
      title: "Friend",
      slug: "friend",
    },
    {
      image: coworkerImage,
      title: "Co-worker",
      slug: "coworker",
    },
    {
      image: relationOthersImage,
      title: "Other",
      slug: "other",
    },
  ],
  occasionTitles: [
    "christmas",
    "anniversary",
    "fathersday",
    "mothersday",
    "babyshower",
    "birth",
    "birthday",
    "workevent",
    "graduation",
    "housewarming",
    "valentinesday",
    "wedding",
    "other",
  ],
  relationTitles: [
    "mother",
    "father",
    "daughter",
    "son",
    "boyfriend",
    "girlfriend",
    "friend",
    "coworker",
    "other",
  ],

  showOccasionImageInSelectedStepper: {
    christmas: christmasImage,
    anniversary: anniversaryImage,
    fathersday: fathersDayImage,
    mothersday: mothersdayImage,
    babyshower: babyShowerImage,
    birthday: birthdayImage,
    workevent: workeventImage,
    graduation: graduationImage,
    housewarming: housewarmingImage,
    valentinesday: valentineDayImage,
    wedding: weddingImage,
    other: relationOthersImage,
  } as { [key: string]: string },

  showRelationImageInSelectedStepper: {
    mother: motherImage,
    father: fatherImage,
    daughter: daugtherImage,
    son: sonImage,
    boyfriend: boyfriendImage,
    girlfriend: girlfriendImage,
    friend: friendImage,
    other: relationOthersImage,
    coworker: coworkerImage,
  } as { [key: string]: string },

  priceRangeData: [
    { value: "0-50", label: "$0 - $50" },
    { value: "50-200", label: "$50 - $200" },
    { value: "200-500", label: "$200 - $500" },
    { value: "500-1000", label: "$500 - $1000" },
    { value: "1000+", label: "$1000+" },
  ],

  convertPriceRangeTostring: {
    "0-50": "low",
    "50-200": "mid",
    "200-500": "high",
    "500-1000": "high",
    "1000+": "high",
  } as { [key: string]: string },
  steps: [
    {
      label: "Event",
    },
    {
      label: "Person",
    },
    {
      label: "Detail",
    },
    {
      label: "Ideas",
    },
    {
      label: "Buy",
    },
  ],
  globalRoutePrefix: "suggestion",
  other: "other",
};
