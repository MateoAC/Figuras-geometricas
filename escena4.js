//escena
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

let loader = new THREE.TextureLoader();
loader.load('../imagenes/descarga.jpg', function(texture){
 scene.background = texture;
});

//camara 
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const geometry = new THREE.TorusKnotGeometry( 10, 3, 100, 16 );
const material = new THREE.MeshBasicMaterial( { color: 'yellow' } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );
camera.position.z = 30;

//renderizado
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
//animación
function animate() {
	requestAnimationFrame( animate );
   torusKnot.rotation.x += 0.01;
   torusKnot.rotation.y += 0.01;
	renderer.render( scene, camera );
}
animate();

//webgl libreria que permite ver los archivos guardados en pantalla 
