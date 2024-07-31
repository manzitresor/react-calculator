import { useState } from "react";
import Buttons from "./Buttons";

export default function Calculate() {
    const buttons = ['AC', '+/-', '%', '÷', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
    const [input,setInput] = useState('0')
    const [prevInput,setPrevInput]= useState(0);
    const [operation, setOperation] = useState(null)

    function isNumber(item) {
         return !!item.match(/[0-9]+/);
    }
    

    function handleClick(event){
        const textData = event.target.innerText;

        if(textData === 'AC') {
            setInput(0);
            setPrevInput(0);
            setOperation(null);
        }
        else if(isNumber(textData)){
            setInput(prev=>(
                prev === 0 && textData === '0'? '0': Number(prev + textData) 
            ))
        } else if(textData  === '+/-') {
            setInput(prev => -prev)
        } else if(textData === '%') {
            setInput(prev => prev / 100)
        } else if((['+','-','x','÷']).includes(textData)) {
            setPrevInput(input);
            setInput('');
            setOperation(textData)
        } else if(textData === '=') {
            let result;
            if(prevInput && operation !== null) {
                switch(operation) {
                    case '+':
                        result = parseFloat(prevInput) + parseFloat(input);
                    break; 
                    case '-':
                        result = parseFloat(prevInput) - parseFloat(input);
                    break; 
                    case 'x':
                        result = parseFloat(prevInput) * parseFloat(input);
                    break; 
                    case '÷':
                        result = parseFloat(prevInput) / parseFloat(input);
                    break; 
                }
                setInput(result);
                setOperation(null);
                setPrevInput(null);
            }
           
        }
       
        
    }
    
    return (
        <div>
            <div className='h-16 w-full bg-gray-500 text-white'>
                <h1 className="text-right text-5xl px-4 ">{input || prevInput}</h1>
                <div className="grid grid-cols-4 w-full">
                    {buttons.map((button, index) => (
                        <Buttons key={index} button={button} index={index} handleClick={handleClick}></Buttons>
                    ))}
                </div>
            </div>
        </div>
    );
}
