import { useEffect, useState } from 'react';

interface IProps {}

const List = ({}: IProps) => {
  const [movieList, setMovieList] = useState();
  const top250Movies = async () => {
    const data = await fetch('https://akabab.github.io/starwars-api/api/all.json').then((res) =>
      res.json()
    );
    console.log(data);
  };
  useEffect(() => {
    top250Movies();
  }, []);
  return <div></div>;
};

export default List;
