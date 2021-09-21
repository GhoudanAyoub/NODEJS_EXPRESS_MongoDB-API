const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

const { Employee, user, video, post, postComment, live, liveComment, notification, report } = require('../models/Models');

router.get('/', (req, res) => {
    res.send("hello Are you Lost");
});
// Get All models
router.get('/api/employees', (req, res) => {
    Employee.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});
router.get('/api/users', (req, res) => {
    user.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});
router.get('/api/videos', (req, res) => {
    video.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});
router.get('/api/posts', (req, res) => {
    post.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});
router.get('/api/postComments', (req, res) => {
    postComment.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});
router.get('/api/lives', (req, res) => {
    live.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});
router.get('/api/liveComments', (req, res) => {
    liveComment.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});
router.get('/api/notifications', (req, res) => {
    notification.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});
router.get('/api/reports', (req, res) => {
    report.find({}, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});

// Get Single Models
router.get('/api/employee/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record With Given ID : ${req.params.id}`);

    Employee.findById(req.params.id, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(err);
        }
    });
});
router.get('/api/user/:id', (req, res) => {
    // if (!ObjectId.isValid(req.params.id))
    //     return res.status(400).send(`No record With Given ID : ${req.params.id}`);

    user.findOne({ id: req.params.id }, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(`No record With Given ID : ${req.params.id}`);
        }
    });
});
router.get('/api/notification/:id', (req, res) => {
    notification.findOne({ id: req.params.id }, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(`No record With Given ID : ${req.params.id}`);
        }
    });
});
router.get('/api/video/:id', (req, res) => {
    video.findOne({ id: req.params.id }, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(`No record With Given ID : ${req.params.id}`);
        }
    });
});
router.get('/api/post/:id', (req, res) => {
    post.findOne({ id: req.params.id }, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(`No record With Given ID : ${req.params.id}`);
        }
    });
});
router.get('/api/live/:id', (req, res) => {
    live.findOne({ id: req.params.id }, (err, data) => {
        if (!err) {
            res.send(data);
        } else {
            console.log(`No record With Given ID : ${req.params.id}`);
        }
    });
});

// Save Employee
router.post('/api/employee/add', (req, res) => {
    const emp = new Employee({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    });
    emp.save((err, data) => {
        if (!err) {
            // res.send(data);
            res.status(200).json({ code: 200, message: 'Employee Added Successfully', addEmployee: data })
        } else {
            console.log(err);
        }
    });
});
router.post('/api/user/add', (req, res) => {
    const u = new user({
        username: req.body.username,
        email: req.body.email,
        photoUrl: req.body.photoUrl,
        country: req.body.country,
        bio: req.body.bio,
        id: req.body.id,
        signedUpAt: req.body.signedUpAt,
        msgToAll: req.body.msgToAll,
        isOnline: req.body.isOnline,
        lastSeen: req.body.lastSeen
    });
    u.save((err, data) => {
        if (!err) {
            // res.send(data);
            res.status(200).json({ code: 200, message: 'user Added Successfully', adduser: data })
        } else {
            console.log(err);
        }
    });
});
router.post('/api/video/add', (req, res) => {
    const v = new video({
        id: req.body.id,
        videoId: req.body.videoId,
        videoTitle: req.body.videoTitle,
        ownerId: req.body.ownerId,
        username: req.body.username,
        userPic: req.body.userPic,
        tags: req.body.tags,
        description: req.body.description,
        mediaUrl: req.body.mediaUrl,
        timestamp: req.body.timestamp,
    });
    v.save((err, data) => {
        if (!err) {
            // res.send(data);
            res.status(200).json({ code: 200, message: 'Video Added Successfully', addvideo: data })
        } else {
            console.log(err);
        }
    });
});
router.post('/api/post/add', (req, res) => {
    const p = new post({
        id: req.body.id,
        postId: req.body.postId,
        ownerId: req.body.ownerId,
        username: req.body.username,
        tags: req.body.tags,
        description: req.body.description,
        mediaUrl: req.body.mediaUrl,
        timestamp: req.body.timestamp,
    });
    p.save((err, data) => {
        if (!err) {
            // res.send(data);
            res.status(200).json({ code: 200, message: 'Post Added Successfully', addPost: data })
        } else {
            console.log(err);
        }
    });
});
router.post('/api/postComment/add', (req, res) => {
    const pc = new postComment({
        username: req.body.username,
        comment: req.body.comment,
        userDp: req.body.userDp,
        userId: req.body.userId,
        timestamp: req.body.timestamp
    });
    pc.save((err, data) => {
        if (!err) {
            // res.send(data);
            res.status(200).json({ code: 200, message: 'postComment Added Successfully', addpostComment: data })
        } else {
            console.log(err);
        }
    });
});
router.post('/api/live/add', (req, res) => {
    const l = new live({
        id: req.body.id,
        ownerId: req.body.ownerId,
        username: req.body.username,
        channelName: req.body.channelName,
        hostImage: req.body.hostImage,
        image: req.body.image,
        views: req.body.views,
        channelId: req.body.channelId,
        me: req.body.me,
        startAt: req.body.startAt,
        endAt: req.body.endAt,
    });
    l.save((err, data) => {
        if (!err) {
            // res.send(data);
            res.status(200).json({ code: 200, message: 'Live Added Successfully', addLive: data })
        } else {
            console.log(err);
        }
    });
});
router.post('/api/notification/add', (req, res) => {
    const n = new notification({
        type: req.body.type,
        username: req.body.username,
        userDp: req.body.userDp,
        userId: req.body.userId,
        postId: req.body.postId,
        commentData: req.body.commentData,
        timestamp: req.body.timestamp
    });
    n.save((err, data) => {
        if (!err) {
            // res.send(data);
            res.status(200).json({ code: 200, message: 'Notification Added Successfully', addNotification: data })
        } else {
            console.log(err);
        }
    });
});
router.post('/api/report/add', (req, res) => {
    const r = new report({
        accountId: req.body.accountId,
        reporterId: req.body.reporterId,
        type: req.body.type
    });
    r.save((err, data) => {
        if (!err) {
            res.status(200).json({ code: 200, message: 'report Added Successfully', addReport: data })
        } else {
            console.log(err);
        }
    });
});

