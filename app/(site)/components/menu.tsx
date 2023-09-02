import { getMenu } from "@/api/menu";

async function Menu() {
  const menu = await getMenu(0);
  return (
    <main>
      <div> {menu.length}</div>
    </main>
  );
}

export default Menu;
