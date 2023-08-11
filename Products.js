const Products = (props) =>{

   const {pro} = props;
   let first = 
    <li key={pro.amount+Math.random()}>
    {pro.medicine}------
    {pro.describe}------
    {pro.amount}------
    {pro.qty}------
    <button>Add To Cart</button>
    </li> 

    let dis;

    if(first.props.children[0].length>0 &&
        first.props.children[2].length>0 &&
        first.props.children[4]>0 &&
        first.props.children[6]>0
        )
    {
       dis=first;
    }
   
    return(
        <div>
            {dis}
        </div>
    );
}

export default Products;