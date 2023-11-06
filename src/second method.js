import React, { useState } from 'react'

export default function TipCalculator() {
    function handlereset (){

        setbill("");
        setpercentage1(1);
        setpercentage2(2);
    }
    const[bill,setbill]=useState("");
    const [percentage1,setpercentage1]=useState(0);
    const [percentage2,setpercentage2]=useState(0);
    const tip = bill *(percentage1 +percentage2)/2/100;

  return (

    <div>
        <BillInput bill={bill} setbill={setbill}/>
        <SelectPercentage percentage={percentage1} onselect={setpercentage1}>How do you like the service ?</SelectPercentage> 
        <SelectPercentage percentage={percentage2} onselect={setpercentage2}>How do your friend likes the service? </SelectPercentage> 
       { bill>0 && <>
        <Output bill={bill} tip={tip}/>
        <Reset onreset={handlereset}/>
        </> }
    </div>
  )
}
function BillInput ({bill,setbill}){

return (
    <div>
          How much was the bill? 
        <input type="text"  value={bill} onChange={(e)=>setbill(Number(e.target.value))}/> <br/>
    </div>
)
}

function SelectPercentage ({children,percentage}){
return(
    <div>
       <label> {children} </label>
       <select value={percentage} onChange={(e)=>onselect(Number(e.target.value))}>
          <option value={0}>Dissatisfied (0%)</option>
          <option value={5}>it was ok (5%)</option>
          <option value={10}>it was good (10%)</option>
          <option value={20}>absolutely amazing (20%)</option>

          </select>
    </div>
)
}

function Output ({bill,tip}){
    return (
<div>You pay {bill + tip}  (${bill} +$(tip) tip )
</div>
        )
}
function Reset (){
return <button onClick={onreset}> reset</button>
}