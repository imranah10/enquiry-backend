import nodemailer from 'nodemailer';
import User from '../Models/Users.model.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

const createEnquiry = async (req, res) => {
  try {
    const newEnquiry = await User.create(req.body);

    const mailOptions = {
      from: process.env.EMAIL,
      to: newEnquiry.email,
      subject: 'Enquiry Confirmation',
      text: `Thank you for your enquiry, ${newEnquiry.candidateName}. We will get back to you shortly.`,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: 'Enquiry submitted successfully', data: newEnquiry });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting enquiry', error: error.message });
  }
};

const getenquiries = async (req, res) => {
  try {
    const enquiries = await User.find({});
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching enquiries', error: error.message });
  }
};

export { createEnquiry, getenquiries };
