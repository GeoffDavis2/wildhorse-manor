import { useState } from "react";

const RoomSelector = ({selectedRoom, setSelectedRoom, rooms}) => {

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "150px",
        justifyContent: "space-around",
        fontSize: "2rem",
        backgroundColor: "black",
        color: "white",
      }}
    >
      {rooms
        .filter((room) => room.status === "available")
        .map((room, i) => (
          <div
            style={{
              fontSize: "2rem",
              textAlign: "center",
              color: i === selectedRoom ? "red" : "white",
            }}
            key={i}
            onClick={() => setSelectedRoom(i)}
          >
            {room.name}
          </div>
        ))}
    </div>
  );
};

export default RoomSelector;
