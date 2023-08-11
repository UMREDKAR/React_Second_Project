import React, { useState } from "react";
import Form from "./Component/Form";
import Display from "./Component/Display";
import Cart from "./Component/Cart";
function App() {
  
  const [data,setData] = useState('');
  const[userList,setUserList] = useState([]);
  
  function getDataHandler(datas)
  {
     setData(datas);
  }

  function getAddListHandler(uM,uD,uP,uQ)
  {
    setUserList((prevList)=>{
      return[...prevList,{medicine: uM, describe: uD, amount: uP, qty: uQ }];
   });
  }


  return (
    <div>
      <Form getData={getDataHandler} onAddList={getAddListHandler}/>
      <Cart/>
      <br/>
      <Display sendData={data} anotherData={userList}/>
    </div>
  );
}

export default App;
