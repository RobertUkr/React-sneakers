import styles from "./Card.module.scss";
import React from 'react';

function Card({title, imageUrl, price,onFavorite,onPlus} ) {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () =>{
    onPlus({title, imageUrl, price});
    setIsAdded(!isAdded);
  }
 
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onFavorite}> 
        <img
          src="images/heart-unlicked.svg"
          alt="favoritw"
          onClick={onFavorite}
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneaker" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}.RUB</b>
        </div>

        <img className = {styles.plus}
        onClick={onClickPlus} 
        src={isAdded ? "/images/btn-checked.svg" : "/images/btn-plus.svg" } 
        alt="plus" />
      </div>
    </div>
  );
}

export default Card;
