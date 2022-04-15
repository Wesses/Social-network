import classes from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={classes.post}>
            <img alt={''} src="https://kor.ill.in.ua/m/610x385/2722809.jpg"/>
            {props.text}
            <div><span>{props.like} likes</span></div>
        </div>
    )
}

export default Post
