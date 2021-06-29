import '../css/style.css'
import React from "react"
import Header from "./Header"
import Order from "./Order"
import MenuAdmin from './MenuAdmin'
import sampleBurgers from '../sample-burgers'
import Burger from '../components/Burger'



class App extends React.Component {
    state = {
        burgers: {},
        order: {},
    }
    addBurger = burger => {
        console.log('addBurger', burger)
        // копия state
        const burgers = { ...this.state.burgers }
        // добавть новый burger в пременную burgers
        burgers[`burger${Date.now()}`] = burger
        // Записать новый объект burgers в state 
        this.setState({ burgers })
    }
    loadSampleBurgers = () => {
        this.setState({ burgers: sampleBurgers })
    }
    addToOrder = key => {
        // копия  state
        const order = { ...this.state.order }
        // добавить ключ к заказу со значемием 1 . иначе обновит текущее
        order[key] = order[key] + 1 || 1
        // Записать новый объект order в state
        this.setState({ order: order })
    }

    render() {
        return (
            <div className='burger-paradise'>
                <div className='menu'>
                    <Header />
                    <ul className='bergers'>
                        {Object.keys(this.state.burgers).map((key) => {
                            return <Burger
                                key={key}
                                index={key}
                                details={this.state.burgers[key]}
                                addToOrder={this.addToOrder}

                            />
                        })}
                    </ul>
                </div>
                <Order burgers={this.state.burgers}  order={this.state.order}/>
                <MenuAdmin
                    loadSampleBurgers={this.loadSampleBurgers}
                    addBurger={this.addBurger} />
            </div>
        )
    }
}
export default App