import classes from "./MyPost.module.css";
import Post from "./Post/Post";



const MyPost = (props) => {

    let PostsMapping = props.PostsData.map(m => <Post key={m.like+m.id} text={m.text} like={m.like}/>)

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
                {PostsMapping}
            </div>
        </div>
    );
}
export default MyPost;
