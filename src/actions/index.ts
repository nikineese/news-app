import { GetNewsProps } from "./types";

export const getNews = ({
  search,
  category,
}: GetNewsProps): {
  type: string;
  search?: string;
  category?: string;
} => ({
  type: "GET_NEWS",
  search,
  category,
});
