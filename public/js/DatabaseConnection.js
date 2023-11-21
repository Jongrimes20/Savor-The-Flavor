//Connect to DB
const {
    createPool
} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "Jon",
    password: "june1401",
    database: "Savor_The_Flavor",
    connectionLimit: 10 //max parallel connections
});

module.exports = pool;