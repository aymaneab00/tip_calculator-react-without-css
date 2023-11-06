import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="">
    <Form/>
    </div>
  );
}
function Form(){
  const [bill,setbill]=useState(0);
  const [service,setservice]=useState(0);
  const [serviefriend,setsf]=useState(0);
  var iservice;
  switch(service){
    case 0: iservice=0;
    break;
    case 1:  iservice = 5; break;
    case 2: iservice=10; break;
    case 3: iservice = 20; break;
default : 
iservice= ""; }
var fservice ;
switch(serviefriend){
  case 0 : fservice=0;break;
  case 1: fservice=5;break;
  case 2: fservice =10; break;
  case 3 : fservice =20; break;
  default : 
  fservice='';}
  function reset (){
    setbill(0);
    setservice(0);
    setsf(0)
  }
  return(
    <div>
      <form>
        How much was the bill? 
        <input type="number" min='0' value={bill} onChange={(e)=>setbill(Number(e.target.value))}/> <br/>
{/* {console.log(bill)} */}
        How did you like the service ?
        
         <select value={service} onChange={(e)=>setservice(Number (e.target.value))}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={1}>it was ok (5%)</option>
          <option value={2}>it was good (10%)</option>
          <option value={3}>absolutely amazing (20%)</option>

          </select> <br/>


        How did your friend like the service ?
        <select value={serviefriend} onChange={(e)=>setsf(Number(e.target.value))}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={1}>it was ok (5%)</option>
          <option value={2}>it was good (10%)</option>
          <option value={3}>absolutely amazing (20%)</option>

          </select>
      </form>
      <div className='output'>
      
        
        
        { bill!==0 ?<div>
         <h1> You Pay  ${bill + (iservice + fservice) / 2}

      
        ($ {bill}+${(iservice + fservice) / 2} tip)</h1>  
        <button onClick={reset}>reset</button>
           </div>
        
        :'' }
      </div>
    </div>
  )
}
export default App;

