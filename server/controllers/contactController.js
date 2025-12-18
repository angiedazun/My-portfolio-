import Contact from '../models/Contact.js';

/**
 * @desc    Get all contact messages
 * @route   GET /api/contacts
 * @access  Public (In production, this should be protected)
 */
export const getAllContacts = async (req, res) => {
  try {
    const { status } = req.query;
    
    const query = status ? { status } : {};
    
    const contacts = await Contact.find(query).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contacts',
      error: error.message,
    });
  }
};

/**
 * @desc    Get single contact message by ID
 * @route   GET /api/contacts/:id
 * @access  Public (In production, this should be protected)
 */
export const getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found',
      });
    }

    res.status(200).json({
      success: true,
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching contact message',
      error: error.message,
    });
  }
};

/**
 * @desc    Create new contact message
 * @route   POST /api/contacts
 * @access  Public
 */
export const createContact = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Get IP address for tracking (optional)
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const contact = await Contact.create({
      name,
      email,
      message,
      ipAddress,
    });

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
      data: contact,
    });
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors,
      });
    }

    res.status(500).json({
      success: false,
      message: 'Error sending message',
      error: error.message,
    });
  }
};

/**
 * @desc    Update contact message status
 * @route   PATCH /api/contacts/:id
 * @access  Public (In production, this should be protected)
 */
export const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!['unread', 'read', 'archived'].includes(status)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid status value',
      });
    }

    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Status updated successfully',
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error updating status',
      error: error.message,
    });
  }
};

/**
 * @desc    Delete contact message
 * @route   DELETE /api/contacts/:id
 * @access  Public (In production, this should be protected)
 */
export const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact message not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Contact message deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting contact message',
      error: error.message,
    });
  }
};
