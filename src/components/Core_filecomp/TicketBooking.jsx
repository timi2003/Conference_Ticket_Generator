import React, { useState } from 'react';
import TicketSelection from './TicketSelection';
import AttendeeDetails from './AttendeeDetails';
import GeneratedTicket from './GeneratedTicket';



const TicketBooking = () => {
  const [step, setStep] = useState(1);
  const [ticketData, setTicketData] = useState({
    ticketType: 'regular',
    price: 50.00,
    quantity: 1,
    name: '',
    email: '',
    avatar: null
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="max-w-md mx-auto">
      {step === 1 && (
        <TicketSelection 
          ticketData={ticketData}
          setTicketData={setTicketData}
          onNext={nextStep}
        />
      )}
      {step === 2 && (
        <AttendeeDetails
          ticketData={ticketData}
          setTicketData={setTicketData}
          onNext={nextStep}
          onPrev={prevStep}
        />
      )}
      {step === 3 && (
        <GeneratedTicket
          ticketData={ticketData}
        />
      )}
    </div>
  );
};

export default TicketBooking;