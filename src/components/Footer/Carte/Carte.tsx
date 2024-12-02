import { useEffect, useState } from "react";
import "./Carte.css"; // Votre fichier CSS personnalisé pour le style de la carte

function Carte() {
  const [mapFullSreen, setMapFullSreen] = useState(false); // État pour le mode plein écran
  const [mapInstance, setMapInstance] = useState<typeof LeafletMap | null>(
    null,
  );

  useEffect(() => {
    // Vérifie que Leaflet est chargé globalement
    const L = window.L;

    if (!L) {
      console.error("Leaflet n'est pas chargé correctement.");
      return;
    }

    // Initialisation de la carte
    const map = L.map("map").setView([48.8566, 2.3522], 1);
    setMapInstance(map); // Stocker l'instance de la carte

    // Ajouter les tuiles OpenStreetMap
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 21,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // lien git map
    const lienGitMap =
      "https://www.google.fr/maps/place/48%C2%B035'23.1%22N+7%C2%B045'48.6%22E/@48.589808,7.7633682,47m/data=!3m1!1e3!4m4!3m3!8m2!3d48.589748!4d7.763498?entry=ttu&g_ep=EgoyMDI0MTExNy4wIKXMDSoASAFQAw%3D%3D";
    //lien git earth
    const lienGitEarth =
      "https://earth.google.com/web/search/48.589748,+7.763498/@48.58980528,7.76337263,146.71025873a,117.30548083d,35y,-57.92132278h,47.05345502t,-0r/data=ClsaLRInGdJwytx8S0hAIeE-cmvSDR9AKhM0OC41ODk3NDgsIDcuNzYzNDk4GAIgASImCiQJ_3fOGD5MSEARKMjITVVLSEAZ9pdz9DwQH0AhJkGGE0wFH0BCAggBOgMKATBCAggASg0I____________ARAA";
    // Ajouter un marqueur avec un popup du git
    L.marker([48.589748, 7.763498])
      .addTo(map)
      .bindPopup(
        `Git<br><a href="${lienGitEarth}" target="_blank">Emplacement google earth</a><br><a href="${lienGitMap}" target="_blank">Emplacement google map</a>`,
      );

    // Ajouter un marqueur avec un popup du parlement
    const lienParlementMap =
      "https://www.google.fr/maps/place/48%C2%B035'51.5%22N+7%C2%B046'06.7%22E/@48.597633,7.7659421,753m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d48.597633!4d7.768517?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D";
    const lienParlementEart =
      "https://earth.google.com/web/search/48.597633,+7.768517/@48.5975336,7.76849822,142.08714067a,270.36131933d,35y,0h,0t,0r/data=CiwiJgokCSUI0OMBTUhAEeOv1wfbSkhAGRjlzeArHx9AIU4RhAxLAB9AQgIIAToDCgEwQgIIAEoNCP___________wEQAA";

    L.marker([48.597633, 7.768517])
      .addTo(map)
      .bindPopup(
        `<b>Parlement</b><br><a href="${lienParlementEart}" target="_blank">Emplacement google earth</a><br><a href="${lienParlementMap}" target="_blank">Emplacement google map</a>`,
      );

    // Tracer un chemin
    const chemin = [
      [48.589748, 7.763498], // Point de départ git
      [48.589847, 7.763556],
      [48.590104, 7.763823],
      [48.590647, 7.764528],
      [48.590993, 7.765041],
      [48.59117, 7.765318],
      [48.591285, 7.765467],
      [48.591513, 7.765688],
      [48.591707, 7.765859],
      [48.591925, 7.766012],
      [48.59256, 7.766222],
      [48.592619, 7.766246],
      [48.593277, 7.766362],
      [48.593396, 7.766403],
      [48.593879, 7.766492],
      [48.594175, 7.766566],
      [48.594304, 7.766611],
      [48.594418, 7.766678],
      [48.594603, 7.766834],
      [48.594713, 7.766906],
      [48.595033, 7.767184],
      [48.595346, 7.767484],
      [48.595591, 7.767765],
      [48.595735, 7.76779],
      [48.595818, 7.767905],
      [48.595921, 7.768045],
      [48.59596, 7.768143],
      [48.596136, 7.768543],
      [48.596284, 7.76836],
      [48.597055, 7.768427],
      [48.597633, 7.768517], // Point d'arrivée parlement
    ];

    const polyline = L.polyline(chemin, { color: "red", weight: 4 }).addTo(map);

    map.fitBounds(polyline.getBounds());

    return () => {
      map.remove(); // Nettoyage à la désactivation
    };
  }, []);

  function setClasseMap() {
    if (mapFullSreen) {
      return "carte mapFullScreenOn";
    }
    return "carte";
  }

  function setClasseButton() {
    if (mapFullSreen) {
      return "mapFullScreen-btn mapFullScreen-btn-on";
    }
    return "mapFullScreen-btn";
  }

  const toggleFullScreen = () => {
    setMapFullSreen(!mapFullSreen); // Change l'état du mode plein écran
    setTimeout(() => {
      if (mapInstance) {
        mapInstance.invalidateSize(); // Rafraîchit la carte après le changement
      }
    }, 300); // Délai pour que le DOM ajuste la taille
  };

  return (
    <div className={`${setClasseMap()}`}>
      <div id="map" />
      <button
        type="button"
        className={`${setClasseButton()}`}
        onClick={toggleFullScreen}
      >
        {mapFullSreen ? "\u21A9" : "\u2922"}
      </button>
    </div>
  );
}

export default Carte;
