import {
  PhonebookList,
  PhonebookListElements,
  PhonebookDeleteButton,
} from './ContactList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <PhonebookList>
      {contacts.map(({ id, name, number }) => {
        return (
          <PhonebookListElements key={id}>
            {name}: {number}
            <PhonebookDeleteButton onClick={() => onDelete(id)}>
              Delete
            </PhonebookDeleteButton>
          </PhonebookListElements>
        );
      })}
    </PhonebookList>
  );
};
