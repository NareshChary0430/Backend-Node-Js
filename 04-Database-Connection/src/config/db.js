const mongoose = require('mongoose');

const connectDb = async () => {
  try{
    await mongoose.connect(
      'mongodb+srv://nareshchary0430_db_user:Naresh%402004@cohort-cluster.xvl1twv.mongodb.net/?appName=Cohort-cluster'
    );
    console.log('Database connected successfully');
  }
  catch(error){
    console.error('Error connecting to database:', error);
  }
};

module.exports = connectDb;