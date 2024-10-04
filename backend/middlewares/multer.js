// multer.js
import multer from 'multer';

const storage = multer.memoryStorage(); // or any other storage configuration
const upload = multer({ storage });

export const singleUpload = upload.single('file'); // Ensure this line exists
