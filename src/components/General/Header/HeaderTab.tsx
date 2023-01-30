import { HeaderTabProps } from "./types";
import { HeaderTabWrapper } from "./Header.style";

export const HeaderTab = ({ title, onClick }: HeaderTabProps) => {
  return <HeaderTabWrapper onClick={() => onClick()}>{title}</HeaderTabWrapper>;
};
