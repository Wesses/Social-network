import classes from "./MyPost.module.css";
import Post from "./Post/Post";
import React from 'react';

const MyPost = (props) => {

    let PostsMapping = props.PostsData.map(m => <Post key={m.like + m.id} text={m.text} like={m.like}/>)

    let NewPost = React.createRef();

    let AddPost = () => {
        props.addNewPost();
    }

    let RemovePost = () => {
        props.postChanger("");
    }

    let changeNewPost = () =>{
        props.postChanger(NewPost.current.value);
    }

    return (
        <div className={classes.content}>
            <div className={classes.item}>
                <h3>
                    My posts
                </h3>
            </div>
            <div>
                <div>
                    <textarea className={classes.postcontent}
                              ref={NewPost}
                              onChange={changeNewPost}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button className={classes.addbutton} onClick={AddPost}>
                        Add post
                    </button>
                    <button className={classes.removebutton} onClick={RemovePost}>
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
