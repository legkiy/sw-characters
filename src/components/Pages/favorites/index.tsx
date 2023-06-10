import { useSelector } from 'react-redux';
import { IRootState } from '../../../store/store';
import './list.scss';

interface IProps {}

const Favorites = ({}: IProps) => {
  const { swList } = useSelector(
    (state: IRootState) => state
  );

  return (
    <div className="list-conteiner">
      adsadsasdsad
    </div>
  );
};

export default Favorites;
