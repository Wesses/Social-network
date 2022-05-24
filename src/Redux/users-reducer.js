const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        // {id: 0, followed: true, photoUrl: "https://st2.depositphotos.com/48751036/47697/v/600/depositphotos_476979432-stock-illustration-happy-man-laughs-human-emotions.jpg",fullName: "Dmitriy K.", status: "I am looking for a Job right now...", location: {city:"New-York", country:"United States"}},
        // {id: 1, followed: true, photoUrl: "https://www.reallusion.com/crazytalk/includes/images/Cartoon%20Animator%20(720x405).jpg", fullName: "Svetlana D.", status: "I am so pretty", location: {city:"London", country:"Great Britain"}},
        // {id: 2, followed: false, photoUrl: "https://cdn3d.iconscout.com/3d/premium/thumb/man-with-bun-3311666-2754835.png", fullName: "Sergei S.", status: "I like football...", location: {city:"Kiev", country:"Ukraine"}},
        // {id: 3, followed: false, photoUrl: "https://ru-static.z-dn.net/files/dfd/0b0fc9c948fc1d3aa35c42b88e7dadc5.jpg", fullName: "Andrew T.", status: "I am free to help you..", location: {city:"Odessa", country:"Ukraine"}},
    ]
};

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;
