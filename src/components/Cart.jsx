import { Component } from 'react'
import '@styles/Characteristic.scss'
import '@styles/Cart-style.scss'
import plus from '@img/plus.svg'
import minus from '@img/minus.svg'
import prev from '@img/prev.svg'
import next from '@img/next.svg'

class Cart extends Component{

    render(){
        return <div>
        <div className='cart'>Cart</div>
        <div className='line'/>
        <div className='row'>
        <div className='item'>
        <div className='name' style={{'margin-bottom':'10px'}}> <div className="name__brand">Apollo</div>
            <div>Running Short</div>
            </div>
            <div className='price' >$50.00</div>
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
        <div className='underline'/>
        </div>
        <div style={{'display':'flex'}}>
        <div className='count'>
          <div className='count__square'><img  src={plus} alt="add" /></div>
          <div className='count__number'>1</div>
          <div className='count__square'><img  src={minus} alt='remove'/> </div>
        </div>
        <div className='product'>
          <div className='product__block' >
            <div className='slider'>
              <img className='slider__button'
                src={prev}
              />
            </div>
            <div className='slider'>
            <img className='slider__button'
                src={next}
              />
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    }
}
export default Cart