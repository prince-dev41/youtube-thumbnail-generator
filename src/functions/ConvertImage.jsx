// Fonction utilitaire pour convertir une image distante en URL locale
export const convertImageToLocal = async (imageUrl) => {
    try {
        // Télécharge l'image via fetch
        const response = await fetch(imageUrl);
        if (!response.ok) {
            throw new Error(`Erreur lors du téléchargement de l'image : ${response.statusText}`);
        }

        // Convertir la réponse en Blob
        const blob = await response.blob();

        // Créer une URL locale temporaire
        const localUrl = URL.createObjectURL(blob);

        return localUrl; // Retourne l'URL locale
    } catch (error) {
        console.error('Erreur lors de la conversion de l’image :', error);
        throw error; // Renvoyer l'erreur pour la gestion en amont
    }
};
