import { useState } from "react";
import "../../../assets/css/detail/comment.css"
import CommentItem from "./comment_item";

const Comment = (props) => {
    const [message, setMessage] = useState("");
  
    let movieId = props.movieId;

    function handleSubmitForm(e) {
        e.preventDefault();
        submitToApi();
    }

    function submitToApi() {
        let token = localStorage.getItem("jwt");
        // fetch(`https://stream-movie-1.herokuapp.com/api/comment/submit?content=${message}&movieId=${movieId}`,{method: "POST",}). 
        fetch(`http://localhost:8080/api/comment/submit?content=${message}&movieId=${movieId}`,
         {method: "GET",
        //   credentials: 'same-origin', 
        //   withCredentials: true,
          headers: {
            'Authorization':'Bearer '+token,
            'Content-Type': 'application/json'
          }
        }).
        then(response => response.json()).
        then(response => {
            if (response.message === 'ok') {
                setMessage("");
                props.getListComment(movieId);
            }
            else if (response.message === 'need login') {
                console.log(response.message);
                window.location.href = '/login';
            }
            console.log(response);
        })
        .catch(error => console.log(error));
    }

    function handleMessage(e) {
        setMessage(e.target.value);
    }

    return (
        <div className="contain__comment px-2">
            <div className="contain__title d-flex">
                <i className="fa fa-comments"></i> 
                <h3>Bình Luận ({props.countComment})</h3>
            </div>     
            <div className="contain__form">
                <form className="d-flex flex-column" onSubmit={handleSubmitForm}>
                    <textarea className="form__input my-3" rows="3" name="content" value={message} onChange={handleMessage}>

                    </textarea>
                    <div className="d-flex">
                        <button className="submit form__button">Đăng</button>
                        <button className="button form__button">Hủy</button>
                    </div>
                </form>
            </div> 
            <div className="contain__list_comment d-grid my-2">
                {props.listComment.map((comment, i) => <CommentItem key={i} comment={comment}></CommentItem>)}
            </div>
        </div>
        )
}

export default Comment;