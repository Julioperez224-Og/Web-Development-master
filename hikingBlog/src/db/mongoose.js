const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/hiking-blog",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // this make sure inedexes are created when mongoose works to mongodb
    useCreateIndex:true
});
