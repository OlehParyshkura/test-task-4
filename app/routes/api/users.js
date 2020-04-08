let express = require('express');
let router = express.Router();
let Users = require('../../database/dao/users');
let { statuses, httpStatuses } = require('../../../config/constants');
let moment = require('moment');

router.get('/users', (request, response) => {

    Promise.all([Users.getUsers(request.query), Users.getCount(request.query)])
        .then(([users, count]) => response.json({ users:users||[], count }))
        .catch(err => { response.status(httpStatuses.SERVER_ERROR)
            .json({ status: statuses.failure, user: [], error_text: err.message }) });
});

router.get('/users/:id', (request, response) => {

    Promise.all([Users.getUser(request.params.id) , Users.getUserStats(request.params.id)])
        .then(([user, stats])=>{
            response.json({ 
                status: statuses.success, 
                stats:fillEmptyDates(stats, request.params.id)||[],
                user:user })})
        .catch((err)=>
            response.status(httpStatuses.SERVER_ERROR)
            .json({
                status: statuses.failure,
                stats:[],
                user:{},
                error_text: err.message
            }))
    
        function fillEmptyDates(array, id) {
            return array.reduce((acc, nextItem) => {
                if (acc.length === 0) {
                    return [nextItem];
                }
                const lastItemDate = moment(acc[acc.length - 1].date, 'YYYY-MM-DD');
                const nextItemDate = moment(nextItem.date, 'YYYY-MM-DD');
                const differenceInDays = Math.abs(lastItemDate.diff(nextItemDate, 'days'));
                const newValues = [];
                let temp = lastItemDate.clone();
                for (let i = 1; i < differenceInDays; i++) {
                    console.log('there were an empty date',array);  
                    temp = temp.add(1, 'days');
                    newValues.push(
                        {
                            user_id: id,
                            date: temp.format('YYYY-MM-DD'),
                            page_views: 0,
                            clicks: 0
                        }
                    );
                }
                newValues.push(nextItem)
                return [...acc, ...newValues]
            }, []);
        }
});


module.exports = router;