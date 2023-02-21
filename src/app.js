import * as Three from 'three';
import gsap from 'gsap';
import GUI from 'lil-gui';

const canvas = document.querySelector('.webgl');

// Add Scene

const scene = new Three.Scene();

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
