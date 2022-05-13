import {addPostActionCreater, updateNewPostActionCreater} from "../../../Redux/profile-reducer";
import MyPost from "./MyPost";
import StoreContext from "../../../StoreContext";

const MyPostContainer = () => {
    return (
        <StoreContext.Consumer>
            {
            (store) => {
                let state = store.getState();

                let AddNewPost = () => {
                    store.dispatch(addPostActionCreater());
                }

                let postChanger = (txt) =>{
                    store.dispatch(updateNewPostActionCreater(txt));
                }
               return <MyPost
                    addNewPost={AddNewPost}
                    postChanger={postChanger}
                    PostsData={state.poststate.PostsData}
                    newPostText={state.poststate.newPostText}/>
            }
        }
        </StoreContext.Consumer>
    );
}
export default MyPostContainer;
