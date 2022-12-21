import React from 'react'
import '@styles/Characteristic.scss'
import Attribute from './Attribute'
export default class Attributes extends React.PureComponent {
  render() {
    const { item, handleClick, itemID } = this.props
    return (
      <div>
        {item.attributes &&
          item.attributes.map((typeOfAttribute, index) => {
            const type = typeOfAttribute.type
            if (type === 'swatch') {
              return (
                <Attribute
                  key={index}
                  handleClick={handleClick}
                  itemID={itemID}
                  typeOfAttribute={typeOfAttribute}
                  chosenAttributes={this.props.chosenAttributes}
                  type={type}
                  isCart={this.props.isCart}
                />
              )
            }
            if (type === 'text') {
              return (
                <Attribute
                  key={index}
                  handleClick={handleClick}
                  itemID={itemID}
                  typeOfAttribute={typeOfAttribute}
                  chosenAttributes={this.props.chosenAttributes}
                  type={type}
                  isCart={this.props.isCart}
                />
              )
            }
            return <div></div>
          })}
      </div>
    )
  }
}
