import { MovieList } from "@/lib/api";
import Link from "next/link";
import React from "react";
import { VscStarFull, VscStarHalf } from "react-icons/vsc";
import * as Style from "./index.styled";

const Film: React.FC<MovieList> = (props) => {
  const stars = [];
  for (let i = 0; i < Math.floor(props.rating); i++) {
    stars.push(<VscStarFull key={i} />);
  }
  if (Math.round(props.rating) > Math.floor(props.rating)) {
    stars.push(<VscStarHalf key={props.rating} />);
  }

  return (
    <Style.Film>
      <Link href={`/films/${props.id}`}>
        <Style.Content>
          <Style.Cards>
            <Style.Card1
              src={
                props.medium_cover_image
                  ? props.medium_cover_image
                  : "https://klike.net/uploads/posts/2019-05/1556708032_1.jpg"
              }
              alt={props.medium_cover_image}
            ></Style.Card1>

            <Style.Card2>
              <Style.Rating>
                <Style.RatingIcon>{stars}</Style.RatingIcon>
                <Style.RatingText> {props.rating} / 10</Style.RatingText>
              </Style.Rating>

              {props.genres ? (
                <Style.Genres>
                  {0 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[0].toUpperCase()}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                  {1 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[1].toUpperCase()}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                  {2 in props.genres ? (
                    <Style.GenresText>
                      {props.genres[2].toUpperCase()}
                    </Style.GenresText>
                  ) : (
                    ""
                  )}
                </Style.Genres>
              ) : (
                ""
              )}

              <Style.Details>DETAILS</Style.Details>
            </Style.Card2>
          </Style.Cards>

          <Style.Name>{props.title}</Style.Name>

          <Style.Text>
            {props.year} {props.language}
          </Style.Text>
        </Style.Content>
      </Link>
    </Style.Film>
  );
};

export default Film;
