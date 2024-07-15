const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;

const API_KEY = 'vTfjbQ64sjd5jUgE4moyM6d7YcFPDWT9H88LZ8NevKG';

function generateToken() {
  const payload = {
    user_email: 'ahmadmesbahqa@gmail.com',
    integration_email: 'saas-user@company.com',
    external_id: 'TestForm123',
    name: 'Integration W-9 Test Form',
    document_urls: ['https://www.irs.gov/pub/irs-pdf/fw9.pdf'],
  };

  const token = jwt.sign(payload, API_KEY);
  return token;
}

app.get('/generate-token', (req, res) => {
  try {
    const token = generateToken();
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate token' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});















// const jwt = require('jsonwebtoken');
// const API_KEY = 'vTfjbQ64sjd5jUgE4moyM6d7YcFPDWT9H88LZ8NevKG' 

// function generateToken() {
//     const payload = {
//       user_email: 'ahmadmesbahqa@gmail.com',
//       integration_email: 'saas-user@company.com',
//       external_id: 'TestForm123',
//       name: 'Integration W-9 Test Form',
//       document_urls: ['https://www.irs.gov/pub/irs-pdf/fw9.pdf'],
//     };
  
   
//     const token = jwt.sign(payload, API_KEY);
//     console.log(token);
// }
  
//   // Wait for the jwt library to load before generating the token
//   if (typeof jwt !== 'undefined') {
//     generateToken();
//   } else {
//     window.addEventListener('load', generateToken);
//   }


  // Obtain from DocuSeal Console
//vTfjbQ64sjd5jUgE4moyM6d7YcFPDWT9H88LZ8NevKG

// const token = jwt.sign({
//   user_email: 'ahmadmesbahqa@gmail.com',
//   integration_email: 'saas-user@company.com',
//   external_id: 'TestForm123',
//   name: 'Integration W-9 Test Form',
//   document_urls: ['https://www.irs.gov/pub/irs-pdf/fw9.pdf'],
// }, API_KEY);

// console.log(token)