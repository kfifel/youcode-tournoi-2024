document.getElementById("matches").addEventListener('click', () => showMatches());

// Function to fetch matches data
function getMatchesData() {
    return {
        groupA: [
            { team1: 'Van Der Linde', team2: '2B || ! 2B', result: '2 - 3', dateTime: '2024-02-02 17:40', referee: 'Yasser Aithnini - Hamza herrass' },
            { team1: 'Pixel Warriors', team2: 'Coders Strike', result: '2 - 2', dateTime: '2024-02-04 17:00', referee: 'Khalid Oukha - Ayoub Ouabi' },
            { team1: '', team2: '', result: '', dateTime: '', referee: '' },
            { team1: 'Van Der Linde', team2: 'Pixel Warriors', result: '1 - 1', dateTime: '2024-02-08 17:40', referee: 'Anass Ait Ouaguerd - Mohamed Nachit' },
            { team1: '2B || ! 2B', team2: 'Coders Strike', result: '4 - 2', dateTime: '2024-02-11 16:20', referee: 'Khalid Oukha - Ayoub Ouabi' },
            { team1: '', team2: '', result: '', dateTime: '', referee: '' },
            { team1: 'Van Der Linde', team2: 'Coders Strike', result: '4 - 3', dateTime: '2024-02-17 16:20', referee: 'Abdellah EL Ghoulam  - Ayoub Ouabi' },
            { team1: '2B || ! 2B', team2: 'Pixel Warriors', result: '1  -  3', dateTime: '2024-02-20 17:40', referee: ' Mohamed Abrache  -  Bilal Chbanat' },
        ],
        groupB: [
            { team1: 'Développeur Data', team2: 'Genei Ryodan', result: '7 - 3', dateTime: '2024-02-03 16:20', referee: 'Khalid fifel - Anass Ait Ouaguerd' },
            { team1: 'La Casa del Js', team2: 'Namek', result: '4 - 0', dateTime: '2024-02-03 17:40', referee: 'Zakaria  Elkoh - kacimi zakaria' },
            { team1: '', team2: '', result: '', dateTime: '', referee: '' },
            { team1: 'Développeur Data', team2: 'Namek', result: '1 - 5', dateTime: '2024-02-09 17:40', referee: 'kacimi zakaria - Anas Elmakhloufi' },
            { team1: 'La Casa del Js', team2: 'Genei Ryodan', result: '2  -  3', dateTime: '2024-02-11 17:40', referee: 'Zakaria  Elkoh - kacimi zakaria' },
            { team1: '', team2: '', result: '', dateTime: '', referee: '' },
            { team1: 'Genei Ryodan', team2: 'Namek', result: '2 - 3', dateTime: '2024-02-17 17:40', referee: 'Mohamed Nachit - Anass Ait Ouaguerd' },
            { team1: 'La Casa del Js', team2: 'FC Ghoulam', result: '2  -  3', dateTime: '2024/02/23 17:40', referee: 'Anas Elmakhloufi - kacimi zakaria' },
        ],
        semiFinals: {
            semiFinal1: [
                { team1: '2B || ! 2B', team2: 'Namek', result: '2  -  1', dateTime: '2024/02/29 17:40', referee: '' },
            ],
            semiFinal2: [
                { team1: 'Pixel Warriors', team2: 'La Casa del Js', result: '1  -  0', dateTime: '2024-03-03 17:40', referee: '' },
            ],
        },
        final: {
            team1: '2B || ! 2B',
            team2: 'Pixel Warriors',
            result: '0  -  0(3  -  2)',
            dateTime: '2024/03/08 16:10',
            referee: ''
        }

    };
}
// Function to create a matches table
function createMatchesTable(matches, final = false) {
    const table = document.createElement('table');
    table.className = 'table matches';
    table.innerHTML = `
        <thead>
            <tr>
                <th scope="col" width="80px">Round</th>
                <th scope="col">Team 1</th>
                <th scope="col">Result</th>
                <th scope="col">Team 2</th>
                <th scope="col">Date/Time</th>
            </tr>
        </thead>
        <tbody>
            <!-- Populate rows dynamically based on matches -->
        </tbody>
    `;
    matches.forEach((match, index) => {
        const row = createMatchRow(match, index + 1, final);
        table.querySelector('tbody').appendChild(row);
    });
    return table;
}


