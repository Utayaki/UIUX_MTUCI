import { useFilmList } from "@/lib/hooks/useFilmList";
import { useState } from "react";
import Pagination from "../../common/Pagination/Pagination";
import Film from "./Film/Film";
import * as Style from "./index.styled";

const Films = () => {
  const [page, setPage] = useState(1);
  const pageSize = 16;
  const { filmList, isLoading } = useFilmList(String(page), String(pageSize));

  const filmsList = filmList?.data.movies.map((film) => {
    return <Film key={film.id} {...film}></Film>;
  });

  if (isLoading) {
    return;
  }
  return filmList ? (
    <Style.Films>
      <Style.Content>
        <Style.Title>
          Big Floppa (also known as just Floppa or Big Russian Cat) is a series
          of Internet memes featuring a caracal named Gosha. In the
          English-speaking segment of the Internet, the nickname Floppa or Big
          Floppa is common. The real nickname of the caracal is Gosha. He was
          born on December 21, 2017 in a cat cattery in Kiev. At the age of four
          months, he was purchased by the Bondarev family - Andrey and Elena -
          from Moscow for $8,000. According to Elena's memories, Gosha had a
          different name in the kennel - most likely Misha. Caracal has a
          sibling who also lives in the capital. In addition to the caracal, the
          Bondarev family has a Maine Coon named Zhora, born in 2015 or 2016.
          Until recently, the cat Matvey lived together with them. He was taken
          from a shelter in the early 2010s. On September 24, 2022, Matvey
          passed away. Gosha is obese - he weighs about 30 kilograms and eats
          raw meat (turkeys, rabbits), food rats and shrimp as a treat. It costs
          an average of $300 per month to feed the cats. In the fall of 2021,
          the family thought about moving to the Tula region, as keeping a
          caracal in an apartment, as Elena Bondareva says, "is not bad, but
          wrong". The construction of the house is scheduled to begin in the
          spring of 2022.
        </Style.Title>
        <Style.List>{filmsList}</Style.List>
        <Pagination
          totalUsersCount={filmList?.data?.movie_count}
          currentPage={page}
          pageSize={pageSize}
          onPageChange={(page) => setPage(page)}
        />
      </Style.Content>
    </Style.Films>
  ) : null;
};

export default Films;
