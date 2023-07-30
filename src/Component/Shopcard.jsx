import React, { useState } from "react";
import styles from './Shopcard.module.css'

const Shopcard = ({ image, title, price, prices, btn, icon, addedToWishlist, removedFromWishlist, id, strike, view, saleButton, iconStar }) => {

    const [wished, setWished] = useState(false);

    const handlewished = () => {
        if (wished) {
            removedFromWishlist(id);
            setWished(false);
        } else {
            addedToWishlist(id);
            setWished(true);
        }

        setWished(!wished)
    }

    const getIcon = () => {
        if (icon === "star") {
            return (<i className="fa-solid fa-star" style={{ color: '#eed21b' }}></i>);
        }
    }

    return (
        <div className={styles.containerCard} style={{
            position: 'relative',
        }}>
            <div className="salebtn">
                {saleButton ?
                    <button className="badge bg-dark text-white" style={{ position: 'absolute', top: 5, right: 5 }}>Sale</button> :
                    ''}
            </div>
            <img src={image} alt={title} className={styles.shopImage} />
            <div className={styles.head}>
                <h5 className={styles.title}>{title}</h5>
                {iconStar ? <div styles={{ marginTop: '20px', paddingTop: '25px' }}> {getIcon()}{getIcon()}{getIcon()}{getIcon()}{getIcon()}</div> :
                    <div style={{ marginBottom: '20px' }}></div>}
                <p className={styles.para}><span className="strikePrice" style={{ textDecoration: strike ? "line-through" : "", color: "gray" }}>{price}</span>{prices}</p>
            </div>
            <div className={styles.butn}>
                {view ?
                    <button className='btn btn-outline-dark' id={styles.btns} type='submit' onClick={() => handlewished()}>View Option </button> : <button className='btn btn-outline-dark' id={styles.btns} type='submit' onClick={() => handlewished()}> {wished ? "Remove Cart" : "Add to Cart"} </button>
                }
            </div>
        </div >
    )
}

export default Shopcard;