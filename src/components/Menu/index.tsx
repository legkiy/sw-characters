import { Dispatch, useState } from 'react';
import { useGetList } from '../../hooks/useGetList';
import MenuItem from './MenuItem';
import './menu.scss';

export interface IMenuItem {
  title: string;
  link: string;
  img?: string;
  onClick: () => void;
}

interface IProps {
  setCurrentPage: Dispatch<React.SetStateAction<number>>;
}
const Menu = ({ setCurrentPage }: IProps) => {
  const { getList, getFavoList } = useGetList();

  const [onPage, setOnPage] = useState(0);

  const handleOnSelectPage = (index: number) => {
    setOnPage(index);
  };

  const content: IMenuItem[] = [
    {
      title: 'Весь список',
      link: '/',
      onClick: () => {
        getList();
        setCurrentPage(1);
        handleOnSelectPage(0);
      },
    },
    {
      title: 'Избранное',
      link: '/favorites',
      onClick: () => {
        getFavoList();
        setCurrentPage(1);
        handleOnSelectPage(1);
      },
    },
  ];
  return (
    <div className="menu">
      {content.map((item, index) => (
        <MenuItem
          key={index}
          link={item.link}
          title={item.title}
          img={item?.img}
          onClick={item.onClick}
          className={onPage === index ? 'on-page' : ''}
        />
      ))}
    </div>
  );
};

export default Menu;
