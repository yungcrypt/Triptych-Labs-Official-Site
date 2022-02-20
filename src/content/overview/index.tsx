import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import Logo from 'src/components/LogoSign';
import * as THREE from 'three';
import { useState, useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
// import randomColor from 'randomcolor';
// import CameraControls from 'camera-controls';
import planetData from './planets';
import { useSpring } from 'react-spring';
// import Hero from './Hero';
import { OrbitControls } from '@react-three/drei';

const LandingContainer = styled(Container)(
  () => `
    max-width: 100%;
    align-items: center;
`,
);
const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`,
);

// CameraControls.install({ THREE });
const randomPos = (min = 5, max = -5) => Math.random() * (max - min) + min;

function Controls({
  zoom,
  focus,
  pos = new THREE.Vector3(),
  look = new THREE.Vector3(),
}) {
  const camera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  // const controls = useMemo(() => new CameraControls(camera, gl.domElement), []);

  useSpring({
    from: {
      z: 300,
    },
    z: 2,
    onFrame: ({ z }) => {
      camera.position.z = z;
    },
  });

  /*
  useFrame((state, delta) => {
    // zoom ? pos.set(focus.x, focus.y, focus.z + 0.2) : pos.set(0, 0, 5);
    // zoom ? look.set(focus.x, focus.y, focus.z - 0.2) : look.set(0, 0, 4);

    // state.camera.position.lerp(pos, 0.5);
    // state.camera.updateProjectionMatrix();

    console.log(
      state.camera.position.x,
      state.camera.position.y,
      state.camera.position.z,
      look.x,
      look.y,
      look.z,
      true,
    );

    controls.setLookAt(
      state.camera.position.x,
      state.camera.position.y,
      state.camera.position.z,
      look.x,
      look.y,
      look.z,
      true,
    );
    return controls.update(delta);
  });
  */

  return (
    <OrbitControls
      autoRotate
      target={[0, 0, 0]}
      args={[camera, gl.domElement]}
    />
  );
}

function Cloud({ momentsData, zoomToView }) {
  return momentsData.map(({ position, color }, i) => (
    <mesh
      key={i}
      position={position}
      onClick={(e) => zoomToView(e.eventObject.position)}
    >
      <boxGeometry args={[0.1, 0.08, 0.003]} />
      <meshStandardMaterial color={color} />
    </mesh>
  ));
}

function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial color="#E1DC59" />
    </mesh>
  );
}
function Planet({ planet: { color, xRadius, zRadius, size } }) {
  const planetRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    const x = xRadius * Math.sin(t);
    const z = zRadius * Math.cos(t);
    // @ts-ignore
    planetRef.current.position.x = x;
    // @ts-ignore
    planetRef.current.position.z = z;
  });

  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <Ecliptic xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
    </>
  );
}

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    // @ts-ignore
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
    </line>
  );
}

function Overview() {
  const [zoom, setZoom] = useState(false);
  const [focus, setFocus] = useState({});
  return (
    <OverviewWrapper>
      <Helmet>
        <title>Triptych Laborare</title>
      </Helmet>
      <LandingContainer>
        <Box display="flex" justifyContent="center" alignItems="center">
          <Logo />
        </Box>
        <Canvas
          style={{ height: '100vh', width: '100%' }}
          linear
          camera={{ position: [0, 0, 5] }}
        >
          <ambientLight />
          <directionalLight position={[150, 150, 150]} intensity={0.55} />
          <Sun />
          {planetData.map((planet) => (
            <Planet planet={planet} key={planet.id} />
          ))}
          <Controls zoom={zoom} focus={focus} />
        </Canvas>
      </LandingContainer>
    </OverviewWrapper>
  );
}

export default Overview;
/*
          <Cloud
            momentsData={momentsArray}
            zoomToView={(focusRef) => (setZoom(!zoom), setFocus(focusRef))}
          />
          */
