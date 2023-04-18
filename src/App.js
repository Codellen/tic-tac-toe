import React,{useState} from "react";
import Icons from './Component/Icons';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';

 //create array of length of row and col matrix of tictac
  const tikArr = new Array(9).fill("");




function App() {
 
  //we use use state to tarck the chance of another player
  const [isCross, setIsCross] = useState(true);
  //Also we need track of winner so again use useState
  const [isWinner, setIsWinner] = useState("");

  //Play Again

  function playAgain() {
    //set array zero and both usestate to original value
    tikArr.fill("");
    setIsCross("true");
    setIsWinner("");
    console.log(tikArr);
  }

  //find Winner

  function findWinner() {
    //row 0,1,2
    if (tikArr[0] == tikArr[1] && tikArr[0] == tikArr[2] && tikArr[0] != "") {
      setIsWinner(`Winner is ${tikArr[0]}`);
    } else if (
      tikArr[3] == tikArr[4] &&
      tikArr[3] == tikArr[5] &&
      tikArr[3] != ""
    ) {
      setIsWinner(`Winner is ${tikArr[3]}`);
    } else if (
      tikArr[6] == tikArr[7] &&
      tikArr[6] == tikArr[8] &&
      tikArr[6] != ""
    ) {
      setIsWinner(`Winner is ${tikArr[6]}`);
    }

    // col 0,3,6
    else if (
      tikArr[0] == tikArr[3] &&
      tikArr[0] == tikArr[6] &&
      tikArr[0] != ""
    ) {
      setIsWinner(`Winner is ${tikArr[0]}`);
    } else if (
      tikArr[1] == tikArr[4] &&
      tikArr[1] == tikArr[7] &&
      tikArr[1] != ""
    ) {
      setIsWinner(`Winner is ${tikArr[1]}`);
    } else if (
      tikArr[2] == tikArr[5] &&
      tikArr[2] == tikArr[8] &&
      tikArr[2] != ""
    ) {
      setIsWinner(`Winner is ${tikArr[2]}`);
    }
    //diagonal 0,4,8  2,4,6
    else if (
      tikArr[0] == tikArr[4] &&
      tikArr[0] == tikArr[8] &&
      tikArr[0] != ""
    ) {
      setIsWinner(`Winner is ${tikArr[0]}`);
    } else if (
      tikArr[2] == tikArr[4] &&
      tikArr[2] == tikArr[6] &&
      tikArr[2] != ""
    ) {
      setIsWinner(`Winner is ${tikArr[2]}`);
    }
    else if(tikArr.indexOf("") == -1)
    {
      setIsWinner(`Match has been Drawn`)
    }
  }
  //No overwriting

  function overwriting(index) {
    if(isWinner)
    {
      return toast("Game is Over")
    }
    if (tikArr[index] != "") {
      return toast("Not Allowed")
    } else if (tikArr[index] == "") {
      tikArr[index] = isCross == true ? "cross" : "circle";
      setIsCross(!isCross);

      findWinner();
    }

    //console.log(tikArr);
  }

  return (
    <div>

      <ToastContainer></ToastContainer>
      {
      isWinner  ?
       (
        <div>
          <h1>{isWinner}</h1>
          <button onClick={playAgain}>Play Again</button>
        </div>
      ) : (
        <div>
          <h1>{isCross == true ? "Cross Chance" : "Circle Chance"}</h1>
        </div>
      )}
      <div className="grid">
        {tikArr.map((value, index) => (
          <div onClick={() => overwriting(index)}>
            <Icons fontname={value}></Icons>
          </div>
        ))}
      </div>
    </div>
    // <div>
    //   <Icons fontname="circle" ></Icons>

    // </div>
  );
}

export default App;
