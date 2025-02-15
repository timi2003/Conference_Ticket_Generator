import React from "react";


const Input = ({ label, ...props }) => {
    return(
        <div className="space-y-2">
            {label && (
                <label className="block text-sm text-gray-400">{label}</label>
                )}
            <input 
            className="w-full p-2 bg-[#002633] rounded-lg border border-[#00384d] focus:outline-none focus:border-cyan-600"
            {...props} 
            />
        </div>
    );
};
export default Input;