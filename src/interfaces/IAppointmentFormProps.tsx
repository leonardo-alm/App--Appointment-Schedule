import { IContact } from "./IContact";

export interface IAppointmentFormProps {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    contacts: IContact[];
    setContact: (contact: string) => void;
    title: string;
    setTitle: (title: string) => void;
    date: string;
    setDate: (date: string) => void;
    time: string;
    setTime: (time: string) => void;
}