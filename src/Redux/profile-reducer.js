const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    PostsData: [
        {id: 1, text: "je mange", like: 50},
        {id: 2, text: "la mange", like: 25},
        {id: 3, text: "fromage", like: 13},
        {id: 4, text: "Yura privet", like: 0},
        {id: 5, text: "Yura poka", like: 10}
    ],
    newPostText: "rtr"};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:{
            return {
                ...state,
                newPostText: "",
                PostsData: [...state.PostsData,{id: 6, text: state.newPostText, like: 99}]
            };
        }
        case UPDATE_NEW_POST_TEXT:{
            return {
                ...state,
                newPostText: action.newText
            };
            }
        default:{
            return state;
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (txt) => ({type: UPDATE_NEW_POST_TEXT, newText: txt});

export default profileReducer;
