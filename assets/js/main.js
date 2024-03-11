teams.forEach(team => {
    team.ClassName = team.ClassName.toUpperCase();
    team.Player1 = team.Player1.toUpperCase();
    team.Player2 = team.Player2.toUpperCase();
    team.Player3 = team.Player3.toUpperCase();
    team.Player4 = team.Player4.toUpperCase();
    team.Player5 = team.Player5.toUpperCase();
    team.Player6 = team.Player6.toUpperCase();
    team.Player7 = team.Player7.toUpperCase();
    team.Username = team.Username.toUpperCase();
})

function filter(e) {
    const searchString = e.target.value.toUpperCase();
    let filteredTeams = teams.filter(team =>
        team.ClassName.includes(searchString) ||
        team.Player1.includes(searchString) ||
        team.Player2.includes(searchString) ||
        team.Player3.includes(searchString) ||
        team.Player4.includes(searchString) ||
        team.Player5.includes(searchString) ||
        team.Player6.includes(searchString) ||
        team.Player7.includes(searchString) ||
        team.Username.includes(searchString)
    );
    teamsContainer.innerHTML = '';
    showTeams(filteredTeams);
}

function showTeams(teams) {
    const teamsContainer = document.getElementById('teamsContainer');
    const teamCounter = document.getElementById('total-teams');
    teamCounter.innerText =  '' + teams.length;
    teams.forEach((team) => {
        // Create a card for each team
        const teamCard = document.createElement('div');
        teamCard.className = 'col-md-4 mb-4 position-relative';

        // Customize the card based on Bootstrap classes and styles
        teamCard.innerHTML = `
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title text-primary mb-4">${team.ClassName.includes('2B || ! 2B') ? `<i class="bi bi-trophy-fill text-warning"></i> ${team.ClassName} <i class="bi bi-trophy-fill text-warning"></i>` : `Team: ${team.ClassName}`}</h5>                
                <!-- Captain -->
                <div class="mb-3">
                    <p class="card-text"><i class="bi bi-person"></i> <span class="card-subtitle text-muted">Captain :</span> <span class="captain-name list-group-item"> ${team.Player1} </span></p>
                </div>
                
                <!-- Referee -->
                <div class="mb-3">
                    <p class="card-text"><i class="bi bi-person"></i> <span  class="card-subtitle text-muted">Referee :</span><span class="referee-name list-group-item"> ${team.Player2} </span></p>
                </div>
                
                <!-- Team Members -->
                <div class="mb-3">
                    <h6 class="card-subtitle mb-2 text-muted"><i class="bi bi-person-check"></i> Team Members:</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item"><i class="bi bi-person"></i> ${team.Player3}</li>
                        <li class="list-group-item"><i class="bi bi-person"></i> ${team.Player4}</li>
                        <li class="list-group-item"><i class="bi bi-person"></i> ${team.Player5}</li>
                        <li class="list-group-item"><i class="bi bi-person"></i> ${team.Player6}</li>
                        <li class="list-group-item"><i class="bi bi-person"></i> ${team.Player7}</li>
                    </ul>
                </div>
                
                <!-- Add more details as needed -->
            </div>
        </div>
    `;

        // Append the card to the container
        teamsContainer.appendChild(teamCard);
    });
}
