/**
 * Formate un nombre pour retourner une taille correspondante
 * @param {number} number - Le nombre entre 0 et 100
 * @returns {string} - La taille correspondante (xs, md, xl, 2xl, 5xl)
 */
export function formatSize(number) {
    // Divise le nombre par 20
    const divided = number / 20;
  
    if (divided >= 0 && divided < 1) {
      return 'xs';
    } else if (divided >= 1 && divided < 2) {
      return 'md';
    } else if (divided >= 2 && divided < 3) {
      return 'xl';
    } else if (divided >= 3 && divided < 4) {
      return '2xl';
    } else if (divided >= 4 && divided <= 5) {
      return '3xl';
    } else {
      return 'Invalid number'; // Pour les nombres hors de l'intervalle 0 à 100
    }
  }
  