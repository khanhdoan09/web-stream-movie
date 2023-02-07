import Breadcrumb from "./breadcrumb";
import Info from "./info";
import Poster from "./poster";
import Content from "./content";
import TitleCollapse from "./title-collapse";
import Episode from "./episode";
import Comment from "./comment/comment";
import "../../assets/css/home.css";
import { useState, useEffect } from "react";
import Header from "../share/header";
import Footer from "../share/footer";

const Home = () => {
  const search = window.location.search;
  const params = new URLSearchParams(search);
  const slug = params.get("movie");
  const [data, setData] = useState({});
  const [listComment, setListComment] = useState([]);
  const [countComment, setCountComment] = useState(0);

  function GetDataFromApi(data, setData, api) {
    fetch(`http://localhost:8080/api/movie/detail/getAll/${api}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response.data);
        return response.data;
      })
      .then((movie) => {
        GetCommentFromApi(movie.id);
        GetCountComment(movie.id);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function GetCommentFromApi(movieId) {
    // fetch(`https://stream-movie-1.herokuapp.com/api/comment/get?movieId=${movieId}`, {method: "GET"}).
    fetch(`http://localhost:8080/api/comment/get?movieId=${movieId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setListComment(response);
      });
  }

  function GetCountComment(movieId) {
    // fetch(`https://stream-movie-1.herokuapp.com/api/comment/count?movieId=${movieId}`, {method: "GET"}).
    fetch(`http://localhost:8080/api/comment/count?movieId=${movieId}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((response) => {
        setCountComment(response);
      });
  }

  // componentDidMount
  useEffect(() => {
    GetDataFromApi(data, setData, slug);
  }, []);
  return (
    <div className="p-4 container-all">
      <div>
        <Header></Header>
      </div>
      <div className={"container mx-auto"}>
        <Breadcrumb movie={data?.movie} />
        <div className={"d-flex flex-column"}>
          <div className={"d-flex flex-wrap w-100 p-1 py-2 container__content"}>
            <Poster poster={data?.movie?.posterUrl}></Poster>
            <Info movie={data}></Info>
          </div>
          <div className={"w-100 my-4 p-3 container__content"}>
            <TitleCollapse value="Nội dụng phim"></TitleCollapse>
            <Content content={data?.content}></Content>
            <TitleCollapse value="Xem phim"></TitleCollapse>
            <div className="d-flex flex-wrap">
              {data?.episodes?.map((episode, index) => (
                <Episode key={index} episode={episode}></Episode>
              ))}
            </div>
            <TitleCollapse value="Bình luận"></TitleCollapse>
            <Comment
              getListComment={GetCommentFromApi}
              movieId={data?.id}
              listComment={listComment}
              countComment={countComment}
            ></Comment>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
