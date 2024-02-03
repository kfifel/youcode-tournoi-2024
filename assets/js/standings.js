document.getElementById("standings").addEventListener('click', () => showStandings());

function showStandings() {
    const standingsContainer = document.getElementById('container');
    standingsContainer.innerHTML = '<p>Loading standings...</p>'; // Placeholder loading message

    // Example data structure: { groupA: [...], groupB: [...] }
    const standingsData = getStandingsData();

    // Clear existing content and display standings
    standingsContainer.innerHTML = '';

    Object.keys(standingsData).forEach(group => {
        const groupStandings = standingsData[group];
        const groupTitle = document.createElement('h2');
        groupTitle.className = 'text-white'
        groupTitle.textContent = `Group ${group}`;
        standingsContainer.appendChild(groupTitle);

        const table = document.createElement('table');
        table.className = 'table standings';
        table.innerHTML = `
            <thead>
                 <tr>
                    <th scope="col">#</th>
                    <th scope="col">Team</th>
                    <th scope="col">Points</th>
                    <th scope="col">Wins</th>
                    <th scope="col">Draws</th>
                    <th scope="col">Losses</th>
                    <th scope="col">Goals</th>
                    <th scope="col">Goals entered</th>
                    <th scope="col">AVG goals</th>
                    <th scope="col">Yellow Cards</th>
                    <th scope="col">Red Cards</th>
                </tr>
            </thead>
            <tbody>
                <!-- Populate rows dynamically based on standingsData[group] -->
            </tbody>
        `;

        // Sort teams within the group
        groupStandings.sort(sortTeams);

        // Populate table rows
        groupStandings.forEach((team, index) => {
            const row = document.createElement('tr');

            // Check if the team is in the top 2 or bottom 2
            // Check if the team is in the top 2 or bottom 2
            if (index < 2) {
                // Top 2 teams, set green background with reduced opacity
                row.style.backgroundColor = 'rgba(0, 255, 0, 0.5)'; // Adjust the alpha (last) value as needed
            } else if (index >= groupStandings.length - 2) {
                // Bottom 2 teams, set red background with reduced opacity
                row.style.backgroundColor = 'rgba(255, 0, 0, 0.5)'; // Adjust the alpha (last) value as needed
            }

            row.innerHTML = `
        <th scope="row">${index + 1}</th>
        <td>${team.name}</td>
        <td>${team.points}</td>
        <td>${team.wins}</td>
        <td>${team.draws}</td>
        <td>${team.losses}</td>
        <td>${team.goals}</td>
        <td>${team.goalsEntered}</td>
        <td>${team.goals - team.goalsEntered}</td>
        <td>${team.yellowCards}</td>
        <td>${team.redCards}</td>
    `;
            table.querySelector('tbody').appendChild(row);
        });


        standingsContainer.appendChild(table);
    });
}

function sortTeams(teamA, teamB) {
    if (teamB.points !== teamA.points) {
        return teamB.points - teamA.points; // Sort by points in descending order
    } else {
        let avgTeamB = teamB.goals - teamB.goalsEntered;
        let avgTeamA = teamA.goals - teamA.goalsEntered;
        if (avgTeamB !== avgTeamA) {
                return avgTeamB - avgTeamA; // Sort by average goals in descending order
            } else {
                // If both have negative goal differences or one has a negative and the other has 0, sort by yellow cards in ascending order
                return teamA.yellowCards - teamB.yellowCards;
            }
    }
}

function getStandingsData() {
    return {
        groupA: [
            { name: 'Van Der Linde', points: 0, wins: 0, draws: 0, losses: 1, goals: 2, goalsEntered: 3, yellowCards: 0, redCards: 0 },
            { name: '2B || ! 2B', points: 3, wins: 1, draws: 0, losses: 0, goals: 3, goalsEntered: 2, yellowCards: 0, redCards: 0 },
            { name: 'Pixel Warriors', points: 0, wins: 0, draws: 0, losses: 0, goals: 0, goalsEntered: 0, yellowCards: 0, redCards: 0 },
            { name: 'Coders Strike', points: 0, wins: 0, draws: 0, losses: 0, goals: 0, goalsEntered: 0, yellowCards: 0, redCards: 0 },
        ],
        groupB: [
            { name: 'Développeur Data', points: 0, wins: 0, draws: 0, losses: 0, goals: 0, goalsEntered: 0, yellowCards: 0, redCards: 0 },
            { name: 'Genei Ryodan', points: 0, wins: 0, draws: 0, losses: 0, goals: 0, goalsEntered: 0, yellowCards: 0, redCards: 0 },
            { name: 'La Casa del Js', points: 0, wins: 0, draws: 0, losses: 0, goals: 0, goalsEntered: 0, yellowCards: 0, redCards: 0 },
            { name: 'YouCode', points: 0, wins: 0, draws: 0, losses: 0, goals: 0, goalsEntered: 0, yellowCards: 0, redCards: 0 }, // Replace 'YouCode' with the actual team name
        ],
    };
}
