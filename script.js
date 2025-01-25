// Add WebGL effects
import * as THREE from 'three';

// Initialize Three.js scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector('.hero').appendChild(renderer.domElement);

// Add 3D elements here...const tagWeights = {  
  '3D': 0.8,  
  'Branding': 1.2,  
  'Experimental': 0.5  
};  
// Auto-sorts projects based on viewer engagement

  const angle = Math.atan2(deltaY, deltaX);
trailer.style.transform += ` rotate(${angle}rad)`;
trailer.style.opacity = Math.min(0.5 + (velocity * 0.02), 1);

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const media = card.querySelector('.project-media');
        const isVideo = media.tagName === 'VIDEO';
        
        const lightbox = document.querySelector('.lightbox');
        const mediaContainer = lightbox.querySelector('.lightbox-media');
        
        mediaContainer.innerHTML = isVideo ? 
            `<video controls autoplay muted><source src="${media.querySelector('source').src}"></video>` :
            `<img src="${media.src}">`;
            
        lightbox.classList.add('active');
    });
});

document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const lightbox = document.querySelector('.lightbox');
        const media = card.querySelector('img, video');
        const isVideo = media.tagName === 'VIDEO';
        
        // Reset all media elements
        lightbox.querySelectorAll('.lightbox-media').forEach(el => {
            el.style.display = 'none';
            if (el.tagName === 'VIDEO') el.pause();
        });

        if (isVideo) {
            const video = lightbox.querySelector('video');
            video.src = media.querySelector('source').src;
            video.style.display = 'block';
        } else {
            const img = lightbox.querySelector('img');
            img.src = media.src;
            img.style.display = 'block';
        }

        lightbox.querySelector('.lightbox-title').textContent = card.querySelector('h3').textContent;
        lightbox.querySelector('.lightbox-description').textContent = card.querySelector('p').textContent;
        
        document.body.style.overflow = 'hidden';
        lightbox.classList.add('active');
    });
});

// Close Lightbox
document.querySelector('.lightbox').addEventListener('click', (e) => {
    if (e.target.classList.contains('lightbox') || e.target.classList.contains('close-btn')) {
        document.body.style.overflow = 'auto';
        document.querySelector('.lightbox').classList.remove('active');
        document.querySelectorAll('.lightbox-media').forEach(media => {
            if (media.tagName === 'VIDEO') media.pause();
        });
    }
});