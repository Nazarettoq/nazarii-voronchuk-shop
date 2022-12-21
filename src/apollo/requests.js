import { gql } from '@apollo/client'

export const CATEGORIES_NAME = gql`
  query names {
    categories {
      name
    }
  }
`
export const SELECTED_CATEGORY = gql`
  query currCat($input: CategoryInput) {
    category(input: $input) {
      name
      products {
        id
        name
        inStock
        gallery
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`
export const SELECTED_PRODUCT = gql`
  query product($id: String!) {
    product(id: $id) {
      name
      inStock
      gallery
      brand
      description
      category
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
    }
  }
`
export const GET_CURRENCIES = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`
