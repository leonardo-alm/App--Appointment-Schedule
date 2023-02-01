import React, { useState } from "react";
import { AppointmentForm } from "../components/appointmentForm/AppointmentForm";
import { TileList } from "../components/tileList/TileList";
import { IAppointmentsPageProps } from "../interfaces/IAppointmentsPageProps";

export const AppointmentsPage = (props: IAppointmentsPageProps) => {
  const { contacts, appointments, addAppointment } = props
  const [title, setTitle] = useState<string>('')
  const [contact, setContact] = useState<string>('')
  const [date, setDate] = useState<string>('')
  const [time, setTime] = useState<string>('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const appointment = {
      title,
      contact,
      date,
      time
    }

    addAppointment(appointment)

    setContact('')
    setDate('')
    setTime('')
    setTitle('')
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          time={time}
          title={title}
          date={date}
          contacts={contacts}
          setContact={setContact}
          setDate={setDate}
          setTime={setTime}
          setTitle={setTitle}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};
