'use strict';
var Post = require('./model');

exports.find = function (req, res) {
    Post.find().sort('-createdAt').exec(function (err, posts) {
        if (err)
            return res.json({ success: false, message: err });
        res.render("posts/partials/index", {data: posts});
    });
}

exports.findById = function (req, res) {
    Post.findById(req.params.id, function (err, post) {
        if (err)
            return res.json({ success: false, message: err });
        res.json({ success: true, data: post });
    });
}

exports.create = function (req, res) {
    Post.create(req.body, function (err, post) {
        if (err)
            return res.json({ success: false, message: err });
        res.json({ success: true, data: post });
    });
}

exports.findByIdAndUpdate = function (req, res) {
    req.body.post.updatedAt = Date.now();
    Post.findByIdAndUpdate(req.params.id, req.body.post, function (err, post) {
        if (err)
            return res.json({ success: false, message: err });
        res.json({ success: true, message: post._id + " updated" });
    });
}

exports.delete = function (req, res) {
    Post.findByIdAndRemove(req.params.id, function (err, post) {
        if (err)
            return res.json({ success: false, message: err });
        res.json({ success: true, message: post._id + " deleted" });
    });
}