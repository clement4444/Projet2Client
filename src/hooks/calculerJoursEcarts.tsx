export default function calculerJoursEcarts(
  date1Str: string,
  date2Str: string,
) {
  const date1 = new Date(date1Str); // Convertit la première date en objet Date
  const date2 = new Date(date2Str); // Convertit la deuxième date en objet Date

  // Calculer la différence en millisecondes
  const diffInMs = Math.abs(date2.getTime() - date1.getTime());

  // Convertir la différence en jours (en divisant par le nombre de millisecondes dans un jour)
  const diffInDays = Math.floor(diffInMs / (1000 * 3600 * 24));

  return diffInDays;
}
