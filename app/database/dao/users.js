let { db } = require('../connection/sqlite');


module.exports.getUsers = (query) => {
    let { page, limit } = query;
    page = parseInt(page);
    limit = parseInt(limit)
    page--;
    let offset = limit * page;
    return new Promise((resolve, reject) => {
        db.all(`SELECT u.id, u.first_name, u.last_name, u.email, u.gender, u.ip_address, (select sum(clicks) from users_statistic where user_id=u.id) as total_clicks,(select sum(page_views) from users_statistic where user_id=u.id) as total_page_views FROM users as u order by u.id LIMIT ? OFFSET ? ;`, [limit, offset], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    })

}

module.exports.getCount = () =>
    new Promise((resolve, reject) => {
        db.get(`SELECT COUNT(*) FROM users`, (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result['COUNT(*)']);
            }
        });
    })

module.exports.getUser = (id)=>
    new Promise((resolve, reject) => {
        db.get('SELECT * FROM users where id=?',[Number.parseInt(id)], (err, result) => {
            if (err) {
                reject(err);
            } else {
                
                resolve(result);

            }
        });
    });

module.exports.getUserStats = (id) =>
    new Promise((resolve, reject) => {
        db.all('SELECT * FROM users_statistic where user_id=? order  by datetime(date)',[Number.parseInt(id)], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);

            }
        });
    });