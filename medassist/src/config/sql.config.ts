// import mssql from 'mssql'
import dotenv from 'dotenv'

dotenv.config()

export const sqlConfig={
  user: process.env.DB_USER as string,
  password: process.env.DB_PWD as string,
  database: process.env.DB_NAME as string,
  server: process.env.MA_SERVER as string,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000
  },
  options: {
    encrypt: false, // for azure
    trustServerCertificate: true // change to true for local dev / self-signed certs
  }
}

// async function testConnection(){
//     let pool = await mssql.connect(sqlConfig)

//     if(pool.connected){
//         console.log("Connection established ...");
//         // let query = 'CREATE DATABASE medassist2';

//         // id, name, email, phone_number, password, role, createdAt
//         let usersTable = 'CREATE TABLE Users(id VARCHAR(255), name VARCHAR(255) NOT NULL, phone_number VARCHAR(20) NOT NULL, email VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, role VARCHAR(50) DEFAULT user, createdAt VARCHAR(255) NOT NULL )'

//         let result = (await pool.request().query(usersTable)).output

//         console.log(result);
        
//     }else{
//         console.log("Error establishing connection");
//     }
// }

// testConnection()