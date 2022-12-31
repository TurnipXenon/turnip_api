"use strict";
exports.__esModule = true;
exports.TurnipClient = void 0;
var service_1 = require("./service");
var runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
// todo documentation
// todo refactor
/**
 * Turnip handles all processes to internal services
 *
 * @generated from protobuf service turnipxenon.v1.Turnip
 */
var TurnipClient = /** @class */ (function () {
    function TurnipClient(_transport) {
        this._transport = _transport;
        this.typeName = service_1.Turnip.typeName;
        this.methods = service_1.Turnip.methods;
        this.options = service_1.Turnip.options;
    }
    /**
     * @generated from protobuf rpc: CreateUser(turnipxenon.v1.CreateUserRequest) returns (turnipxenon.v1.CreateUserResponse);
     */
    TurnipClient.prototype.createUser = function (input, options) {
        var method = this.methods[0], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    };
    /**
     * @generated from protobuf rpc: Login(turnipxenon.v1.LoginRequest) returns (turnipxenon.v1.LoginResponse);
     */
    TurnipClient.prototype.login = function (input, options) {
        var method = this.methods[1], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    };
    /**
     * region Content
     *
     * @generated from protobuf rpc: CreateContent(turnipxenon.v1.ContentRequestResponse) returns (turnipxenon.v1.ContentRequestResponse);
     */
    TurnipClient.prototype.createContent = function (input, options) {
        var method = this.methods[2], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    };
    /**
     * @generated from protobuf rpc: GetContentById(turnipxenon.v1.PrimaryIdRequest) returns (turnipxenon.v1.ContentRequestResponse);
     */
    TurnipClient.prototype.getContentById = function (input, options) {
        var method = this.methods[3], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    };
    /**
     * @generated from protobuf rpc: GetContentBatchById(turnipxenon.v1.PrimaryIdRequest) returns (turnipxenon.v1.MultipleContentResponse);
     */
    TurnipClient.prototype.getContentBatchById = function (input, options) {
        var method = this.methods[4], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    };
    /**
     * @generated from protobuf rpc: GetAllContent(turnipxenon.v1.GetAllContentRequest) returns (turnipxenon.v1.MultipleContentResponse);
     */
    TurnipClient.prototype.getAllContent = function (input, options) {
        var method = this.methods[5], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    };
    /**
     * todo: GetAllContentByTag (make a tree like structure? is that possible?)
     *
     * @generated from protobuf rpc: UpdateContent(turnipxenon.v1.ContentRequestResponse) returns (turnipxenon.v1.ContentRequestResponse);
     */
    TurnipClient.prototype.updateContent = function (input, options) {
        var method = this.methods[6], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    };
    /**
     * endregion Content
     *
     * @generated from protobuf rpc: DeleteContent(turnipxenon.v1.PrimaryIdRequest) returns (turnipxenon.v1.ContentRequestResponse);
     */
    TurnipClient.prototype.deleteContent = function (input, options) {
        var method = this.methods[7], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    };
    return TurnipClient;
}());
exports.TurnipClient = TurnipClient;
