const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST:{
            state.PostsData.push(
                {
                    id: 6,
                    text: state.newPostText,
                    like: 99
                }
            )
            state.newPostText = "";
            return state;
        }
        case UPDATE_NEW_POST_TEXT:{
            state.newPostText = action.newText;
            return state;
            }
        default:{
            return state;
        }
    }
}

export const addPostActionCreater = () => ({type: ADD_POST});
export const updateNewPostActionCreater = (txt) => ({type: UPDATE_NEW_POST_TEXT, newText: txt});

export default profileReducer;
