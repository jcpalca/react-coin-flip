import Coin from "./Coin.js";
import {COINS} from "./coins.js";
import { useState } from "react";
import _ from "underscore";

/**
 *
 *  Props:
 *  - coins
 *
 *  State:
 *  - #flips
 *  - #heads
 *  - #tails
 *  - coin image
 *
 *  App -> CoinContainer -> Coin
 */

function CoinContainer({ coins=COINS }) {
  const [coin, setCoin] = useState(null);
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);

  function handleClick(evt) {
    const newCoin = _.sample(coins);
    setCoin(newCoin);
    if(newCoin.side === "head") {
      setHeadCount(count => count + 1);
    }
    else {
      setTailCount(count => count + 1);
    }
  }

  const currCoin = coin
  ? <Coin imgSrc={coin.imgSrc} side={coin.side} />
  : null;

  return (
    <div className="CoinContainer">
      <h1>Let's flip a coin!</h1>
      {currCoin}
      <button onClick={handleClick}>Flip Me!</button>
      <p>
        Out of {headCount + tailCount} flips, there have been {headCount} heads
        and {tailCount} tails.
      </p>
    </div>
  )
}

export default CoinContainer;
