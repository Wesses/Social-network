import classes from "./Music.module.css";
import bolt from '../../assets/audio/plenka - Visitor.mp3';

const Music = () => {
    return (
        <div className={classes.music}><h1>Music</h1>
            <div>
                <audio src={bolt} controls/>
            </div>
        </div>
    )
}

export default Music;
