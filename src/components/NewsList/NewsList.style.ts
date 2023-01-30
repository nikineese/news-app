import styled from "styled-components";

export const NewsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;
export const NewsListItem = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: -1px 6px 48px -10px rgba(0, 0, 0, 0.39);
  border-radius: 10px;
  padding: 5px;
`;
export const NewsListContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
export const NewsListImg = styled.img`
  opacity: 0.8;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;
export const NewsTitleText = styled.span`
  text-decoration: none;
  color: black;
  font-weight: 700;
  max-width: 300px;
`;
export const NewsReadMore = styled.a`
  text-decoration: none;
  color: black;
  font-weight: 700;
`;
