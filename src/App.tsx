import './styles.scss';

import { GET_CHARACTERS } from './scripts/query';
import { useQuery } from '@apollo/client';
import { orderBy } from 'lodash';

function App() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  const RickMortyCharacters = data?.characters.results;
  console.log(RickMortyCharacters);
  const orderCharacters = orderBy(RickMortyCharacters, ['id'], ['desc']);

  if (error) {
    return <p>Something went wrong</p>;
  }
  if (loading || !RickMortyCharacters) {
    return <p>Loading..</p>;
  }

  return (
    <div className='App'>
      <h1>Workflow 2 Course Assignment</h1>
      <div className='container'>
        {orderCharacters.map((RickMortyCharacters: any) => {
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
