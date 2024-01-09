import Clientside from "./Clientside";
import Table from "./components/Table";
import { trpc } from "./trpc";

export default async function Home() {
  const response = await trpc.hello.query({ name: "Cristhian" });
  const monsterTypes: any[] = await trpc.getMonsterTypes.query();

  console.log("monsterTypes:" + JSON.stringify(monsterTypes));
  return (
    <div>
      <p>Server side</p>

      <div>
        <h1>Tabla de Datos</h1>
        {/* {monsterTypes.length > 0 && <Table data={monsterTypes} />} */}
      </div>

      <Clientside />
    </div>
  );
}
