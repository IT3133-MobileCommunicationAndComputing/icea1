export default function Cart(props) {
    
    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>

                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>

                </thead>
                {
                   props.items.map((item)=>(
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                        <td>{item.price}</td>
                    </tr>
                ))  
                }
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>{props.total}</td>
                </tr>
            </table>
           
        </div>
    );
}