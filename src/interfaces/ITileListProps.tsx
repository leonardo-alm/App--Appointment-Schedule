import { IAppointment } from "./IAppointment";
import { IContact } from "./IContact";

export interface ITileListProps {
    tiles: IContact[] | IAppointment[]
}