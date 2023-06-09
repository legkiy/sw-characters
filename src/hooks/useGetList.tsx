import { useDispatch } from 'react-redux';
import { setSwList } from '../store/swList/swListSlice';

export const useGetList = () => {
  const dispatch = useDispatch();

  const getList = async () => {
    const listRes = await fetch(
      'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json'
    ).then((res) => res.json());

    dispatch(setSwList(listRes));
  };
  return { getList };
};
