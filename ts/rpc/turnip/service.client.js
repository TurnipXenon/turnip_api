"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurnipClient = void 0;
const service_1 = require("./service");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
// todo documentation
// todo refactor
/**
 * Turnip handles all processes to internal services
 *
 * user
 *
 * @generated from protobuf service turnipxenon.v1.Turnip
 */
class TurnipClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = service_1.Turnip.typeName;
        this.methods = service_1.Turnip.methods;
        this.options = service_1.Turnip.options;
    }
    /**
     * @generated from protobuf rpc: CreateUser(turnipxenon.v1.CreateUserRequest) returns (turnipxenon.v1.CreateUserResponse);
     */
    createUser(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Login(turnipxenon.v1.LoginRequest) returns (turnipxenon.v1.LoginResponse);
     */
    login(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    // content
    /**
     * @generated from protobuf rpc: CreateContent(turnipxenon.v1.ContentRequestResponse) returns (turnipxenon.v1.ContentRequestResponse);
     */
    createContent(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetContentById(turnipxenon.v1.PrimaryIdRequest) returns (turnipxenon.v1.ContentRequestResponse);
     */
    getContentById(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetContentBatchById(turnipxenon.v1.PrimaryIdRequest) returns (turnipxenon.v1.MultipleContentResponse);
     */
    getContentBatchById(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetAllContent(turnipxenon.v1.GetAllContentRequest) returns (turnipxenon.v1.MultipleContentResponse);
     */
    getAllContent(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * inclusive or, will return contents with at least one of the tags
     *
     * @generated from protobuf rpc: GetContentsByTagInclusive(turnipxenon.v1.GetContentsByTagRequest) returns (turnipxenon.v1.MultipleContentResponse);
     */
    getContentsByTagInclusive(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * strict and, will only return contents with the following tags
     *
     * @generated from protobuf rpc: GetContentsByTagStrict(turnipxenon.v1.GetContentsByTagRequest) returns (turnipxenon.v1.MultipleContentResponse);
     */
    getContentsByTagStrict(input, options) {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * todo: GetAllContentByTag (make a tree like structure? is that possible?)
     *
     * @generated from protobuf rpc: UpdateContent(turnipxenon.v1.ContentRequestResponse) returns (turnipxenon.v1.ContentRequestResponse);
     */
    updateContent(input, options) {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: DeleteContent(turnipxenon.v1.PrimaryIdRequest) returns (turnipxenon.v1.ContentRequestResponse);
     */
    deleteContent(input, options) {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: GetContentBySlug(turnipxenon.v1.GetContentBySlugRequest) returns (turnipxenon.v1.ContentRequestResponse);
     */
    getContentBySlug(input, options) {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
    // potato
    /**
     * @generated from protobuf rpc: RevalidateStaticPath(turnipxenon.v1.RevalidateStaticPathRequest) returns (turnipxenon.v1.RevalidateStaticPathResponse);
     */
    revalidateStaticPath(input, options) {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return runtime_rpc_1.stackIntercept("unary", this._transport, method, opt, input);
    }
}
exports.TurnipClient = TurnipClient;
