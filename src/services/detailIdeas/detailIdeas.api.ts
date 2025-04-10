export const queries = {
  Ideas: {
    query: (body: any) => ({
      url: `/call-external-api`,
      method: "POST",
      body,
    }),
  },
} as const;
