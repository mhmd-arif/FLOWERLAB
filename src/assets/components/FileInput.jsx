import { useState } from 'react';
import {useNavigate} from 'react-router-dom'

export default function FileInput() {
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('http://127.0.0.1:5000/predict-image', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the API
          console.log(data);

          navigate("/flower-description",{
            state: data
          })
        })
        .catch(error => {
          // Handle any errors
          console.error(error);
        });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} className='bg-white' />
        <button type="submit" className='bg-white rounded-md p-[5px] ml-[10px] '>Upload</button>
      </form>
    </div>
  );
}

// export default FileInput;