const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@ubi.b6wix.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log('out db is connected'))
.catch((err)=> console.log(err));