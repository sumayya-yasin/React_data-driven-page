import globe from '../../public/images/globe.png'

export default function Header() {
  return (
    <nav className="nav">
      <img src={globe} alt="logo image" className="nav__logo" />
      <span className="nav__text"> my travel journal.</span>
    </nav>
  );
}
