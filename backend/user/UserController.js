const express = require('express');
const router = express.Router();

const User = require('./User');

// TODO: use async await in other functions
router.post('/register', async (req, res) => {
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.createdAt = new Date();
    try {
        await user.save();
        return res.status(201).json({status: 201, data: user.toProfileJSON(), message: 'User successfully created'});
    } catch (e) {
        console.error(`[error] user registration ${user.email} error = ${e}`);
        if(e.errors && e.errors.email && e.errors.email.kind === 'unique') {
            return res.status(409).json({status: 409, message: e.toString()});
        }
        return res.status(400).json({status: 400, message: e.toString()});
    }
});

router.get('/', function (req, res) {
    User.find({}, function (err, users) {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

router.get('/:id', function (req, res) {
    User.findById(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).send(user);
    });
});

router.delete('/:id', function (req, res) {
    User.findByIdAndRemove(req.params.id, function (err, user) {
        if (err) return res.status(500).send("There was a problem deleting the user.");
        res.status(200).send("User: "+ user.name +" was deleted.");
    });
});

router.put('/:id', function (req, res) {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, user) {
        if (err) return res.status(500).send("There was a problem updating the user.");
        res.status(200).send(user);
    });
});


module.exports = router;