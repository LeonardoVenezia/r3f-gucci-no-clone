import { Environment, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Images from "./components/Images";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [position, setPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});

  const selectPhoto = (photo) => {
    setOpen(true);
    setSelected(photo);
  }

  const handleWheel = (e) => {
    if (e.deltaY > 0) {
      setPosition(position + .15);
    } else {
      setPosition(position - .15);
    }
  };

  return (
    <>
      <h1 className="title">Leo Venezia</h1>
      <Modal open={open} setOpen={setOpen} selected={selected} />
      <Canvas className="canvas" onWheel={handleWheel}>
        <ambientLight />
        <Environment preset="sunset" />
        <Images position={position} selectPhoto={selectPhoto} />
        <Stars />
      </Canvas>
    </>
  );
}

export default App
