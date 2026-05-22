// ====== Navigation (mobile) ======
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger"); // bouton burger
  const navLinks = document.querySelector(".nav-links"); // menu

  if (burger && navLinks) {
    // Toggle menu
    burger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    // Fermer le menu quand on clique sur un lien
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    });

    // Fermer si on clique en dehors
    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
        navLinks.classList.remove("show");
      }
    });
  }
});

// ====== Données des produits (produit.html + index.html) ======
// IMPORTANT: garder cette variable dans le scope global.
const produits = [
  // Kimono
  {
    id: 1,
    nom: "Kimono simple",
    description: "Kimono léger et résistant pour entraînement.",
    prix: 15000,
    image: "photo/kimono-karate-simple.jpg",
    categorie: "kimono",
    images: [
      "photo/kimono-karate-simple.jpg",
      "photo/kimono-karate-simple2.jpg",
      "photo/kimono-karate-simple3.jpg",
    ],
  },
  {
    id: 23,
    nom: "kimono arawaza kumite bleu",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 35000,
    image: "photo/kimono arawaza kumite bleu.webp",
    categorie: "kimono",
    images: [
      "photo/kimono arawaza kumite bleu.webp",
      "photo/kimono arawaza kumite bleu1.webp",
      "photo/kimono arawaza kumite bleu2.png",
    ],
  },
  {
    id: 24,
    nom: "kimono Galsen kumite rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 35000,
    image: "photo/kimono GALSEN kata rouge.PNG",
    categorie: "kimono",
    images: [
      "photo/kimono GALSEN kata rouge.PNG",
      "photo/kimono Galsen.jpeg",
      "photo/kimono GALSEN kata rouge1.jpeg",
    ],
  },
  {
    id: 47,
    nom: "kimono Galsen kumite bleu",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 35000,
    image: "photo/kimono GALSEN kata bleu.png",
    categorie: "kimono",
    images: [
      "photo/kimono GALSEN kata bleu.png",
      "photo/kimono GALSEN kata bleu2.PNG",
      "photo/kimono GALSEN kata bleu3.PNG",
    ],
  },
  {
    id: 48,
    nom: "kimono arawaza kumite rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 35000,
    image: "photo/kimono arawaza kumite rouge.webp",
    categorie: "kimono",
    images: [
      "photo/kimono arawaza kumite rouge.webp",
      "photo/kimono arawaza kumite rouge1.jpg",
      "photo/kimono arawaza kumite rouge2.jpg",
    ],
  },
  {
    id: 49,
    nom: "kimono arawaza kumite blanc unique",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 60000,
    image: "photo/kimono arawaza kumite blanc.png",
    categorie: "kimono",
    images: [
      "photo/kimono arawaza kumite blanc.png",
      "photo/kimono arawaza kumite blanc1.png",
      "photo/kimono arawaza kumite blanc2.png",
    ],
  },
  {
    id: 25,
    nom: "kimono Galsen kumite recto-verso",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 60000,
    image: "photo/kimono GALSEN kumite recto-verso1.jpeg",
    categorie: "kimono",
    images: [
      "photo/kimono GALSEN kumite recto-verso1.jpeg",
      "photo/kimono GALSEN kumite recto-verso2.jpeg",
      "photo/kimono GALSEN kumite recto-verso3.jpeg",
    ],
  },
  {
    id: 26,
    nom: "kimono kata arawaza black Diamond",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 75000,
    image: "photo/kimono kata arawaza black Diamond.webp",
    categorie: "kimono",
    images: [
      "photo/kimono kata arawaza black Diamond.webp",
      "photo/kimono kata arawaza black Diamond1.jpeg",
      "photo/kimono kata arawaza black Diamond2.jpeg",
    ],
  },
  {
    id: 27,
    nom: "kimono SMA blanc",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 75000,
    image: "photo/kimono SMA blanc.jpeg",
    categorie: "kimono",
    images: [
      "photo/kimono SMA blanc.jpeg",
      "photo/kimono SMA blanc1.jpeg",
      "photo/kimono SMA blanc2.jpeg",
    ],
  },
  {
    id: 28,
    nom: "kimono SMA rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 75000,
    image: "photo/kimono SMA rouge.jpeg",
    categorie: "kimono",
    images: [
      "photo/kimono SMA rouge.jpeg",
      "photo/kimono SMA rouge1.jpeg",
      "photo/kimono SMA rouge2.jpeg",
    ],
  },
  {
    id: 29,
    nom: "kimono SMAI bleu",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 75000,
    image: "photo/kimono SMAI bleu.jpeg",
    categorie: "kimono",
    images: [
      "photo/kimono SMAI bleu.jpeg",
      "photo/kimono SMAI bleu1.jpeg",
      "photo/kimono SMAI bleu2.jpeg",
    ],
  },
  {
    id: 30,
    nom: "kimono tokaido bleu",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 75000,
    image: "photo/kimono tokaido bleu.jpeg",
    categorie: "kimono",
    images: [
      "photo/kimono tokaido bleu.jpeg",
      "photo/kimono tokaido bleu1.webp",
      "photo/kimono tokaido bleu2.webp",
    ],
  },
  {
    id: 31,
    nom: "kimono tokaido roure",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 75000,
    image: "photo/kimono tokaido roure.jpeg",
    categorie: "kimono",
    images: [
      "photo/kimono tokaido roure.jpeg",
      "photo/kimono tokaido roure1.webp",
      "photo/kimono tokaido roure2.webp",
    ],
  },
  {
    id: 40,
    nom: "kimono-kata-shureidode-bleu",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 75000,
    image: "photo/kimono-kata-shureidode-bleu.webp",
    categorie: "kimono",
    images: [
      "photo/kimono-kata-shureidode-bleu.webp",
      "photo/kimono-kata-shureidode-bleu1.jpg",
      "photo/kimono-kata-shureidode-bleu1.jpg",
    ],
  },
  {
    id: 41,
    nom: "kimono-kata-shureidode-rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 75000,
    image: "photo/kimono-kata-shureidode-rouge.jpg",
    categorie: "kimono",
    images: [
      "photo/kimono-kata-shureidode-rouge.jpg",
      "photo/kimono-kata-shureidode-rouge1.jpg",
      "photo/kimono-kata-shureidode-rouge1.jpg",
    ],
  },

  {
    id: 44,
    nom: "kimono tokaido kumite bleu",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 75000,
    image: "photo/kimono tokaido kumite bleu.webp",
    categorie: "kimono",
    images: [
      "photo/kimono tokaido kumite bleu.webp",
      "photo/kimono tokaido kumite bleu1.webp",
      "photo/kimono tokaido kumite bleu2.jpg",
    ],
  },
  {
    id: 45,
    nom: "kimono tokaido kumite rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 75000,
    image: "photo/kimono tokaido kumite roure.webp",
    categorie: "kimono",
    images: [
      "photo/kimono tokaido kumite roure.webp",
      "photo/kimono tokaido kumite roure1.jpg",
      "photo/kimono tokaido kumite roure2.webp",
    ],
  },
  {
    id: 46,
    nom: "kimono arawaza kumite recto-verso",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 60000,
    image: "photo/kimono arawaza recto-verso.webp",
    categorie: "kimono",
    images: [
      "photo/kimono arawaza recto-verso.webp",
      "photo/kimono arawaza recto-verso1.webp",
      "photo/kimono arawaza kumite recto-verso2.jpg",
    ],
  },
  {
    id: 50,
    nom: "kimono Arawaza-kata-bleu",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 75000,
    image: "photo/kimono Arawaza-kata-bleu.jpg",
    categorie: "kimono",
    images: [
      "photo/kimono Arawaza-kata-bleu.jpg",
      "photo/kimono Arawaza-kata-bleu1.webp",
      "photo/kimono Arawaza-kata-bleu2.webp",
    ],
  },
  {
    id: 51,
    nom: "kimono Arawaza-kata-rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 75000,
    image: "photo/kimono Arawaza-kata rouge.webp",
    categorie: "kimono",
    images: [
      "photo/kimono Arawaza-kata rouge.webp",
      "photo/kimono Arawaza-kata rouge1.jpg",
      "photo/kimono Arawaza-kata rouge2.webp",
    ],
  },
  // Protection
  {
    id: 2,
    nom: "Gants arawaza simple",
    description: "Protection optimale pour vos combats.",
    prix: 9000,
    image: "photo/gant-arawaza simple blue.jpg",
    categorie: "protection",
    images: [
      "photo/gant-arawaza simple blue.jpg",
      "photo/gant-arawaza simple blue1.jpg",
      "photo/gants bleu.png",
    ],
  },
  {
    id: 5,
    nom: "Gants smail simple Rouge",
    description: "Gants résistants pour karaté.",
    prix: 9000,
    image: "photo/gants rouge.png",
    categorie: "protection",
    images: [
      "photo/gants rouge.png",
      "photo/gants rouge1.webp",
      "photo/gants rouge2.webp",
    ],
  },
  {
    id: 6,
    nom: "Casque de Protection",
    description: "Protection tête lors des combats.",
    prix: 10000,
    image: "photo/casque de portection.jpg",
    categorie: "protection",
    images: [
      "photo/casque de portection.jpg",
      "photo/casque de portection1.jpg",
      "photo/casque de portection2.jpg",
    ],
  },
  {
    id: 52,
    nom: "coquille de protection karate",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 15000,
    image: "photo/coquille de protection karate.jpg",
    categorie: "protection",
    images: [
      "photo/coquille de protection karate.jpg",
      "photo/coquille de protection karate1.JFIF",
      "photo/coquille de protection karate2.jpg",
    ],
  },
  {
    id: 7,
    nom: "protege tibia bleu",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 15000,
    image: "photo/5protege tibia bleu.png",
    categorie: "protection",
    images: [
      "photo/5protege tibia bleu.png",
      "photo/5protege tibia bleu1.jpeg",
      "photo/5protege tibia bleu2.jpeg",
    ],
  },
  {
    id: 16,
    nom: "gant arawaza 2etiquette bleu",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 9500,
    image: "photo/gant arawaza 2etiquette bleu.jpg",
    categorie: "protection",
    images: [
      "photo/gant arawaza 2etiquette bleu.jpg",
      "photo/gant arawaza 2etiquette bleu1.jpeg",
      "photo/gant arawaza 2etiquette bleu1.webp",
    ],
  },
  {
    id: 17,
    nom: "gant smai 2etiquette bleu",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 9500,
    image: "photo/gant smai 2etiquette bleu.webp",
    categorie: "protection",
    images: [
      "photo/gant smai 2etiquette bleu.webp",
      "photo/gant smai 2etiquette bleu1.jpeg",
      "photo/gant smai 2etiquette bleu2.webp",
    ],
  },
  {
    id: 18,
    nom: "gant smai 2etiquette rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 9500,
    image: "photo/gant smai 2etiquette rouge.webp",
    categorie: "protection",
    images: [
      "photo/gant smai 2etiquette rouge.webp",
      "photo/gant smai 2etiquette rouge1.webp",
      "photo/gant smai 2etiquette rouge2.webp",
    ],
  },
  {
    id: 19,
    nom: "gant-arawaza 2etiquette rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 9500,
    image: "photo/gant-arawaza 2etiquette rouge.jpg",
    categorie: "protection",
    images: [
      "photo/gant-arawaza 2etiquette rouge.jpg",
      "photo/gant-arawaza 2etiquette rouge.webp",
      "photo/gant-arawaza 2etiquette rouge1.webp",
    ],
  },
  {
    id: 20,
    nom: "Ceinture arawaza kumité bleu",
    description: "Ceinture kumite bleu pour compétition.",
    prix: 3500,
    image: "photo/CEINTURE-karaté2.jpg",
    categorie: "protection",
    images: [
      "photo/CEINTURE-karaté2.jpg",
      "photo/CEINTURE-karaté2.jpg",
      "photo/CEINTURE-karaté.jpg",
    ],
  },
  {
    id: 21,
    nom: "gant-arawaza simple rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 9000,
    image: "photo/gant-arawaza simple rouge.jpg",
    categorie: "protection",
    images: [
      "photo/gant-arawaza simple rouge.jpg",
      "photo/gant-arawaza simple rouge1.jfif",
      "photo/gant-arawaza simple rouge2.jpg",
    ],
  },
  {
    id: 22,
    nom: "Ceinture arawaza kumité rouge",
    description: "Ceinture kumite rouge pour compétition.",
    prix: 3500,
    image: "photo/CEINTURE-karaté1.jpg",
    categorie: "protection",
    images: [
      "photo/CEINTURE-karaté1.jpg",
      "photo/CEINTURE-karaté1.jpg",
      "photo/CEINTURE-karaté.jpg",
    ],
  },

  {
    id: 32,
    nom: "protection pastron femme arawaza",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 15000,
    image: "photo/protection pastron femme arawaza.jpeg",
    categorie: "protection",
    images: [
      "photo/protection pastron femme arawaza.jpeg",
      "photo/protection pastron femme arawaza1.jpeg",
      "photo/protection pastron femme arawaza2.jpg",
    ],
  },
  {
    id: 33,
    nom: "protection pastron femme smai",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 15000,
    image: "photo/protection pastron femme smai.jpeg",
    categorie: "protection",
    images: [
      "photo/protection pastron femme smai.jpeg",
      "photo/protection pastron femme smai1.jpeg",
      "photo/protection pastron femme smai12.jpeg",
    ],
  },
  {
    id: 34,
    nom: "protege dent onix",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 3000,
    image: "photo/protege dent onix.jpeg",
    categorie: "protection",
    images: [
      "photo/protege dent onix.jpeg",
      "photo/protege dent onix1.jpeg",
      "photo/protege dent onix2.jpeg",
    ],
  },
  {
    id: 35,
    nom: "protege plaston homme SMAi",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 15000,
    image: "photo/protege plaston homme SMAi.jpeg",
    categorie: "protection",
    images: [
      "photo/protege plaston homme SMAi.jpeg",
      "photo/protege plaston homme SMAi1.jpeg",
      "photo/protege plaston homme SMAi2.jpeg",
    ],
  },
  // Matériel (exemples)
  {
    id: 3,
    nom: "Sac d'équipement",
    description: "Idéal pour l'entraînement et compétition.",
    prix: 10000,
    image: "photo/SAC DE MATERIEL.jpg",
    categorie: "materiel",
    images: [
      "photo/SAC%20DE%20MATERIEL.jpg",
      "photo/SAC DE MATERIEL1.jpg",
      "photo/SAC DE MATERIEL2.jpg",
    ],
  },
  {
    id: 8,
    nom: "cible manequin",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 120000,
    image: "photo/cible manequin.jpeg",
    categorie: "materiel",
    images: [
      "photo/cible manequin.jpeg",
      "photo/cible manequin1.jpeg",
      "photo/cible manequin2.avif",
    ],
  },
  {
    id: 39,
    nom: "tapis",
    description: "1 mettre carré de tapis arts martiaux.",
    prix: 10000,
    image: "photo/tapis.jpeg",
    categorie: "materiel",
    images: ["photo/tapis.jpeg", "photo/tapis1.jpeg", "photo/tapis2.jpeg"],
  },
  // Ensemble (exemples)
  {
    id: 4,
    nom: "ensemble Ceinture arawaza",
    description: "ensemble Ceinture kumite bleu et rouge pour compétition.",
    prix: 7000,
    image: "photo/CEINTURE-karaté.jpg",
    categorie: ["ensemble", "protection"],
    images: [
      "photo/CEINTURE-karaté.jpg",
      "photo/CEINTURE-karaté1.jpg",
      "photo/CEINTURE-karaté2.jpg",
    ],
  },
  {
    id: 9,
    nom: "ensemble kimono kumité smai bleu et rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 100000,
    image: "photo/ensembe kimono kumité smai.webp",
    categorie: "ensemble",
    images: [
      "photo/ensembe kimono kumité smai.webp",
      "photo/kimono SMA kumite rouge2.jpeg",
      "photo/kimono SMA kumite bleu1.jpeg",
    ],
  },
  {
    id: 10,
    nom: "ensemble kimono kata arawaza bleu et rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 150000,
    image: "photo/ensemble kimono kata arawaza bleu et rouge.jpeg",
    categorie: "ensemble",
    images: [
      "photo/ensemble kimono kata arawaza bleu et rouge.jpeg",
      "photo/ensemble kimono kata arawaza bleu et rouge1.jpeg",
      "photo/kimono Arawaza-kata rouge.webp",
    ],
  },

  // Packs
  {
    id: 100,
    nom: "Pack protection bleu",
    description: "Protége Tibias + Gants bleu double étiquettes",
    prix: 25000,
    image: "photo/001.png",
    categorie: "ensemble",
    images: [
      "photo/001.png",
      "photo/5protege tibia bleu.png",
      "photo/gant arawaza 2etiquette bleu1.webp",
    ],
  },
  {
    id: 101,
    nom: "Pack protection rouge",
    description: "Protége Tibias + Gants rouge double étiquettes",
    prix: 25000,
    image: "photo/002.png",
    categorie: "ensemble",
    images: [
      "photo/002.png",
      "photo/protege tibia  roure.jpeg",
      "photo/gant-arawaza 2etiquette rouge1.webp",
    ],
  },
  {
    id: 102,
    nom: "Nouvelle Arrivée",
    description: "Kimono Arawaza black Daimon unique",
    prix: 75000,
    image: "photo/003.png",
    categorie: "ensemble",
    images: [
      "photo/003.png",
      "photo/kimono kata arawaza black Diamond.webp",
      "photo/kimono kata arawaza black Diamond1.jpeg",
    ],
  },
  {
    id: 36,
    nom: "Protege tibia roure",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 15000,
    image: "photo/protege tibia  roure.jpeg",
    categorie: "protection",
    images: [
      "photo/protege tibia  roure.jpeg",
      "photo/protege tibia  roure1.jpeg",
      "photo/protege tibia  roure2.jpeg",
    ],
  },
  {
    id: 37,
    nom: "Protege tibia bleu",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 15000,
    image: "photo/5protege tibia bleu.png",
    categorie: "protection",
    images: [
      "photo/5protege tibia bleu.png",
      "photo/5protege tibia bleu1.jpeg",
      "photo/5protege tibia bleu2.jpeg",
    ],
  },
  {
    id: 38,
    nom: "protège-DENT",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 3000,
    image: "photo/protège-DENT1.jpg",
    categorie: "protection",
    images: [
      "photo/protège-DENT1.jpg",
      "photo/protège-DENT.jpg",
      "photo/protège-DENT.png",
    ],
  },

  // Matériel
  {
    id: 3,
    nom: "Sac d'équipement",
    description: "Idéal pour l'entraînement et compétition.",
    prix: 10000,
    image: "photo/SAC%20DE%20MATERIEL.jpg",
    categorie: "materiel",
    images: [
      "photo/SAC DE MATERIEL.jpg",
      "photo/SAC DE MATERIEL1.jpg",
      "photo/SAC DE MATERIEL2.jpg",
    ],
  },
  {
    id: 8,
    nom: "cible manequin",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 120000,
    image: "photo/cible manequin.jpeg",
    categorie: "materiel",
    images: [
      "photo/cible manequin.jpeg",
      "photo/cible manequin.jpeg",
      "photo/cible manequin.jpeg",
    ],
  },
  {
    id: 39,
    nom: "tapis",
    description: "1 mettre carré de tapis arts martiaux.",
    prix: 10000,
    image: "photo/tapis.jpeg",
    categorie: "materiel",
    images: ["photo/tapis.jpeg", "photo/tapis1.jpeg", "photo/tapis2.jpeg"],
  },

  // Ensemble
  {
    id: 9,
    nom: "ensemble kimono kumité smai bleu et rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 100000,
    image: "photo/ensembe kimono kumité smai.webp",
    categorie: "ensemble",
    images: [
      "photo/ensembe kimono kumité smai.webp",
      "photo/kimono SMA kumite rouge2.jpeg",
      "photo/kimono SMA kumite bleu1.jpeg",
    ],
  },
  {
    id: 4,
    nom: "ensemble Ceinture arawaza",
    description: "ensemble Ceinture kumite bleu et rouge pour compétition.",
    prix: 7000,
    image: "photo/CEINTURE-karaté.jpg",
    categorie: ["ensemble", "protection"],
    images: [
      "photo/CEINTURE-karaté.jpg",
      "photo/CEINTURE-karaté1.jpg",
      "photo/CEINTURE-karaté2.jpg",
    ],
  },
  {
    id: 10,
    nom: "ensemble kimono kata arawaza bleu et rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 150000,
    image: "photo/ensemble kimono kata arawaza bleu et rouge.jpeg",
    categorie: "ensemble",
    images: [
      "photo/ensemble kimono kata arawaza bleu et rouge.jpeg",
      "photo/ensemble kimono kata arawaza bleu et rouge1.jpeg",
      "photo/kimono Arawaza-kata rouge.webp",
    ],
  },
  {
    id: 11,
    nom: "ensemble Kimono Kata SMAI bleu et rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 15000,
    image: "photo/ensemble Kimono Kata SMAI bleu et rouge.jpg",
    categorie: "ensemble",
    images: [
      "photo/ensemble Kimono Kata SMAI bleu et rouge.jpg",
      "photo/kimono SMAI bleu1.jpeg",
      "photo/kimono SMA rouge1.jpeg",
    ],
  },
  {
    id: 12,
    nom: "ensemble Kimono Kata tokaido bleu et rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 150000,
    image: "photo/ensemble Kimono Kata tokaido bleu et rouge.jfif",
    categorie: "ensemble",
    images: [
      "photo/ensemble Kimono Kata tokaido bleu et rouge.jfif",
      "photo/kimono tokaido roure1.webp",
      "photo/kimono tokaido bleu1.webp",
    ],
  },
  {
    id: 13,
    nom: "ensemble kimono kumite tokaido bleu et rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 100000,
    image: "photo/ensemble kimono kumite tokaido bleu et rouge.jpg",
    categorie: "ensemble",
    images: [
      "photo/ensemble kimono kumite tokaido bleu et rouge.jpg",
      "photo/kimono tokaido kumite roure2.webp",
      "photo/kimono tokaido kumite bleu.webp",
    ],
  },
  {
    id: 14,
    nom: "ensenble kimono kumité arawaza zoro bleu et rouge ",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 105000,
    image: "photo/ensenble kimono kumité arawaza zoro bleu et rouge.jpeg",
    categorie: "ensemble",
    images: [
      "photo/ensenble kimono kumité arawaza zoro bleu et rouge.jpeg",
      "photo/ensenble kimono kumité arawaza zoro bleu et rouge1.jpeg",
      "photo/ensenble kimono kumité arawaza zoro bleu et rouge2.webp",
    ],
  },
  {
    id: 15,
    nom: "ensenble tibia arawaza bleu et rouge",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 30000,
    image: "photo/ensenble tibia arawaza bleu et rouge.jpeg",
    categories: ["ensemble", "protection"],
    images: [
      "photo/ensenble tibia arawaza bleu et rouge.jpeg",
      "photo/ensenble tibia arawaza bleu et rouge1.jpeg",
      "photo/ensenble tibia arawaza bleu et rouge2.jpeg",
    ],
  },
  {
    id: 42,
    nom: "ensemble-kimono-shureido-rouge-et-bleue",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 150000,
    image: "photo/ensemble-kimono-shureido-rouge-et-bleue.jpg",
    categorie: "ensemble",
    images: [
      "photo/ensemble-kimono-shureido-rouge-et-bleue.jpg",
      "photo/kimono-kata-shureidode-bleu1.jpg",
      "photo/kimono-kata-shureidode-rouge1.jpg",
    ],
  },
  {
    id: 43,
    nom: "ensemble dégresseur unisexe",
    description: "Équipement de qualité pour arts martiaux.",
    prix: 10000,
    image: "photo/ensemble dégresseur unisexe.jpeg",
    categorie: "ensemble",
    images: [
      "photo/ensemble dégresseur unisexe1.JPG",
      "photo/ensemble dégresseur unisexe1.jpg",
      "photo/ensemble dégresseur unisexe.jpeg",
    ],
  },
];
// Filtre produits
const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    // Retirer la classe active de tous les boutons
    filterButtons.forEach((b) => b.classList.remove("active"));
    // Ajouter la classe active au bouton cliqué
    btn.classList.add("active");

    const category = btn.dataset.filter;

    cards.forEach((card) => {
      // Affiche tout si "all" est choisi
      if (category === "all") {
        card.style.display = "block";
      } else {
        // Affiche uniquement les produits correspondant à la catégorie
        card.style.display =
          card.dataset.category === category ? "block" : "none";
      }
    });
  });
});
// Animation fade-in des produits et galerie au scroll
function checkElements(selector) {
  const triggerBottom = window.innerHeight * 0.8;
  document.querySelectorAll(selector).forEach((el) => {
    const elTop = el.getBoundingClientRect().top;
    if (elTop < triggerBottom) {
      el.classList.add("show");
    } else {
      el.classList.remove("show");
    }
  });
}

