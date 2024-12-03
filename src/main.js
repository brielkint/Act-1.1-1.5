// Importing Three.js and OrbitControls
import * as THREE from 'three';  // Import Three.js
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';  // Import OrbitControls

// Scene setup
const scene = new THREE.Scene();  // Create the scene

// Camera setup
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;  // Position camera on the z-axis

// Renderer setup
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('.webgl') });
renderer.setSize(window.innerWidth, window.innerHeight);  // Set renderer size
document.body.appendChild(renderer.domElement);  // Attach renderer to the DOM

// Create a Torus Knot (A complex, godly shape)
const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);  // Torus Knot geometry
const material = new THREE.MeshBasicMaterial({ color: 0xffcc00, wireframe: true });  // Golden color with wireframe for a mystical look
const torusKnot = new THREE.Mesh(geometry, material);  // Create mesh from geometry and material
scene.add(torusKnot);  // Add torus knot to the scene

// OrbitControls setup (to move the camera interactively)
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;  // Enable damping for smooth camera movement
controls.dampingFactor = 0.25;  // Adjust damping speed
controls.screenSpacePanning = false;  // Disable panning in screen space

// Window resizing functionality
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

// Animation loop to rotate the Torus Knot
function animate() {
  torusKnot.rotation.x += 0.01;  // Rotate around x-axis
  torusKnot.rotation.y += 0.01;  // Rotate around y-axis
  controls.update();  // Update controls for smooth camera movement
  renderer.render(scene, camera);  // Render the scene
  requestAnimationFrame(animate);  // Recursively call animate
}

animate();  // Start the animation loop
