import "./Info.css";

function Info() {
  return (
    <div className="infos">
      <h2>INFOS PRATIQUES</h2>
      <div className="texteInfo">
        <p>12 allée des Peupliers, </p>
        <p>67000 Strasbourg</p>
        <p>01.26.44.72.39</p>
        <p>StraGite@gmail.com</p>
        <p>Arrivée : 15h / Départ: 11h</p>
      </div>
      <div className="logoResaux">
        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
          <img src="/images/resaux/logoInstagram.png" alt="logo instagram" />
        </a>

        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
          <img src="/images/resaux/logoFacebook.png" alt="logo facebook" />
        </a>
      </div>
    </div>
  );
}

export default Info;
