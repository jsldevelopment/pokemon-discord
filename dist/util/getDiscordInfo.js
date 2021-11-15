"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_json_1 = __importDefault(require("../config.json"));
exports.getGuild = function (client) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!client)
            return;
        return yield client.guilds.cache.get(config_json_1.default);
    });
};
exports.getMember = function (client, id) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!client)
            return;
        return yield client.guilds.cache.get(config_json_1.default).members.fetch(id);
    });
};
exports.getRole = function (client, roleId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!client)
            return;
        return yield client.guilds.cache.get(config_json_1.default).roles.cache.find((role) => role.name === roleId);
    });
};
exports.getChannel = function (client, id) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield client.channels.fetch(id);
    });
};
exports.sleep = function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};
