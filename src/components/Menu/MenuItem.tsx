import { Link } from 'react-router-dom';
interface IProps {
  title: string;
  img?: string;
  onClick?: () => void;
  link: string;
}

const MenuItem = ({
  title,
  img,
  onClick,
  link,
}: IProps) => {
  return (
    <Link to={link}>
      <div
        className="menu-item"
        onClick={onClick}
      >
        {title} {img}
      </div>
    </Link>
  );
};

export default MenuItem;
