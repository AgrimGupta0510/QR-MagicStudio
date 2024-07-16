# QR MagicStudio

QR MagicStudio is an npm package that allows you to generate QR codes with ease.

## Installation

You can install the package via npm:

```bash
npm install qr-magicstudio
```

## Generate a QR Code

To generate a QR code for a URL, simply import the generateQR function from qr-magicstudio and call it with the URL as an argument. The function will return the file path of the generated QR code image.

```js
import express from 'express';
import generateQR from 'qr-magicstudio';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

// Generate QR code for a sample URL
const qrCodeFilePath = generateQR('https://github.com/AgrimGupta0510');

app.get('/', (req, res) => {
    res.send(`<img src="${qrCodeFilePath}" alt="qrcode" />`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
```

