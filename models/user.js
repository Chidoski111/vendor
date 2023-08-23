import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    balances: {
        BTC: {
            type: Number,
            default: 0
        },
        USDT: {
            type: Number,
            default: 0
        },
        TRX: {
            type: Number,
            default: 0
        },
        LTC: {
            type: Number,
            default: 0
        }
    },
    password: String,
    role: {
        type: String,
        default: 'user'
    },
    provider: {
        type: String,
        default: 'credentials'
    }
}, {timestamps: true})

const User = models.user || model('user' ,userSchema)
 
export default User;
