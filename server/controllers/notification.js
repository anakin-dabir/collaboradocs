import Notification from "../models/notification.js";

async function getAll(req, res) {
  try {
    const notification = await Notification.find({user: req.user._id}, "msg link createdAt");
    return res.status(200).json({notification, msg: "Success"});
  } catch (error) {}
}

async function readNotification(req, res) {
  const {notificationId} = req.body;
  try {
    const notification = await Notification.findOneAndUpdate(
      {_id: notificationId},
      {read: true},
      {new: true}
    );
    return res.status(200).json({notification, msg: "Success"});
  } catch (error) {}
}

async function deleteNotification(req, res) {
  try {
    const notification = await Notification.deleteMany({user: req.user._id});
    return res.status(200).json({notification, msg: "Success"});
  } catch (error) {
    return res.status(500).json({msg: "Error in deleting notification"});
  }
}

export {getAll, readNotification, deleteNotification};
