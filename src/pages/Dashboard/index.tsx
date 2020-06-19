import React, { useState, FormEvent, useEffect } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Title, Form, Repositories, Error } from './styles';

// adiconando na typagem so as informaçoes que vou usar//
interface Repository {
  // eslint-disable-next-line camelcase
  full_name: string;
  description: string;
  owner: {
    login: string;
    // eslint-disable-next-line camelcase
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [inputError, setInputError] = useState('');
  /* armazenando valor do repsositorio */
  const [newRepo, setnewRepo] = useState('');
  /* armazenando valor do repsositorio, estado é um array de repositorios */
  const [repositories, setrepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem(
      '@GithubExplorer:repositories',
    );

    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }
    return [];
  });
  // salvar dados no localstorage sempre que o array repositories for alterado //
  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    // evita o redirecionamento de pagina ao utilizar formulario //
    event.preventDefault();

    // Lidando com erros //
    if (!newRepo) {
      setInputError('Digite autor/nome do repositorio');
      return;
    }
    try {
      // buscando dados de um repositorio //
      const response = await api.get<Repository>(`repos/${newRepo}`);
      // pegando todos os dados da api(rotas) do github //
      const repository = response.data;
      // adicionando o novo repositorio no final do array //
      setrepositories([...repositories, repository]);
      // limpando o valor do input//
      setnewRepo('');
      setInputError('');
    } catch (err) {
      setInputError('Digite o Repositorio Correto');
    }
  }

  return (
    <>
      <Title>Explore repositórios no Github </Title>
      <Form hasError={!!inputError} onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          /** pegando o valor/informação que o usario digitou */
          onChange={(e) => setnewRepo(e.target.value)}
          placeholder=" Digite o repositorio"
        />
        <button type="submit">Pesquisar</button>
      </Form>
      {inputError && <Error>{inputError}</Error> /* mostrando erro na tela */}
      <Repositories>
        {repositories.map((repositoty) => (
          <Link
            key={repositoty.full_name}
            to={`/repositories/${repositoty.full_name}`}
          >
            <img
              src={repositoty.owner.avatar_url}
              alt={repositoty.owner.login}
            />
            <div>
              <strong>{repositoty.full_name}</strong>
              <p>{repositoty.description}</p>
            </div>

            <FiChevronRight size={21} />
          </Link>
        ))}
      </Repositories>
    </>
  );
};

export default Dashboard;
