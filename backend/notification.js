var connection = require("./connection");
var common = require("./common");

// Notifications API
module.exports.createNotification = function (request, response) {
    var requiredFields = ["customer_id", "appointment_id", "message", "sent_at"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "INSERT INTO notifications (customer_id, appointment_id, message, sent_at) VALUES (?, ?, ?, ?)";
        let { customer_id, appointment_id, message, sent_at } = request.body;
        let data = [customer_id, appointment_id, message, sent_at];
        connection.db.query(sql, data, function (error, result) {
            if (error)
                response.json([{ error: "Error occurred" }]);
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Notification created" }]);
        });
    }
};

module.exports.updateNotification = function (request, response) {
    var requiredFields = ["id", "customer_id", "appointment_id", "message", "sent_at"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "UPDATE notifications SET customer_id=?, appointment_id=?, message=?, sent_at=? WHERE id=?";
        let { id, customer_id, appointment_id, message, sent_at } = request.body;
        let data = [customer_id, appointment_id, message, sent_at, id];
        connection.db.query(sql, data, function (error, result) {
            if (error || result.affectedRows === 0)
                response.json([{ error: "Update failed" }]);
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Notification updated" }]);
        });
    }
};

module.exports.deleteNotification = function (request, response) {
    var requiredFields = ["id"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "DELETE FROM notifications WHERE id=?";
        let { id } = request.body;
        let data = [id];
        connection.db.query(sql, data, function (error, result) {
            if (error || result.affectedRows === 0)
                response.json([{ error: "Delete failed" }]);
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Notification deleted" }]);
        });
    }
};

module.exports.getNotifications = function (request, response) {
    var requiredFields = ["customer_id"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "SELECT * FROM notifications WHERE customer_id=? ORDER BY sent_at DESC";
        let { customer_id } = request.body;
        let data = [customer_id];
        connection.db.query(sql, data, function (error, result) {
            if (error)
                response.json([{ error: "Error occurred" }]);
            else
        {
            result.unshift({total:result.length});
            result.unshift({error:'no'});
            response.json(result);
        }
        });
    }
};
