import { Dispatch, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../store/store';
import ListItem from '../../ListItem';
import PageView from '../../PageView';

interface IProps {
  onLoad: () => Promise<void>;
  page: 'list' | 'favodites';
  curreentPage: number;
  setCurreentPage: Dispatch<React.SetStateAction<number>>;
}

const List = ({ onLoad, page, curreentPage, setCurreentPage }: IProps) => {
  const { swList } = useSelector((state: IRootState) => state);

  const countOnPage = 4;

  const lastItemIndex = countOnPage * curreentPage;
  const firstItemIndex = lastItemIndex - countOnPage;

  const currentItems = swList.slice(firstItemIndex, lastItemIndex);
  const lastPage = Math.ceil(swList.length / countOnPage);

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="list-conteiner">
      {swList.length > countOnPage && (
        <PageView
          curreentPage={curreentPage}
          setCurreentPage={setCurreentPage}
          lastPage={lastPage}
        />
      )}
      {currentItems.map((item) => (
        <ListItem key={item.id} character={item} page={page} />
      ))}
    </div>
  );
};

export default List;