function showMatchDetails(match) {
    // Create a Bootstrap modal
    const modal = document.createElement('div');
    modal.className = 'modal fade';
    modal.innerHTML = `
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header text-white" style="background-color: #454d54">
                    <h5 class="modal-title">${match.team1} vs ${match.team2}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-6">
                            <p><strong>Result:</strong> ${match.result}</p>
                            <p><strong>Date/Time:</strong> ${match.dateTime}</p>
                            <p><strong>Referee:</strong> ${match.referee}</p>
                        </div>
                        <div class="col-6">
                            <!-- Add any additional match details here -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    // Initialize the modal using Bootstrap's JavaScript
    const modalInstance = new bootstrap.Modal(modal);
    modalInstance.show();
}

// Function to display all matches (group matches, semi-finals, and final)
function showMatches() {
    const matchesContainer = document.getElementById('container');
    matchesContainer.innerHTML = '<p>Loading matches...</p>'; // Placeholder loading message

    const matchesData = getMatchesData();

    // Clear existing content and display matches
    matchesContainer.innerHTML = '';

    // Display group matches for Group A
    const groupAMatchesContainer = document.createElement('div');
    groupAMatchesContainer.innerHTML = '<h2 class="text-white text-center">Group A Matches</h2>';
    const groupAMatchesData = matchesData.groupA;
    const groupAMatchesTable = createMatchesTable(groupAMatchesData);
    groupAMatchesContainer.appendChild(groupAMatchesTable);

    // Display group matches for Group B
    const groupBMatchesContainer = document.createElement('div');
    groupBMatchesContainer.innerHTML = '<h2 class="text-white text-center">Group B Matches</h2>';
    const groupBMatchesData = matchesData.groupB;
    const groupBMatchesTable = createMatchesTable(groupBMatchesData);
    groupBMatchesContainer.appendChild(groupBMatchesTable);

    // Display semi-final matches
    const semiFinalMatchesContainer = document.createElement('div');
    semiFinalMatchesContainer.innerHTML = '<h2 class="text-white text-center">Semi-Final Matches</h2>';
    const semiFinalsData = matchesData.semiFinals;
    Object.keys(semiFinalsData).forEach(semiFinalKey => {
        const semiFinalTitle = document.createElement('h3');
        semiFinalTitle.className = 'text-white';
        semiFinalTitle.textContent = semiFinalKey;
        semiFinalMatchesContainer.appendChild(semiFinalTitle);

        const semiFinalTable = createMatchesTable(semiFinalsData[semiFinalKey]);
        semiFinalMatchesContainer.appendChild(semiFinalTable);
    });

    // Display final match
    const finalMatchContainer = document.createElement('div');
    finalMatchContainer.innerHTML = '<h2 class="text-white text-center">Final Match</h2>';
    const finalMatchData = matchesData.final;
    const finalMatchTable = createMatchesTable([finalMatchData], true);
    finalMatchContainer.appendChild(finalMatchTable);

    // Append group matches, semi-final matches, and final match to the container
    matchesContainer.appendChild(finalMatchContainer);
    let htmlhrElement = document.createElement('hr');
    htmlhrElement.classList.add('text-white')
    matchesContainer.appendChild(htmlhrElement);
    matchesContainer.appendChild(semiFinalMatchesContainer);
    matchesContainer.appendChild(htmlhrElement);
    matchesContainer.appendChild(groupAMatchesContainer);
    matchesContainer.appendChild(groupBMatchesContainer);
}

// Function to create a table row for a match
function createMatchRow(match, matchNumber, final) {
    const row = document.createElement('tr');
    if (match.team1 !== '') {
        row.innerHTML += `
            <th scope="row">${matchNumber}</th>
            <td class="${final? 'winner-team':''}">${match.team1}</td>
            <td>${ 
                    match.result.split('(').length > 1 
                        ? match.result.split('(')[0] + '<br>(' + match.result.split('(')[1]
                        : match.result }
            </td>
            <td>${match.team2}</td>
            <td>${match.dateTime}</td>
        `;
    } else {
        row.classList.add('null-row');
        row.innerHTML += `
            <th scope="row" colspan="6"></th>
        `;
    }
    if (match.result !== '') {
        row.addEventListener('click', () => showMatchDetails(match));
        row.classList.add('result-row');
    }
    return row;
}