import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store/store';
import ListItem from '../../ListItem';

interface IProps {
  onLoad: () => Promise<void>;
  page: 'list' | 'favodites';
}

const List = ({ onLoad, page }: IProps) => {
  const { swList } = useSelector((state: IRootState) => state);
  console.log(swList);

  const countOnPage = 4;

  const [curreentPage, setCurrentPage] = useState(1);

  const lastItemIndex = countOnPage * curreentPage;
  const firstItemIndex = lastItemIndex - countOnPage;

  const currentItems = swList.slice(firstItemIndex, lastItemIndex);

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="list-conteiner">
      {currentItems.map((item) => (
        <ListItem key={item.id} character={item} page={page} />
      ))}
    </div>
  );
};

export default List;
