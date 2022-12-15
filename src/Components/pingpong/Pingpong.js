import { useState, useEffect } from "react";

const PingPong = () => {

    const [p1Score, setP1Score] = useState(0);
    const [p2Score, setP2Score] = useState(0);
    const [finalScore, setFinalScore] = useState(5);
    const [userSelectFinalScore, setUserSelectFinalScore] = useState(5);
    const [won, setWon] = useState(false);
    const [winner, setWinner] = useState(null);


    useEffect(() => {
        if ((p1Score >= finalScore) || (p2Score >= finalScore)) {
            if (p1Score >= (p2Score + 2)) {
                setWon(true);
                setWinner("Player 1");
            } else if (p2Score >= (p1Score + 2)) {
                setWon(true);
                setWinner("Player 2");
            } else {
                const temp = finalScore + 1;
                console.log("here's the final score after adding 1: " + temp);
                setFinalScore(finalScore + 1);
                console.log("just added one more to the final score: " + finalScore);
            }
        }
    }, [p1Score, p2Score, finalScore])

    const handleChange = (e) => {
        setFinalScore(Number(e.target.value));
        setUserSelectFinalScore(Number(e.target.value));
    }


    return (
        <div className="container">
            <h2 className="text-center pb-5">Ping Pong Score Keeper</h2>


            <div className="row pb-4">
                <h5 className="text-center">Please choose the winning score</h5>
                <div className="col">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleChange} value={5} defaultChecked />
                        <label className="form-check-label">
                            5
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
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={handleChange} value={15} />
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
                {won && <button onClick={() => { setWon(false); setP1Score(0); setP2Score(0); setFinalScore(userSelectFinalScore) }}>Start Over?</button>}
            </div>
        </div>
    );
}

export default PingPong;