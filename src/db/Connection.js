const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://nomemem127:YNczD5lMxuWAKEiB@users.lep2fer.mongodb.net/User_data?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(`Connected`);
}).catch((err)=>{
    console.log('error',err)
})