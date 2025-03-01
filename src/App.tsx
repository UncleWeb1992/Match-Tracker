import { useEffect, useState } from "react";
import { ServiceApi } from "./service/service.ts";
import { IMatch } from "./types/types.ts";
import { Header } from "./ui/components";
import { MatchList, NoData } from "./ui";

export default function App() {
  const [list, setList] = useState<IMatch[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const init = () => {
    setLoading(true);
    ServiceApi.getMatchList()
      .then((data) => {
        if (data?.length) {
          setList(data);
        }
        setError("");
      })
      .catch(setError.bind(null, "Ошибка: не удалось загрузить информацию"))
      .finally(setLoading.bind(null, false));
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <main>
      <Header isLoading={loading} errorMessage={error} reload={init} />
      {!list.length ? <NoData /> : <MatchList list={list} />}
    </main>
  );
}
