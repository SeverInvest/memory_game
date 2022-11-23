import { cardToFlip } from '../../constants/cards_images.js';
import './Card.css';

export default function Card({ image, isFlipped, flipCard }) {
  const displayImg = isFlipped ? image : cardToFlip;
  return (
    <figure
      className='card'
      onClick={() => flipCard()}
    >
      <img
        className='card__image'
        src={displayImg.src}
        alt={displayImg.alt}
        draggable='false'
      />
    </figure>
  )
}
