import styled from "styled-components";

export const HeaderTitle = styled.h1`
  text-transform: capitalize;
  font-weight: bold;
  font-size: 22px;
`;
export const HeaderWrapper = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderTabsWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
`;
export const HeaderTabWrapper = styled.span`
  cursor: pointer;
`;
