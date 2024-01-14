let container = document.getElementById('container');
home();
function home() {
    container.innerText = "";
    container.innerHTML = `
     <h1>Teams in the Tournament</h1>

        <label for="teamSearch" class="d-flex justify-content-center align-item-center">
            <input id="teamSearch" onkeyup="filter(event)" type="text" placeholder="Search...">
        </label>
        <h5>Total teams: (<span id="total-teams" style="color: #0bda3b">0</span>)</h5>
        <div class="row row-cols-1 row-cols-md-2 g-4" id="teamsContainer">
            <!-- Teams will be dynamically added here using JavaScript -->
        </div>
    `;

    showTeams(teams);
}

document.getElementById("home").addEventListener('click', () => home())

document.getElementById("groups").addEventListener('click', () => groups())
document.getElementById("matches").addEventListener('click', () => matches())


function groups() {
    container.innerText = "";
    container.innerHTML= "<h1 class='mb-3'>Teams in the Tournament</h1>"
    const group1 = [findTeam("Van Der Linde"),
        findTeam("Pixel Warriors"),
        findTeam("2b || ! 2b"),
        findTeam("Coders Strike")];
    const group2 = [
        findTeam("Développeur Data"),
        findTeam("Namek"),
        findTeam("Genei Ryodan"),
        findTeam("La Casa del Js")];

    // Show groups
    showGroups(group1, 'Group A');
    showGroups(group2, 'Group B');
}

function showGroups(group, groupName) {
    const groupCard = document.createElement('div');
    groupCard.className = 'col-md-6 mb-4';
    groupCard.innerHTML = `
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title text-primary mb-4"><i class="bi bi-trophy"></i> ${groupName}</h5>
                <ul class="list-group list-group-flush">
                    ${group.map((team, index) => `
                        <li class="list-group-item">
                            <span class="badge bg-primary">${index + 1}</span>
                            ${team.ClassName}
                        </li>
                    `).join('')}
                </ul>
                
            </div>
        </div>
    `;

    // Append the group card to the container
    container.appendChild(groupCard);
}

function findTeam(teamName) {
    return teams.find(team => team.ClassName.toUpperCase() === teamName.toUpperCase());
}