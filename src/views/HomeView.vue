  <template>
    <!-- Add the canvas for Three.js rendering -->
    <canvas class="threejs"></canvas>
  </template>

  <script setup lang="ts">
  import * as THREE from 'three';
  import { onMounted } from 'vue';
// intialize the scene
  const scene = new THREE.Scene();

//odd objects to the scene
  const cubeGeometry = new  THREE.BoxGeometry(1,1,1)
  const cubeMaterial = new THREE.MeshBasicMaterial({color: "red"})

  const cubeMesh = new THREE.Mesh(
    cubeGeometry,
    cubeMaterial,
  )

  scene.add(cubeMesh)

  //initialize the camera
  const camera  = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,30)

  //postion the camere
  camera.position.z =5

  //intizialize the render 
  // Use the onMounted lifecycle hook to ensure the canvas is available
onMounted(() => {
  // Select the canvas element
  const canvas = document.querySelector('canvas.threejs');
  
  // Check if the canvas exists before initializing the renderer
  if (canvas) {
    // Initialize the renderer with the canvas
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    });

    // Set the size of the renderer
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Render the scene
    renderer.setSize(window.innerWidth,window.innerHeight)
    renderer.render(scene, camera);
  }
});

  console.log(cubeMesh)
  console.log(scene)
  
  </script>

  <style scoped>
  </style>
