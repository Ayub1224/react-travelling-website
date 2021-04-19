import React from 'react'
import {Link } from 'react-router-dom'
function CardItem(prop) {
    return (
        <>
            <li className="card__item">
                <Link className="card__item__link" to={prop.path}>
                    <figure className="card__item__pic-wrap" data-category={prop.label}>
                        <img src={prop.src} alt="/" className="card_item_image"/>
                    </figure>
                    <div className="card__item_info">
                        <h5 className="card_item_text">{prop.texts}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem
/* it's an Li which will get fitted in the cards section where the ul will act as a parent class and the further things will be added up tere
1: figure tag is the a kin of a box containing the image and caption

*/
