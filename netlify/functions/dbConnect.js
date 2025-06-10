const mysql = require('mysql2/promise');
require('dotenv').config(); // Load .env file locally

exports.handler = async (event, context) => {
    try {
        // Connect to the database using environment variables
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        });

        // Close the connection immediately after testing
        await connection.end();

        // Return success response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Database connection successful!' }),
        };
    } catch (error) {
        console.error('Database connection error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to connect to the database' }),
        };
    }
};