import { useEffect } from 'react';
import { useGetList } from '../../hooks/useGetList';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/store';
import './list.scss';
import ListItem from './ListItem';

interface IProps {}

const List = ({}: IProps) => {
  const { getList } = useGetList();

  const { swList } = useSelector(
    (state: IRootState) => state
  );

  useEffect(() => {
    getList();
  }, []);
  console.log(swList);

  return (
    <div className="list-conteiner">
      {swList.map((item) => (
        <ListItem
          character={item}
          key={item.id}
        />
      ))}
    </div>
  );
};

export default List;
