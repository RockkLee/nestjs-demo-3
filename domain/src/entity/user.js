"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _User_id_accessor_storage, _User_name_accessor_storage, _User_email_accessor_storage;
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor() {
        _User_id_accessor_storage.set(this, void 0);
        _User_name_accessor_storage.set(this, void 0);
        _User_email_accessor_storage.set(this, void 0);
    }
    get id() { return __classPrivateFieldGet(this, _User_id_accessor_storage, "f"); }
    set id(value) { __classPrivateFieldSet(this, _User_id_accessor_storage, value, "f"); }
    get name() { return __classPrivateFieldGet(this, _User_name_accessor_storage, "f"); }
    set name(value) { __classPrivateFieldSet(this, _User_name_accessor_storage, value, "f"); }
    get email() { return __classPrivateFieldGet(this, _User_email_accessor_storage, "f"); }
    set email(value) { __classPrivateFieldSet(this, _User_email_accessor_storage, value, "f"); }
}
exports.User = User;
_User_id_accessor_storage = new WeakMap(), _User_name_accessor_storage = new WeakMap(), _User_email_accessor_storage = new WeakMap();
