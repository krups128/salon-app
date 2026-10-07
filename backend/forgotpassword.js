var connection = require("./connection");
var common = require("./common");

// Forgot Password API
module.exports.forgotPassword = function (request, response) {
    var requiredFields = ["email"];
    var missingFields = common.getMissingFields(request.body, requiredFields);

    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let { email } = request.body;

        // Check if user exists
        let sql = "SELECT id FROM customers WHERE email = ?";
        connection.db.query(sql, [email], function (error, result) {
            if (error) {
                response.json([{ error: "Error occurred" }]);
            } else if (result.length === 0) {
                response.json([{ error: "User not found" }]);
            } else {
                // Generate reset token
                let resetToken = Math.random().toString(36).substr(2, 8); // Simple random token
                let updateSql = "UPDATE customers SET reset_token = ?, reset_token_expiry = DATE_ADD(NOW(), INTERVAL 1 HOUR) WHERE email = ?";
                
                connection.db.query(updateSql, [resetToken, email], function (updateError) {
                    if (updateError) {
                        response.json([{ error: "Error saving reset token" }]);
                    } else {
                        // Send response with reset token (simulating email)
                        response.json([
                            { error: "no" },
                            { success: "yes" },
                            { message: "Password reset token generated" },
                            { reset_token: resetToken }
                        ]);
                    }
                });
            }
        });
    }
};

// Verify Reset Token API
module.exports.verifyResetToken = function (request, response) {
    var requiredFields = ["email", "token"];
    var missingFields = common.getMissingFields(request.body, requiredFields);

    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let { email, token } = request.body;
        let sql = "SELECT id FROM customers WHERE email = ? AND reset_token = ? AND reset_token_expiry > NOW()";

        connection.db.query(sql, [email, token], function (error, result) {
            if (error || result.length === 0) {
                response.json([{ error: "Invalid or expired token" }]);
            } else {
                response.json([{ error: "no" }, { success: "yes" }, { message: "Token is valid" }]);
            }
        });
    }
};

// Reset Password API
module.exports.resetPassword = function (request, response) {
    var requiredFields = ["email", "token", "new_password"];
    var missingFields = common.getMissingFields(request.body, requiredFields);

    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let { email, token, new_password } = request.body;

        // Verify reset token
        let sql = "SELECT id FROM customers WHERE email = ? AND reset_token = ? AND reset_token_expiry > NOW()";
        connection.db.query(sql, [email, token], function (error, result) {
            if (error || result.length === 0) {
                response.json([{ error: "Invalid or expired token" }]);
            } else {
                // Update password
                let updateSql = "UPDATE customers SET password = ?, reset_token = NULL, reset_token_expiry = NULL WHERE email = ?";
                connection.db.query(updateSql, [new_password, email], function (updateError) {
                    if (updateError) {
                        response.json([{ error: "Error updating password" }]);
                    } else {
                        response.json([{ error: "no" }, { success: "yes" }, { message: "Password updated successfully" }]);
                    }
                });
            }
        });
    }
};
