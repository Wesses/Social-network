import classes from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div className={classes.content}>
            <div>
                <img className={classes.Ava} alt=""
                     src="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"/>
            </div>
            <div className={classes.item}>
                Name:
            </div>
            <div className={classes.item}>
                Date of birth:
            </div>
            <div className={classes.item}>
                City:
            </div>
            <div className={classes.item}>
                Education:
            </div>
            <div className={classes.item}>
                Web site:
            </div>
        </div>
    )
}
export default ProfileInfo;
