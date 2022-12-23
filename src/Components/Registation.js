import React,{useState,useEffect} from 'react'
import axios from 'axios';
export default function Registatiion() {
  const initialstate={
    'Username':'',
    'Password':''
}
const [state,setState]=useState(initialstate);
const [issubmit,setisSubmit]=useState(false);
const [formerror,setFormError]=useState('');
const {Username,Password}=state;
const handleSubmit=(e)=>{
  e.preventDefault();

  validation(state)
  setisSubmit(true);
}
const validation=(state)=>{
  const err={}
  const regname=/^[A-Za-z]+$/;

  const regpass= /^[A-Za-z0-9]{3,10}$/;
  if(!state.Username){
      // alert('please fill username');
      err.Username="please fill username";
  }
  
  if(!regname.test(state.Username)){
    err.username="please fill character only";
  }
  if(!regpass.test(state.Password)){
    err.userpass="please fill min 3 letter";
  }
  if(!state.Password){
      // alert('please fill password');
      err.userpass="please fill userpass";
  }
  setFormError(err);
  }
  useEffect(()=>{
const l=Object.keys(formerror).length;
if(l===0 && issubmit===true){
 axios.post(`http://localhost:4000/myapp`,state);
}
  },[formerror]);
  const handleChange=(e)=>{
// console.log(e.target.name);
// console.log(e.target.value);

const {name,value}=e.target;
// console.log(name);
// console.log(value);
setState({
    ...state,
    [name]:value
})


}
  const click =()=>{
    console.log(" CLICKED" + Pass );
     let newPass= "";
    setPass(newPass);
  }
  const EnterPass =(event)=>{
    console.log(" Pass Succesfullyy" );
   setPass(event.target.value);
  }



  const [Pass, setPass] = useState("Enter Password");







  
  return (
    <div>
       {Username}{Password}
<form action='' onSubmit={handleSubmit}>
    <label>Username</label>
    <input type="text"   id='RK' name='' /><br/><br/>

    <label>Password</label>
    <input type="text"  value={Pass}  onChange={EnterPass} name='' /><br/><br/>
    <span style={{color:'red'}}>{formerror.Password}</span>
  
  </form>

  <button onClick={click}>  submit</button>
    </div>
  
  )
}
