import { IContactFormProps } from "../../interfaces/IContactFormProps";

export const ContactForm = (props: IContactFormProps) => {
  const {
    name,
    setName,
    phone,
    setPhone,
    email,
    setEmail,
    handleSubmit
  } = props

  return (
    <form className="AddContactForm" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        aria-label="Contact name"
        placeholder="Contact name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        aria-label="Contact email"
        placeholder="Contact email"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="tel"
        /*  pattern="^(1\s?)?(\d{3}|\(\d{3}\))[\s\-]?\d{3}[\s\-]?\d{4}$" */
        aria-label="Contact phone"
        placeholder="Contact phone"
      />
      <input type="submit" value="Add contact" />
    </form>
  );
};
