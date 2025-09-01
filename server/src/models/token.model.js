import mongoose from 'mongoose';
 const tokenSchema = new mongoose.Schema({
    accessToken:{
        type: String,
        required: true
    },
    refreshToken:{
        type: String,
        required: true
    },
    uuid:{  
        type: String,
        required: true
    },
    // latestipaddress:{
    //     type: String,
    //     required: true
    // },
    // ipaddress:{
    //     type: String,
    //     required: true
    // }
 })
    const Token = mongoose.model('Token', tokenSchema);
    export default Token;