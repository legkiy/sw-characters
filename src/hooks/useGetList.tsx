import { useDispatch, useSelector } from 'react-redux';
import { setSwList } from '../store/swList/swListSlice';
import { IRootState } from '../store/store';
import { ISwCharacter } from '../store/swList/interfaces';

export const useGetList = () => {
  const dispatch = useDispatch();
  const { favoritesIds, swList } = useSelector((state: IRootState) => state);

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

    favoritesIds.forEach(async (element) => {
      const favoRes = await fetch(
        `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${element}.json`
      ).then((res) => res.json());
      
      list = [...list, favoRes];
      dispatch(setSwList(list));
    });

    console.log(swList);
  };
  return { getList, getFavoList };
};
