var connection = require("./connection");
var common = require("./common");

// Customer Registration
module.exports.register = function (request, response) {
    var requiredFields = ["first_name", "last_name", "email", "password", "mobile"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "INSERT INTO customers (first_name, last_name, email, password, mobile) VALUES (?, ?, ?, ?, ?)";
        let { first_name, last_name, email, password, mobile } = request.body;
        let data = [first_name, last_name, email, password, mobile];
        connection.db.query(sql, data, function (error, result) {
            if (error)
                response.json([{ error: "Error occurred" }]);
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Customer registered" }]);
        });
    }
};

// Customer Login
module.exports.login = function (request, response) {
    var requiredFields = ["email", "password"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "SELECT * FROM customers WHERE email=? AND password=?";
        let { email, password } = request.body;
        let data = [email, password];
        connection.db.query(sql, data, function (error, result) {
            if (error || result.length === 0)
                response.json([{ error: "Invalid email or password" }]);
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Login successful" }, { user: result[0] }]);
        });
    }
};

// Change Password
module.exports.change_password = function (request, response) {
    var requiredFields = ["email", "old_password", "new_password"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let { email, old_password, new_password } = request.body;
        let sql = "UPDATE customers SET password=? WHERE email=? AND password=?";
        let data = [new_password, email, old_password];
        connection.db.query(sql, data, function (error, result) {
            if (error || result.affectedRows === 0)
                response.json([{ error: "Password change failed" }]);
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Password updated" }]);
        });
    }
};

// View Appointments
module.exports.getAppointments = function (request, response) {
    var requiredFields = ["customer_id"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "SELECT * FROM appointments WHERE customer_id=? ORDER BY date DESC";
        let { customer_id } = request.body;
        let data = [customer_id];
        connection.db.query(sql, data, function (error, result) {
            if (error)
                response.json([{ error: "Error occurred" }]);
            else
                response.json([{ error: "no" }, { appointments: result }]);
        });
    }
};

// Submit Review
module.exports.createReview = function (request, response) {
    var requiredFields = ["customer_id", "service_id", "rating", "review"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "INSERT INTO reviews (customer_id, service_id, rating, review) VALUES (?, ?, ?, ?)";
        let { customer_id, service_id, rating, review } = request.body;
        let data = [customer_id, service_id, rating, review];
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
