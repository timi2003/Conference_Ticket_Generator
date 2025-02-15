import React from 'react';
import { Upload } from 'lucide-react';

const ImageUpload = ({ value, onChange }) => {
    const handleUpload = (e) => {
        const file = e.target.files[0];
        if (file){
            onchange("/api/placeholder/200/200");
        }
    };
    return(
        <div className="text-center">
        <div className="w-32 h-32 mx-auto bg-[#002633] rounded-lg flex items-center justify-center">
        {value ? (
            <img src={value}
            alt='avatar' 
            className="w-full h-full object-cover rounded-lg"
            />
        ) : (
            <Upload className="text-cyan-400" />
        )}
        </div>
        <input
        type='file'
        accept='image/*'
        id='avatar-upload'
        />
        <label
        htmlFor='avatar-upload'
        className='mt-4 inline-block text-sm text-cyan-400 cursor-pointer'
        >
            Upload Photo
        </label>
        </div>
    );
};

export default ImageUpload;