// Vérifier au scroll
window.addEventListener("scroll", () => {
  checkElements(".card"); // produits
  checkElements(".galerie-item"); // galerie
});

// Au chargement
window.addEventListener("load", () => {
  document.querySelectorAll(".card, .galerie-item").forEach((el) => {
    el.classList.add("show");
  });
  mettreAJourBadge();
});

// notification
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  // Disparaît après 3 secondes
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

// Ajouter un produit au panier
function ajouterAuPanier(id) {
  const produit = produits.find((p) => p.id === id);
  if (!produit) return;

  const existant = panier.find((p) => p.id === id);
  if (existant) {
    existant.quantite++;
  } else {
    panier.push({ ...produit, quantite: 1 });
  }

  sauvegarderPanier();
  mettreAJourBadge();
  afficherNotification(`${produit.nom} ajouté au panier!`);
}
let panier = JSON.parse(localStorage.getItem("panier")) || [];
// Supprimer un produit du panier
function supprimerDuPanier(id) {
  panier = panier.filter((p) => p.id !== id);
  sauvegarderPanier();
  mettreAJourBadge();
  afficherPanier();
  showToast("Produit supprimé du panier ❌");
}

// Modifier la quantité
function modifierQuantite(id, changement) {
  const produit = panier.find((p) => p.id === id);
  if (produit) {
    produit.quantite += changement;
    if (produit.quantite <= 0) {
      supprimerDuPanier(id);
    } else {
      sauvegarderPanier();
      afficherPanier();
    }
  }
  mettreAJourBadge();
  showToast("Quantité mise à jour 🔄");
}

