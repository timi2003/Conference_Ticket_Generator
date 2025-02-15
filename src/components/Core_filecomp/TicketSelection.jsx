// components/TicketBooking/TicketSelection.jsx
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';
const TicketSelection = ({ ticketData, setTicketData, onNext }) => {
  const handleTicketSelection = (type, price) => {
    setTicketData(prev => ({
      ...prev,
      ticketType: type,
      price: price
    }));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ticket Selection</CardTitle>
        <p className="text-lg font-bold text-white mt-2">Techember Fest '25</p>
        <p className="text-sm text-gray-400">8 june 2025 | 10 AM - 6 PM</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <Button
              onClick={() => handleTicketSelection('regular', 50.00)}
              className={`${ticketData.ticketType === 'regular' ? 'bg-cyan-600' : 'bg-[#002633]'}`}
            >
              Regular
              <span className="block text-sm">$50.00</span>
            </Button>
            <Button
              onClick={() => handleTicketSelection('vip', 100.00)}
              className={`${ticketData.ticketType === 'vip' ? 'bg-cyan-600' : 'bg-[#002633]'}`}
            >
              VIP Access
              <span className="block text-sm">$100.00</span>
            </Button>
          </div>
          
          <Input
            label="Number of Tickets"
            type="number"
            min="1"
            value={ticketData.quantity}
            onChange={(e) => setTicketData(prev => ({
              ...prev,
              quantity: parseInt(e.target.value)
            }))}
          />
          
          <div className="flex justify-between mt-6">
            <Button variant="dark">Reset</Button>
            <Button variant="cyan" onClick={onNext}>Next</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TicketSelection;