import locationImage from "../images/location.png";
import locationImage2x from "../images/location@2x.png";

export default function Entry(props) {
  return (
    <article className="entry">
      <img src={props.img.src} alt={props.img.alt} className="entry__image" />
      <div className="entry__content">
        <picture>
          <source
            type="image/png"
            srcSet={`${locationImage} 1x, ${locationImage2x} 2x`}
          />
          <img src={locationImage} alt="" className="entry__location__image" />
        </picture>

        <span className="entry__location__title">{props.country}</span>
        <a href={props.link} className="entry__location__link" target="_blank">
          View on Google Maps
        </a>
        <h2 className="entry__heading">{props.title}</h2>
        <p className="entry__date">{props.date}</p>
        <p className="clamp entry__text">{props.text}</p>
      </div>
    </article>
  );
}
