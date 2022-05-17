import {addPostActionCreator, updateNewPostActionCreator} from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
    return {
        PostsData: state.poststate.PostsData,
        newPostText: state.poststate.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => {
            dispatch(addPostActionCreator())
        },
        postChanger: (txt) => {
            dispatch(updateNewPostActionCreator(txt))
        }
    }
}

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;
