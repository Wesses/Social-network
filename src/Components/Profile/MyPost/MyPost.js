import classes from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div className={classes.content}>
            <div className={classes.item}>
                <h3>
                    My posts
                </h3>
            </div>
            <div>
                <div>
                    <textarea>
                    </textarea>
                </div>
                <div>
                    <button>
                        Add post
                    </button>
                    <button>
                        Remove
                    </button>
                </div>
            </div>
            <div className={classes.posts}>
                <Post text="je mange" like="50"/>
                <Post text="la mange" like="25"/>
                <Post text="fromage" like="13"/>
                <Post text="Ura petuh" like="0"/>
                <Post text="Ura dura" like="10"/>
            </div>
        </div>
    );
}
export default MyPost;
