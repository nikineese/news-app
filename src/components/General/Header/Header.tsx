import { HeaderTabsWrapper, HeaderTitle, HeaderWrapper } from "./Header.style";
import { HeaderTab } from "./HeaderTab";
import { headerTabsTitles } from "./constants";
import { getNews } from "../../../actions";
import { useDispatch } from "react-redux";
import { Search } from "../../Search";
import React, { useCallback, useEffect, useState } from "react";
import { debounce } from "../../../utils/debounce";

export const Header = () => {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const debounceGetNews = useCallback(
    debounce((search, category) => {
      dispatch(getNews({ search, category }));
    }, 500),
    []
  );
  useEffect(() => {
    debounceGetNews(search, category);
  }, [search]);
  return (
    <HeaderWrapper>
      <HeaderTitle>NEWS</HeaderTitle>
      <HeaderTabsWrapper>
        {headerTabsTitles.map((title) => (
          <HeaderTab
            title={title}
            onClick={() => {
              setCategory(title);
              dispatch(getNews({ search, category: title }));
            }}
          />
        ))}
        <Search
          search={search}
          setSearch={setSearch}
          onChange={(e: any) => {
            setSearch(e.target.value);
          }}
        />
      </HeaderTabsWrapper>
    </HeaderWrapper>
  );
};
