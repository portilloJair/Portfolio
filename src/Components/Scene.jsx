import { Box, Flex, VStack, Image, Center, Link } from "@chakra-ui/react";
import { useRef, useEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import githublogo from "../assets/icons/github-icon.png";
import mailogo from "../assets/icons/mail-icon.png";

export default function Scene() {
  const mountRef = useRef(null);
  useEffect(() => {
    const currentMount = mountRef.current;
    //Scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      25,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );

    camera.position.x = 5;
    camera.position.y = 12;
    camera.position.z = 40;

    // console.log(camera);
    //Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    //Controls
    const controls = new OrbitControls(camera, renderer.domElement);

    const color = "#f0e8db";
    const intensity = 2.25;
    const light = new THREE.AmbientLight(color, intensity);
    scene.add(light);

    let obj;
    //Loader
    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      "./model/portfolio.glb",
      (gltf) => {
        let size = 0.4;
        obj = gltf.scene;
        gltf.scene.position.y = -1;
        gltf.scene.castShadow = true; //default is false
        gltf.scene.receiveShadow = true; //default
        gltf.scene.scale.set(size, size, size);
        scene.add(gltf.scene);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100) + "% loaded";
      },
      (error) => {
        console.log("Ocurrio un error : " + error);
      }
    );

    camera.rotation.x = 50;
    // renderer.render(scene, camera)
    const animate = () => {
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
      if (obj) {
        obj.rotation.y += 0.01;
      }
    };

    animate();
  }, []);
  return (
    <div style={{ style: "height: 100vh" }}>
      <VStack
        spacing={0}
        mx={"auto"}
        w={{ lg: "40rem", md: "75%", sm: "80%", base: "90%" }}
        // h={{ lg: "15rem", md: "50%", sm: "50%", base: "50%" }}
        // bgColor="rgba(0,0,255,.2)"
      >
        <Center w={"100%"} h={"10rem"} ref={mountRef}></Center>
        <Flex
          w={"100%"}
          // h={"15%"}
          // bgColor="rgba(0,25,0,.2)"
          alignItems={"center"}
          justifyContent={"end"}
        >
          {/* <ImageItem logo={githublogo}></ImageItem>
          <ImageItem logo={mailogo}></ImageItem> */}
          <Link href="https://github.com/portilloJair" isExternal>
            <ImageItem logo={githublogo}></ImageItem>
          </Link>
          <Link href="mailto:portillojair@gmai.com" isExternal>
            <ImageItem logo={mailogo}></ImageItem>
          </Link>
        </Flex>
      </VStack>
    </div>
  );

  function ImageItem({ logo, size = "2rem" }) {
    return (
      <Image
        src={logo}
        w={size}
        h={size}
        // bgColor="rgba(0,255,0,.2)"
        objectFit={"cover"}
        // bgColor="black"
        p={1}
        ml=".1rem"
        cursor={"pointer"}
      ></Image>
    );
  }
}
