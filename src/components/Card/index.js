import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader"
import React from "react";

function Card({
  id,
  title,
  imageUrl,
  price,
  onFavorite,
  onPlus,
  favorited = false,
  added = false,
  loading = false 
}) {
  const [isAdded, setIsAdded] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, title, imageUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ id, title, imageUrl, price });
    setIsFavorite(!isFavorite);
  };

  return (
    <div className={styles.card}>
      {
        loading ?  <ContentLoader 
        speed={2}
        width={150}
        height={187}
        viewBox="0 0 150 187"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
       
      >
        <rect x="0" y="0" rx="10" ry="10" width="150" height="91" /> 
        <rect x="0" y="110" rx="5" ry="5" width="150" height="15" /> 
        <rect x="0" y="136" rx="5" ry="5" width="93" height="15" /> 
        <rect x="0" y="163" rx="5" ry="5" width="80" height="24" /> 
        <rect x="117" y="157" rx="5" ry="5" width="32" height="32" />
      </ContentLoader> :
      <>
       <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={
            isFavorite ? "images/heart-licked.svg" : "images/heart-unlicked.svg"
          }
          alt="favorite"
        />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneaker" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price}.RUB</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? "/images/btn-checked.svg" : "/images/btn-plus.svg"}
          alt="plus"
        />
      </div>
      </>
      }
     
    </div>
  );
}

export default Card;
