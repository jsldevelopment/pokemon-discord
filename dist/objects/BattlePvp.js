"use strict";
const Battle = require('./Battle');
const messages = require('../data/messages/messages.js');
const threadManager = require('../managers/ThreadManager');
const MessageManager = require('../managers/MessageManager');
const battleMap = require('../data/battleMap.js');
class BattlePvp extends Battle {
    // in this case, player 2 will be an instance of AIUser
    constructor(client, player1, player2) {
        super(client, player1, player2);
        this.escapes = 0;
    }
}
module.exports = BattlePvp;
