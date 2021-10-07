import { useEffect, useState } from "react";
import {Table} from 'react-bootstrap'


function List() {
    const [data, setData]=useState([]);
    useEffect( async ()=> {
        let result = await fetch("http://127.0.0.1:8000/api/list");
        let results = await result.json();
        setData(results)
    },[])
    console.log("results", data)
    return(
        <div>
            <div className="App-faixa"><h1>Lençol avulso</h1></div>
            
            <br/> <br/> <br/>
            <div className="row justify-content-center">
            <div className="col-lg-12">
            <div className="table-responsive">
            <Table  class="table " >
                {
                    data.map((item)=>
                    <tr>
                    <td><img src={"http://127.0.0.1:8000/"+item.imagem} width="100px"/><img src={"http://127.0.0.1:8000/"+item.imagem} width="100px"/> </td>
                    <td><div className="kit">{item.name}</div><div className="marca">{item.marca}|{item.tipo}</div></td>
                    <td><div className="text gray"> R${item.desconto}</div></td>
                    <td className="preco gray"> por R${item.preco}</td>
                    </tr>
                    )
                 }
            </Table>
        </div>
        </div>
        </div>
        </div>
    )
}
export default List;