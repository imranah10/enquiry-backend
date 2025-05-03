import express from 'express';
import {createEnquiry,getenquiries,}  from '../Controllers/Enquiry.controllers.js';
import {loginAdmin} from '../Controllers/Admin.controllers.js';

const router = express.Router();

// POST route to handle form submission
router.post('/enquiry', createEnquiry);
// GET route to fetch all enquiries
router.get('/getenquiries', getenquiries);
router.post('/admin',loginAdmin)


export default router;
