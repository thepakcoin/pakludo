import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

function GameRoom() {
  const { roomId } = useParams();
  const [roomData, setRoomData] = useState(null);

  useEffect(() => {
    const roomRef = doc(db, "rooms", roomId);
    const unsub = onSnapshot(roomRef, (docSnap) => {
      if(docSnap.exists()) setRoomData(docSnap.data());
    });
    return () => unsub();
  }, [roomId]);

  const rollDice = async () => {
    if(!roomData) return;
    const dice = Math.floor(Math.random() * 6) + 1;
    const roomRef = doc(db, "rooms", roomId);
    await updateDoc(roomRef, { lastDice: dice });
  }

  return (
    <div>
      <h1>Game Room: {roomId}</h1>
      <p>Current Turn: {roomData?.turn}</p>
      <p>Last Dice: {roomData?.lastDice || "-"}</p>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default GameRoom;
