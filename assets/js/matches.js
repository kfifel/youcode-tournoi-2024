// Event listener for the "matches" button
document.getElementById("matches").addEventListener('click', () => showMatches());

// Function to display matches
function showMatches() {
    const matchesContainer = document.getElementById('container');
    matchesContainer.innerHTML = '<p>Loading matches...</p>'; // Placeholder loading message

    const matchesData = getMatchesData();

    // Clear existing content and display matches
    matchesContainer.innerHTML = '';

    Object.keys(matchesData).forEach(group => {
        const groupMatches = matchesData[group];
        const groupTitle = document.createElement('h2');
        groupTitle.className = 'text-white';
        groupTitle.textContent = `Group ${group}`;
        matchesContainer.appendChild(groupTitle);

        const table = document.createElement('table');
        table.className = 'table matches';
        table.innerHTML = `
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Team 1</th>
                    <th scope="col">Result</th>
                    <th scope="col">Team 2</th>
                    <th scope="col">Date/Time</th>
                    <th scope="col">Referee</th>
                </tr>
            </thead>
            <tbody>
                <!-- Populate rows dynamically based on matchesData[group] -->
            </tbody>
        `;

        // Populate table rows
        groupMatches.forEach((match, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <th scope="row">${index + 1}</th>
                <td>${match.team1}</td>
                <td>${match.result}</td>
                <td>${match.team2}</td>
                <td>${match.dateTime}</td>
                <td>${match.referee}</td>
            `;
            table.querySelector('tbody').appendChild(row);
        });

        matchesContainer.appendChild(table);
    });
}

// Function to fetch matches data
function getMatchesData() {
    return {
        groupA: [
            { team1: 'Van Der Linde', team2: '2B || ! 2B', result: '2 - 3', dateTime: '2024-02-02 17:40', referee: 'Yasser Aithnini - Hamza herrass' },
            { team1: 'Pixel Warriors', team2: 'Coders Strike', result: '  -  ', dateTime: '2024-02-04 17:00', referee: 'Khalid Oukha - Ayoub Ouabi' },
            // Add more matches as needed
        ],
        groupB: [
            { team1: 'Développeur Data', team2: 'Genei Ryodan', result: ' -  ', dateTime: '2024-02-03 16:20', referee: 'Khalid fifel - Anass Ait Ouaguerd' },
            { team1: 'La Casa del Js', team2: 'Namek', result: ' - ', dateTime: '2024-02-03 17:40', referee: 'Zakaria  Elkoh - kacimi zakaria' },
            // Add more matches as needed
        ],
    };
}
