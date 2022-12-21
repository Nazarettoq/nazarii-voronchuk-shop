import React from 'react'
import '@styles/Characteristic.scss'
export default class Attribute extends React.PureComponent {
  constructor(props) {
    super(props)
    this.isAttributeActive = this.isAttributeActive.bind(this)
  }

  isAttributeActive(selectAttribute, chosenAttributes) {
    return Boolean(
      chosenAttributes.find(
        (el) => el.name === selectAttribute.name && el.item?.id === selectAttribute.item.id,
      ),
    )
  }

  render() {
    const { items, type, id, name } = this.props.typeOfAttribute
    const itemID = this.props.itemID
    const classType = this.props.type === 'swatch' ? 'colors' : 'blocks'
    return (
      <div>
        <div className="characteristic">{name}:</div>
        <div
          className={
            !this.props.isCart
              ? `characteristic__${classType}`
              : ` characteristic__${classType} disable`
          }>
          {items.map((el, index) => {
            const selectAttribute = {
              id,
              name,
              type,
              item: el,
            }

            return type === 'swatch' ? (
              <div
                key={index}
                className={`${
                  this.isAttributeActive(selectAttribute, this.props.chosenAttributes)
                    ? 'selected__color'
                    : ''
                }`}
                onClick={() => this.props.handleClick({ itemID, attr: selectAttribute })}>
                <div className="color" style={{ backgroundColor: `${el.value}` }}></div>
              </div>
            ) : (
              <div
                key={index}
                className={`text ${
                  this.isAttributeActive(selectAttribute, this.props.chosenAttributes)
                    ? 'selected__text'
                    : ''
                }`}
                onClick={() => this.props.handleClick({ itemID, attr: selectAttribute })}>
                <div className="text__tag">{el.value}</div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
