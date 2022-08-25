//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
//fog 

var fogColor = new THREE.Color(0x000000);
scene.background = fogColor;
scene.fog = new THREE.Fog(fogColor, 0.60, 9); 

//camara 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const geometry = new THREE.CircleGeometry( 5, 32 );
const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
const circle = new THREE.Mesh( geometry, material );
scene.add( circle );
camera.position.z = 7;

//renderizado
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
//animación
function animate() {
	requestAnimationFrame( animate );
   circle.rotation.x += 0.01;
   circle.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();

//webgl libreria que permite ver los archivos guardados en pantalla 
