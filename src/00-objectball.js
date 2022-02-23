function gameObject() {
    return {
        home: {
            teamName: 'Brooklyn Nets',
            colors: ['Black', 'White'],
            players: {
                'Alan Anderson': {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                'Reggie Evans': {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                'Brook Lopez': {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                'Mason Plumlee': {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                'Jason Terry': {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                }
            }
        },
        away: {
            teamName: 'Charlotte Hornets',
            colors: ['Turquoise', 'Purple'],
            players: {
                'Jeff Adrien': {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                'Bismak Biyombo': {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                'DeSagna Diop': {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                'Ben Gordon': {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                'Brendan Haywood': {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                }
        },
    }
}}
function homeTeam() {
    return gameObject().home
}

function awayTeam() {
    return gameObject().away
}

function allPlayers() {
    return Object.assign({}, homeTeam().players, awayTeam().players)
}

function numPointsScored(playerInput) {
    return allPlayers()[playerInput].points
}
//this works
console.log('Brook Lopez scored', numPointsScored('Brook Lopez'));

function shoeSize(playerInput) {
    return allPlayers()[playerInput].shoe
}
//this works too

function teamColors(team) {
    if (team === gameObject().home.teamName){
        return gameObject().home.colors
    } else if (team === gameObject().away.teamName) {
        return gameObject().away.colors
    }
}
//this works too

function teamNames() {
    return [gameObject().away.teamName + ', ' + gameObject().home.teamName]
}
// this also works

function playerNumbers(team) {
    const everything = Object.entries(gameObject());
    // console.log('everything array', everything)
    const teamInfo = everything.find(teamArray => teamArray[1].teamName === team)
    //console.log('team Info', teamInfo[1].players)
    const teamPlayersObj = teamInfo[1].players
    //console.log('team players', teamPlayersObj)
    const jerseyNumbers = Object.values(teamPlayersObj)
   // console.log('jersey numbers', jerseyNumbers)
    return jerseyNumbers.map(eachPlayer => eachPlayer.number)
}
playerNumbers('Brooklyn Nets'); 
//this finally works!!!!!

function playerStats(name) {
    const thePlayers = Object.entries(allPlayers());
    console.log('the players object', thePlayers);
    const stats = thePlayers.find(playerArray => playerArray[0] === name)
    return stats
}
//this works too

function bigShoeRebounds() {
    const thePlayers = allPlayers()
    let bigShoe = 0
    let rebs = 0
    for (let eachPlayer in thePlayers) {
        console.log('each player', thePlayers[eachPlayer].shoe);
        if (thePlayers[eachPlayer].shoe > bigShoe) {
            bigShoe = thePlayers[eachPlayer].shoe
            rebs = thePlayers[eachPlayer].rebounds
        }
    }
    return rebs
}
//this works