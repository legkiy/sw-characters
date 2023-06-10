import { useEffect, useState } from 'react';
import { useGetList } from '../../../hooks/useGetList';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store/store';
import ListItem from '../../ListItem';

interface IProps {}

const List = ({}: IProps) => {
  const { getList } = useGetList();

  const { swList } = useSelector((state: IRootState) => state);

  const countOnPage = 4;

  const [curreentPage, setCurrentPage] = useState(1);

  const lastItemIndex = countOnPage * curreentPage;
  const firstItemIndex = lastItemIndex - countOnPage;

  const currentItems = swList.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    getList();
  }, []);

  return (
    <div className="list-conteiner">
      {currentItems.map((item) => (
        <ListItem character={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
