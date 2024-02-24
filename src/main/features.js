import IntersectionImage from 'react-intersection-image'
const Features = (props) => {
    let className = props.leftalign ? 'leftalign' : ''
    return (
        <div className={`${className} feature`}>
            <div className="feature__container">
                <div className="feature__container__img">
                    <IntersectionImage className="feature__img" src={props.src}
                    style={{ transition: 'opacity 500ms linear' }} alt={props.alt} />
                </div>
                <div className="feature__container__captions">
                    <h2>{props.caption}</h2>
                    <p>{props.text}</p>
                </div>
            </div>

        </div>
    )
}
export default Features