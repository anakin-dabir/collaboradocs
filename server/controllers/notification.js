import Notification from '../models/notification.js';

async function getAll(req, res) {
  try {
    const notification = await Notification.find(
      {user: {$in: [req.user._id]}},
      'msg link createdAt'
    );
    return res.status(200).json({notification, msg: 'Success'});
  } catch (error) {}
}

async function deleteNotification(req, res) {
  try {
    const notification = await Notification.findOneAndUpdate(
      {user: req.user._id},
      {$pull: {user: req.user._id}},
      {new: true}
    );
    return res.status(200).json({notification, msg: 'Success'});
  } catch (error) {}
}

export {getAll, deleteNotification};
