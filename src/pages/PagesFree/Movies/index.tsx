import React, { useState, useEffect } from 'react';
import Pagination from "../../../components/common/components/Pagination";
import api from '../../../lib/api';
import { formatDate } from '../../../lib/helper';
import MovieCard from '../../../components/common/components/MovieCard';
import { Col, Row } from 'react-bootstrap';
import Input from '../../../components/common/components/Input';
import Container from '../../../components/common/components/Container';
import Button from '../../../components/common/components/Button';
import { ToastContainer, toast } from 'react-toastify';

interface Movies {
  overview: string;
  title: string;
  release_date: string;
  poster_path: string;
}

const initialStateReleaseDate = {
    release_date_init: '',
    release_date_end: '',
};

const Users = () => {   
    const [movies, setMovies] = useState<Movies[]>([]);
    const [page, setPage] = useState(1);
    const [itemsCountPerPage, setItemsCountPerPage] = useState<number>(0);
    const [totalItemsCount, setTotalItemsCount] = useState(1);
    const [releaseDate, setReleaseDate] = useState(initialStateReleaseDate);
    const [title, setTitle] = useState('');
    const [loading, setLoading] = useState<boolean>(true);
    const [indexHandler, setIndexHandler] = useState<boolean>(true);

    useEffect(() => {
        const params = {
          page
        } as {
          page: number;
          title?: string;
        }

        title.length ? params['title'] = title : null;

        api.get('/movies', {params}).then(response => {
            const { data } = response.data;
            setMovies(data.map((item: any) => {
              const { poster_path, overview, title, release_date } = item;
              return {
                    overview,
                    title,
                    poster_path,
                    release_date: formatDate(release_date)
                } 
            }));
            setTotalItemsCount(response.data.total);
            setItemsCountPerPage(response.data.per_page);
            setLoading(false);
        });
    }, [page, title, indexHandler]);

    const renderPagination = () => {
      if(totalItemsCount > itemsCountPerPage) {
        return (
          <Pagination
                handlePageChange={e => setPage(e)}
                activePage={page}
                itemsCountPerPage={itemsCountPerPage}
                totalItemsCount={totalItemsCount}
                pageRangeDisplayed={5}
            />
        );
      }
    }

    const renderMoviesCards = () => {
        return movies.map(item => {
          const { 
                  overview,
                  title,
                  poster_path,
                  release_date 
                } = item;
          return (
            <Col className={'mb-2'} key={item.title} md={3}>
              <MovieCard
                    overview={overview}
                    title={title}
                    poster_path={poster_path}
                    release_date={release_date}
                />
            </Col>
          );
        })
    }

    const indexMovieHandler = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      api.post('/sync-themoviedb', releaseDate)
        .then(response => {
        const { message } = response.data;
        toast.success(message);
        setPage(1);
        setTimeout(() => {
          setIndexHandler(!indexHandler);
        }, 2000)
 
      }).catch(err => {
        const { message } = err.response.data;
        toast.error(message ?? 'Erro ao importar os dados');
      });
    }
    
    const setReleaseDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setReleaseDate({...releaseDate, [name]: value});
    }

    const setTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setPage(1);
      setTitle(e.target.value)
    }

    if (loading) {
      return "";
    }

    return (
      <Container size={'biggest'}> 
        <form onSubmit={indexMovieHandler}>
          <Row className={'mx-0'}>
            <Col md={3} className={'mb-3'}>
              <Input
                type={'date'}
                required
                name={'release_date_init'}
                onChange={setReleaseDateChange}
                label={'Período de lançamento inicial'}
              />
            </Col>
            <Col md={3} className={'mb-3'}>
              <Input
                type={'date'}
                required
                name={'release_date_end'}
                onChange={setReleaseDateChange}
                label={'Período de lançamento final'}
              />
            </Col>
            <Col md={3} className={'mb-3'}>
              <Button>Indexar</Button>
            </Col>
          </Row>
        </form>
        <Row className={'m-0'}>
          <Col md={6} className={'mb-3'}>
              <Input
                type={'text'}
                required
                value={title}
                onChange={setTitleChange}
                label={'Digite o nome do filme'}
              />
            </Col>
        </Row>
          
          {renderPagination()}
      
          <Row className={'m-0'}>
            {
                movies.length ? renderMoviesCards() :
                    <h1>Nenhum filme encontrado</h1>
            }
          </Row>
            
            {renderPagination()}
                  
      <ToastContainer />
      </Container>
    )
}
export default Users;