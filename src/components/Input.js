import React, {useState} from "react";
import TextField from '@mui/material/TextField';


export const Input = (props) => {

const [name, setName] = useState(props.Name);
// const [amount, setAmount] = useState(props.Name);
// const [tax, setTax] = useState(props.Name);
// const [remarks, setRemarks] = useState(props.Name);

function inputValue(e){
  // if(props.Name==="Name"){
  setName(e.target.value)
// }
// if(props.Name==="Amount"){
//   setAmount(e.target.value)
// }
// if(props.Name==="Tax"){
//   setTax(e.target.value)
// }
// if(props.Name==="Remarks"){
//   setRemarks(e.target.value)
// }
}
  return (
    <TextField
    variant="standard"
    onChange={inputValue}
     value={name}
     InputProps={{disableUnderline: true }}
     />
  );
};
