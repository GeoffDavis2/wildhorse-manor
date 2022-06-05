import { useState } from "react";
import fs from "fs";
import RoomSelector from "../components/room-selector";
import RoomDetails from "../components/room-details";

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState(0);

  // TODO Move this to a separate file
  // TODO Load images from a folder into elements of this array
  const rooms = [
    { name: "Master Bedroom", status: "available" },
    { name: "West Bedroom", imageFolder: "", status: "occupied" },
    { name: "Northwest Bedroom", status: "occupied" },
    { name: "Northeast Bedroom", status: "available" },
    { name: "Southeast Bedroom", status: "occupied" },
    { name: "Studio-like Room", status: "available" },
  ];

  return (
    <div style={{ display: "flex", flexGrow: 1 }}>
      <RoomSelector
        selectedRoom={selectedRoom}
        setSelectedRoom={setSelectedRoom}
        rooms={rooms}
      />
      <RoomDetails room={rooms[selectedRoom]} />
    </div>
  );
}

export async function getStaticProps() {
  const images = fs.readdirSync("./public/images/room1");
  console.log(images);

  return {
    props: { test: "test" },
  };
}
