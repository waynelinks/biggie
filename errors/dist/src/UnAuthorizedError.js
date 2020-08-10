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
exports.UnAuthorizedError = void 0;
var CustomError_1 = require("./CustomError");
var responseCodes_1 = require("./responseCodes");
var UnAuthorizedError = /** @class */ (function (_super) {
    __extends(UnAuthorizedError, _super);
    function UnAuthorizedError(message) {
        if (message === void 0) { message = 'Not Authorized!'; }
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.statusCode = responseCodes_1.UNAUTHORIZED;
        Object.setPrototypeOf(_this, UnAuthorizedError.prototype);
        return _this;
    }
    UnAuthorizedError.prototype.serializeErrors = function () {
        return [
            {
                message: this.message,
            },
        ];
    };
    return UnAuthorizedError;
}(CustomError_1.CustomError));
exports.UnAuthorizedError = UnAuthorizedError;
