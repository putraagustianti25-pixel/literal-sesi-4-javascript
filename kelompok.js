var motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentina',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
];

var groupedData = {};

motoGP.forEach(function (race) {
    var country = race.winner.country;

    if (!groupedData[country]) {
        groupedData[country] = {
            winningCircuits: [],
            totalWin: 0
        };
    }

    groupedData[country].winningCircuits.push({
        name: race.winner.firstName + ' ' + race.winner.lastName,
        winLocation: race.circuit + ', ' + race.location
    });

    groupedData[country].totalWin++;
});

console.log(JSON.stringify(groupedData, null, 2));