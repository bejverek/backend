import {model, Schema} from 'mongoose';

const schema = new Schema({
    name: String,
    hex: String,
    permissions: Array
})

export default model('Role', schema)