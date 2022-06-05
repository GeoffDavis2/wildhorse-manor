import Image from "next/image";

const RoomDetails = ({ room }) => {
  // TODO Use similar image scroller from Book Token project
  // TODO Figure out how to use NextJS Image component
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>{room.name}</h1>
      <img src="/3.jpg" alt="missing image" />
      {/* <div style={{ maxHeight: '50vh'}}>
        <Image src="/3.jpg" alt="missing image" layout="fill" />
      </div> */}
    </div>
  );
};

export default RoomDetails;
