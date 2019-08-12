import React, {useState} from 'react';
import './Rating.scss';

const Rating = ({rating, setRating}) => {
  const [tempRating, setTempRating] = useState(0);

  const rate = value => {
    if(rating === value){
      setRating(0);
    }else{
      setRating(value);
    }
  }

  const star_over = value => {
    setTempRating(value);
  }
  const star_out = () => {
    setTempRating(rating);
  }
  
  const pushStars = ()  => {
    const stars = [];
    
    for(var i = 2; i <= 10; i+=2) {
      let classSelected = 'star-rating__star';
      
      if (rating >= i || tempRating >= i) {
        classSelected += ' is-selected';
      }

      stars.push(
        <label
          id={i}
          key={i}
          className={classSelected}
          onClick={event => rate(event.target.id)}
          onMouseOver={event => star_over(event.target.id)}
          onMouseOut={() => star_out()}>
          ★
        </label>
      );
    }
    return stars;
  }
    
    return (
      <div className="star-rating">
        {pushStars()}
      </div>
    );
};

export default Rating;