import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import Button from '../ui/Button';
import Input from '../ui/Input';
import ImageUpload from '../ui/ImageUpload';

const AttendeeDetails = ({ ticketData, setTicketData, onNext, onPrev }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      onNext();
    };
  
    return (
      <Card className="bg-[#001a23] border-[#00384d]">
        <CardHeader>
          <CardTitle className="text-cyan-400">Attendee Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <ImageUpload
              value={ticketData.avatar}
              onChange={(url) => setTicketData(prev => ({ ...prev, avatar: url }))}
            />
            <Input
              label="Full Name"
              value={ticketData.name}
              onChange={(e) => setTicketData(prev => ({ ...prev, name: e.target.value }))}
            />
            <Input
              label="Email Address"
              type="email"
              value={ticketData.email}
              onChange={(e) => setTicketData(prev => ({ ...prev, email: e.target.value }))}
            />
            <div className="flex justify-between">
              <Button variant="dark" onClick={onPrev}>Back</Button>
              <Button variant="cyan" type="submit">Get My Free Ticket</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
  };
  export default AttendeeDetails;