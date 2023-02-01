import { IContact } from "./IContact";

export interface IContactsPageProps {
    contacts: IContact[];
    addContact: (contact: IContact) => void
}