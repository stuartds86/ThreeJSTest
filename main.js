import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87CEEB);
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

/*
let model, gui, face;

gui = new GUI();
const loader = new GLTFLoader();
loader.load( 'Ambassador Class Textured.glb', function ( gltf ) {

	model = gltf.scene;
	
// expressions();
  scene.add(model );

}, undefined, function ( error ) {

  console.error( error );

} );
*/

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const ambient = new THREE.HemisphereLight(0xFFFFFF, 0xBBBBBB, 0.6);
scene.add(ambient);

const light = new THREE.DirectionalLight();
light.position.set(0.8,1,-6);
scene.add(light);
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshStandardMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const spgeometry =  new THREE.SphereGeometry(1, 32, 16);
const spmaterial = new THREE.MeshStandardMaterial({ color: 0x00ff83 });
const mesh = new THREE.Mesh(spgeometry, material);
scene.add(mesh);

const controls = new OrbitControls(camera, renderer.domElement);



// expressions


camera.position.z = 5;
resize();
/*

function expressions(){
				
				face = model.getObjectByName('HeadHires');

				const expressions = Object.keys( face.morphTargetDictionary );
				const expressionFolder = gui.addFolder( 'Expressions' );

				for ( let i = 0; i < expressions.length; i ++ ) {

					expressionFolder.add( face.morphTargetInfluences, i, 0, 1, 0.01 ).name( expressions[ i ] );

				}
				
					expressionFolder.open();

}
*/

function resize(){
camera.aspect = window.innerWidth / window.innerHeight
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);

}


function animate() {

 // mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;

  renderer.render( scene, camera );

}