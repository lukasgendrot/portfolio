/**
 * Script d'optimisation des images
 * 
 * Ce script est fourni comme guide pour optimiser les images du portfolio.
 * Pour l'utiliser, vous devez installer les outils nécessaires et exécuter les commandes manuellement.
 * 
 * Outils recommandés :
 * 1. ImageOptim (Mac) ou FileOptimizer (Windows) pour la compression
 * 2. Squoosh (https://squoosh.app/) pour la conversion en WebP
 * 3. Sharp (Node.js) pour le traitement automatisé
 */

// Exemple de commande Sharp pour optimiser les images
/*
const sharp = require('sharp');

// Optimiser une image
sharp('input.jpg')
  .resize(800, 600, { fit: 'inside' })
  .jpeg({ quality: 80 })
  .toFile('output.jpg');

// Convertir en WebP
sharp('input.jpg')
  .resize(800, 600, { fit: 'inside' })
  .webp({ quality: 80 })
  .toFile('output.webp');
*/

// Liste des images à optimiser
const imagesToOptimize = [
  {
    name: 'sportaddict.png',
    currentSize: '993KB',
    targetSize: '< 200KB',
    recommendedFormat: 'WebP',
    recommendedDimensions: '1200x800'
  },
  {
    name: 'image_de_fond.png',
    currentSize: '619KB',
    targetSize: '< 150KB',
    recommendedFormat: 'WebP',
    recommendedDimensions: '1920x1080'
  },
  {
    name: 'image-fond.png',
    currentSize: '619KB',
    targetSize: '< 150KB',
    recommendedFormat: 'WebP',
    recommendedDimensions: '1920x1080'
  },
  {
    name: 'lg_monogramme_blanc.png',
    currentSize: '30KB',
    targetSize: '< 10KB',
    recommendedFormat: 'PNG (avec transparence)',
    recommendedDimensions: '180x180'
  },
  {
    name: 'logo-linux.png',
    currentSize: '78KB',
    targetSize: '< 20KB',
    recommendedFormat: 'WebP',
    recommendedDimensions: '400x400'
  },
  {
    name: 'logo-office.png',
    currentSize: '38KB',
    targetSize: '< 15KB',
    recommendedFormat: 'WebP',
    recommendedDimensions: '400x400'
  },
  {
    name: 'logo-diplome.jpeg',
    currentSize: '63KB',
    targetSize: '< 20KB',
    recommendedFormat: 'WebP',
    recommendedDimensions: '400x400'
  }
];

// Instructions pour l'optimisation
console.log('Instructions pour l\'optimisation des images:');
console.log('1. Utilisez Squoosh (https://squoosh.app/) pour convertir les images en WebP');
console.log('2. Compressez les images avec ImageOptim ou FileOptimizer');
console.log('3. Redimensionnez les images aux dimensions recommandées');
console.log('4. Créez des versions de différentes tailles pour le responsive design');
console.log('5. Utilisez le lazy loading pour les images hors écran');
console.log('6. Ajoutez des attributs width et height pour éviter le CLS (Cumulative Layout Shift)');

// Exemple de code HTML pour le lazy loading et les images responsives
/*
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="Description" loading="lazy" width="800" height="600">
</picture>
*/ 