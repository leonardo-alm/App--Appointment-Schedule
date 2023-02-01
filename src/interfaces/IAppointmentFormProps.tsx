import { IContact } from "./IContact";

export interface IAppointmentFormProps {
    contacts: IContact[];
    title: string;
    setTitle: (title: string) => void;
    setContact: (contact: string) => void;
    date: string;
    setDate: (date: string) => void;
    time: string;
    setTime: (time: string) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}