import { Dispatch } from 'react';
import './page-views.scss';

interface IProps {
  curreentPage: number;
  setCurreentPage: Dispatch<React.SetStateAction<number>>;
  lastPage: number;
}

const PageView = ({ curreentPage, setCurreentPage, lastPage }: IProps) => {
  return (
    <div className="page-view">
      <span>Page</span>
      {curreentPage !== 1 && (
        <span onClick={() => setCurreentPage(1)}>{1} ...</span>
      )}
      <span className="curreent-page">{curreentPage}</span>
      {curreentPage !== lastPage && (
        <span onClick={() => setCurreentPage(lastPage)}>... {lastPage}</span>
      )}
    </div>
  );
};

export default PageView;
