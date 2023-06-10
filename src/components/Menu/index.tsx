import { useGetList } from '../../hooks/useGetList';
import MenuItem from './MenuItem';
import './menu.scss';

export interface IMenuItem {
  title: string;
  link: string;
  img?: string;
  onClick?: () => Promise<void>;
}

const Menu = () => {
  const { getList, getFavoList } = useGetList();

  const content: IMenuItem[] = [
    {
      title: 'Весь список',
      link: '/',
      onClick: () => getList(),
    },
    {
      title: 'Избранное',
      link: '/favorites',
      onClick: () => getFavoList(),
    },
  ];
  return (
    <div className="menu">
      {content.map((item) => (
        <MenuItem
          link={item.link}
          title={item.title}
          img={item?.img}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};

export default Menu;
