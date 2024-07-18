const { model, Schema } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
    },


},
    {
        timestamps: true,
    });

userSchema.pre('save', async function (next) {
    // these methods are Mongoose booleans to check state of document; this refers to User document.
    if (this.isNew || this.isModified('password')) {
        // put in variable in case we use it more and can simply change variable rather thane very place.
        const hashRounds = 10;
        this.password = await bcrypt.hash(this.password, hashRounds);
    }
    next();
});
// methods is convention to define this method and attach it to each document made according to this model.
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
