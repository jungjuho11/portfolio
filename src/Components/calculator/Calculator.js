import { useEffect, useState } from "react";
import "./calculator.css"

const Calculator = () => {

    const [total, setTotal] = useState(null);
    const [userInput, setUserInput] = useState('');
    const [needMoreInput, setNeedMoreInput] = useState(false);
    const [operator, setOperator] = useState(null);
    //we need to keep track of when the user starts a new input, for example, 23 + 200

    function equal(op, a, b) {
        switch (op) {
            case "÷": return Number(a) / Number(b);
            case "X": return Number(a) * Number(b);
            case "-": return Number(a) - Number(b);
            case "+": return Number(a) + Number(b);
        }
    }

    const handleClick = (e) => {
        switch (e) {
            //NEEDS SECOND INPUT
            //when they press the operators, we need to set totalInput = userInput
            //and after selecting the operator, we need to start getting input from the user again
            case '÷':
                //console.log("you pressed divide")
                setOperator('÷');
                setNeedMoreInput(true);
                if ((userInput !== '') && total === null) {
                    setTotal(userInput);
                }
                setUserInput('');
                setNeedMoreInput(true);
                break;
                break;
            case 'X':
                //console.log("you pressed X")
                setOperator('X');
                setNeedMoreInput(true);
                if ((userInput !== '') && total === null) {
                    setTotal(userInput);
                }
                setUserInput('');
                setNeedMoreInput(true);
                break;
                break;
            case '-':
                //console.log("you pressed -")
                setOperator('-');
                setNeedMoreInput(true);
                if ((userInput !== '') && total === null) {
                    setTotal(userInput);
                }
                setUserInput('');
                setNeedMoreInput(true);
                break;
            case '+':
                setOperator('+');
                setNeedMoreInput(true);
                if ((userInput !== '') && total === null) {
                    setTotal(userInput); //this causes an issue because when the input is nothing, it will replace the total
                }
                setUserInput('');
                setNeedMoreInput(true);
                break;

            //DOESN'T NEED SECOND INPUT    
            case '=':
                console.log("you pressed =");
                setTotal(equal(operator, total, userInput));
                setNeedMoreInput(false);
                //setUserInput('') //this somehow makes the total go back to nothing after it calculates
                break;
            case '%':
                console.log("you pressed %")
                setTotal(total / 100)
                break;
            case 'C':
                console.log("you pressed C")
                setTotal(null);
                setUserInput('');
                setNeedMoreInput(false);
                setOperator(null);
                break;
            case '+/-':
                console.log("you pressed +/-")
                setTotal(total * -1);
                break;
            default: //This includes the numbers and the decimal
                //this get's the string of numbers from the user and saves it in userInput
                if (needMoreInput) { //if there is an operator, then we need to do move our current input to total, then scart recording the second input
                    setUserInput(userInput + e);
                    console.log("this is our second input: " + userInput);
                } else { //if there is no operator
                    setUserInput(userInput + e);
                }
        }
    }

    //everytime userInput changes, log out what the total userinput is
    useEffect(() => {
        if (!needMoreInput) { //when it doesn't need second input from the user after selecting the operator
            //console.log("from useEffect!"+userInput);
            setTotal(userInput);
        } else {
            //console.log("from useEffect!"+userInput);
        }
    }, [userInput])

    useEffect(() => {
        console.log("userInput has been changed: " + userInput)
    }, [userInput]);

    return (
        <div className="container calculator text-center">
            <div className="row row-cols-4">
                <div className="container text-center col-12">
                    <div className="row row-cols-2">
                        <div class="col">User Input: </div>
                        <div class="col">{userInput}</div>
                        <div class="col">Total: </div>
                        <div class="col">{total}</div>
                    </div>
                </div>
                <div className="col"><button type="button" className="btn btn-dark" onClick={() => { handleClick("C") }}>C</button></div>
                <div className="col"><button type="button" className="btn btn-dark" onClick={() => { handleClick("+/-") }}>+/-</button></div>
                <div className="col"><button type="button" className="btn btn-dark" onClick={() => { handleClick("%") }}>%</button></div>
                <div className="col"><button type="button" className="btn btn-warning" onClick={() => { handleClick("÷") }}>÷</button></div>
                <div className="col"><button type="button" className="btn btn-secondary" onClick={() => { handleClick(7) }}>7</button></div>
                <div className="col"><button type="button" className="btn btn-secondary" onClick={() => { handleClick(8) }}>8</button></div>
                <div className="col"><button type="button" className="btn btn-secondary" onClick={() => { handleClick(9) }}>9</button></div>
                <div className="col"><button type="button" className="btn btn-warning" onClick={() => { handleClick("X") }}>X</button></div>
                <div className="col"><button type="button" className="btn btn-secondary" onClick={() => { handleClick(4) }}>4</button></div>
                <div className="col"><button type="button" className="btn btn-secondary" onClick={() => { handleClick(5) }}>5</button></div>
                <div className="col"><button type="button" className="btn btn-secondary" onClick={() => { handleClick(6) }}>6</button></div>
                <div className="col"><button type="button" className="btn btn-warning" onClick={() => { handleClick("-") }}>-</button></div>
                <div className="col"><button type="button" className="btn btn-secondary" onClick={() => { handleClick(1) }}>1</button></div>
                <div className="col"><button type="button" className="btn btn-secondary" onClick={() => { handleClick(2) }}>2</button></div>
                <div className="col"><button type="button" className="btn btn-secondary" onClick={() => { handleClick(3) }}>3</button></div>
                <div className="col"><button type="button" className="btn btn-warning" onClick={() => { handleClick("+") }}>+</button></div>
                <div className="col-6"><button type="button" className="btn btn-secondary" onClick={() => { handleClick(0) }}>0</button></div>
                <div className="col"><button type="button" className="btn btn-secondary" onClick={() => { handleClick(".") }}>.</button></div>
                <div className="col"><button type="button" className="btn btn-warning" onClick={() => { handleClick("=") }}>=</button></div>
            </div>
        </div>
    );
}

export default Calculator;