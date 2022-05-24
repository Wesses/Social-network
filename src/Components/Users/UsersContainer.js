import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/users-reducer";

let mapStateToProps = (state) =>{
    return {
        users: state.users_state.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) =>{
            dispatch(followAC(userId))
        },
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
export default UsersContainer;
