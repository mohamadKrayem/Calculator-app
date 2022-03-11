import './Buttons.scss';
import Button from '../../Components/Button/Button';
import { useState } from 'react';

const Buttons = () => {

  const [result, setResult]= useState(0);
  const [second, setSecond] = useState(0);
  const [operation, setOperation] = useState('');

  function onClick( input ){
    const number = input.target.innerText;
    if(operation === '='){
      setSecond(result);
      setResult(number)
      setOperation('');
      return;
    }
    number =='.' & result==0 ? setResult('0'+number):
    result == '0' ? setResult(number) : setResult(result+number);
    if((result == 0 && parseFloat(number)==0) || number=="") setResult(0)
  }

  function onDelete(){
    if(result ==0 || (result!=0 && result.length==1)){
      setResult(0)
    }else {
      setResult(result.slice(0,result.length-1))
    }
  }

  function onPlus(){
    setSecond(parseFloat(second)+parseFloat(result));
    setResult(0);
    setOperation('+');
  }

  function onMinus(){
    setSecond(result);
    setResult(0);
    setOperation('-')
  }

  function onMultiply(){
    setSecond(result);
    setResult(0);
    setOperation('*');
  }

  function onSimplify(){
    setSecond(result);
    setResult(0);
    setOperation('/');
  }

  function onEqual(){
    setOperation('=')
    if(operation=="+"){
      setResult(parseFloat(second)+parseFloat(result));
      setSecond(0);
    }else if(operation=="-"){
      setResult(parseFloat(second)-parseFloat(result));
      setSecond(0);
    }else if(operation=="*"){
      setResult(parseFloat(second)*parseFloat(result));
      setSecond(0);
    }else if(operation=="/"){
      setResult(parseFloat(second) / parseFloat(result));
      setSecond(0);
    }
  }

  function onReset(){
    setResult(0);
    setOperation('');
    setSecond(0);
  }

  return (
    <div className="main">
      <div className="Result">
        <span>{result}</span>
      </div>
      <div className="Buttons">
        <Button content='7' onClick={onClick}/>
        <Button content='8' onClick={onClick}/>
        <Button content='9' onClick={onClick}/>
        <Button content='DEL' id='Del' onClick={onDelete}/>
        <Button content='4' onClick={onClick}/>
        <Button content='5' onClick={onClick}/>
        <Button content='6' onClick={onClick}/>
        <Button content='+' onClick={onPlus}/>
        <Button content='1' onClick={onClick}/>
        <Button content='2' onClick={onClick}/>
        <Button content='3' onClick={onClick}/>
        <Button content='-' onClick={onMinus}/>
        <Button content='.' onClick={onClick}/>
        <Button content='0' onClick={onClick}/>
        <Button content='/' onClick={onSimplify}/>
        <Button content='x' onClick={onMultiply}/>
        <Button 
          id='bigButtons1'
          content='RESET' 
          onClick={onReset}
        />
        <Button 
          id='bigButtons2'
          content='=' 
          onClick={onEqual}
        />
      </div>
      
    </div>
  )
}

export default Buttons