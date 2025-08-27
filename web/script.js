// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({ behavior:"smooth" });
  });
});

// FAQ toggle
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = (answer.style.display === "block") ? "none" : "block";
    btn.querySelector("i").classList.toggle("fa-minus");
    btn.querySelector("i").classList.toggle("fa-plus");
  });
});
// Three.js background
const canvas = document.getElementById("bgCanvas");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

// Create particles
const geometry = new THREE.BufferGeometry();
const particlesCount = 1000;
const positions = [];

for (let i = 0; i < particlesCount * 3; i++) {
  positions.push((Math.random() - 0.5) * 20);
}

geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({ color: 0xffffff, size: 0.05 });
const particles = new THREE.Points(geometry, material);
scene.add(particles);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  particles.rotation.y += 0.001;
  particles.rotation.x += 0.0005;
  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
