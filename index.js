import * as THREE from 'three';
import { OrbitControls } from 'https://unpkg.com/three@0.145.0/examples/jsm/controls/OrbitControls.js';





const clock = new THREE.Clock()
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;


const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));



/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

/**
 * Auto Update screen
 */

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

const texture = new THREE.TextureLoader().load( 'bad1.png' );

// immediately use the texture for material creation
const material = new THREE.MeshBasicMaterial( { map: texture } );

// Cards

const geometry = new THREE.PlaneGeometry(5,5);
// const material = new THREE.MeshLambertMaterial({ color: 0xffffff, side: THREE.DoubleSide });
const mesh = new THREE.Mesh(geometry, material);
mesh.position.set(29, 0, 0)
material.transparent= true;
material.opacity = 0.0
scene.add(mesh);


const material2 = new THREE.MeshLambertMaterial({ color: 0xffff00, side: THREE.DoubleSide });
const mesh2 = new THREE.Mesh(geometry, material2);
mesh2.position.set(29, 0, 0)
material2.transparent= true;
material2.opacity = 0.0;
scene.add(mesh2);


const material3 = new THREE.MeshLambertMaterial({ color: 0xff0000, side: THREE.DoubleSide });
const mesh3 = new THREE.Mesh(geometry, material3);
mesh3.position.set(29, 0, 0)
material3.transparent= true;
material3.opacity = 0.0;
scene.add(mesh3);


const material4 = new THREE.MeshLambertMaterial({ color: 0xC724B1, side: THREE.DoubleSide });
const mesh4 = new THREE.Mesh(geometry, material4);
mesh4.position.set(29, 0, 0);
material4.transparent= true;
material4.opacity = 0.0;
scene.add(mesh4);




// Star Geometry
const particleGeometry = new THREE.BufferGeometry;
const starMaterial = new THREE.PointsMaterial({size: 0.02})
const particaleCnt = 10000;

const positionArray = new Float32Array(particaleCnt*3);
for(let i = 0 ; i< particaleCnt*3; i++){
  positionArray[i] = (Math.random() - 0.5) * (Math.random()*50);
}
particleGeometry.setAttribute('position',new THREE.BufferAttribute(positionArray,3))

const particlesMesh =  new THREE.Points(particleGeometry,starMaterial);
particlesMesh.position.set(0,0,0);
scene.add(particlesMesh);





// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(0, 0, 1);
scene.add(light);





/**
 * Animate
 */

 let t1 = new TimelineMax();
 
 
 
 const showGreenButton = document.getElementById('btn-green');


 showGreenButton.addEventListener('click' ,() =>{
    //  var registorbtn = document.getElementsByClassName('btn-5')
    //  console.log(registorbtn)
    //  var displaySetting = registorbtn.style.d

     t1.to(mesh2.position,1,{z:-15});
     t1.to(material2,1,{opacity:0.0},"=-1");
     t1.to(mesh2.position,0.1,{x:29,z:0});

 
     
     t1.to(mesh3.position,1,{z:-15})
     t1.to(material3,1,{opacity:0.0},"=-1")
     t1.to(mesh3.position,0.1,{x:29,z:0})
     
 
     
     t1.to(mesh4.position,1,{z:-15},"=-1")
     t1.to(material4,1,{opacity:0.0},"=-1")
     t1.to(mesh4.position,0.1,{x:29,z:0})
     
 
     t1.to(mesh.position,1,{x:0},"=-1")
     t1.to(material,1,{opacity:1},"=-1")
     t1.to(mesh.scale,0.5,{y:1.03,y:1.03})
 })
 
 const showYellowButton = document.getElementById('btn-yellow');
 showYellowButton.addEventListener('click', () =>{
   
     
     t1.to(mesh.position,1,{z:-15})
     t1.to(material,1,{opacity:0.0},"=-1")
     t1.to(mesh.position,0.1,{x:29,z:0})


     t1.to(mesh3.position,1,{z:-15},"=-1")
     t1.to(material3,1,{opacity:0.0},"=-1")
     t1.to(mesh3.position,0.1,{x:29,z:0})
     
 
    
     t1.to(mesh4.position,1,{z:-15},"=-1")
     t1.to(material4,1,{opacity:0.0},"=-1")
     t1.to(mesh4.position,0.1,{x:29,z:0})
    
 
     t1.to(mesh2.position,1,{x:0},"=-1")
     t1.to(material2,1,{opacity:1},"=-1")
     t1.to(mesh2.scale,0.5,{x:1.03,y:1.03})
 })
 
 const showRedButton = document.getElementById('btn-red');
 showRedButton.addEventListener('click', () =>{
 
     
     t1.to(mesh.position,1,{z:-15},"=-0.5")
     t1.to(material,1,{opacity:0.0},"=-1")
     t1.to(mesh.position,0.1,{x:29,z:0})
     
 
     t1.to(mesh2.position,1,{z:-15})
     t1.to(material2,1,{opacity:0.0},"=-1")
     t1.to(mesh2.position,0.1,{x:29,z:0})
  
 
     
     t1.to(mesh4.position,1,{z:-15},"=-0.5")
     t1.to(material4,1,{opacity:0.0},"=-1")
     t1.to(mesh4.position,0.1,{x:29,z:0})
   
 
     t1.to(mesh3.position,1,{x:0},"=-1")
     t1.to(material3,1,{opacity:1},"=-1")
     t1.to(mesh3.scale,0.5,{x:1.03,y:1.03})
 })
 
 const showPurpleButton = document.getElementById('btn-purple');
 showPurpleButton.addEventListener('click', () =>{
 
     
     t1.to(mesh.position,1,{z:-15},"=-0.5")
     t1.to(material,1,{opacity:0.0},"=-1")
     t1.to(mesh.position,0.1,{x:29,z:0})
    
 
     
     t1.to(mesh2.position,1,{z:-15})
     t1.to(material2,1,{opacity:0.0},"=-1")
     t1.to(mesh2.position,0.1,{x:29,z:0})
     
 
    
     t1.to(mesh3.position,1,{z:-15})
     t1.to(material3,1,{opacity:0.0},"=-1")
     t1.to(mesh3.position,0.1,{x:29,z:0})
     
 
     t1.to(mesh4.position,1,{x:0},"=-1")
     t1.to(material4,1,{opacity:1},"=-1")
     t1.to(mesh4.scale,0.5,{x:1.03,y:1.03})
 
 })





//  const controls = new OrbitControls( camera, renderer.domElement );
 





function animate() {

    const elapsedTime= clock.getElapsedTime()

    
    particlesMesh.rotation.y = -0.1 * elapsedTime;
    particlesMesh.rotation.x = -0.1 * elapsedTime;
    particlesMesh.rotation.z = -0.1 * elapsedTime;
    // camera.rotation.z += 0.01
    
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
};

animate();