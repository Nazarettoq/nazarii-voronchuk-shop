import { Component } from 'react'
import '@styles/Category.scss'
import Card from './Card'
class CategoryItems extends Component{

    render(){
        return <div className="Main-content">
        <p className="Category-name">Category name</p>
        <div className="Category-cards">
          <div className="FlexColumn">
           <Card />
           <Card />
           <Card isOut={true}/>
           <Card/>
           <Card/>
          </div>
        </div>
      </div>
    }
}
export default CategoryItems