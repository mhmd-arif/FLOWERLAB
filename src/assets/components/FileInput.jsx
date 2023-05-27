import { useState } from 'react';

export default function FileInput() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('http://127.0.0.1:5000/success', {
        method: 'POST',
        body: formData,
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response from the API
          console.log(data);
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
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

// export default FileInput;