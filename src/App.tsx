import React, { useEffect } from "react";
import "./App.css";
import { getNews } from "./actions";
import { useDispatch } from "react-redux";
import { useGetState } from "./hooks/useGetState";
import { NewsList } from "./components/NewsList/NewsList";
import styled from "styled-components";
import { Loader } from "./components/Loader";
import { Header } from "./components/General/Header/Header";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
function App() {
  const news = useGetState("news");
  const isLoading = useGetState("loading");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews({ search: "", category: "general" }));
  }, []);
  return (
    <AppWrapper>
      <Header />
      {isLoading ? <Loader /> : <NewsList news={news} />}
    </AppWrapper>
  );
}

export default App;
