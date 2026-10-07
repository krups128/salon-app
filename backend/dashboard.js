var connection = require("./connection");
var common = require("./common");

// Dashboard API
module.exports.getDashboardStats = function (request, response) {
    let queries = {
        totalAppointments: "SELECT COUNT(*) AS total FROM appointments",
        availableStaff: "SELECT COUNT(*) AS total FROM staff WHERE status = 'available'",
        totalCustomers: "SELECT COUNT(*) AS total FROM customers",
    };

    connection.db.query(queries.totalAppointments, function (error, appointmentsResult) {
        if (error) {
            response.json([{ error: "Error fetching total appointments" }]);
            return;
        }
        
        connection.db.query(queries.availableStaff, function (error, staffResult) {
            if (error) {
                response.json([{ error: "Error fetching staff availability" }]);
                return;
            }

            connection.db.query(queries.totalCustomers, function (error, customersResult) {
                if (error) {
                    response.json([{ error: "Error fetching total customers" }]);
                    return;
                }

              
                    result.unshift({total:result.length});
                    result.unshift({error:'no'});
                    response.json(result);
                

                response.json(result);
            });
        });
    });
};
