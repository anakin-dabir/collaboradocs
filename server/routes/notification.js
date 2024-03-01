import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import {getAll, deleteNotification} from '../controllers/notification.js';

const notification = express.Router();
notification.get('/getAll', verifyToken, getAll);
notification.delete('/delete', verifyToken, deleteNotification);

export default notification;
