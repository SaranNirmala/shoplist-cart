import React from 'react';
import styles from './Cardcontent.module.css';
import Shopcard from '../Component/Shopcard';

const Cardcontent = ({ addedToWishlist, removedFromWishlist }) => {
    return (
        <div className="container">
            <div className={styles.cardContainer}>
                <Shopcard image={'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'} title={'Fancy Product'} iconStar={false}
                    price={''} prices={'$40.00 -$80.00'} btn={"View Options"} addedToWishlist={addedToWishlist} removedFromWishlist={removedFromWishlist} view={true} />
                <Shopcard className={styles.price} image={'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'} title={'Special Item'} icon={"star"} saleButton={true} iconStar={true}
                    price={'$20.00'} prices={' $18.00'} btn={"Add to Cart"} addedToWishlist={addedToWishlist} removedFromWishlist={removedFromWishlist} id={2} strike={true} />
                <Shopcard image={'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'} title={'Sale Item'} strike={true} saleButton={true} iconStar={false}
                    price={'$50.00'} prices={'$25.00'} btn={"Add to Cart"} addedToWishlist={addedToWishlist} removedFromWishlist={removedFromWishlist} id={3} />
                <Shopcard image={'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'} title={'Popular Item'} icon={"star"} iconStar={true}
                    price={''} prices={'$40.00'} btn={"Add to Cart"} addedToWishlist={addedToWishlist} removedFromWishlist={removedFromWishlist} id={4} />
                <Shopcard image={'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'} title={'Sale Item'} strike={true} view={false} saleButton={true} iconStar={false}
                    price={'$50.00'} prices={'$25.00'} btn={"Add to Cart"} addedToWishlist={addedToWishlist} removedFromWishlist={removedFromWishlist} id={5} />
                <Shopcard image={'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'} title={'Fancy Product'} strike={true} view={true} iconStar={false}
                    price={''} prices={'$120.00 - $280.00'} btn={"View Options"} addedToWishlist={addedToWishlist} removedFromWishlist={removedFromWishlist} />
                <Shopcard image={'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'} title={'Special Item'} icon={"star"} strike={true} saleButton={true} iconStar={true}
                    price={'$20.00'} prices={'- $18.00'} btn={"Add to Cart"} addedToWishlist={addedToWishlist} removedFromWishlist={removedFromWishlist} id={7} />
                <Shopcard image={'https://dummyimage.com/450x300/dee2e6/6c757d.jpg'} title={'Popular Item'} icon={"star"} iconStar={true}
                    price={''} prices={'$40.00'} btn={"Add to Cart"} addedToWishlist={addedToWishlist} removedFromWishlist={removedFromWishlist} id={8} />

            </div >
        </div>
    );
}

export default Cardcontent;