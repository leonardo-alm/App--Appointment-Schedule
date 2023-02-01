import React, { useState, useEffect } from "react";
import { ContactForm } from "../components/contactForm/ContactForm";
import { TileList } from "../components/tileList/TileList";
import { IContact } from "../interfaces/IContact";
import { IContactsPageProps } from "../interfaces/IContactsPageProps";

export const ContactsPage = (props: IContactsPageProps) => {
  const { contacts, addContact } = props
  const [name, setName] = useState<string>('')
  const [phone, setPhone] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [isDuplicate, setIsDuplicate] = useState<boolean>(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const contact = {
      name,
      phone,
      email
    }

    if (!isDuplicate) {
      addContact(contact)
    }

    setName('')
    setPhone('')
    setEmail('')
  };

  useEffect(() => {
    const duplicate = contacts.find((contact: IContact) => contact.name === name)
    if (duplicate) {
      setIsDuplicate(true);
    }
    else {
      setIsDuplicate(false)
    }
  }, [name])


  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          phone={phone}
          email={email}
          setName={setName}
          setPhone={setPhone}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList tiles={contacts} />
      </section>
    </div>
  );
};
