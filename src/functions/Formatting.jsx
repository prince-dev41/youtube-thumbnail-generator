// utils/formatting.js
export const formatDuration = (duration) => {
    const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
    const hours = match[1] ? parseInt(match[1]) : 0;
    const minutes = match[2] ? parseInt(match[2]) : 0;
    const seconds = match[3] ? parseInt(match[3]) : 0;
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export const formatDate = (publishedAt) => {
    const now = new Date();
    const publishedDate = new Date(publishedAt);
    const diff = now - publishedDate;
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    if (seconds < 60) {
        return `Il y a ${seconds} secondes`;
    } else if (minutes < 60) {
        return `Il y a ${minutes} minutes`;
    } else if (hours < 24) {
        return `Il y a ${hours} heures`;
    } else if (days < 30) {
        return `Il y a ${days} jours`;
    } else if (months < 12) {
        return `Il y a ${months} mois`;
    } else {
        return `Il y a ${years} ans`;
    }
};

export const formatViews = (views) => {
    if (views >= 1000000000) {
        return (views / 1000000000).toFixed(1) + 'B';
    } else if (views >= 1000000) {
        return (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'k';
    } else {
        return views.toString();
    }
};
