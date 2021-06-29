import React from "react"
import AddBurgerForm from "./AddBurgerForm"



class MenuAdmin extends  React.Component {
    render(){
        return(
            <div className ='menu-admin'>
              <AddBurgerForm addBurger ={this.props.addBurger}/>
              <button onClick ={this.props.loadSampleBurgers}>Загрузить бургеры</button>
            </div>
        )
    }
}
export default MenuAdmin