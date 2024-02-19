import { PhonebookFilter } from './Filter.styled';

export const Filter = ({ filter }) => {
  return (
    <PhonebookFilter onChange={e => filter(e.target.value)}>
      <label htmlFor="find-contact">Find contacts by name</label>
      <input
        type="text"
        name="find-contact"
        id="find-contact"
        pattern="^[a-zA-Zа-яА-Я]+(['\s\-][a-zA-Zа-яА-Я]+)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      ></input>
    </PhonebookFilter>
  );
};
