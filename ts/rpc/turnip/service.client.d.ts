import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import type { GetContentsByTagRequest } from "./service";
import type { GetAllContentRequest } from "./service";
import type { MultipleContentResponse } from "./service";
import type { PrimaryIdRequest } from "./service";
import type { ContentRequestResponse } from "./service";
import type { LoginResponse } from "./service";
import type { LoginRequest } from "./service";
import type { CreateUserResponse } from "./service";
import type { CreateUserRequest } from "./service";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Turnip handles all processes to internal services
 *
 * @generated from protobuf service turnipxenon.v1.Turnip
 */
export interface ITurnipClient {
    /**
     * @generated from protobuf rpc: CreateUser(turnipxenon.v1.CreateUserRequest) returns (turnipxenon.v1.CreateUserResponse);
     */
    createUser(input: CreateUserRequest, options?: RpcOptions): UnaryCall<CreateUserRequest, CreateUserResponse>;
    /**
     * @generated from protobuf rpc: Login(turnipxenon.v1.LoginRequest) returns (turnipxenon.v1.LoginResponse);
     */
    login(input: LoginRequest, options?: RpcOptions): UnaryCall<LoginRequest, LoginResponse>;
    /**
     * region Content
     *
     * @generated from protobuf rpc: CreateContent(turnipxenon.v1.ContentRequestResponse) returns (turnipxenon.v1.ContentRequestResponse);
     */
    createContent(input: ContentRequestResponse, options?: RpcOptions): UnaryCall<ContentRequestResponse, ContentRequestResponse>;
    /**
     * @generated from protobuf rpc: GetContentById(turnipxenon.v1.PrimaryIdRequest) returns (turnipxenon.v1.ContentRequestResponse);
     */
    getContentById(input: PrimaryIdRequest, options?: RpcOptions): UnaryCall<PrimaryIdRequest, ContentRequestResponse>;
    /**
     * @generated from protobuf rpc: GetContentBatchById(turnipxenon.v1.PrimaryIdRequest) returns (turnipxenon.v1.MultipleContentResponse);
     */
    getContentBatchById(input: PrimaryIdRequest, options?: RpcOptions): UnaryCall<PrimaryIdRequest, MultipleContentResponse>;
    /**
     * @generated from protobuf rpc: GetAllContent(turnipxenon.v1.GetAllContentRequest) returns (turnipxenon.v1.MultipleContentResponse);
     */
    getAllContent(input: GetAllContentRequest, options?: RpcOptions): UnaryCall<GetAllContentRequest, MultipleContentResponse>;
    /**
     * @generated from protobuf rpc: GetContentsByTag(turnipxenon.v1.GetContentsByTagRequest) returns (turnipxenon.v1.MultipleContentResponse);
     */
    getContentsByTag(input: GetContentsByTagRequest, options?: RpcOptions): UnaryCall<GetContentsByTagRequest, MultipleContentResponse>;
    /**
     * todo: GetAllContentByTag (make a tree like structure? is that possible?)
     *
     * @generated from protobuf rpc: UpdateContent(turnipxenon.v1.ContentRequestResponse) returns (turnipxenon.v1.ContentRequestResponse);
     */
    updateContent(input: ContentRequestResponse, options?: RpcOptions): UnaryCall<ContentRequestResponse, ContentRequestResponse>;
    /**
     * endregion Content
     *
     * @generated from protobuf rpc: DeleteContent(turnipxenon.v1.PrimaryIdRequest) returns (turnipxenon.v1.ContentRequestResponse);
     */
    deleteContent(input: PrimaryIdRequest, options?: RpcOptions): UnaryCall<PrimaryIdRequest, ContentRequestResponse>;
}
/**
 * Turnip handles all processes to internal services
 *
 * @generated from protobuf service turnipxenon.v1.Turnip
 */
export declare class TurnipClient implements ITurnipClient, ServiceInfo {
    private readonly _transport;
    typeName: string;
    methods: import("@protobuf-ts/runtime-rpc").MethodInfo<any, any>[];
    options: {
        [extensionName: string]: import("@protobuf-ts/runtime").JsonValue;
    };
    constructor(_transport: RpcTransport);
    /**
     * @generated from protobuf rpc: CreateUser(turnipxenon.v1.CreateUserRequest) returns (turnipxenon.v1.CreateUserResponse);
     */
    createUser(input: CreateUserRequest, options?: RpcOptions): UnaryCall<CreateUserRequest, CreateUserResponse>;
    /**
     * @generated from protobuf rpc: Login(turnipxenon.v1.LoginRequest) returns (turnipxenon.v1.LoginResponse);
     */
    login(input: LoginRequest, options?: RpcOptions): UnaryCall<LoginRequest, LoginResponse>;
    /**
     * region Content
     *
     * @generated from protobuf rpc: CreateContent(turnipxenon.v1.ContentRequestResponse) returns (turnipxenon.v1.ContentRequestResponse);
     */
    createContent(input: ContentRequestResponse, options?: RpcOptions): UnaryCall<ContentRequestResponse, ContentRequestResponse>;
    /**
     * @generated from protobuf rpc: GetContentById(turnipxenon.v1.PrimaryIdRequest) returns (turnipxenon.v1.ContentRequestResponse);
     */
    getContentById(input: PrimaryIdRequest, options?: RpcOptions): UnaryCall<PrimaryIdRequest, ContentRequestResponse>;
    /**
     * @generated from protobuf rpc: GetContentBatchById(turnipxenon.v1.PrimaryIdRequest) returns (turnipxenon.v1.MultipleContentResponse);
     */
    getContentBatchById(input: PrimaryIdRequest, options?: RpcOptions): UnaryCall<PrimaryIdRequest, MultipleContentResponse>;
    /**
     * @generated from protobuf rpc: GetAllContent(turnipxenon.v1.GetAllContentRequest) returns (turnipxenon.v1.MultipleContentResponse);
     */
    getAllContent(input: GetAllContentRequest, options?: RpcOptions): UnaryCall<GetAllContentRequest, MultipleContentResponse>;
    /**
     * @generated from protobuf rpc: GetContentsByTag(turnipxenon.v1.GetContentsByTagRequest) returns (turnipxenon.v1.MultipleContentResponse);
     */
    getContentsByTag(input: GetContentsByTagRequest, options?: RpcOptions): UnaryCall<GetContentsByTagRequest, MultipleContentResponse>;
    /**
     * todo: GetAllContentByTag (make a tree like structure? is that possible?)
     *
     * @generated from protobuf rpc: UpdateContent(turnipxenon.v1.ContentRequestResponse) returns (turnipxenon.v1.ContentRequestResponse);
     */
    updateContent(input: ContentRequestResponse, options?: RpcOptions): UnaryCall<ContentRequestResponse, ContentRequestResponse>;
    /**
     * endregion Content
     *
     * @generated from protobuf rpc: DeleteContent(turnipxenon.v1.PrimaryIdRequest) returns (turnipxenon.v1.ContentRequestResponse);
     */
    deleteContent(input: PrimaryIdRequest, options?: RpcOptions): UnaryCall<PrimaryIdRequest, ContentRequestResponse>;
}
