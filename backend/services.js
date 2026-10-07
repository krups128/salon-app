var connection = require("./connection");
var common = require("./common");

// Service API
module.exports.create = function (request, response) {
    var requiredFields = ["name", "description", "price"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "INSERT INTO services (name, description, price) VALUES (?, ?, ?)";
        let { name, description, price } = request.body;
        let data = [name, description, price];
        
        connection.db.query(sql, data, function (error, result) {
            if (error)
            {
                console.log(error);
                response.json([{ error: "Error occurred" }]);
            }
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Service created" }]);
        });
    }
};

module.exports.update = function (request, response) {
    var requiredFields = ["id", "name", "description", "price"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "UPDATE services SET name=?, description=?, price=? WHERE id=?";
        let { id, name, description, price } = request.body;
        let data = [name, description, price, id];
        
        connection.db.query(sql, data, function (error, result) {
            if (error || result.affectedRows === 0)
                response.json([{ error: "Update failed" }]);
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Service updated" }]);
        });
    }
};

module.exports.delete = function (request, response) {
    var requiredFields = ["id"];
    var missingFields = common.getMissingFields(request.body, requiredFields);
    
    if (missingFields.length >= 1) {
        response.json([{ error: `Missing fields: ${missingFields.join(",")}` }]);
    } else {
        let sql = "DELETE FROM services WHERE id=?";
        let { id } = request.body;
        let data = [id];
        
        connection.db.query(sql, data, function (error, result) {
            if (error || result.affectedRows === 0)
                response.json([{ error: "Delete failed" }]);
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Service deleted" }]);
        });
    }
};

module.exports.getServices = function (request, response) {
    let sql = "SELECT * FROM services ORDER BY name ASC";
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
