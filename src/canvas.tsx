import React, { Component } from 'react';
import * as THREE from 'three';

export class Canvas extends Component {
  myRef: React.RefObject<any>;
  scene: THREE.Scene;
  camera: THREE.Camera;
  renderer: THREE.Renderer;
  geometry: THREE.BoxGeometry;
  material: THREE.MeshBasicMaterial;
  cube: THREE.Mesh;

  constructor(props: any) {
    super(props)
    this.myRef = React.createRef();

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGL1Renderer();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.geometry = new THREE.BoxGeometry();
    this.material = new THREE.MeshBasicMaterial({ color: 0x32a852 });
    this.cube = new THREE.Mesh(this.geometry, this.material)
  }
  animate = () => {
    requestAnimationFrame(this.animate)
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.renderer.render(this.scene, this.camera);

  }
  componentDidMount() {

    this.myRef.current.appendChild(this.renderer.domElement);
    this.scene.add(this.cube);
    this.camera.position.z = 5;
    this.animate()
  }
  render() {
    return (
      <div className="kanakanak" ref={this.myRef} />
    );
  }
}
