import './App.css';

import { GET_CHARACTERS } from './scripts/query';
import { useQuery } from '@apollo/client';
import { orderBy } from 'lodash';

function App() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const RickMortyCharacters = data?.characters.results;
  console.log(RickMortyCharacters);

  if (error) {
    return <p>Something went wrong</p>;
  }
  if (loading || !RickMortyCharacters) {
    return <p>Loading..</p>;
  }

  return (
    <div className='App'>
      <div className='container'>
        {RickMortyCharacters.map((RickMortyCharacters: any) => {
          orderBy(RickMortyCharacters, ['id'], ['desc']);
          return (
            <div className='results' key={RickMortyCharacters.id}>
              <p>{RickMortyCharacters.name}</p>
              <img
                src={RickMortyCharacters.image}
                alt={RickMortyCharacters.name}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
