const mongoose = require('mongoose');

const connectToDataBase = (url) => {
  return mongoose.connect(url, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex:true,
          useFindAndModify:false,
  })
}

module.exports = connectToDataBase