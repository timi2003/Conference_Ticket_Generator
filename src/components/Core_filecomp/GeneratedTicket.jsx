import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import { QRCode } from 'react-qr-code';
import { Download, Share2 } from 'lucide-react';

const GeneratedTicket = ({ ticketData }) => {
  // Generate QR code data
  const qrData = JSON.stringify({
    name: ticketData.name,
    email: ticketData.email,
    ticketType: ticketData.ticketType,
    eventName: 'Techember Fest 25'
  });

  // Format price based on ticket type
  const getTicketPrice = () => {
    return ticketData.ticketType === 'vip' ? '$100.00' : '$50.00';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Ticket Is Booked!</CardTitle>
          <p className="text-sm text-gray-400 mt-2">
            You will receive it in your email within a day
          </p>
        </CardHeader>
        <CardContent>
          {/* Ticket Design */}
          <div className="bg-gradient-to-r from-[#002633] to-[#003346] rounded-lg p-6 relative overflow-hidden">
            {/* Event Header */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400">Techember Fest '25</h3>
                <p className="text-gray-300">Tech festival celebrating innovation</p>
                <p className="text-sm text-gray-400">8 June 2025 | 10 AM - 6 PM</p>
              </div>
              <div className="bg-white p-2 rounded-lg">
                <QRCode
                  value={qrData}
                  size={80}
                  level="M"
                  className="w-20 h-20"
                />
              </div>
            </div>

            {/* Attendee Information */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                {ticketData.avatar && (
                  <img
                    src={ticketData.avatar}
                    alt="Attendee"
                    className="w-16 h-16 rounded-full object-cover border-2 border-cyan-400"
                  />
                )}
                <div>
                  <p className="text-lg font-semibold text-white">{ticketData.name}</p>
                  <p className="text-gray-400">{ticketData.email}</p>
                </div>
              </div>

              {/* Ticket Details */}
              <div className="flex justify-between items-center border-t border-[#004d66] pt-4 mt-4">
                <div>
                  <p className="text-sm text-gray-400">Ticket Type</p>
                  <p className="text-lg font-semibold text-cyan-400 uppercase">
                    {ticketData.ticketType}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Price</p>
                  <p className="text-lg font-semibold text-cyan-400">
                    {getTicketPrice()}
                  </p>
                </div>
              </div>

              {/* Ticket Number */}
              <div className="text-center border-t border-[#004d66] pt-4">
                <p className="text-sm text-gray-400">Ticket No.</p>
                <p className="text-lg font-mono text-cyan-400">
                  #TF25-{Math.random().toString(36).substr(2, 9).toUpperCase()}
                </p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 to-blue-500"></div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between mt-6">
            <button className="flex items-center px-6 py-2 bg-[#002633] rounded-lg hover:bg-[#003346] transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Download
            </button>
            <button className="flex items-center px-6 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition-colors">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <Card>
        <CardContent>
          <div className="space-y-4">
            <h4 className="font-semibold text-cyan-400">Important Information</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Please arrive 30 minutes before the event starts</li>
              <li>• Bring a valid ID matching the ticket name</li>
              <li>• The ticket QR code will be scanned at entry</li>
              <li>• This ticket is non-transferable</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GeneratedTicket;
