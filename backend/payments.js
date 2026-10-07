var connection = require("./connection");
var common = require("./common");

// Payment API
module.exports.create = function (request, response) {
    var requiredFields = ["appointment_id", "payment_method", "amount", "transaction_id", "paid_at"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else if (request.body.amount < 0) {
        response.json([{ error: "Amount must be greater than or equal to 0" }]);
    } else {
        let sql = "INSERT INTO payments (appointment_id, payment_method, amount, transaction_id, paid_at) VALUES (?, ?, ?, ?, ?)";
        let { appointment_id, payment_method, amount, transaction_id, paid_at } = request.body;
        let data = [appointment_id, payment_method, amount, transaction_id, paid_at];
        
        connection.db.query(sql, data, function (error, result) {
            if (error)
                response.json([{ error: "Error occurred" }]);
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Payment recorded" }]);
        });
    }
};

module.exports.update = function (request, response) {
    var requiredFields = ["id", "appointment_id", "payment_method", "amount", "transaction_id", "paid_at"];
    var missingFields = common.getMissingFields(request.body, requiredFields);

    if (missingFields.length > 0) {
        return response.json({ error: `Missing fields: ${missingFields.join(", ")}` });
    }

    let { id, appointment_id, payment_method, amount, transaction_id, paid_at } = request.body;

    // Log input values for debugging
    console.log("Updating payment with data:", { id, appointment_id, payment_method, amount, transaction_id, paid_at });

    if (!id) {
        return response.json({ error: "ID is required for updating payment." });
    }

    if (amount < 0) {
        return response.json({ error: "Amount must be greater than or equal to 0." });
    }

    let sql = "UPDATE payments SET appointment_id=?, payment_method=?, amount=?, transaction_id=?, paid_at=? WHERE id=?";
    let data = [appointment_id, payment_method, amount, transaction_id, paid_at, id];

    // Log SQL query before execution
    console.log("Executing SQL:", sql, "with data:", data);

    connection.db.query(sql, data, function (error, result) {
        if (error) {
            console.error("SQL Error:", error);
            return response.json({ error: "Database error occurred", details: error.message });
        }

        if (result.affectedRows === 0) {
            return response.json({ error: "No payment record found with the given ID." });
        }

        return response.json({ success: true, message: "Payment updated successfully." });
    });
};



module.exports.delete = function (request, response) {
    var requiredFields = ["id"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "DELETE FROM payments WHERE id=?";
        let { id } = request.body;
        let data = [id];
        
        connection.db.query(sql, data, function (error, result) {
            if (error || result.affectedRows === 0)
                response.json([{ error: "Delete failed" }]);
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Payment deleted" }]);
        });
    }
};

module.exports.getPayments = function (request, response) {
    let sql = "SELECT * FROM payments ORDER BY paid_at DESC";
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

