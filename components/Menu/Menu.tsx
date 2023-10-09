import { menuAPI } from '@/API/menuAPI';

export default async function Menu() {
  const menu = await menuAPI(0);
  return (
    <>
      <ul>
        {menu.map((m) => {
          return <li key={m._id.secondCategory}>{m._id.secondCategory}</li>;
        })}
      </ul>
    </>
  );
}
