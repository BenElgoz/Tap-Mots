// Importez la fonction de sélection aléatoire
function selectRandomItems(array, numItems) {
    const shuffled = array.sort(() => 0.5 - Math.random()); // Mélanger le tableau
    return shuffled.slice(0, numItems); // Retourner les premiers numItems éléments
}

// Déclaration des tableaux contenant les listes de mots et de phrases proposés à l'utilisateur
const listeMots = [
    "Cachalot", 
    "Pétunia", 
    "Serviette", 
    "Galaxie", 
    "Vaisseau", 
    "Guide", 
    "Robot", 
    "Dauphin", 
    "Étoile", 
    "Alien", 
    "Voyageur", 
    "Poussière", 
    "Penseur", 
    "Cosmos", 
    "Lumière", 
    "Espace", 
    "Temps", 
    "Mystère", 
    "Aventure", 
    "Inconnu",
    "Planète",
    "Astéroïde",
    "Comète",
    "Gravité",
    "Télescope",
    "Galactique",
    "Exploration",
    "Vortex",
    "Satellite",
    "Constellation"
];

const listePhrases = [
    "Pas de panique !", 
    "La vie, l'univers et le reste", 
    "Merci pour le poisson", 
    "La réponse est 42", 
    "L'univers est vaste et étrange", 
    "Ne paniquez jamais !", 
    "L'essentiel est une serviette", 
    "Quel est le sens de la vie ?", 
    "L'espace est la frontière ultime", 
    "Explorons l'inconnu", 
    "Un poisson dans l'oreille", 
    "Le Guide est votre ami", 
    "Ne faites jamais confiance à un ordinateur", 
    "La poésie Vogon est la pire", 
    "Les dauphins sont plus intelligents que nous", 
    "Un beau voyage dans les étoiles", 
    "Chaque voyage commence par une étape", 
    "Laissez l'aventure commencer", 
    "Les réponses se trouvent là-haut", 
    "Le mystère de l'univers nous appelle",
    "Les étoiles nous guident",
    "L'odyssée cosmique continue",
    "Le voyage est la destination",
    "Les secrets du cosmos sont infinis",
    "Regardez les étoiles et rêvez",
    "L'univers est une énigme",
    "La curiosité est notre guide",
    "L'aventure cosmique attend",
    "Les galaxies sont nos terrains de jeu",
    "Au-delà des étoiles, l'inconnu",
    "Le cosmos est notre héritage"
];

// Fonction pour sélectionner aléatoirement 10 mots
function selectRandomWords() {
    return selectRandomItems(listeMots, 10);
}

// Fonction pour sélectionner aléatoirement 10 phrases
function selectRandomPhrases() {
    return selectRandomItems(listePhrases, 10);
}

// Exemple d'utilisation :
const motsAleatoires = selectRandomWords();
const phrasesAleatoires = selectRandomPhrases();

console.log("Mots aléatoires :", motsAleatoires);
console.log("Phrases aléatoires :", phrasesAleatoires);
