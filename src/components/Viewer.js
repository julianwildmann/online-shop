import React, { Component } from 'react';
import * as THREE from 'three';
import GLTFLoader from 'three-gltf-loader';


const OrbitControls = require("three-orbit-controls") (THREE);

class Viewer extends Component {
  constructor(props) {
    super(props);
    this.animate = this.animate.bind(this);
    this.addObject = this.addObject.bind(this);
  }

  componentDidMount(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    //ADD SCENE
    this.scene = new THREE.Scene()

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    this.camera.position.z = 5
  

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#AAAAAA')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)

    //ADD ORBIT CONTROL
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);

    //ADD CUBE
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: '#433F81'     })
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)

    //ADD OBJECT
    const loader = new GLTFLoader();
      loader.load('/3D-files/model.gltf', (object) => {
        this.scene.add(object.scene);
      });

    this.animate();

  }

  componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  animate = () => {
   this.renderScene()
   this.frameId = window.requestAnimationFrame(this.animate)
 }

 addObject (object) {
   this.scene.add(object);
 }
  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }


  render(){
    return(
      <div
        style={{ width: '400px', height: '400px' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default Viewer;