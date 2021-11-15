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
module.exports = {
    getAllUsers: function (client) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield client.execute('SELECT * FROM members');
        });
    },
    insertUser: function (client, id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'INSERT INTO members (id, data) VALUES (?, ?)';
            const params = [id, JSON.stringify(data)];
            yield client.execute(query, params, { prepare: true })
                .then(() => {
                console.log("success");
            });
        });
    },
    getUser: function (client, { id }) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'SELECT data FROM members WHERE id=?';
            const params = [id];
            const data = yield client.execute(query, params, { prepare: true });
            return JSON.parse(data.rows[0].data);
        });
    },
    insertPokemon: function (client, { owner_id, pokemon_id, pokemon }) {
        return __awaiter(this, void 0, void 0, function* () {
            const query = 'INSERT INTO pokemon (owner_id, id, data) VALUES (?, ?, ?)';
            const params = [owner_id, pokemon_id, JSON.stringify(pokemon)];
            yield client.execute(query, params, { prepare: true });
        });
    }
};
