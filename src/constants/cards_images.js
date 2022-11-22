import wolfImg from '../images/wolf.jpg'
import squirrelImg from '../images/squirrel.jpg'
import walrusImg from '../images/walrus.jpg'
import deerImg from '../images/deer.jpg'
import foxImg from '../images/fox.jpg'
import hawkImg from '../images/hawk.jpg'
import hedgehogImg from '../images/hedgehog.jpg'
import beaverImg from '../images/beaver.jpg'
import polarBearImg from '../images/polar_bear.jpg'
import duckImg from '../images/duck.jpg'
import bearImg from '../images/bear.jpg'
import hareImg from '../images/hare.jpg'

import coverImg from '../images/cover.jpg';

const arrayImages = [
  { alt: 'волк', src: wolfImg },
  { alt: 'белка', src: squirrelImg },
  { alt: 'морж', src: walrusImg },
  { alt: 'олень', src: deerImg },
  { alt: 'лиса', src: foxImg },
  { alt: 'ястреб', src: hawkImg },
  { alt: 'ёж', src: hedgehogImg },
  { alt: 'бобёр', src: beaverImg },
  { alt: 'белый медведь', src: polarBearImg },
  { alt: 'утка', src: duckImg },
  { alt: 'бурый медведь', src: bearImg },
  { alt: 'заяц', src: hareImg }
]

export const cardToFlip = { alt: 'рубашка карты', src: coverImg };

const cardsData = arrayImages.map((image, ind) => ({ image, ind, isFlipped: false }))
const pairedCards = cardsData.concat(cardsData)
export const shuffledCards = pairedCards.sort(() => Math.random() - 0.5)