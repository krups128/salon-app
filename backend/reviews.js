var connection = require("./connection");
var common = require("./common");

// Review API

module.exports.getReviews = function (request, response) {
    let sql = "SELECT * FROM reviews ORDER BY reviewed_at DESC";
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
        let sql = "DELETE FROM reviews WHERE id=?";
        let { id } = request.body;
        let data = [id];
        
        connection.db.query(sql, data, function (error, result) {
            if (error || result.affectedRows === 0)
                response.json([{ error: "Delete failed" }]);
            else
                response.json([{ error: "no" }, { success: "yes" }, { message: "Review deleted" }]);
        });
    }
};



