var connection = require("./connection");
var common = require("./common");

// Staff Login
module.exports.login = function (request, response) {
    var requiredFields = ["email", "password"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "SELECT * FROM staff WHERE email=? AND password=?";
        let { email, password } = request.body;
        let data = [email, password];
        connection.db.query(sql, data, function (error, result) {
            if (error || result.length === 0)
                response.json([{ error: "Invalid email or password" }]);
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Login successful" }, { staff: result[0] }]);
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
        let sql = "UPDATE staff SET password=? WHERE email=? AND password=?";
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
    var requiredFields = ["staff_id"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "SELECT * FROM appointments WHERE staff_id=? ORDER BY date DESC";
        let { staff_id } = request.body;
        let data = [staff_id];
        connection.db.query(sql, data, function (error, result) {
            if (error)
                response.json([{ error: "Error occurred" }]);
            else
                response.json([{ error: "no" }, { appointments: result }]);
        });
    }
};

// View Ratings and Reviews
module.exports.getReviews = function (request, response) {
    let sql = "SELECT * FROM reviews ORDER BY id DESC";
    connection.db.query(sql, function (error, result) {
        if (error)
            response.json([{ error: "Error occurred" }]);
        else
            response.json([{ error: "no" }, { reviews: result }]);
    });
};

// Send Message
module.exports.sendMessage = function (request, response) {
    var requiredFields = ["staff_id", "customer_id", "message"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "INSERT INTO messages (staff_id, customer_id, message) VALUES (?, ?, ?)";
        let { staff_id, customer_id, message } = request.body;
        let data = [staff_id, customer_id, message];
        connection.db.query(sql, data, function (error, result) {
            if (error)
                response.json([{ error: "Error occurred" }]);
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Message sent" }]);
        });
    }
};

// View Services
module.exports.getServices = function (request, response) {
    let sql = "SELECT * FROM services ORDER BY id DESC";
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

module.exports.create = function (request, response) {
    var requiredFields = ["id", "first_name", "last_name", "role", "phone", "email" ,"password"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "INSERT INTO staff(id, first_name, last_name, role, phone, email ,password) VALUES (?, ?, ?, ?, ? , ? , ?)";
        let { id, first_name, last_name, role, phone, email ,password} = request.body;
        let data =[ id, first_name, last_name, role, phone, email ,password];
        connection.db.query(sql, data, function (error, result) {
            if (error)
            
                {console.log(error);
                response.json([{ error: "Error occurred" }]);}
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Appointment created" }]);
        });
    }
};

module.exports.update = function (request, response) {
    var requiredFields = ["id", "first_name", "last_name", "role", "phone", "email", "password"];
    var missingFields = common.getMissingFields(request.body, requiredFields);

    if (missingFields.length >= 1) {
        return response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    }

    let { id, first_name, last_name, role, phone, email, password } = request.body;

    // Log input values for debugging
    console.log("Updating staff with data:", { id, first_name, last_name, role, phone, email, password });

    if (!id) {
        return response.json([{ error: "ID is required for updating staff." }]);
    }

    let sql = "UPDATE staff SET first_name=?, last_name=?, role=?, phone=?, email=?, `password`=? WHERE id=?";
    let data = [first_name, last_name, role, phone, email, password, id];

    // Log SQL query before execution
    console.log("Executing SQL:", sql, "with data:", data);

    connection.db.query(sql, data, function (error, result) {
        if (error) {
            console.error("SQL Error:", error);
            return response.json([{ error: "Database error occurred" }]);
        }

        if (result.affectedRows === 0) {
            return response.json([{ error: "No staff member found with the given ID" }]);
        }

        response.json([{ error: "no" }, { success: "yes" }, { message: "Staff updated successfully" }]);
    });
};

module.exports.getStaff = function (request, response) {
    let sql = "SELECT * FROM staff ORDER BY id DESC";
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
module.exports.delete = function (request, response) {
    var requiredFields = ["id"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "DELETE FROM staff WHERE id=?";
        let { id } = request.body;
        let data = [id];
        connection.db.query(sql, data, function (error, result) {
            if (error || result.affectedRows === 0)
            {          
                      response.json([{ error: "Delete failed" }]);
            console.log(error);}
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Appointment deleted" }]);
        });
    }
};