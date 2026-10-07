var connection = require("./connection");
var common = require("./common");

// Appointments API
module.exports.create = function (request, response) {
    var requiredFields = ["customer_id", "staff_id", "service_id", "appointment_time", "status"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "INSERT INTO appointments (customer_id, staff_id, service_id, appointment_time, status) VALUES (?, ?, ?, ?, ?)";
        let { customer_id, staff_id, service_id, appointment_time, status } = request.body;
        let data = [customer_id, staff_id, service_id, appointment_time, status];
        connection.db.query(sql, data, function (error, result) {
            if (error)
            {
                console.log(error);
                response.json([{ error: "Error occurred" }]);
            }
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Appointment created" }]);
        });
    }
};

module.exports.update = function (request, response) {
    var requiredFields = ["id", "customer_id", "staff_id", "service_id", "appointment_time", "status"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "UPDATE appointments SET customer_id=?, staff_id=?, service_id=?, appointment_time=?, status=? WHERE id=?";
        let { id, customer_id, staff_id, service_id, appointment_time, status } = request.body;
        let data = [customer_id, staff_id, service_id, appointment_time, status, id];
        connection.db.query(sql, data, function (error, result) {
            if (error || result.affectedRows === 0)
                response.json([{ error: "Update failed" }]);
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Appointment updated" }]);
        });
    }
};

module.exports.delete = function (request, response) {
    var requiredFields = ["id"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "DELETE FROM appointments WHERE id=?";
        let { id } = request.body;
        let data = [id];
        connection.db.query(sql, data, function (error, result) {
            if (error || result.affectedRows === 0)
             {module.exports.delete = function (request, response) {
    var requiredFields = ["id"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "DELETE FROM appointments WHERE id=?";
        let { id } = request.body;
        let data = [id];
        connection.db.query(sql, data, function (error, result) {
            if (error || result.affectedRows === 0)
            {
                console.log(error);
                response.json([{ error: "Delete failed" }]);
            }
                
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Appointment deleted" }]);
        });
    }
};}
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Appointment deleted" }]);
        });
    }
};

module.exports.getAppointments = function (request, response) {
    let sql = "SELECT * FROM appointments ORDER BY appointment_time DESC";
    connection.db.query(sql, function (error, result) {
        if (error)
            response.json([{ error: "Error occurred" }]);
        else
      
        {
            result.unshift({total:result.length});
            result.unshift({error:'no'});
            response.json(result);
        }
    });
};
