"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Turnip = exports.MultiplePrimaryIdRequest = exports.MultipleContentResponse = exports.GetAllContentRequest = exports.GetContentByIdResponse = exports.PrimaryIdRequest = exports.ContentRequestResponse = exports.LoginResponse = exports.LoginRequest = exports.CreateUserResponse = exports.CreateUserRequest = exports.Content = exports.AccessDetails = exports.Token = exports.User = void 0;
// @generated by protobuf-ts 2.8.2 with parameter generate_dependencies
// @generated from protobuf file "rpc/turnip/service.proto" (package "turnipxenon.v1", syntax proto3)
// tslint:disable
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const timestamp_1 = require("../../google/protobuf/timestamp");
// @generated message type with reflection information, may provide speed optimized methods
class User$Type extends runtime_5.MessageType {
    constructor() {
        super("turnipxenon.v1.User", [
            { no: 1, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "primary_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { username: "", primaryId: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string username */ 1:
                    message.username = reader.string();
                    break;
                case /* string primary_id */ 2:
                    message.primaryId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string username = 1; */
        if (message.username !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.username);
        /* string primary_id = 2; */
        if (message.primaryId !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.primaryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.User
 */
exports.User = new User$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Token$Type extends runtime_5.MessageType {
    constructor() {
        super("turnipxenon.v1.Token", [
            { no: 1, name: "access_token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "created_at", kind: "message", T: () => timestamp_1.Timestamp },
            { no: 4, name: "expires_at", kind: "message", T: () => timestamp_1.Timestamp }
        ]);
    }
    create(value) {
        const message = { accessToken: "", username: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string access_token */ 1:
                    message.accessToken = reader.string();
                    break;
                case /* string username */ 2:
                    message.username = reader.string();
                    break;
                case /* google.protobuf.Timestamp created_at */ 3:
                    message.createdAt = timestamp_1.Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
                    break;
                case /* google.protobuf.Timestamp expires_at */ 4:
                    message.expiresAt = timestamp_1.Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.expiresAt);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string access_token = 1; */
        if (message.accessToken !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.accessToken);
        /* string username = 2; */
        if (message.username !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.username);
        /* google.protobuf.Timestamp created_at = 3; */
        if (message.createdAt)
            timestamp_1.Timestamp.internalBinaryWrite(message.createdAt, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Timestamp expires_at = 4; */
        if (message.expiresAt)
            timestamp_1.Timestamp.internalBinaryWrite(message.expiresAt, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.Token
 */
exports.Token = new Token$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AccessDetails$Type extends runtime_5.MessageType {
    constructor() {
        super("turnipxenon.v1.AccessDetails", [
            { no: 1, name: "allowed_domains", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { allowedDomains: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string allowed_domains */ 1:
                    message.allowedDomains.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated string allowed_domains = 1; */
        for (let i = 0; i < message.allowedDomains.length; i++)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.allowedDomains[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.AccessDetails
 */
exports.AccessDetails = new AccessDetails$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Content$Type extends runtime_5.MessageType {
    constructor() {
        super("turnipxenon.v1.Content", [
            { no: 1, name: "title", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "content", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "media", kind: "scalar", opt: true, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "tag_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "access_details", kind: "message", T: () => exports.AccessDetails },
            { no: 7, name: "meta", kind: "map", K: 9 /*ScalarType.STRING*/, V: { kind: "scalar", T: 9 /*ScalarType.STRING*/ } },
            { no: 8, name: "primary_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 9, name: "created_at", kind: "message", T: () => timestamp_1.Timestamp },
            { no: 10, name: "author_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { title: "", description: "", content: "", tagList: [], meta: {}, primaryId: "", authorId: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string title */ 1:
                    message.title = reader.string();
                    break;
                case /* string description */ 2:
                    message.description = reader.string();
                    break;
                case /* string content */ 3:
                    message.content = reader.string();
                    break;
                case /* optional string media */ 4:
                    message.media = reader.string();
                    break;
                case /* repeated string tag_list */ 5:
                    message.tagList.push(reader.string());
                    break;
                case /* turnipxenon.v1.AccessDetails access_details */ 6:
                    message.accessDetails = exports.AccessDetails.internalBinaryRead(reader, reader.uint32(), options, message.accessDetails);
                    break;
                case /* map<string, string> meta */ 7:
                    this.binaryReadMap7(message.meta, reader, options);
                    break;
                case /* string primary_id */ 8:
                    message.primaryId = reader.string();
                    break;
                case /* google.protobuf.Timestamp created_at */ 9:
                    message.createdAt = timestamp_1.Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.createdAt);
                    break;
                case /* string author_id */ 10:
                    message.authorId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    binaryReadMap7(map, reader, options) {
        let len = reader.uint32(), end = reader.pos + len, key, val;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case 1:
                    key = reader.string();
                    break;
                case 2:
                    val = reader.string();
                    break;
                default: throw new globalThis.Error("unknown map entry field for field turnipxenon.v1.Content.meta");
            }
        }
        map[key ?? ""] = val ?? "";
    }
    internalBinaryWrite(message, writer, options) {
        /* string title = 1; */
        if (message.title !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.title);
        /* string description = 2; */
        if (message.description !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.description);
        /* string content = 3; */
        if (message.content !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.content);
        /* optional string media = 4; */
        if (message.media !== undefined)
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.media);
        /* repeated string tag_list = 5; */
        for (let i = 0; i < message.tagList.length; i++)
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.tagList[i]);
        /* turnipxenon.v1.AccessDetails access_details = 6; */
        if (message.accessDetails)
            exports.AccessDetails.internalBinaryWrite(message.accessDetails, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* map<string, string> meta = 7; */
        for (let k of Object.keys(message.meta))
            writer.tag(7, runtime_1.WireType.LengthDelimited).fork().tag(1, runtime_1.WireType.LengthDelimited).string(k).tag(2, runtime_1.WireType.LengthDelimited).string(message.meta[k]).join();
        /* string primary_id = 8; */
        if (message.primaryId !== "")
            writer.tag(8, runtime_1.WireType.LengthDelimited).string(message.primaryId);
        /* google.protobuf.Timestamp created_at = 9; */
        if (message.createdAt)
            timestamp_1.Timestamp.internalBinaryWrite(message.createdAt, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string author_id = 10; */
        if (message.authorId !== "")
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.authorId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.Content
 */
exports.Content = new Content$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateUserRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("turnipxenon.v1.CreateUserRequest", [
            { no: 1, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "password", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { username: "", password: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string username */ 1:
                    message.username = reader.string();
                    break;
                case /* string password */ 2:
                    message.password = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string username = 1; */
        if (message.username !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.username);
        /* string password = 2; */
        if (message.password !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.password);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.CreateUserRequest
 */
exports.CreateUserRequest = new CreateUserRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateUserResponse$Type extends runtime_5.MessageType {
    constructor() {
        super("turnipxenon.v1.CreateUserResponse", [
            { no: 1, name: "msg", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { msg: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string msg */ 1:
                    message.msg = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string msg = 1; */
        if (message.msg !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.msg);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.CreateUserResponse
 */
exports.CreateUserResponse = new CreateUserResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LoginRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("turnipxenon.v1.LoginRequest", [
            { no: 1, name: "username", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "password", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { username: "", password: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string username */ 1:
                    message.username = reader.string();
                    break;
                case /* string password */ 2:
                    message.password = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string username = 1; */
        if (message.username !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.username);
        /* string password = 2; */
        if (message.password !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.password);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.LoginRequest
 */
exports.LoginRequest = new LoginRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LoginResponse$Type extends runtime_5.MessageType {
    constructor() {
        super("turnipxenon.v1.LoginResponse", [
            { no: 1, name: "token", kind: "message", T: () => exports.Token },
            { no: 2, name: "user", kind: "message", T: () => exports.User }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* turnipxenon.v1.Token token */ 1:
                    message.token = exports.Token.internalBinaryRead(reader, reader.uint32(), options, message.token);
                    break;
                case /* turnipxenon.v1.User user */ 2:
                    message.user = exports.User.internalBinaryRead(reader, reader.uint32(), options, message.user);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* turnipxenon.v1.Token token = 1; */
        if (message.token)
            exports.Token.internalBinaryWrite(message.token, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* turnipxenon.v1.User user = 2; */
        if (message.user)
            exports.User.internalBinaryWrite(message.user, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.LoginResponse
 */
exports.LoginResponse = new LoginResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ContentRequestResponse$Type extends runtime_5.MessageType {
    constructor() {
        super("turnipxenon.v1.ContentRequestResponse", [
            { no: 1, name: "item", kind: "message", T: () => exports.Content }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* turnipxenon.v1.Content item */ 1:
                    message.item = exports.Content.internalBinaryRead(reader, reader.uint32(), options, message.item);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* turnipxenon.v1.Content item = 1; */
        if (message.item)
            exports.Content.internalBinaryWrite(message.item, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.ContentRequestResponse
 */
exports.ContentRequestResponse = new ContentRequestResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PrimaryIdRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("turnipxenon.v1.PrimaryIdRequest", [
            { no: 1, name: "primary_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { primaryId: "" };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string primary_id */ 1:
                    message.primaryId = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string primary_id = 1; */
        if (message.primaryId !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.primaryId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.PrimaryIdRequest
 */
exports.PrimaryIdRequest = new PrimaryIdRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetContentByIdResponse$Type extends runtime_5.MessageType {
    constructor() {
        super("turnipxenon.v1.GetContentByIdResponse", [
            { no: 1, name: "item", kind: "message", T: () => exports.Content }
        ]);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* turnipxenon.v1.Content item */ 1:
                    message.item = exports.Content.internalBinaryRead(reader, reader.uint32(), options, message.item);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* turnipxenon.v1.Content item = 1; */
        if (message.item)
            exports.Content.internalBinaryWrite(message.item, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.GetContentByIdResponse
 */
exports.GetContentByIdResponse = new GetContentByIdResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetAllContentRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("turnipxenon.v1.GetAllContentRequest", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.GetAllContentRequest
 */
exports.GetAllContentRequest = new GetAllContentRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MultipleContentResponse$Type extends runtime_5.MessageType {
    constructor() {
        super("turnipxenon.v1.MultipleContentResponse", [
            { no: 1, name: "item_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.Content }
        ]);
    }
    create(value) {
        const message = { itemList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated turnipxenon.v1.Content item_list */ 1:
                    message.itemList.push(exports.Content.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated turnipxenon.v1.Content item_list = 1; */
        for (let i = 0; i < message.itemList.length; i++)
            exports.Content.internalBinaryWrite(message.itemList[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.MultipleContentResponse
 */
exports.MultipleContentResponse = new MultipleContentResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class MultiplePrimaryIdRequest$Type extends runtime_5.MessageType {
    constructor() {
        super("turnipxenon.v1.MultiplePrimaryIdRequest", [
            { no: 1, name: "primary_id_list", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { primaryIdList: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            runtime_3.reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated string primary_id_list */ 1:
                    message.primaryIdList.push(reader.string());
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* repeated string primary_id_list = 1; */
        for (let i = 0; i < message.primaryIdList.length; i++)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.primaryIdList[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message turnipxenon.v1.MultiplePrimaryIdRequest
 */
exports.MultiplePrimaryIdRequest = new MultiplePrimaryIdRequest$Type();
/**
 * @generated ServiceType for protobuf service turnipxenon.v1.Turnip
 */
exports.Turnip = new runtime_rpc_1.ServiceType("turnipxenon.v1.Turnip", [
    { name: "CreateUser", options: {}, I: exports.CreateUserRequest, O: exports.CreateUserResponse },
    { name: "Login", options: {}, I: exports.LoginRequest, O: exports.LoginResponse },
    { name: "CreateContent", options: {}, I: exports.ContentRequestResponse, O: exports.ContentRequestResponse },
    { name: "GetContentById", options: {}, I: exports.PrimaryIdRequest, O: exports.ContentRequestResponse },
    { name: "GetContentBatchById", options: {}, I: exports.PrimaryIdRequest, O: exports.MultipleContentResponse },
    { name: "GetAllContent", options: {}, I: exports.GetAllContentRequest, O: exports.MultipleContentResponse },
    { name: "UpdateContent", options: {}, I: exports.ContentRequestResponse, O: exports.ContentRequestResponse },
    { name: "DeleteContent", options: {}, I: exports.PrimaryIdRequest, O: exports.ContentRequestResponse }
]);