// Update Models
router.put('/api/employee/update/:id', (req, res) => {
    const emp = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
        if (!err) {
            res.status(200).json({ code: 200, message: 'Employee Updated Successfully', updateEmployee: data })
        } else {
            console.log(err);
        }
    });
});
router.put('/api/user/update/:id', (req, res) => {
    const u = {
        username: req.body.username,
        email: req.body.email,
        photoUrl: req.body.photoUrl,
        country: req.body.country,
        bio: req.body.bio,
        id: req.body.id,
        signedUpAt: req.body.signedUpAt,
        msgToAll: req.body.msgToAll,
        isOnline: req.body.isOnline,
        lastSeen: req.body.lastSeen
    };
    user.findOneAndUpdate({ id: req.params.id }, { $set: u }, { new: true }, (err, data) => {
        if (!err) {
            res.status(200).json({ code: 200, message: 'User Updated Successfully', updateUser: data })
        } else {
            console.log(err);
        }
    });
});
router.put('/api/live/update/:id', (req, res) => {
    const l = {
        id: req.body.id,
        ownerId: req.body.ownerId,
        username: req.body.username,
        channelName: req.body.channelName,
        hostImage: req.body.hostImage,
        image: req.body.image,
        views: req.body.views,
        channelId: req.body.channelId,
        me: req.body.me,
        startAt: req.body.startAt,
        endAt: req.body.endAt,
    };
    live.findOneAndUpdate({ id: req.params.id }, { $set: l }, { new: true }, (err, data) => {
        if (!err) {
            res.status(200).json({ code: 200, message: 'Live Updated Successfully', updateLive: data })
        } else {
            console.log(err);
        }
    });
});

// Delete models
router.delete('/api/employee/:id', (req, res) => {
    Employee.findByIdAndDelete(req.params.id, (err, data) => {
        if (!err) {
            // res.send(data);
            res.status(200).json({ code: 200, message: 'Employee deleted', deleteEmployee: data })
        } else {
            console.log(err);
        }
    });
});
router.delete('/api/video/:id', (req, res) => {
    video.findOneAndDelete({ id: req.params.id }, (err, data) => {
        if (!err) {
            // res.send(data);
            res.status(200).json({ code: 200, message: 'video deleted', deleteVideo: data })
        } else {
            console.log(err);
        }
    });
});
router.delete('/api/post/:id', (req, res) => {
    post.findOneAndDelete({ id: req.params.id }, (err, data) => {
        if (!err) {
            // res.send(data);
            res.status(200).json({ code: 200, message: 'post deleted', deletePost: data })
        } else {
            console.log(err);
        }
    });
});
router.delete('/api/live/:id', (req, res) => {
    live.findOneAndDelete({ id: req.params.id }, (err, data) => {
        if (!err) {
            // res.send(data);
            res.status(200).json({ code: 200, message: 'live deleted', deletelive: data })
        } else {
            console.log(err);
        }
    });
});
router.delete('/api/notification/:id', (req, res) => {
    notification.findOneAndDelete({ id: req.params.id }, (err, data) => {
        if (!err) {
            // res.send(data);
            res.status(200).json({ code: 200, message: 'notification deleted', deleteNotification: data })
        } else {
            console.log(err);
        }
    });
});
router.delete('/api/user/:id', (req, res) => {
    user.findOneAndDelete({ id: req.params.id }, (err, data) => {
        if (!err) {
            // res.send(data);
            res.status(200).json({ code: 200, message: 'user deleted', deleteNotification: data })
        } else {
            console.log(err);
        }
    });
});
router.delete('/api/report/:id', (req, res) => {
    report.findOneAndDelete({ id: req.params.id }, (err, data) => {
        if (!err) {
            res.status(200).json({ code: 200, message: 'report deleted', deleteReport: data })
        } else {
            console.log(err);
        }
    });
});


module.exports = router;