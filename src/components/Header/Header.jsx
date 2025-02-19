import s from './styles.module.css';

export const Header = (props) => {
    return (
        <div className={s.container}>
            <div className={s.logo}>Yura Education</div>
            <div className={s.inputContainer}><input/></div>
            <div>
                <img className={s.img} src="https://i1.sndcdn.com/artworks-000415899078-osz220-t500x500.jpg" alt="" />
            </div>
        </div>
    );
};