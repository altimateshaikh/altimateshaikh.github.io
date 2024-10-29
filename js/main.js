// console.log("hello")
import * as THREE from 'three';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight,0.1,1000);

const renderer = new THREE.WebGLRenderer()

renderer.setSize(window.innerWidth, window.innerHeight);
document.querySelector("#bg").appendChild(renderer.domElement)


camera.position.z = 50;

renderer.render(scene, camera);

const geometry = new THREE.TorusGeometry(10,3,16,100);

const texture = new THREE.TextureLoader().load('images/untitled.png');
const material = new THREE.MeshBasicMaterial({map: texture});

const torus = new THREE.Mesh(geometry, material);

scene.add(torus);
torus.position.z = 1;
torus.position.x = 1;

function moveCamera(){
    const t = document.body.getBoundingClientRect().top;

    camera.position.y = t * 0.5;
    // camera.position.x = t * 0.1;
}

document.body.onscroll = moveCamera;

moveCamera();

function animate(){
    requestAnimationFrame(animate);

    torus.rotation.z += 0.01;

    renderer.render(scene, camera)
}

animate();