import Loader from "@/components/common/Loader";
import * as Style from "@/components/templates/Details/index.styled";
import { useFilmRetrieve } from "@/lib/hooks/useFilmRetrieve";
import { useRouter } from "next/router";
import { VscDesktopDownload, VscStarFull } from "react-icons/vsc";
import GenreItem from "./GenreItem/GenreItem";
import StatisticItem from "./StatisticItem/StatisticItem";
import Torrent from "./TorrentItem";

import { AiTwotoneLike } from "react-icons/ai";

import Link from "next/link";
import { BiTimeFive } from "react-icons/bi";

import { useState, useEffect } from "react";
import { CommentProps } from "./CommentItem/CommentItem";
import CommentItem from "./CommentItem/CommentItem";

import { FaStar } from "react-icons/fa";
import { FaRegThumbsUp } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Details = () => {
  var pageKey = "";
  if (typeof window !== "undefined" && window.localStorage) {
    pageKey = window.location.href;
  }
  const router = useRouter();
  const { filmRetrieve, isLoading } = useFilmRetrieve(
    (router.query.id as string) || "",
  );

  const [comments, setComments] = useState<CommentProps[]>(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const pageKey = window.location.href;
      const localData = localStorage.getItem(pageKey);
      return localData ? JSON.parse(localData) : [];
    }
    return [];
  });

  const [userName, setUserName] = useState("");
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const pageKey = window.location.href;
      localStorage.setItem(pageKey, JSON.stringify(comments));
    }
  }, [comments]);

  if (isLoading) {
    return <Loader />;
  }

  const genresList = filmRetrieve?.data.movie.genres.map((value) => {
    return <GenreItem key={value} text={value} />;
  });
  const torrentsList = filmRetrieve?.data.movie.torrents.map((item, index) => {
    return (
      <Torrent
        key={index}
        href={item.url}
        quality={item.quality}
        type={item.type}
        size={item.size}
      />
    );
  });

  function commentsList() {
    function addComment(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      if (userName.trim() !== "" && commentText.trim() !== "") {
        const currentDate = new Date().toLocaleDateString();
        const newComment: CommentProps = {
          id: comments.length + 1,
          userName: userName,
          commentText: commentText,
          time: currentDate,
        };
        setComments([...comments, newComment]);
        setUserName("");
        setCommentText("");
      } else {
        alert(
          "Please enter both your user name and comment before submitting.",
        );
      }
    }

    function handleUserNameChange(event: React.ChangeEvent<HTMLInputElement>) {
      setUserName(event.target.value);
    }

    function handleCommentTextChange(
      event: React.ChangeEvent<HTMLTextAreaElement>,
    ) {
      setCommentText(event.target.value);
    }

    const commentItems = comments.map((comment) => (
      <CommentItem
        key={comment.id}
        id={comment.id}
        userName={comment.userName}
        commentText={comment.commentText}
        time={comment.time}
        comments={comments}
        setComments={setComments}
      />
    ));
    return (
      <Style.CommentSection>
        <Style.CommentForm onSubmit={addComment}>
          <Style.UserInfo>
            <Style.CommentText> USERNAME:</Style.CommentText>
            <Style.UserNameInput
              value={userName}
              onChange={handleUserNameChange}
            />
          </Style.UserInfo>

          <Style.TextArea
            value={commentText}
            onChange={(e) => handleCommentTextChange(e)}
          />

          <Style.CommentSubmitButton>SUBMIT COMMENT</Style.CommentSubmitButton>
        </Style.CommentForm>

        {commentItems}
      </Style.CommentSection>
    );
  }

  return (
    <Style.Details>
      <Style.BackgroundImage
        src={filmRetrieve?.data.movie.background_image_original}
      ></Style.BackgroundImage>
      <Style.Content>
        <Style.ContentTitle>
          {filmRetrieve?.data.movie.title}
        </Style.ContentTitle>
        <Style.Data>
          <Style.Image>
            <Style.Buttons>
              <Style.DownloadButton href={filmRetrieve?.data.movie.url}>
                Download
              </Style.DownloadButton>
              <Style.WatchButton href={filmRetrieve?.data.movie.url}>
                Watch Now
              </Style.WatchButton>
            </Style.Buttons>
            <Style.Img
              src={filmRetrieve?.data.movie.large_cover_image}
            ></Style.Img>
          </Style.Image>

          <Style.Description>
            <Style.Year>
              {filmRetrieve?.data.movie.year +
                " " +
                filmRetrieve?.data.movie.language}
            </Style.Year>

            <Style.Genres>{genresList}</Style.Genres>

            <Style.DescriptionFull>
              {filmRetrieve?.data.movie.description_full}
            </Style.DescriptionFull>

            <Style.Statistic>
              <StatisticItem
                icon={<VscStarFull />}
                text={filmRetrieve?.data.movie.rating}
              ></StatisticItem>
              <StatisticItem
                icon={<AiTwotoneLike />}
                text={filmRetrieve?.data.movie.like_count}
              ></StatisticItem>
              <StatisticItem
                icon={<BiTimeFive />}
                text={filmRetrieve?.data.movie.runtime}
              ></StatisticItem>
              <StatisticItem
                icon={<VscDesktopDownload />}
                text={filmRetrieve?.data.movie.download_count}
              ></StatisticItem>
            </Style.Statistic>

            <Style.TorrentsTitle>Downloads:</Style.TorrentsTitle>

            <Style.Torrents>{torrentsList}</Style.Torrents>
          </Style.Description>
        </Style.Data>
        <Style.UserCommentsText>User Comments</Style.UserCommentsText>
        <Style.CommentItem>{commentsList()}</Style.CommentItem>
      </Style.Content>
    </Style.Details>
  );
};

export default Details;
