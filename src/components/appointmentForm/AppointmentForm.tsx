import React from "react";
import { IAppointmentFormProps } from "../../interfaces/IAppointmentFormProps";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = (props: IAppointmentFormProps) => {
  const {
    contacts,
    title,
    setTitle,
    setContact,
    date,
    setDate,
    time,
    setTime,
    handleSubmit
  } = props

  const getTodayString = () : string => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form className="AddContactForm" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        aria-label="Appointment title"
        placeholder="Appointment title"
      />
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
        min={getTodayString()}
        aria-label="Appointment date"
        placeholder="Appointment date"
      />
      <input
        value={time}
        onChange={(e) => setTime(e.target.value)}
        type="time"
        aria-label="Appointment time"
        placeholder="Appointment time"
      />
      <ContactPicker
        contacts={contacts}
        handleChange={(e: React.ChangeEvent<HTMLSelectElement>) => setContact(e.target.value)}
      />
      <input type="submit" value="Add appointment"/>
    </form>
  );
};
