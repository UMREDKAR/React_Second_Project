import React, { useState } from "react";

const Form = (props)=>{
  
    const[medicineName,setMedicineName] = useState('');
    const[description,setDescription] = useState('');
    const[price,setPrice] = useState('');
    const[quantity,setQuantity] = useState('');
   

    function nameHandler(event)
    {
        event.preventDefault();
        setMedicineName(event.target.value);
        //console.log(event.target.value);
    }

    function descriptionHandler(event)
    {
        event.preventDefault();
        setDescription(event.target.value);
        //console.log(event.target.value);
    }

    function priceHandler(event)
    {
        event.preventDefault();
        setPrice(event.target.value);
        //console.log(event.target.value);
    }

    function quantityHandler(event)
    {
        event.preventDefault();
        setQuantity(event.target.value);
        //console.log(event.target.value);
    }

    function submitHandler(event)
    {
        event.preventDefault();

        let arr={
                 medicineName: medicineName,
                 description: description,
                 price: price,
                 quantity: quantity
                
                }
            
        //console.log(obj);
        props.getData(arr);
        props.onAddList(medicineName,description,price,quantity);
        setMedicineName('');
        setDescription('');
        setPrice('');
        setQuantity('');
    }


    return(
    <form onSubmit={submitHandler}>
        <label>Medicine Name</label>
        <input type="text" value={medicineName} onChange={nameHandler} required></input>
        <label>Description</label>
        <input type="text" value={description} onChange={descriptionHandler} required></input>
        <label>Price</label>
        <input type="number" value={price} onChange={priceHandler} required></input>
        <label>Quantity</label>
        <input type="number" value={quantity} onChange={quantityHandler} required></input>
        <button>Add Product</button>
    </form>);
}

export default Form;