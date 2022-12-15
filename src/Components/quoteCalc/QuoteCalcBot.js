import { useEffect, useState } from "react";

const QuoteCalcBot = ({ parts, setParts, option, discount }) => {

    const [total, setTotal] = useState([0, 0, 0]);
    const [discountedTotal, setdiscountedTotal] = useState([0, 0, 0]);


    //change individual discount for a part
    const handleDiscountChange = (part, e) => {
        console.log(e.target.value);
        console.log(part);
    }

    //takes in the full price then shows the discounted price of a part. Also adds up the discounted price to discountedTotal for displaying it later
    const showDiscounted = (price) => {
        const temp = Math.ceil((price * ((100 - discount) / 100)) / 36)
        const newState = discountedTotal.map((t, i) => i === option ? t + temp : t)
        //console.log(newState);
        setTotal(newState); //this causes infinte loop ERROR
        return (
            <div className="col-2">
                {temp}
            </div>
        )
    }

    const addToTotal = (price) => {
        //we need to add the full prices to total so it can display
        return (
            Math.ceil(price / 36)
        )
    }


    //this also works.
    //const showParts = (activeIndex) => { return parts.map(part => part.active[activeIndex] && <div key={part.bodyPart}>{part.bodyPart}</div>) }
    const showParts = (activeIndex) => {
        return parts.map(
            (part) => part.active[activeIndex] && (
                <div key={part.bodyPart} className="row">
                    {/* body part */}
                    <div className="col-3">{part.bodyPart}</div>

                    {/* original full price */}
                    <div className="col-2 text-decoration-line-through">${addToTotal(part.price)}</div>

                    {/* discounted price */}
                    <div className="col-2">
                        ${showDiscounted(part.price)}
                    </div>

                    {/* choose discount */}
                    <div className="col-auto">
                        <select className="form-select-sm" aria-label="Default select example" /* value={discount} */ onChange={(e) => handleDiscountChange(part, e)}>
                            <option defaultValue>{discount}</option>
                            <option value="30">30%</option>
                            <option value="40">40%</option>
                            <option value="50">50%</option>
                            <option value="60">60%</option>
                        </select>
                    </div>

                    <div className="col-1 text-end"><button type="button" className="btn-close" aria-label="Close"></button></div>
                </div>)

        )
    }

    return (
        <div className="">
            <div className="row rows-cols-3">
                {/* to keep this part cleaner, having a separate state that filters out is ideal */}
                <div className="col-4">
                    {showParts(0)}
                </div>
                <div className="col-4">
                    {showParts(1)}
                </div>
                <div className="col-4">
                    {showParts(2)}
                </div>
                {/* TOTAL */}
                <div className="col-4">discounted total for 36 months: {total[0]}</div>
                <div className="col-4">total, per month, cost, savings</div>
                <div className="col-4">total, per month, cost, savings</div>
            </div>
        </div>
    );
}

export default QuoteCalcBot;