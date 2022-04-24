import classes from "./Profile.module.css";
import MyPost from "./MyPost/MyPost";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.MainP} alt="" src ="https://w.wallhaven.cc/full/wq/wallhaven-wqkqvr.png" />
            </div>
           <ProfileInfo/>
          <MyPost PostsData={props.state.PostsData}/>
        </div>
    )
}
export default Profile;
