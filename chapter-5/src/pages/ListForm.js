import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
import FormItem from '../components/FormItem/FormItem';
import Button from '../components/Button/Button';
import { useState, useContext } from 'react';
import { ItemsContext } from '../context/items-context';

const FormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 2% 5%;
`;

const SubmitButton = styled(Button)`
  background: blue;
  margin: 2% 0;
`;

function ListForm() {
  let navigate = useNavigate();
  const { addItem } = useContext(ItemsContext)
  const { listId } = useParams();
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('')
  const [price, setPrice] = useState('')

  const onSubmitForm = (e) => {
    e.preventDefault()
    if (title && quantity && price) {
      addItem({
        title,
        quantity,
        price,
        listId
      })
    }
    navigate(`/list/${listId}`)
  }

  return (
    <>
      {navigate && <NavBar goBack={() => navigate(-1)} title={`Add Item`} />}
      <FormWrapper>
        <form>
          <FormItem handleOnChange={({ currentTarget }) => setTitle(currentTarget.value)} value={title} id='title' label='Title' placeholder='Insert title' />
          <FormItem
            handleOnChange={({ currentTarget }) => setQuantity(currentTarget.value)}
            value={quantity}
            id='quantity'
            label='Quantity'
            type='number'
            placeholder='0'
          />
          <FormItem handleOnChange={({ currentTarget }) => setPrice(currentTarget.value)} id='price' label='Price' type='number' placeholder='0.00' />
          <SubmitButton type="button" onClick={onSubmitForm}>Add Item</SubmitButton>
        </form>
      </FormWrapper>
    </>
  );
}

export default ListForm;
