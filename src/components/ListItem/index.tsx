import { ISwCharacter } from '../../store/swList/swListSlice';
import { useState } from 'react';
import './list-item.scss';

interface IProps {
  character: ISwCharacter;
}

const ListItem = ({ character }: IProps) => {
  const bornDate = () => {
    const born = character.born;
    if (!born) return 'неизвестно';
    return (
      Math.abs(born) +
      ' лет' +
      (born < 0 ? ' до ' : ' после ') +
      'битвы на явине'
    );
  };

  const [isFavorite, setIsfavorite] = useState(false);

  return (
    <div className="list-item">
      <div className="character-desc">
        <h1>{character.name}</h1>
        <p>Родился: {bornDate()}</p>
      </div>
      <div className="img-wrapper">
        <img
          className="character-img"
          alt={character.name}
          src={character.image}
        />
      </div>

      <div
        className={`fav-ico `}
        onClick={() => setIsfavorite((prev) => !prev)}
      >
        <svg
          width="73"
          height="66"
          viewBox="0 0 73 66"
          fill={isFavorite ? 'red' : 'none'}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.6797 0.501187C27.2056 0.560376 32.4877 2.79945 36.371 6.73105L36.7164 7.08079L37.072 6.74134C41.0471 2.94625 46.354 0.864581 51.8492 0.944808C57.3445 1.02503 62.5883 3.26074 66.451 7.17025C70.3137 11.0798 72.486 16.3502 72.4999 21.846C72.5139 27.3409 70.3691 32.6214 66.5277 36.5502C66.527 36.5509 66.5263 36.5516 66.5257 36.5523L66.5229 36.555L66.521 36.5569L64.3625 38.7387L64.3594 38.7418L61.5092 41.5721L61.508 41.5732L61.5014 41.5799L61.5013 41.58L50.1111 52.9701L38.7213 64.3599C38.1916 64.8888 37.4736 65.1858 36.725 65.1858C35.9765 65.1858 35.2585 64.8888 34.7288 64.3599L11.9488 41.58L11.9388 41.57L11.9376 41.5688L9.07049 38.7216L9.06761 38.7187L6.94544 36.5766L6.94555 36.5765L6.93667 36.568C3.90855 33.6583 1.82443 29.9061 0.95454 25.7977C0.0846553 21.6893 0.469136 17.4143 2.05813 13.5271C3.64712 9.63986 6.36733 6.31967 9.86602 3.99704C13.3647 1.67441 17.4805 0.456488 21.6797 0.501187ZM21.6797 0.501187L21.6851 0.00121605L21.6797 0.501187Z"
            stroke="black"
          />
        </svg>
      </div>
    </div>
  );
};

export default ListItem;
