import React, { PureComponent } from 'react'

import '@styles/Characteristic.scss'
export default class Attributes extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {}
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
    const { item, handleClick, itemID } = this.props
    return (
      <div>
        {item.attributes &&
          item.attributes.map((typeOfAttribute, index) => {
            const { items, type, id, name } = typeOfAttribute
            if (type === 'swatch') {
              return (
                <div key={index}>
                  <div className="characteristic">{name}:</div>
                  <div
                    className={
                      !this.props.isCart
                        ? 'characteristic__colors'
                        : ' characteristic__colors disable'
                    }>
                    {items.map((el, index) => {
                      const selectAttribute = {
                        id,
                        name,
                        type,
                        item: el,
                      }

                      return (
                        <div
                          key={index}
                          className={`${
                            this.isAttributeActive(selectAttribute, this.props.chosenAttributes)
                              ? 'selected__color'
                              : ''
                          }`}
                          onClick={() => handleClick({ itemID, attr: selectAttribute })}>
                          <div className="color" style={{ backgroundColor: `${el.value}` }}></div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            }
            if (type === 'text') {
              return (
                <div key={index}>
                  <div className="characteristic">{name}:</div>

                  <div
                    className={
                      !this.props.isCart
                        ? 'characteristic__blocks'
                        : ' characteristic__blocks disable'
                    }>
                    {items.map((el, index) => {
                      const selectAttribute = {
                        id,
                        name,
                        type,
                        item: el,
                      }
                      return (
                        <div
                          key={index}
                          className={`text ${
                            this.isAttributeActive(selectAttribute, this.props.chosenAttributes)
                              ? 'selected__text'
                              : ''
                          }`}
                          onClick={() => handleClick({ itemID, attr: selectAttribute })}>
                          <div className="text__tag">{el.value}</div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            }
            return <div></div>
          })}
      </div>
    )
  }
}
