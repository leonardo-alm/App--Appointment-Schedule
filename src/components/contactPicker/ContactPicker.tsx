import { IContactPickerProps } from "../../interfaces/IContactPickerProps";

export const ContactPicker = (props: IContactPickerProps) => {
  const { contacts, handleChange } = props
  return (
    <select onChange={handleChange}>
      <option value="no contact" selected={true} key={0}>
        No Contact Selected
      </option>
      {contacts.map((contact, index) => {
        return <option value={contact.name} key={index + 1}>{contact.name}</option>
      })}
    </select>
  );
};
