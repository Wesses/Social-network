import {addPostActionCreater, updateNewPostActionCreater} from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {

    let state = props.store.getState();

    let AddNewPost = () => {
        props.store.dispatch(addPostActionCreater());
    }

    let postChanger = (txt) =>{
        props.store.dispatch(updateNewPostActionCreater(txt));
    }

    return ( <MyPost
        addNewPost = {AddNewPost}
        postChanger={postChanger}
        PostsData={state.poststate.PostsData}
        newPostText = {state.poststate.newPostText}/>
    );
}
export default MyPostContainer;
