import { News } from "../../types/news";
import {
  NewsTitleText,
  NewsListItem,
  NewsListWrapper,
  NewsReadMore,
  NewsListContent,
  NewsListImg,
} from "./NewsList.style";

export const NewsList = ({ news }: { news: News }) => {
  if (!news) return <></>;
  if (news.length === 0) return <p>News isn't founded</p>;
  return (
    <NewsListWrapper>
      {news.map((el) => (
        <NewsListItem key={el.title}>
          <NewsListImg
            src={`${el.urlToImage || "../default_img.png"}`}
            alt="image"
            width="350px"
            height="200px"
          />
          <NewsListContent>
            <NewsTitleText>{el.title}</NewsTitleText>
            <span>{el.content}</span>
            <NewsReadMore href={el.url} target="blank">
              Read More
            </NewsReadMore>
          </NewsListContent>
        </NewsListItem>
      ))}
    </NewsListWrapper>
  );
};
