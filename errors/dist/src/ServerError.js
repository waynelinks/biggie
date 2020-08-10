"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = void 0;
var CustomError_1 = require("./CustomError");
var responseCodes_1 = require("./responseCodes");
var ServerError = /** @class */ (function (_super) {
    __extends(ServerError, _super);
    function ServerError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.statusCode = responseCodes_1.INTERNAL_SERVER_ERROR;
        Object.setPrototypeOf(_this, ServerError.prototype);
        return _this;
    }
    ServerError.prototype.serializeErrors = function () {
        return [
            {
                message: this.message,
            },
        ];
    };
    return ServerError;
}(CustomError_1.CustomError));
exports.ServerError = ServerError;
