import React, { Component } from 'react'
import { client } from '@apollo-folder/client'
import { connect } from 'react-redux'
import vectorDown from '@img/down.svg'
import vectorUp from '@img/up.svg'
import { GET_CURRENCIES } from '@apollo-folder/requests'
import { setCurrencyAC } from '@redux/actions'
import '@styles/Currency.scss'
class Currency extends Component {
  constructor() {
    super()
    this.fetchCurrency = this.fetchCurrency.bind(this)
    this.state = {
      currencies: [],
      showModal: false,
      isLoaded: false,
    }
  }

  closeModal = () => {
    this.setState({ showModal: false })
    document.removeEventListener('click', this.closeModal)
  }

  componentDidMount() {
    this.fetchCurrency()
    document.addEventListener('click', this.closeModal)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeModal)
  }

  handleClick = (e) => {
    if (this.state.showModal) {
      this.closeModal()
      return
    }
    this.setState({ showModal: true })
    e.stopPropagation()
    document.addEventListener('click', this.closeModal)
  }

  async fetchCurrency() {
    const result = await client.query({
      query: GET_CURRENCIES,
    })
    document.addEventListener('click', this.closeModal)
    this.setState({ currencies: result.data.currencies, isLoaded: true })
  }

  render() {
    const { sendCurrency, selected } = this.props
    return (
      <>
        {this.state.isLoaded && (
          <div
            className="currency-switch"
            onClick={this.handleClick}
            active={`${this.state.showModal}`}>
            <div className="currency-symbol">
              <p>{this.state.currencies?.[selected]?.symbol}</p>
              <img
                alt="vector"
                className="vector"
                src={this.state.showModal ? vectorUp : vectorDown}
              />
            </div>
            <div className="currency-list" active={`${this.state.showModal}`} id="options">
              {this.state.showModal && (
                <div className="box">
                  {' '}
                  {this.state.currencies.map((item, id) => (
                    <div className="box__item" onClick={() => sendCurrency(id)} key={id}>
                      <div className="box__item__content">{`${item.symbol} ${item.label}`}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  sendCurrency: (state) => dispatch(setCurrencyAC(state)),
})

const mapStateToProps = (state) => ({
  selected: state.cart.currency,
})

export default connect(mapStateToProps, mapDispatchToProps)(Currency)
