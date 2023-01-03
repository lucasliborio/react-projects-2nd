import { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import ListItem from '../components/ListItem/ListItem';
import { ItemsContext } from '../context/items-context';
import { ListContext } from '../context/lists-contexts';

const ListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

function ListDetail() {
  let navigate = useNavigate();
  const { listId } = useParams();
  const { loading, error, fetchItems, items, cleanItems } = useContext(ItemsContext)
  const { list, fetchList } = useContext(ListContext)
  
  useEffect(() => {
    !items.length && fetchItems(listId)
    return () => {
      cleanItems()
    }
  }, [listId, fetchItems]);

  useEffect(() => {
    listId && fetchList(listId)
  }, [fetchList, listId]);
  return (
    <>
      {navigate && (
        <NavBar
          goBack={() => navigate(-1)}
          openForm={() => navigate(`/list/${listId}/new`)}
          title={list && list.title}
        />
      )}
      <ListItemWrapper>
        {loading || error ? (
          <span>{error || 'Loading...'}</span>
        ) : (
          items.map((item) => <ListItem key={item.id} data={item} />)
        )}
      </ListItemWrapper>
    </>
  );
}

export default ListDetail;
