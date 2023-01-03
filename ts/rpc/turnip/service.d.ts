import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Timestamp } from "../../google/protobuf/timestamp";
/**
 * region models
 *
 * @generated from protobuf message turnipxenon.v1.User
 */
export interface User {
    /**
     * @generated from protobuf field: string username = 1;
     */
    username: string;
    /**
     * @generated from protobuf field: string primary_id = 2;
     */
    primaryId: string;
}
/**
 * @generated from protobuf message turnipxenon.v1.Token
 */
export interface Token {
    /**
     * @generated from protobuf field: string access_token = 1;
     */
    accessToken: string;
    /**
     * @generated from protobuf field: string username = 2;
     */
    username: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 3;
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp expires_at = 4;
     */
    expiresAt?: Timestamp;
}
/**
 * @generated from protobuf message turnipxenon.v1.AccessDetails
 */
export interface AccessDetails {
    /**
     * @generated from protobuf field: repeated string allowed_domains = 1;
     */
    allowedDomains: string[];
}
/**
 * @generated from protobuf message turnipxenon.v1.Content
 */
export interface Content {
    /**
     * @generated from protobuf field: string title = 1;
     */
    title: string;
    /**
     * @generated from protobuf field: string description = 2;
     */
    description: string;
    /**
     * @generated from protobuf field: string content = 3;
     */
    content: string;
    /**
     * @generated from protobuf field: optional string media = 4;
     */
    media?: string;
    /**
     * @generated from protobuf field: repeated string tag_list = 5;
     */
    tagList: string[];
    /**
     * @generated from protobuf field: turnipxenon.v1.AccessDetails access_details = 6;
     */
    accessDetails?: AccessDetails;
    /**
     * @generated from protobuf field: map<string, string> meta = 7;
     */
    meta: {
        [key: string]: string;
    };
    /**
     * @generated from protobuf field: string primary_id = 8;
     */
    primaryId: string;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp created_at = 9;
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: string author_id = 10;
     */
    authorId: string;
}
/**
 * region request and responses
 *
 * @generated from protobuf message turnipxenon.v1.CreateUserRequest
 */
export interface CreateUserRequest {
    /**
     * @generated from protobuf field: string username = 1;
     */
    username: string;
    /**
     * @generated from protobuf field: string password = 2;
     */
    password: string;
}
/**
 * @generated from protobuf message turnipxenon.v1.CreateUserResponse
 */
export interface CreateUserResponse {
    /**
     * @generated from protobuf field: string msg = 1;
     */
    msg: string;
}
/**
 * @generated from protobuf message turnipxenon.v1.LoginRequest
 */
export interface LoginRequest {
    /**
     * @generated from protobuf field: string username = 1;
     */
    username: string;
    /**
     * @generated from protobuf field: string password = 2;
     */
    password: string;
}
/**
 * @generated from protobuf message turnipxenon.v1.LoginResponse
 */
export interface LoginResponse {
    /**
     * @generated from protobuf field: turnipxenon.v1.Token token = 1;
     */
    token?: Token;
    /**
     * @generated from protobuf field: turnipxenon.v1.User user = 2;
     */
    user?: User;
}
/**
 * @generated from protobuf message turnipxenon.v1.ContentRequestResponse
 */
export interface ContentRequestResponse {
    /**
     * @generated from protobuf field: turnipxenon.v1.Content item = 1;
     */
    item?: Content;
}
/**
 * @generated from protobuf message turnipxenon.v1.PrimaryIdRequest
 */
export interface PrimaryIdRequest {
    /**
     * @generated from protobuf field: string primary_id = 1;
     */
    primaryId: string;
}
/**
 * @generated from protobuf message turnipxenon.v1.GetContentByIdResponse
 */
export interface GetContentByIdResponse {
    /**
     * @generated from protobuf field: turnipxenon.v1.Content item = 1;
     */
    item?: Content;
}
/**
 * @generated from protobuf message turnipxenon.v1.GetAllContentRequest
 */
export interface GetAllContentRequest {
}
/**
 * @generated from protobuf message turnipxenon.v1.MultipleContentResponse
 */
export interface MultipleContentResponse {
    /**
     * @generated from protobuf field: repeated turnipxenon.v1.Content item_list = 1;
     */
    itemList: Content[];
}
/**
 * @generated from protobuf message turnipxenon.v1.MultiplePrimaryIdRequest
 */
export interface MultiplePrimaryIdRequest {
    /**
     * @generated from protobuf field: repeated string primary_id_list = 1;
     */
    primaryIdList: string[];
}
/**
 * @generated from protobuf message turnipxenon.v1.GetContentsByTagRequest
 */
