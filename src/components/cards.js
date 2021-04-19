import React from 'react'
import CardItem from './cardItem'
import './cards.css'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Destination</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">           {/* here all the li items will come and so the class name is class items followed by the other item */}
                        <CardItem
                        src="/image/img-9.jpg"
                        texts = "Explore the hidden waterfalls deep inside the amazon forrest"
                        label="Adventure"
                        path='/Services'
                        />
                        <CardItem
                        src="/image/img-8.jpg"
                        texts = "Explore the hidden waterfalls deep inside the amazon forrest"
                        label="Adventure"
                        path='/Services'
                        />
                    </ul>
                    <ul className="cards__items">           {/* here all the li items will come and so the class name is class items followed by the other item */}
                        <CardItem
                        src="/image/img-7.jpg"
                        texts = "Explore the hidden waterfalls deep inside the amazon forrest"
                        label="Adventure"
                        path='/Services'
                        />
                        <CardItem
                        src="/image/img-6.jpg"
                        texts = "Explore the hidden waterfalls deep inside the amazon forrest"
                        label="Adventure"
                        path='/Services'
                        />
                        <CardItem
                        src="/image/img-5.jpg"
                        texts = "Explore the hidden waterfalls deep inside the amazon forrest"
                        label="Adventure"
                        path='/Services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
