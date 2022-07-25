
import { Component } from 'react'
import buy from '@img/buy.svg'
class Card extends Component{

    constructor(props) {
        super(props);
        this.showButton = this.showButton.bind(this);
        this.hideButton = this.hideButton.bind(this);
        this.state = {
          isHovering: false,
        };
      }
       showButton () {
        this.setState(()=>({
            isHovering:true
        }))
      };
      hideButton () {
        this.setState(()=>({
            isHovering:false
        }))
      };
    
   
    render(){
        return( <div 
        className={!this.props.isOut? 'Card':'Card OutOfStockCard'}
        onMouseEnter={this.showButton}
    onMouseLeave={this.hideButton}>
    <div className="ImgCard">
      <img src={`https://file.rendit.io/n/LiRU2maCbBEofczJiAvk.png`} alt='' />
      {!this.props.isOut && this.state.isHovering && <img src={buy} className='BuyButton' alt=''/>}
      {this.props.isOut && <p className="OutOfStock">OUT OF STOCK</p>}
    </div>
    <div className="ContentCard">
      <div className="TitleCard">Apollo Running Short</div>
      <div className="PriceCard">$50.00</div>
    </div></div>)
}}
export default Card