// Sauvegarder le panier
function sauvegarderPanier() {
  localStorage.setItem("panier", JSON.stringify(panier));
}

// Mettre à jour le badge
function mettreAJourBadge() {
  const badge = document.querySelector("#cart-count");
  if (badge) {
    const total = panier.reduce((sum, p) => sum + p.quantite, 0);
    badge.textContent = total;
  }
}

// Calculer le total
function calculerTotal() {
  return panier.reduce((sum, p) => sum + p.prix * p.quantite, 0);
}

// Afficher le panier (modal)
function afficherPanier() {
  // Définir le panier dès le début
  let panier = JSON.parse(localStorage.getItem("panier")) || [];

  let modal = document.getElementById("modal-panier");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "modal-panier";
    modal.className = "modal-panier";
    document.body.appendChild(modal);
  }

  if (panier.length === 0) {
    modal.innerHTML = `
            <div class="contenu-panier">
                <span class="fermer-panier" onclick="fermerPanier()">&times;</span>
                <h2>Votre Panier</h2>
                <p class="panier-vide">Votre panier est vide.</p>
                <button class="btn-continuer" onclick="fermerPanier()">Continuer vos achats</button>
            </div>
        `;
  } else {
    const total = calculerTotal();
    modal.innerHTML = `
            <div class="contenu-panier">
                <span class="fermer-panier" onclick="fermerPanier()">&times;</span>
                <h2>Votre Panier</h2>
                <div class="liste-panier">
                    ${panier
                      .map(
                        (p) => `
                        <div class="item-panier">
                            <img src="${p.image}" alt="${p.nom}" onerror="this.src='PHOTO/SAC%20DE%20MATERIEL.jpg'">
                            <div class="details-item">
                                <h4>${p.nom}</h4>
                                <p class="prix-item">${p.prix.toLocaleString("fr-FR")} CFA</p>
                            </div>
                            <div class="quantite-controls">
                                <button onclick="modifierQuantite(${p.id}, -1)">-</button>
                                <span>${p.quantite}</span>
                                <button onclick="modifierQuantite(${p.id}, 1)">+</button>
                            </div>
                            <button class="supprimer-item" onclick="supprimerDuPanier(${p.id})">&times;</button>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
                <div class="total-panier">
                    <h3>Total: ${total.toLocaleString("fr-FR")} CFA</h3>
                </div>
                <button class="btn-commander" onclick="afficherFormulaireCommande()">
                    Passer la commande
                </button>
            </div>
        `;
  }

  modal.style.display = "flex";

  // Fermer le panier en cliquant à l'extérieur du cadre panier
  const fermerSurClicExterieur = (e) => {
    if (
      modal.style.display === "flex" &&
      !e.target.closest(".contenu-panier") &&
      !e.target.closest(".cart-icon")
    ) {
      fermerPanier();
      document.removeEventListener("click", fermerSurClicExterieur);
    }
  };
  setTimeout(
    () => document.addEventListener("click", fermerSurClicExterieur),
    100,
  );
}

function getTaillesDisponibles(categorie) {
  if (categorie === "kimono" || categorie === "ensemble") {
    return ["160", "170", "180", "190", "200"];
  } else if (categorie === "protection") {
    return ["M", "L", "XL", "XXL"];
  } else {
    return []; // matériel pas de taille
  }
}

function changerTaille(id, taille) {
  const produit = panier.find((p) => p.id === id);
  if (produit) {
    produit.taille = taille;
    sauvegarderPanier();
  }
}

function afficherPanier() {
  let modal = document.getElementById("modal-panier");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "modal-panier";
    modal.className = "modal-panier";
    document.body.appendChild(modal);
  }

  if (panier.length === 0) {
    modal.innerHTML = `
            <div class="contenu-panier">
                <span class="fermer-panier" onclick="fermerPanier()">&times;</span>
                <h2>Votre Panier</h2>
                <button class="btn-continuer" onclick="fermerPanier()">Continuer vos achats</button>
            </div>
        `;
  } else {
    const total = calculerTotal();
    modal.innerHTML = `
            <div class="contenu-panier">
                <span class="fermer-panier" onclick="fermerPanier()">&times;</span>
                <h2>Votre Panier</h2>
                <div class="liste-panier">
                    ${panier
                      .map(
                        (p) => `
                        <div class="item-panier">
                            <img src="${p.image}" alt="${p.nom}" onerror="this.src='PHOTO/SAC%20DE%20MATERIEL.jpg'">
                            <div class="details-item">
                                <h4>${p.nom}</h4>
                                <p class="prix-item">${p.prix.toLocaleString("fr-FR")} CFA</p>
                                ${
                                  getTaillesDisponibles(p.categorie).length > 0
                                    ? `
                                    <label for="taille-${p.id}">Taille :</label>
                                    <select id="taille-${p.id}" onchange="changerTaille(${p.id}, this.value)">
                                        <option value="">Choisir</option>
                                        ${getTaillesDisponibles(p.categorie)
                                          .map(
                                            (t) => `
                                            <option value="${t}" ${p.taille === t ? "selected" : ""}>${t}</option>
                                        `,
                                          )
                                          .join("")}
                                    </select>
                                `
                                    : ""
                                }
                            </div>
                            <div class="quantite-controls">
                                <button onclick="modifierQuantite(${p.id}, -1)">-</button>
                                <span>${p.quantite}</span>
                                <button onclick="modifierQuantite(${p.id}, 1)">+</button>
                            </div>
                            <button class="supprimer-item" onclick="supprimerDuPanier(${p.id})">&times;</button>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
                <div class="total-panier">
                    <h3>Total: ${total.toLocaleString("fr-FR")} CFA</h3>
                </div>
                <button class="btn-commander" onclick="afficherFormulaireCommande()">
                    Passer la commande
                </button>
            </div>
        `;
  }

  modal.style.display = "flex";
}

// Fermer le panier
function fermerPanier() {
  const modal = document.getElementById("modal-panier");
  if (modal) modal.style.display = "none";
}

// Afficher le formulaire de commande
function afficherFormulaireCommande() {
  // Vérifier que toutes les tailles sont choisies
  for (let p of panier) {
    const tailles = getTaillesDisponibles(p.categorie);
    if (tailles.length > 0 && !p.taille) {
      alert(`Veuillez choisir une taille pour le produit : ${p.nom}`);
      return; // stoppe l'ouverture du formulaire
    }
  }

  const total = calculerTotal();
  const modal = document.getElementById("modal-panier");

  if (modal) {
    modal.innerHTML = `
            <div class="contenu-panier contenu-commande">
                <span class="fermer-panier" onclick="fermerPanier()">&times;</span>
                <h2>Finaliser votre Commande</h2>
                <div class="recapitulatif">
                    <h3>Récapitulatif de commande</h3>
                    ${panier
                      .map(
                        (p) => `
                        <div class="item-recap">
                            <span>${p.nom} ${p.taille ? `(Taille: ${p.taille})` : ""} x${p.quantite}</span>
                            <span>${(p.prix * p.quantite).toLocaleString("fr-FR")} CFA</span>
                        </div>
                    `,
                      )
                      .join("")}
                    <div class="total-final">
                        <strong>Total: ${total.toLocaleString("fr-FR")} CFA</strong>
                    </div>
                </div>
                
                <form id="form-commande" onsubmit="soumettreCommande(event)">
                    <div class="form-group">
                        <label for="nom">Nom complet *</label>
                        <input type="text" id="nom" name="nom" required>
                    </div>
                    <div class="form-group">
                        <label for="telephone">Téléphone *</label>
                        <input type="tel" id="telephone" name="telephone" required placeholder="77 123 45 67">
                    </div>
                    <div class="form-group">
                        <label for="adresse">Adresse de livraison</label>
                        <input type="text" id="adresse" name="adresse" placeholder="Ville, Quartier, Rue">
                    </div>
                    
                    <div class="mode-paiement">
                        <h3>Mode de paiement</h3>
                        <label class="option-paiement">
                            <input type="radio" name="paiement" value="wave" required>
                            <span class="radio-custom"></span>
                            <div class="paiement-info">
                                <strong>💳 Paiement Wave</strong>
                                <p>Paiement immédiat via Wave</p>
                            </div>
                        </label>
                        <label class="option-paiement">
                            <input type="radio" name="paiement" value="livraison">
                            <span class="radio-custom"></span>
                            <div class="paiement-info">
                                <strong>🚚 Paiement à la réception</strong>
                                <p>Payer lors de la livraison du colis</p>
                            </div>
                        </label>
                    </div>
                    
                    <button type="submit" class="btn-valider">Valider la commande</button>
                </form>
            </div>
        `;
  }
}

// Soumettre la commande
function soumettreCommande(event) {
  event.preventDefault();

  const form = event.target;
  const formData = new FormData(form);

  const modePaiement = formData.get("paiement");
  const total = calculerTotal();

  const donnees = {
    nom: formData.get("nom"),
    telephone: formData.get("telephone"),
    adresse: formData.get("adresse") || "Non spécifiée",
    modePaiement: modePaiement,
    total: total,
    articles: [...panier],
  };

  // Sauvegarder la commande
  localStorage.setItem("commande", JSON.stringify(donnees));

  if (modePaiement === "wave") {
    // Sauvegarder la commande avant de quitter
    localStorage.setItem("commande", JSON.stringify(donnees));
    localStorage.setItem("panier", JSON.stringify(panier));

    // Redirection Wave puis retour sur ta page
    window.location.href =
      "https://pay.wave.com/m/784404796?redirect_success=https://tonsite.com/paiement-success.html";
  } else {
    envoyerCommandeWhatsApp(donnees);
  }
}

// Envoyer la commande via WhatsApp
function envoyerCommandeWhatsApp(donnees) {
  let message = `*Nouvelle Commande*\n\n`;
  message += `👤 *Client:* ${donnees.nom}\n`;
  message += `📞 *Téléphone:* ${donnees.telephone}\n`;
  message += `📍 *Adresse:* ${donnees.adresse}\n\n`;
  message += `*Articles:*\n`;

  donnees.articles.forEach((article) => {
    message += `• ${article.nom} ${article.taille ? `(Taille: ${article.taille})` : ""} x${article.quantite} - ${(article.prix * article.quantite).toLocaleString("fr-FR")} CFA\n`;
  });

  message += `\n💰 *Total:* ${donnees.total.toLocaleString("fr-FR")} CFA`;

  const whatsappUrl = `https://wa.me/+221784404796?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");

  panier = [];
  sauvegarderPanier();
  mettreAJourBadge();
  fermerPanier();
  afficherNotification("Commande envoyée!");
}

// Afficher notification
function afficherNotification(message) {
  let notification = document.querySelector(".notification");
  if (!notification) {
    notification = document.createElement("div");
    notification.className = "notification";
    document.body.appendChild(notification);
  }

  notification.textContent = message;
  notification.classList.add("show");

  setTimeout(() => {
    notification.classList.remove("show");
  }, 3000);
}

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".galerie-slider");
  const images = document.querySelectorAll(".galerie-item img");

  // Lightbox
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");
  const closeBtn = document.querySelector(".lightbox .close");
  const prevBtn = document.querySelector(".lightbox .prev");
  const nextBtn = document.querySelector(".lightbox .next");

  let currentIndex = 0;
  let scrollAmount = 0;

  // ====== Auto-scroll (carousel) ======
  function autoScroll() {
    if (!slider) return;
    scrollAmount += 220; // largeur image + marge
    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    }
    slider.scrollTo({ left: scrollAmount, behavior: "smooth" });
  }
  setInterval(autoScroll, 9000); // défile toutes les 9s

  // ====== Flèches slider ======
  const arrowPrev = document.querySelector(".arrow.prev");
  const arrowNext = document.querySelector(".arrow.next");

  if (arrowPrev && arrowNext && slider) {
    arrowPrev.addEventListener("click", () => {
      slider.scrollBy({ left: -220, behavior: "smooth" });
    });
    arrowNext.addEventListener("click", () => {
      slider.scrollBy({ left: 220, behavior: "smooth" });
    });
  }

  // ====== Lightbox ouverture ======
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      if (!lightbox) return;
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      caption.textContent = img.alt;
      currentIndex = index;
    });
  });

  // ====== Fermeture lightbox ======
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  // ====== Navigation lightbox ======
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      lightboxImg.src = images[currentIndex].src;
      caption.textContent = images[currentIndex].alt;
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      lightboxImg.src = images[currentIndex].src;
      caption.textContent = images[currentIndex].alt;
    });
  }

  // Fermeture si clic en dehors
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const promoContainer = document.querySelector(".promo-container");
  const prevArrow = document.querySelector(".arrow.prev");
  const nextArrow = document.querySelector(".arrow.next");
  const dotsContainer = document.querySelector(".dots");
  const cards = document.querySelectorAll(".promo-card");

  let currentIndex = 0;
  const cardWidth = cards[0]?.offsetWidth + 20 || 220; // largeur réelle + marge
  const total = cards.length;
  let autoScrollInterval;

  // Créer les dots
  cards.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => scrollToIndex(i));
    dotsContainer.appendChild(dot);
  });

  function updateDots() {
    document.querySelectorAll(".dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });
  }

  function scrollToIndex(index) {
    currentIndex = index;
    promoContainer.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
    updateDots();
    v;
  }

  // Flèches navigation
  if (prevArrow && nextArrow) {
    prevArrow.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + total) % total;
      scrollToIndex(currentIndex);
      pauseAutoScroll();
    });
    nextArrow.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % total;
      scrollToIndex(currentIndex);
      pauseAutoScroll();
    });
  }

  // Swipe mobile
  let startX = 0;
  promoContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });
  promoContainer.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
      nextArrow.click();
    } else if (endX - startX > 50) {
      prevArrow.click();
    }
  });

  // Auto-scroll
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % total;
      scrollToIndex(currentIndex);
    }, 9000);
  }

  function pauseAutoScroll() {
    clearInterval(autoScrollInterval);
    // Reprendre après 10s
    setTimeout(startAutoScroll, 10000);
  }

  // Pause si souris sur le container
  promoContainer.addEventListener("mouseenter", pauseAutoScroll);
  promoContainer.addEventListener("mouseleave", startAutoScroll);

  // Démarrage
  scrollToIndex(0); // assure que le premier produit est visible
  startAutoScroll();
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contact");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nom = form.nom.value;
    const email = form.email.value;
    const message = form.message.value;

    // Numéro WhatsApp de Saloum Équipement
    const numero = "+221784404796";

    // Construire le texte du message
    let texte = `*Nouveau message depuis le site*\n\n`;
    texte += `👤 Nom: ${nom}\n`;
    if (email) texte += `📧 Email: ${email}\n`;
    texte += `💬 Message:\n${message}`;

    // Encoder et ouvrir WhatsApp
    const whatsappUrl = `https://wa.me/${numero}?text=${encodeURIComponent(texte)}`;
    window.open(whatsappUrl, "_blank");
  });
});
