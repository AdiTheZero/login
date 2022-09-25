
import {useState,  useEffect} from "react";
function Second()
{
const [msg,setmsg]=useState("");
const [msgs,setmsgs]=useState([]);
useEffect(()=> {
    //let users_data=JSON.parse(localStorage["users"])
   try{
    let msgs_data=JSON.parse(localStorage["msgs"])
    console.log(msgs_data)
    setmsgs(msgs_data)
   }catch(e)
   {
   localStorage['msgs']=JSON.stringify([])
   }
},[])
useEffect(()=> {
  console.log(msgs)
  localStorage['msgs']=JSON.stringify(msgs)
},[msgs])
const click= ()=>
{
  setmsgs(msgs=>[...msgs,msg])
}
return<>
    <div style={ { display: "flex", flexDirection : "column", textAlign :"center", padding :"15%" } }>
        <h1>
          Home Page
        </h1>
        
        <lable>
          <h2>
          Messages
          </h2>
      </lable> 


      {msgs.map((x) =>{ 

        return <div>
            {x}
        </div>
       } )}
        
        <input type="textarea" value={msg} onChange ={ (e)=> setmsg (e.target.value) }/>
        <button onClick={click}>Submit</button>
        </div>
        </>
}

export default Second