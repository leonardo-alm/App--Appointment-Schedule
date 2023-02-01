import { IAppointment } from "./IAppointment";
import { IContact } from "./IContact";

export interface IAppointmentsPageProps{
    contacts: IContact[];
    appointments: IAppointment[];
    addAppointment: (appointment: IAppointment) => void;
}