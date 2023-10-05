import { menuAPI } from '@/API/menuAPI';
export default async function Menu() {
   
    const menu =await menuAPI(0);
    return <>
   
     {JSON.stringify(menu)}
      </>;
  }