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
    res.send("API STILL NOT STILL WORKING!!");
});
app.listen(port, "0.0.0.0", function() {
    return console.log("APP LISTENING ON PORT http://localhost:".concat(port));
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiXG5pbXBvcnQgbW9yZ2FuIGZyb20gXCJtb3JnYW5cIlxuaW1wb3J0IHsgZW52IH0gZnJvbSBcInByb2Nlc3NcIlxuXG5jb25zdCBhcHAgPSBleHByZXNzKClcblxuY29uc3QgcG9ydCA9IE51bWJlcihlbnYuUE9SVCB8fCA4MDgwKVxuXG5hcHAudXNlKG1vcmdhbignZGV2JykpXG5cbmFwcC5nZXQoXCIvXCIsIChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZW5kKFwiQVBJIFNUSUxMIE5PVCBTVElMTCBXT1JLSU5HISFcIilcbn0pXG5cbmFwcC5saXN0ZW4ocG9ydCwgJzAuMC4wLjAnLCAoKSA9PiBjb25zb2xlLmxvZyhgQVBQIExJU1RFTklORyBPTiBQT1JUIGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fWApKSJdLCJuYW1lcyI6WyJhcHAiLCJleHByZXNzIiwicG9ydCIsIk51bWJlciIsImVudiIsIlBPUlQiLCJ1c2UiLCJtb3JnYW4iLCJnZXQiLCJyZXEiLCJyZXMiLCJzZW5kIiwibGlzdGVuIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs4REFBb0I7NkRBQ0Q7dUJBQ0M7Ozs7OztBQUVwQixJQUFNQSxNQUFNQyxJQUFBQSxnQkFBTztBQUVuQixJQUFNQyxPQUFPQyxPQUFPQyxZQUFHLENBQUNDLElBQUksSUFBSTtBQUVoQ0wsSUFBSU0sR0FBRyxDQUFDQyxJQUFBQSxlQUFNLEVBQUM7QUFFZlAsSUFBSVEsR0FBRyxDQUFDLEtBQUssU0FBQ0MsS0FBS0M7SUFDZkEsSUFBSUMsSUFBSSxDQUFDO0FBQ2I7QUFFQVgsSUFBSVksTUFBTSxDQUFDVixNQUFNLFdBQVc7V0FBTVcsUUFBUUMsR0FBRyxDQUFDLEFBQUMsMENBQThDLE9BQUxaIn0=