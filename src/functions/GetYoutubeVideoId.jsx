// Fonction pour extraire l'ID des vidéos YouTube à partir d'URL au format varié
export function getYouTubeVideoId(url) {
  const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/\n]+(?:\/|(?:v|e(?:mbed)?)\/|[?&]v=)?([^"&?/ ]{11})|(?:v|e(?:mbed)?)\/([^"&?/ ]{11}))|youtu\.be\/([^"&?/ ]{11}))/;
  const match = url.match(regex);
  return match ? match[1] || match[2] || match[3] : null;
}

// Exemples d'utilisation
console.log(getYouTubeVideoId('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
console.log(getYouTubeVideoId('https://youtu.be/dQw4w9WgXcQ'));
console.log(getYouTubeVideoId('https://www.youtube.com/embed/dQw4w9WgXcQ'));
