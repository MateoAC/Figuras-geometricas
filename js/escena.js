//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
//fog 

var fogColor = new THREE.Color(0x000000);
scene.background = fogColor;
scene.fog = new THREE.Fog(fogColor, 0.60, 10); 

//camara 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
//geometrias 
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 7;

//renderizado
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
//animación
function animate() {
	requestAnimationFrame( animate );
   cube.rotation.x += 0.01;
   cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();

//webgl libreria que permite ver los archivos guardados en pantalla 
