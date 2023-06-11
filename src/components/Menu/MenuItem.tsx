import { Link } from 'react-router-dom';
interface IProps {
  title: string;
  img?: string;
  onClick: () => void;
  link: string;
  className: string;
}

const MenuItem = ({ title, img, onClick, link, className }: IProps) => {

  return (
    <Link to={link}>
      <div className={`menu-item ${className}`} onClick={onClick}>
        <span>
          {title} {img}
        </span>
      </div>
    </Link>
  );
};

export default MenuItem;
