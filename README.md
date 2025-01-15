# YT Thumbnail Generator

YT Thumbnail Generator est un outil open-source permettant de générer des miniatures personnalisées pour des vidéos YouTube. Ce projet utilise React, Zustand pour la gestion d'état, et l'API YouTube pour extraire des données nécessaires. Contribuez pour améliorer l'outil ou ajoutez vos propres fonctionnalités !

---

## Fonctionnalités

- **Recherche de vidéos YouTube :** Permet de rechercher des vidéos directement via l'API YouTube.
- **Génération de miniatures :** Créez des miniatures personnalisées en fonction de vos préférences.
- **Personnalisation facile :** Afficher ou non certains élements commme le logo, les statistiques et autres.
- **Stockage d'état local :** La gestion d'état est assurée avec Zustand pour des performances optimales.

---

## Installation

Pour utiliser ou contribuer à ce projet, suivez ces étapes :

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/prince-dev41/yt-thumbnail-generator.git
   ```

2. Naviguez dans le dossier du projet :
   ```bash
   cd yt-thumbnail-generator
   ```

3. Installez les dépendances :
   ```bash
   npm install
   # ou
   yarn install
   ```

4. Lancez l'application en mode développement :
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. Ouvrez votre navigateur à l'adresse suivante :
   ```
   http://localhost:5173
   ```

---

## Configuration de l'API YouTube

1. Créez un projet sur la [Google Cloud Console](https://console.cloud.google.com/).
2. Activez l'API YouTube Data v3.
3. Générez une clé API.
4. Ajoutez la clé API dans un fichier `.env` à la racine du projet :
   ```env
   VITE_YOUTUBE_API_KEY=Votre_Clé_API
   ```

---

## Contribution

Les contributions sont les bienvenues ! Voici comment commencer :

1. Forkez le dépôt.
2. Créez une branche pour vos modifications :
   ```bash
   git checkout -b ma-fonctionnalite
   ```
3. Effectuez vos modifications.
4. Commitez vos changements :
   ```bash
   git commit -m "Ajout de ma fonctionnalité"
   ```
5. Poussez vos modifications vers votre fork :
   ```bash
   git push origin ma-fonctionnalite
   ```
6. Créez une Pull Request dans le dépôt principal.

---

## Stack Technologique

- **Frontend :** React + Vite
- **Gestion d'État :** Zustand
- **API :** YouTube Data API v3

---

## Licence

Ce projet est sous licence MIT. Consultez le fichier [LICENSE](./LICENSE) pour plus d'informations.

---

## Remerciements

Merci à tous ceux qui contribuent à ce projet et à la communauté open-source en général !

---

## Contact

Si vous avez des questions ou des suggestions, n'hésitez pas à me contacter sur [LinkedIn]([(https://www.linkedin.com/in/prince-ekpinse-developpement-front-end/)]) ou ouvrez une issue sur GitHub.

