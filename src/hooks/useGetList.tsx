import { useDispatch, useSelector } from 'react-redux';
import { setSwList } from '../store/swList/swListSlice';
import { IRootState } from '../store/store';
import { ISwCharacter } from '../store/swList/interfaces';

export const useGetList = () => {
  const dispatch = useDispatch();
  const { favoritesIds } = useSelector((state: IRootState) => state);

  const getList = async () => {
    const listRes = await fetch(
      'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json'
    ).then((res) => res.json());

    dispatch(setSwList(listRes));
  };
  const getFavoList = async () => {
    dispatch(setSwList([]));
    if (favoritesIds.length < 1) return;

    let list: ISwCharacter[] = [];

    favoritesIds.forEach(async (el, index) => {
      const favoRes = await fetch(
        `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${el}.json`
      ).then((res) => res.json());
      setTimeout(() => {
        list = [...list, favoRes];
        if (index === favoritesIds.length - 1) {
          console.log(list);
        }
      }, (index + 1) * 500);
      list = [...list, favoRes];
      dispatch(setSwList(list));
    });
  };
  return { getList, getFavoList };
};
