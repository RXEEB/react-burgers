import '../css/style.css'
import React from "react"
import Header from "./Header"
import Order from "./Order"
import MenuAdmin from './MenuAdmin'
import sampleBurgers from '../sample-burgers'
import Burger from '../components/Burger'
import base from '../base'



class App extends React.Component {
    state = {
        burgers: {},
        order: {},
    }
componentDidMount(){
    const {params} = this.props.match
    this.ref = base.syncState(`${params.restaurantId}/burgers`, {
        context: this,
        state: 'burgers'

    })
}
componentDidUpdate (){
    const {params} = this.props.match
    localStorage.setItem(params.restaurantId, JSON.stringify(this.state.order))
}


componentWillUnmount() {
    base.removeBinding(this.ref)
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