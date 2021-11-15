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
module.exports = (level, stats, nature, iv, ev) => __awaiter(void 0, void 0, void 0, function* () {
    const calcedStats = {};
    for (let stat in stats) {
        let newStat = 0;
        if (stat === "hp") {
            newStat = Math.floor(((2 * stats[stat] + iv[stat] + Math.floor(ev[stat] / 4)) * level) / 100) + level + 10;
        }
        else {
            newStat = Math.floor(((2 * stats[stat] + iv[stat] + Math.floor(ev[stat] / 4)) * level) / 100) + 5;
        }
        // check for natures
        // hardy, docile, serious, bashful, and quirky do not affect stats in any way
        if (natureTable[nature]) {
            // natures arent being calc'd
            if (stat === natureTable[nature].boost) {
                newStat = Math.floor(newStat + (newStat * .10));
            }
            if (stat === natureTable[nature].lower) {
                newStat = Math.floor(newStat - (newStat * .10));
            }
        }
        calcedStats[stat] = newStat;
    }
    return calcedStats;
});
const natureTable = {
    "lonely": {
        boost: "atk",
        lower: "def"
    },
    "brave": {
        boost: "atk",
        lower: "spd"
    }
};
