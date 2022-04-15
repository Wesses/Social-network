import classes from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () =>{
    return (
        <div>
            <div className={classes.item}>My posts</div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post text = "je mange" like = "50"/>
                <Post text = "la mange" like = "25"/>
                <Post text = "fromage" like = "13"/>
                <Post text = "Ura petuh" like = "0"/>
                <Post text = "Ura dura" like = "10"/>
            </div>
        </div>
    );
}
export default MyPost;
