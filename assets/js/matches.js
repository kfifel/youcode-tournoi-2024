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
            { team1: '2B || ! 2B', team2: 'Pixel Warriors', result: '  -  ', dateTime: '2024-02-20 17:40', referee: ' Mohamed Abrache  -  Bilal Chbanat' },
        ],
        groupB: [
            { team1: 'Développeur Data', team2: 'Genei Ryodan', result: '7 - 3', dateTime: '2024-02-03 16:20', referee: 'Khalid fifel - Anass Ait Ouaguerd' },
            { team1: 'La Casa del Js', team2: 'Namek', result: '4 - 0', dateTime: '2024-02-03 17:40', referee: 'Zakaria  Elkoh - kacimi zakaria' },
            { team1: '', team2: '', result: '', dateTime: '', referee: '' },
            { team1: 'Développeur Data', team2: 'Namek', result: '1 - 5', dateTime: '2024-02-09 17:40', referee: 'kacimi zakaria - Anas Elmakhloufi' },
            { team1: 'La Casa del Js', team2: 'Genei Ryodan', result: '2  -  3', dateTime: '2024-02-11 17:40', referee: 'Zakaria  Elkoh - kacimi zakaria' },
            { team1: '', team2: '', result: '', dateTime: '', referee: '' },
            { team1: 'Genei Ryodan', team2: 'Namek', result: '2 - 3', dateTime: '2024-02-17 17:40', referee: 'Mohamed Nachit - Anass Ait Ouaguerd' },
            { team1: 'La Casa del Js', team2: 'FC Ghoulam', result: '  -  ', dateTime: '2024/--/-- --:--', referee: '___ - ___' },
        ],
    };
}

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
                    <th scope="col" width="80px">Round</th>
                    <th scope="col" width="30px">N°</th>
                    <th scope="col">Team 1</th>
                    <th scope="col">Result</th>
                    <th scope="col">Team 2</th>
                    <th scope="col">Date/Time</th>
                </tr>
            </thead>
            <tbody>
                <!-- Populate rows dynamically based on matchesData[group] -->
            </tbody>
        `;

        let roundNumber = 1;

        groupMatches.forEach((match, index) => {
            const row = document.createElement('tr');
            if (index % 3 === 0) {
                const rowspanCell = document.createElement('th');
                rowspanCell.setAttribute('scope', 'row');
                rowspanCell.setAttribute('rowspan', '2');
                rowspanCell.textContent = (roundNumber++).toString();
                rowspanCell.style.backgroundColor = '#3fa458'; // Apply background color
                row.appendChild(rowspanCell);
            }
            if (match.team1 !== '') {
                row.innerHTML += `
            <th scope="row">${index + 1}</th>
            <td>${match.team1}</td>
            <td>${match.result}</td>
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
            table.querySelector('tbody').appendChild(row);

        });

        matchesContainer.appendChild(table);
    });
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
