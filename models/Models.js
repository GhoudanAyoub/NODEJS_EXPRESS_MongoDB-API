let mongoose = require('mongoose');



// Employee Schema
const Employee = mongoose.model('Employee', {
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    }
});

const user = mongoose.model('user', {
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }, photoUrl: {
        type: String,
        required: true
    }, country: {
        type: String,
    }, bio: {
        type: String,
    }, id: {
        type: String,
        required: true
    },
    signedUpAt: { type: Date, default: Date.now },
    msgToAll: Boolean,
    isOnline: Boolean,
    lastSeen: { type: Date, default: Date.now }
});

const video = mongoose.model('video', {
    id: {
        type: String,
        required: true
    },
    videoId: {
        type: String,
        required: true
    },
    videoTitle: {
        type: String,
        required: true
    }, ownerId: {
        type: String,
        required: true
    }, username: {
        type: String,
        required: true
    }, userPic: {
        type: String,
        required: true
    }, tags: {
        type: String,
    }, description: {
        type: String,
    }, mediaUrl: {
        type: String,
        required: true
    },
    timestamp: { type: Date, default: Date.now },
});

const post = mongoose.model('post', {
    id: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }, ownerId: {
        type: String,
        required: true
    }, tags: {
        type: String,
        required: true
    }, description: {
        type: String,
        required: true
    }, mediaUrl: {
        type: String,
        required: true
    },
    timestamp: { type: Date, default: Date.now },
});

const postComment = mongoose.model('postComment', {
    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    userDp: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    timestamp: { type: Date, default: Date.now },
});

const live = mongoose.model('live', {
    id: {
        type: String,
        required: true
    }, ownerId: {
        type: String,
        required: true
    }, username: {
        type: String,
        required: true
    },
    channelName: {
        type: String,
        required: true
    },
    hostImage: {
        type: String,
        required: true
    }, image: {
        type: String,
        required: true
    }, views: {
        type: String,
        required: true
    }, channelId: {
        type: Number,
        required: true
    }, me: {
        type: Boolean,
        default: false
    },
    startAt: { type: Date, default: Date.now },
    endAt: { type: Date, default: Date.now },
});

const liveComment = mongoose.model('liveComment', {
    message: {
        type: String,
        required: true
    }, type: {
        type: String,
        required: true
    }, user: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const notification = mongoose.model('notification', {
    type: {
        type: String,
        required: true
    }, username: {
        type: String,
        required: true
    }, userId: {
        type: String,
        required: true
    },
    userDp: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    },
    commentData: {
        type: String
    },
    timestamp: { type: Date },
});



const report = mongoose.model('report', {
    accountId: {
        type: String,
        required: true
    }, reporterId: {
        type: String,
        required: true
    }, type: {
        type: String,
        required: true
    }
});


module.exports = { Employee, user, video, post, postComment, live, liveComment, notification, report }