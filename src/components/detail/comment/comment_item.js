import { useEffect, useState } from "react";
import "../../../assets/css/detail/comment__item.css"
const CommentItem = (props) => {
    const [countLike, setCountLike] = useState(0);
    const [countDislike, setCountDislike] = useState(0);

    function handleReviewComment(e) {
        e.preventDefault();
        let review = e.currentTarget.dataset.review;
        // fetch(`https://stream-movie-1.herokuapp.com/api/comment/review/submit?review=${review}&commentId=${props.comment.commentId}`, {method: "POST"});
        fetch(`http://localhost:8080/api/comment/submit?review=${review}&commentId=${props.comment.commentId}`, {method: "GET"});
        doesCustomerReviewed(review).then((check)=>{
            if (review === 1) {
                if (!check) {
                    setCountLike(parseInt(countLike) + 1);
                }
                else {
                    if (countLike > 0){
                        setCountLike(parseInt(countLike) - 1);
                    }
                }
            }
            else {
                if (!check) {
                    setCountDislike(parseInt(countDislike) + 1);
                }
                else {
                    if (countDislike > 0) {
                        setCountDislike(parseInt(countDislike) - 1);
                    }
                }
            }
        })
    }
    function GetCountFromApi(review) {
        // return fetch(`https://stream-movie-1.herokuapp.com/api/comment/review/count/${props.comment.commentId}/${review}`, {method: "GET"})
        return fetch(`http://localhost:8080/api/comment/review/count/${props.comment.commentId}/${review}`, {method: "GET"})
        .then(response => response.json());
    }
    function doesCustomerReviewed(review) {
        // return fetch(`https://stream-movie-1.herokuapp.com/api/comment/review/check/${props.comment.commentId}/${review}`, {method: "GET"})
        return fetch(`http://localhost:8080/api/comment/review/check/${props.comment.commentId}/${review}`, {method: "GET"})
        .then(response=>response.json())
        .then(response=> {
            if (response.response !== 0) {
                return true;
            }
            else {
                return false;
            }
        });
    }

    useEffect(() => {
        // get count like
        GetCountFromApi(1).then(response =>{setCountLike(response.message)});
        // get count dislike
       GetCountFromApi(0).then(response => {setCountDislike(response.response)});
      }, [])

    return (
        <div className="contain__comment_item d-flex align-items-center my-2">
            <img src= "https://hbomax-images.warnermediacdn.com/2022-06/houseofthedragon_characterart_daemon_avatar_200x200.png?host=wme-hbomax-drupal-prod.s3.amazonaws.com" className="contain__img" />
            <div className="contain__content d-grid px-2">
                <p className="time px-2 m-0 p-0">{props.comment.createAt}</p>
                <p className="username px-2 m-0 py-0">{props.comment.user.fullName}</p>
                <p className="content m-0 py-0 px-2">{props.comment.content}</p>
                <div className="contain__comment_review d-flex m-0 p-0">
                    <span className="color_light_blue">
                        <a onClick={handleReviewComment} data-review="1"><i className="fa-solid fa-thumbs-up mx-2" id="review-like"></i></a>
                        ({countLike})
                    </span>
                    <span className="mx-4 color_light_blue">|</span>
                    <span className="color_light_blue">
                    <a onClick={handleReviewComment} data-review="0"><i className="fa-solid fa-thumbs-down mx-2" id="review-dislike"></i></a>
                        ({countDislike})
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CommentItem;