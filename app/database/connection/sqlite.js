const sqlite3 = require('sqlite3').verbose();
const users = require('./users.json');
const usersStatistics = require('./users_statistic.json');
let db = new sqlite3.Database('./users.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the users database.');
});
db.get(`SELECT name FROM sqlite_master WHERE type='table' AND name='users';`, (err, result) => {
    if (result) {
        return true;
    } else {
        console.log('table users not exist, creating');

        db.run('CREATE TABLE IF NOT EXISTS users(id, first_name, last_name, email, gender, ip_address)', () => {
            for (let i = 0; i < users.length; i += 100) {
                let usersChunk = users.slice(i,i+100);
                let plaseholders = usersChunk.map(() => '(?,?,?,?,?,?)').join(',');
                let usersForInserting = usersChunk.reduce((acc, item) => [...acc, ...Object.values(item)], []);
                let sql = `INSERT INTO users (id, first_name, last_name, email, gender, ip_address) VALUES` + plaseholders;
                db.run(sql, usersForInserting, function (err) {
                    if (err) {
                        return console.log('error with users table',err.message, usersChunk);

                    }
                    console.log(`Rows inserted ${this.changes}`);
                });
            }

        });
    }
})


db.get(`SELECT name FROM sqlite_master WHERE type='table' AND name='users_statistic';`, (err, result) => {
    if (result) {
        return true;
    } else {
        console.log('table users_statistic not exist, creating');
        db.run('CREATE TABLE IF NOT EXISTS users_statistic(user_id, date, page_views, clicks)', () => {

            for (let i = 0; i < usersStatistics.length; i += 100) {
                let statsChunk = usersStatistics.slice(i, i + 100);
                let plaseholders = statsChunk.map(() => '(?,?,?,?)').join(',');
                let statsForInserting = statsChunk.reduce((acc, item) => [...acc, ...Object.values(item)], []);
                let sql = `INSERT INTO users_statistic (user_id, date, page_views, clicks) VALUES` + plaseholders;
                db.run(sql, statsForInserting, function (err) {
                    if (err) {
                        return console.log('error with users_statistic table',err.message);
                    }
                    console.log(`Rows inserted ${this.changes}`);
                });
            }

        });
    }
});
module.exports.db = db;