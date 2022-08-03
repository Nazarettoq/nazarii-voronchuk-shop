import { Component } from 'react'
import '@styles/PDP.scss'
class ProductPage extends Component{

    render(){
        return <div className='PDP'>
          <div className='pictures'>
            <div className='pictures__sub'>{[
            {
              src: `https://file.rendit.io/n/8SDQrhyRpeIUlS6HLxjS.png`,
            },
            {
              src: `https://file.rendit.io/n/8SDQrhyRpeIUlS6HLxjS.png`,
            },
            {
              src: `https://file.rendit.io/n/8SDQrhyRpeIUlS6HLxjS.png`,
            },
          ].map((data) => (
            <img  className='pictures__sub__item' src={data.src} />
          ))}</div>
          <img className='pictures__main' src={`https://file.rendit.io/n/txyukYVdmcTUm0JeyOkf.png`} />
          </div>
          <div className='discription'>
          
          <div className='discription__content'>
           <div className='name'> <div className="name__brand">Apollo</div>
            <div>Running Short</div>
            </div>
            <div className ='characteristic'>SIZE:</div>
            <div className='characteristic__sizes'>
                <div className='size'><div className='size__tag'>XS</div></div>
                <div className='size selected__size'><div className='size__tag'>S</div></div>
                <div className='size'><div className='size__tag'>M</div></div>
                <div className='size'><div className='size__tag'>L</div></div>
            </div>
            <div className ='characteristic'>COLOR:</div>
            <div className="characteristic__colors">
              <div className=""><div className="color"></div></div>
              <div className="selected__color"><div className="color"></div></div>
              <div className=""><div className="color"></div></div>
            </div>
            <div className ='characteristic'>PRICE:</div>
            <div className="price">$50.00</div>
            <div className="add_to_card">ADD TO CARD</div>
            <div className="item__discription"> Find stunning women's cocktail dresses and party dresses. Stand out
            in lace and metallic cocktail dresses and party dresses from all
            your favorite brands.</div>
          </div>
          </div>
        </div>
    }
}
export default ProductPage