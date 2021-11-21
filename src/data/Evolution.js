const types = {
    STONE: "stone",
    LEVEL: "level"
}

const Evolution = {
    "1": [{
        "method": types.LEVEL,
        "level": 16,
        "next": 2
    }],
    "7": [{
        "method": types.LEVEL,
        "level": 7,
        "next": 11
    }]
}

module.exports = Evolution;