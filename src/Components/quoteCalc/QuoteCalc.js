import { useEffect, useState } from "react";
//import QuoteCalcTop from "./QuoteCalcTop";
import QuoteCalcMid from "./QuoteCalcMid";
import QuoteCalcBot from "./QuoteCalcBot";
import './quoteCalc.css';

const QuoteCalc = () => {
    const [option, setOption] = useState(0);
    const [discount, setDiscount] = useState(0);
    const [parts, setParts] = useState([
        { bodyPart: "upperLip", price: 2000, discount: 0, discountedPrice: 2000, active: [false, false, false] },
        { bodyPart: "chin", price: 2100, discount: 0, discountedPrice: 2100,active: [false, false, false] },
        { bodyPart: "neck", price: 2200, discount: 0, discountedPrice: 2200, active: [false, false, false] },
        { bodyPart: "underarms", price: 2300, discount: 0, discountedPrice: 2300, active: [false, false, false] },
        { bodyPart: "forearms", price: 2400, discount: 0, discountedPrice: 2400, active: [false, false, false] },
        { bodyPart: "full arms", price: 2500, discount: 0, discountedPrice: 2500, active: [false, false, false] }
    ])

    //updates the parts.active to true depending on which option we currently have selected and the body parts
    const handleOnClick = (bodyPart) => {
        setParts(
            parts.map((part) => {
                if (part.bodyPart === bodyPart) {
                    //return {...part, active: [option] = true}
                    return { ...part, active: [...part.active.slice(0, option), true, ...part.active.slice(option + 1)] }
                } else {
                    return part;
                }
            })
        )
    }

    const changeAllDiscount = (discountAll) => {
        setParts(
            parts.map((part) => {
                //return {...part, price:discountAll}
                //console.log( {...part, price:discountAll})
            })
        )
    }

    useEffect(() => {
        //console.log("part has been changed and I noticed it in parent")
        setParts(
            parts.map((part) => {
                return {...part, discount:discount}
            })
        )
    }, [discount])

    useEffect(() => {
        //console.log("parts has been updated with the new discounted rate?");
        //console.log({parts});
    }, [parts])

    return (
        <div className="container">

            <div className="pb-3">
                <button className="btn btn-primary mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#face" aria-expanded="false" aria-controls="face">
                    FACE/NECK
                </button>
                <div className="collapse" id="face">
                    <button type="button" className="btn btn-secondary sub-button" aria-pressed="false" autoComplete="off" onClick={() => { handleOnClick("upperLip") }}>
                        Upper Lip
                    </button>
                    <button type="button" className="btn btn-secondary sub-button" data-bs-toggle="button" aria-pressed="false" autoComplete="off" onClick={() => handleOnClick("chin")}>
                        Chin
                    </button>
                    <button type="button" className="btn btn-secondary sub-button" data-bs-toggle="button" aria-pressed="false" autoComplete="off" onClick={() => handleOnClick("neck")}>
                        Neck
                    </button>
                </div>
            </div>

            <div className="pb-3">
                <button className="btn btn-primary mb-1" type="button" data-bs-toggle="collapse" data-bs-target="#underarmsArms" aria-expanded="false" aria-controls="underarmsArms">
                    UNDERARMS/ARMS
                </button>
                <div className="collapse" id="underarmsArms">
                    <button type="button" className="btn btn-secondary sub-button" data-toggle="button" aria-pressed="false" autoComplete="off">
                        Underarms
                    </button>
                    <button type="button" className="btn btn-secondary sub-button" data-toggle="button" aria-pressed="false" autoComplete="off">
                        Forearms
                    </button>
                    <button type="button" className="btn btn-secondary sub-button" data-toggle="button" aria-pressed="false" autoComplete="off">
                        Full Arms
                    </button>
                </div>
            </div>


            <QuoteCalcMid discount={discount} setDiscount={setDiscount} changeAllDiscount={changeAllDiscount}/>
            {/* List and payment information */}
            <QuoteCalcBot option={option} parts={parts} setParts={setParts} discount={discount}/>
        </div>
    );
}

export default QuoteCalc;