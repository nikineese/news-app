import { put, all, take } from "redux-saga/effects";
import { News } from "../types/news";
import { GetNewsProps } from "../actions/types";

function* fetchNews({ search, category }: GetNewsProps) {
  const { articles }: { articles: News[] } = yield fetch(
    `https://newsapi.org/v2/top-headlines?category=${category}&q=${search}`,
    {
      headers: {
        "x-api-key": "985539fd0eba4e5d86010303e20b99e3",
      },
    }
  ).then((response) => response.json());
  yield put({ type: "NEWS_RECEIVED", payload: articles });
}
function* actionWatcher() {
  while (true) {
    const { search, category } = yield take("GET_NEWS");
    yield fetchNews({ search, category });
  }
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
