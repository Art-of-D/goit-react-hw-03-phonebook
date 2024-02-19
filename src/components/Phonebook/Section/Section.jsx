import { PhonebookSection, PhonebookTitle } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <PhonebookSection>
      <PhonebookTitle>{title}</PhonebookTitle>
      {children}
    </PhonebookSection>
  );
};
