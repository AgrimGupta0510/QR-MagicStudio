import qr from 'qr-image';
import fs from 'fs';

const generateQR = (URL) => {
    const url = URL;
    const qr_svg = qr.image(url, { type: 'png' });
    const filePath = 'qr-img.png';
    qr_svg.pipe(fs.createWriteStream(filePath));

    return filePath;
};
export default generateQR;