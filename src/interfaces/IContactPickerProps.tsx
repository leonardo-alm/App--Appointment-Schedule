import { IContact } from "./IContact";

export interface IContactPickerProps {
contacts: IContact[];
handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}