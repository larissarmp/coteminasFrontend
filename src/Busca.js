import './App.css';
import lupa from './lupa.png';
function Busca() {
    return(
        <form action="/api/index?">
        <label className="App-busca" for="busca"></label>
        <input className="App-border " type="search" id="busca" name="term" placeholder ="Buscar"/>
        <button className="App-lupa" type="submit"><img src={lupa} width="20px" className="App-lupa"/></button>
      </form>
     
    )
}
export default Busca;