const { Sequelize } = require('sequelize');
import 'dotenv/config'

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const checkConnectDatabase = async ()=> {
    try {
        await sequelize.authenticate();
        console.log('Connection database successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

export default checkConnectDatabase;