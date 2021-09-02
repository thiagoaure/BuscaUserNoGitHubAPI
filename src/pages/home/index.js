import React, {useState} from 'react';
import axios from 'axios';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

function App(props) {
  const history = useHistory();
  const [usuario, setUsuario] = useState('');
  const [erro, setErro] = useState(false);
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      }
      );
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false)
      history.push('/repositories'); //acessar pagina de repos
    }) //reponse.data por que é o nome que os arrays de repos se encontram na api
    .catch(err => {
      setErro(true);
    });
  }
  return (
    <S.HomeContainer>
      <S.Content>
        <p>{usuario}</p>
        <h1>{props.title} {props.user}</h1>
        <S.Input className="usuarioInput" placeholder="Usuario" value={usuario} onChange={e => setUsuario(e.target.value)}/>
        <S.Button type="button" onClick={handlePesquisa}> Pesquisar </S.Button>
        {erro ? <S.ErrorMsg>Ocorreu um erro. Tente novamente.</S.ErrorMsg> : ''}
      </S.Content>
    </S.HomeContainer>  
  );
}

export default App;
// Hooks -> useState  retorna um arrau [usuaeio, setUsuario]