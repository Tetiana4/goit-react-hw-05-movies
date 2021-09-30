import toast  from 'react-hot-toast';
import { SearchForm, Form, Input, Button} from './SearchBar.styled';

export default function SearchBar({ onSubmit }) {

  const handleFormSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value;
    if (query.trim() === '') {
      toast.error('Please, write something');
      return;
    }
    onSubmit(query);
  };

    return (
      <SearchForm>
        <Form onSubmit={handleFormSubmit}>
          <Button type="submit"/>
          <Input
            placeholder="type to search movies..."
            name="query"
            type="text"
            autoComplete="off"
            autoFocus
          />      
        </Form>           
      </SearchForm>
  );
}



