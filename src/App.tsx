import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./pages/AppointmentsPage";
import { ContactsPage } from "./pages/ContactsPage";
import { IContact } from "./interfaces/IContact";
import { IAppointment } from "./interfaces/IAppointment";
import { IAppProps } from "./interfaces/IAppProps";

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [contacts, setContacts] = useState<IContact[]>([])
  const [appointments, setAppointments] = useState<IAppointment[]>([])

  const onAddContactHandler = (contact: IContact) => {
    setContacts((prev: IContact[]) => {
      return [contact, ...prev]
    })
  }

  const onAddAppointmentHandler = (appointment: IAppointment) => {
    setAppointments((prev: IAppointment[]) => {
      return [appointment, ...prev]
    })
  }

  return (
    <>
      <nav>
        <NavLink to="/contacts" >
          Contacts
        </NavLink>
        <NavLink to="/appointments" >
          Appointments
        </NavLink>
      </nav>
      <main className="container">
        <Routes>
          <Route path="/" element={<ContactsPage contacts={contacts} addContact={onAddContactHandler} />} />
          <Route path="/contacts" element={<ContactsPage contacts={contacts} addContact={onAddContactHandler} />} />
          <Route path="/appointments" element={<AppointmentsPage
            contacts={contacts}
            appointments={appointments}
            addAppointment={onAddAppointmentHandler} />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
