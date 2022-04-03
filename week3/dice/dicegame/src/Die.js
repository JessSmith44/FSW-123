import './Die.css';

const Die = ({face, rolling}) => {
    return (
        <i className={`fas fa-dice-${face} ${rolling && "shaking"} fa-5x`} />
    )
};

export default Die;