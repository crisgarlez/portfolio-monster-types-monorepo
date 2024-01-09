"use client";

import { useEffect, useState } from "react";
import { trpc } from "./trpc";
import Table from "./components/Table";

export default function Clientside() {
  const [greeting, setGreeting] = useState("");
  const [monstersTypes, setMonstersTypes] = useState([]);

  useEffect(() => {
    trpc.hello.query({}).then((response) => {
      setGreeting(response);
    });
  });

  useEffect(() => {
    trpc.getMonsterTypes.query().then((response) => {
      console.log("response: " + JSON.stringify(response));
      setMonstersTypes(response);
    });
  }, []);

  return (
    <div>
      <p>Client side</p>

      <div>
        <h1>Tabla de Datos</h1>
        {monstersTypes && <Table data={monstersTypes} />}
      </div>
    </div>
  );
}
