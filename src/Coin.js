/** Shows image of coin heads or tails
 *
 *  Props:
 *  - imgSrc
 *  - side
 *
 *  Stateless
 *
 *  CoinContainer -> Coin
 */

function Coin({imgSrc, side}) {
  return(
    <div className="Coin">
      <img src={imgSrc} alt={side} />
    </div>
  )
}

export default Coin
