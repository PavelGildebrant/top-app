import React from 'react';
import { menuAPI } from '@/API/menuAPI';

export default async function Home() {
  const menu =await menuAPI(0);
  return <>
  <div>
   {JSON.stringify(menu)}
    </div></>;
}