export interface GetContentsByTagRequest {
    /**
     * @generated from protobuf field: repeated string tag_list = 1;
     */
    tagList: string[];
}
declare class User$Type extends MessageType<User> {
    constructor();
    create(value?: PartialMessage<User>): User;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: User): User;
    internalBinaryWrite(message: User, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.User
 */
export declare const User: User$Type;
declare class Token$Type extends MessageType<Token> {
    constructor();
    create(value?: PartialMessage<Token>): Token;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Token): Token;
    internalBinaryWrite(message: Token, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.Token
 */
export declare const Token: Token$Type;
declare class AccessDetails$Type extends MessageType<AccessDetails> {
    constructor();
    create(value?: PartialMessage<AccessDetails>): AccessDetails;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AccessDetails): AccessDetails;
    internalBinaryWrite(message: AccessDetails, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.AccessDetails
 */
export declare const AccessDetails: AccessDetails$Type;
declare class Content$Type extends MessageType<Content> {
    constructor();
    create(value?: PartialMessage<Content>): Content;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Content): Content;
    private binaryReadMap7;
    internalBinaryWrite(message: Content, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.Content
 */
export declare const Content: Content$Type;
declare class CreateUserRequest$Type extends MessageType<CreateUserRequest> {
    constructor();
    create(value?: PartialMessage<CreateUserRequest>): CreateUserRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateUserRequest): CreateUserRequest;
    internalBinaryWrite(message: CreateUserRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.CreateUserRequest
 */
export declare const CreateUserRequest: CreateUserRequest$Type;
declare class CreateUserResponse$Type extends MessageType<CreateUserResponse> {
    constructor();
    create(value?: PartialMessage<CreateUserResponse>): CreateUserResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CreateUserResponse): CreateUserResponse;
    internalBinaryWrite(message: CreateUserResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.CreateUserResponse
 */
export declare const CreateUserResponse: CreateUserResponse$Type;
declare class LoginRequest$Type extends MessageType<LoginRequest> {
    constructor();
    create(value?: PartialMessage<LoginRequest>): LoginRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginRequest): LoginRequest;
    internalBinaryWrite(message: LoginRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.LoginRequest
 */
export declare const LoginRequest: LoginRequest$Type;
declare class LoginResponse$Type extends MessageType<LoginResponse> {
    constructor();
    create(value?: PartialMessage<LoginResponse>): LoginResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoginResponse): LoginResponse;
    internalBinaryWrite(message: LoginResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.LoginResponse
 */
export declare const LoginResponse: LoginResponse$Type;
declare class ContentRequestResponse$Type extends MessageType<ContentRequestResponse> {
    constructor();
    create(value?: PartialMessage<ContentRequestResponse>): ContentRequestResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ContentRequestResponse): ContentRequestResponse;
    internalBinaryWrite(message: ContentRequestResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.ContentRequestResponse
 */
export declare const ContentRequestResponse: ContentRequestResponse$Type;
declare class PrimaryIdRequest$Type extends MessageType<PrimaryIdRequest> {
    constructor();
    create(value?: PartialMessage<PrimaryIdRequest>): PrimaryIdRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: PrimaryIdRequest): PrimaryIdRequest;
    internalBinaryWrite(message: PrimaryIdRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.PrimaryIdRequest
 */
export declare const PrimaryIdRequest: PrimaryIdRequest$Type;
declare class GetContentByIdResponse$Type extends MessageType<GetContentByIdResponse> {
    constructor();
    create(value?: PartialMessage<GetContentByIdResponse>): GetContentByIdResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetContentByIdResponse): GetContentByIdResponse;
    internalBinaryWrite(message: GetContentByIdResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.GetContentByIdResponse
 */
export declare const GetContentByIdResponse: GetContentByIdResponse$Type;
declare class GetAllContentRequest$Type extends MessageType<GetAllContentRequest> {
    constructor();
    create(value?: PartialMessage<GetAllContentRequest>): GetAllContentRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetAllContentRequest): GetAllContentRequest;
    internalBinaryWrite(message: GetAllContentRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.GetAllContentRequest
 */
export declare const GetAllContentRequest: GetAllContentRequest$Type;
declare class MultipleContentResponse$Type extends MessageType<MultipleContentResponse> {
    constructor();
    create(value?: PartialMessage<MultipleContentResponse>): MultipleContentResponse;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MultipleContentResponse): MultipleContentResponse;
    internalBinaryWrite(message: MultipleContentResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.MultipleContentResponse
 */
export declare const MultipleContentResponse: MultipleContentResponse$Type;
declare class MultiplePrimaryIdRequest$Type extends MessageType<MultiplePrimaryIdRequest> {
    constructor();
    create(value?: PartialMessage<MultiplePrimaryIdRequest>): MultiplePrimaryIdRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: MultiplePrimaryIdRequest): MultiplePrimaryIdRequest;
    internalBinaryWrite(message: MultiplePrimaryIdRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.MultiplePrimaryIdRequest
 */
export declare const MultiplePrimaryIdRequest: MultiplePrimaryIdRequest$Type;
declare class GetContentsByTagRequest$Type extends MessageType<GetContentsByTagRequest> {
    constructor();
    create(value?: PartialMessage<GetContentsByTagRequest>): GetContentsByTagRequest;
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GetContentsByTagRequest): GetContentsByTagRequest;
    internalBinaryWrite(message: GetContentsByTagRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.GetContentsByTagRequest
 */
export declare const GetContentsByTagRequest: GetContentsByTagRequest$Type;
/**
 * @generated ServiceType for protobuf service turnipxenon.v1.Turnip
 */
export declare const Turnip: ServiceType;
export {};
