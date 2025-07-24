export default function Entry(props) {
  const abc = props.img.src.replace(".png", "@2x.png");
  console.log(abc);

  return (
    <article className="entry">
      {/* <picture>
        <source
          type="image/png"
          srcSet="{props.img.src} 1x, {props.img.src.replace('.png', '@2x.png')} 2x"
        /> */}
      <img src={props.img.src} alt={props.img.alt} className="entry__image" />
      {/* </picture> */}
      <div className="entry__content">
        <picture>
          <source
            type="image/png"
            srcSet="src\images\location.png 1x, src\images\location@2x.png 2x"
          />
          <img
            src="src\images\location.png"
            alt=""
            className="entry__location__image"
          />
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
