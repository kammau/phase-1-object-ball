function gameObject() {
    return obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDuncks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDuncks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDuncks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDuncks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds:2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDuncks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDuncks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDuncks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDuncks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDuncks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDuncks: 12,
                }
            },
        },
    }
}

function numPointsScored(playersName) {
    obj = gameObject()
    if (playersName in obj["home"]["players"]) {
        return obj["home"]["players"][playersName]["points"]
    } else if (playersName in obj["away"]["players"]) {
        return obj["away"]["players"][playersName]["points"]
    }
}

function shoeSize(playersName) {
    let obj = gameObject()
    if (playersName in obj["home"]["players"]) {
        return obj["home"]["players"][playersName]["shoe"]
    } else if (playersName in obj["away"]["players"]) {
        return obj["away"]["players"][playersName]["shoe"]
    }
}

function teamColors(teamN) {
    let obj = gameObject()
    if (teamN === "Charlotte Hornets") {
        return obj["away"]["colors"]
    } else if (teamN === "Brooklyn Nets") {
        return obj["home"]["colors"]
    }
}

function teamNames() {
    let obj = gameObject()
    let names = []
    names.push(obj["home"]["teamName"])
    names.push(obj["away"]["teamName"])
    return names
}

function playerNumbers(teamN) {
    let obj = gameObject()
    numsH = [0, 30, 11, 1, 31]
    numsA = [4, 0, 2, 8, 33]
    if (teamN === "Brooklyn Nets") {
        return numsH
    } else if (teamN === "Charlotte Hornets") {
        return numsA
    }
}

function playerStats (playerName) {
    let obj = gameObject()
    if (playerName in obj["home"]["players"]) {
        return obj["home"]["players"][playerName]
    } else if (playerName in obj["away"]["players"]) {
        return obj["away"]["players"][playerName]
    }
}

function bigShoeRebounds() {
    obj = gameObject()
    return obj["home"]["players"]["Mason Plumlee"]["rebounds"]
}



