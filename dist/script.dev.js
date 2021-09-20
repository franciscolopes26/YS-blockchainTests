"use strict";

var scene = new THREE.Scene();
document.addEventListener('mousemove', onMouseMove, true);
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500);
var mouseX;
var mouseY;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  camera.add_img();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
var distance = Math.min(200, window.innerWidth / 4);
var geometry = new THREE.Geometry();

for (var i = 0; i < 5000; i++) {
  var vertex = new THREE.Vector3();
  var theta = THREE.Math.randFloatSpread(360);
  var phi = THREE.Math.randFloatSpread(360);
  vertex.x = distance * Math.sin(theta) * Math.cos(phi);
  vertex.y = distance * Math.sin(theta) * Math.sin(phi);
  vertex.z = distance * Math.cos(theta);
  geometry.vertices.push(vertex);
}

var particles = new THREE.Points(geometry, new THREE.PointsMaterial({
  color: 'FFFFFF',
  size: 1
}));
particles.boundingSphere = 1;

function add_img() {
  var img = document.createElement('img');
  img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
  document.getElementById('bola').appendChild(img);
}

var renderingParent = new THREE.Group();
renderingParent.add(particles);
var resizeContainer = new THREE.Group();
resizeContainer.add(renderingParent);
scene.add(resizeContainer);
camera.position.z = 400;

var animate = function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

var myTween;

function onMouseMove(event) {
  if (myTween) myTween.kill();
  mouseX = event.clientX / window.innerWidth * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
  myTween = gsap.to(particles.rotation, {
    duration: 0.1,
    x: mouseY * -1,
    y: mouseX
  }); //particles.rotation.x = mouseY*-1;
  //particles.rotation.y = mouseX;
}

animate(); // Scaling animation

var animProps = {
  scale: 1,
  xRot: 0,
  yRot: 0
};
gsap.to(animProps, {
  duration: 10,
  scale: 1.3,
  repeat: -1,
  yoyo: true,
  ease: "sine",
  onUpdate: function onUpdate() {
    renderingParent.scale.set(animProps.scale, animProps.scale, animProps.scale);
  }
});
gsap.to(animProps, {
  duration: 10,
  xRot: Math.PI * 2,
  yRot: Math.PI * 4,
  repeat: -1,
  yoyo: true,
  ease: "none",
  onUpdate: function onUpdate() {
    renderingParent.rotation.set(animProps.xRot, animProps.yRot, 0);
  }
});
//# sourceMappingURL=script.dev.js.map
