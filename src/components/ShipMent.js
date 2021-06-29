import React from 'react'

class Shipment extends React.Component {
    render() {
        const {total} = this.props
        const shipping = total > 0 && total < 500 ? 300 : 100
        const shippingNeon =  shipping === 100 ? (
            <span className ='font-effect-neon total_wrap-cheap'>
                {shipping} Руб.
            </span>
        ) : (<span>{shipping} руб.</span>)
        return (
            <div className='total'>
                <div className='total_wrap'>
                    <div>
                        <div> Доставка : {total > 0 ? shippingNeon : null }</div>
                        <div className='total_wrap-free'>
                            {total < 500 ? `Закажите еще на ${500 - total} руб. для доставки за 100 руб.` : null}
                        </div>
                    </div>
                    <div className='total_wrap-final'>Итого : {total} Руб.</div>
                </div>
            </div>
        )
    }
}



export default Shipment