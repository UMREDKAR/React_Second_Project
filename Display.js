import React from "react";
import Products from "./Products";

const Display = (props)=>{
   
   
   const {anotherData} = props
   //console.log(sendData);
    //console.log(product);
   //console.log(product);
  
    // let cartItems = (
         
    //         product.map((item) => (
    //           <div key={item.price+1}>
    //           {/* <li> */}
    //           {/* {props.sendData[item].medicineName} */}

    //           {item.medicineName}------
    //           {item.description}------
    //           {item.price}------
    //           {item.quantity}------
    //           <button>Add To Cart</button>
    //           {/* </li> */}
    //           </div>
    //         ))
    //      );
        //  console.log(cartItems);

    // let cartd = 1>0 ?
    //   <ul>
    //        {product.map((item) => (
    //         <li key={item.price+1}>
    //         {/* {props.sendData[item].medicineName} */}

    //         {item.medicineName}------
    //         {item.description}------
    //         {item.price}------
    //         {item.quantity}------
    //         <button>Add To Cart</button>
    //         </li>
    //       ))}
    //    </ul>: <span>jjj</span>
    //    console.log(cartd)

         
    return(
    <div>
        <h3 style={{display:"inline"}}>MedicineName  ------ </h3>
        <h3 style={{display:"inline"}}>Description  ------ </h3>
        <h3 style={{display:"inline"}}>Price ------ </h3>
        <h3 style={{display:"inline"}}>Quantity</h3>
        
        <div>
        {anotherData.map((pro)=>(
          
          <Products
          key={pro.amount+Math.random()}
          pro={pro}>
          </Products> 
        ))}
        </div>
        
        {/* <div>
          <Products prod={product}></Products>
        </div> */}
        
        

        
        {/* <ul>
             {product.map((item) => (
              <li key={item.price+1}>
              

              {item.medicineName}------
              {item.description}------
              {item.price}------
              {item.quantity}------
              <button>Add To Cart</button>
              </li>
            ))}
         </ul>  */}

        {/* {cartd} */}
        
        {/* <li>{d.map((item)=>(
          <strong>{item.medicineName}</strong>
        ))}</li> */}
       
        {/* {cartItems}
        */}
        
        
    </div>);
}

export default Display;