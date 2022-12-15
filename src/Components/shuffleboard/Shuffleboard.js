import { useEffect, useState } from "react";

const Shuffleboard = () => {

    const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);
    const [finalScore, setFinalScore] = useState(7);
    const [won, setWon] = useState(false);
    const [winner, setWinner] = useState(null);


    useEffect(() => {
        console.log("FINAL SCORE TO WIN IS: " + finalScore)
        console.log("P1 SCORE:: " + p1Score)
        console.log("P2 SCORE:: " + p2Score)
        if ((p1Score >= finalScore) || (p2Score >= finalScore)) {
            console.log("someone reached the final score")
            setWon(true);
            if (p1Score >= finalScore) {
                setWinner("Player 1");
            } else {
                setWinner("Player 2")
            }
        }
    }, [p1Score, p2Score, finalScore])

    const handleChange = (e) => {
        setFinalScore(e.target.value);
    }

    return (
        <div className="container">
            <h2 className="text-center pb-5">Shuffleboard Score Keeper</h2>


            <div className="row pb-4">
                <h5 className="text-center">Please choose the winning score</h5>
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleChange} value={7} defaultChecked/>
                            <label className="form-check-label">
                                7
                            </label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleChange} value={10} />
                            <label className="form-check-label">
                                10
                            </label>
                    </div>
                </div>
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleChange} value={15}/>
                            <label className="form-check-label">
                                15
                            </label>
                    </div>
                </div>
            </div>

            <div className="row">

                <div className="col text-center">
                    <h5 className="">Player 1 Score</h5>
                    <h4 className="">{p1Score}</h4>
                    {!won && <button className="" onClick={() => { setP1Score(p1Score + 1) }}>Add a point</button>}
                </div>
                <div className="col text-center">
                    <h5 className="">Player 2 Score</h5>
                    <h4 className="">{p2Score}</h4>
                    {!won && <button onClick={() => { setP2Score(p2Score + 1) }}>Add a point</button>}
                </div>
                {won && <h4 className="text-center pt-3">{winner} won the game!</h4>}
                {won && <button onClick={() => { setWon(false); setP1Score(0); setP2Score(0) }}>Start Over?</button>}
            </div>
        </div>
    );
}

export default Shuffleboard;