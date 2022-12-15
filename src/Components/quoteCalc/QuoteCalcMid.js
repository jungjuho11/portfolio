import { useEffect, useState } from "react";

const QuoteCalcMid = ({discount, setDiscount, changeAllDiscount}) => {

    /* const [discount, setDiscount] = useState(null); */

    //need to set the discount price of all the part to what the user chose
    const handleChange = (event) => {
        setDiscount(event.target.value);
    }
    
    useEffect(() => {
        //NEED TO UPDATE THE DISCOUNTED PRICE FOR PARTS
        //console.log("discount has been changed to: " + discount)

    }, [discount])

    return (
        <div className="">
            <div className="row rows-cols-3">
                <div className="col-4">
                    <select className="form-select" aria-label="Default select example" /* value={discount} */ onChange={handleChange}>
                        <option defaultValue>Select Discount</option>
                        <option value="30">30%</option>
                        <option value="40">40%</option>
                        <option value="50">50%</option>
                        <option value="60">60%</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default QuoteCalcMid;