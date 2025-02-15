import React from "react";
import { QRCode } from 'react-qr-code';

const QRCodeGenerator = ({ data }) => {
    return(
        <div className="qr-code">
            <QRCode size ={64} className ="text-white" />
        </div>
    );
};
export default QRCodeGenerator;