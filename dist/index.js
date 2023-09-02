"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _express = /*#__PURE__*/ _interop_require_default(require("express"));
var _morgan = /*#__PURE__*/ _interop_require_default(require("morgan"));
var _process = require("process");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var app = (0, _express.default)();
var port = Number(_process.env.PORT || 8080);
app.use((0, _morgan.default)("dev"));
app.get("/", function(req, res) {
    debugger;
    res.send("new api working and not!!");
});
app.listen(port, "0.0.0.0", function() {
    return console.log("APP LISTENING ON PORT http://localhost:".concat(port));
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiXG5pbXBvcnQgbW9yZ2FuIGZyb20gXCJtb3JnYW5cIlxuaW1wb3J0IHsgZW52IH0gZnJvbSBcInByb2Nlc3NcIlxuXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuY29uc3QgcG9ydCA9IE51bWJlcihlbnYuUE9SVCB8fCA4MDgwKVxuXG5hcHAudXNlKG1vcmdhbignZGV2JykpXG5cbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIGRlYnVnZ2VyO1xuICAgIHJlcy5zZW5kKFwibmV3IGFwaSB3b3JraW5nIGFuZCBub3QhIVwiKVxufSlcblxuYXBwLmxpc3Rlbihwb3J0LCAnMC4wLjAuMCcsICgpID0+IGNvbnNvbGUubG9nKGBBUFAgTElTVEVOSU5HIE9OIFBPUlQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9YCkpIl0sIm5hbWVzIjpbImFwcCIsImV4cHJlc3MiLCJwb3J0IiwiTnVtYmVyIiwiZW52IiwiUE9SVCIsInVzZSIsIm1vcmdhbiIsImdldCIsInJlcSIsInJlcyIsInNlbmQiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7OzhEQUFvQjs2REFDRDt1QkFDQzs7Ozs7O0FBRXBCLElBQU1BLE1BQU1DLElBQUFBLGdCQUFPO0FBRW5CLElBQU1DLE9BQU9DLE9BQU9DLFlBQUcsQ0FBQ0MsSUFBSSxJQUFJO0FBRWhDTCxJQUFJTSxHQUFHLENBQUNDLElBQUFBLGVBQU0sRUFBQztBQUVmUCxJQUFJUSxHQUFHLENBQUMsS0FBSyxTQUFDQyxLQUFLQztJQUNmLFFBQVM7SUFDVEEsSUFBSUMsSUFBSSxDQUFDO0FBQ2I7QUFFQVgsSUFBSVksTUFBTSxDQUFDVixNQUFNLFdBQVc7V0FBTVcsUUFBUUMsR0FBRyxDQUFDLEFBQUMsMENBQThDLE9BQUxaIn0=