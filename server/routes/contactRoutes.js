import express from 'express';
import {
  getAllContacts,
  getContactById,
  createContact,
  updateContactStatus,
  deleteContact,
} from '../controllers/contactController.js';

const router = express.Router();

// CRUD routes for contact messages
router.get('/', getAllContacts);
router.get('/:id', getContactById);
router.post('/', createContact);
router.patch('/:id', updateContactStatus);
router.delete('/:id', deleteContact);

export default router;
