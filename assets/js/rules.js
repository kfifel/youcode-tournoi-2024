// rules.js

// Event listener for the "rules" button
document.getElementById("rules").addEventListener('click', () => showRules());

// Function to display tournament rules
function showRules() {
    const rulesContainer = document.getElementById('container');
    rulesContainer.innerHTML = '<p>Loading rules...</p>'; // Placeholder loading message

    // Clear existing content and display tournament rules
    rulesContainer.innerHTML = '';

    rulesContainer.innerHTML = `
        <div class="rules-container">
            <h2 class="text-white text-center">YouCode Football Tournament Rules</h2> <br>
            <ol>
                <li>🕒 Les équipes doivent arriver 15 minutes avant le début du match.</li>
                <li>❗ Tout retard de plus de 10 minutes entraînera la défaite automatique pour l'équipe en retard.</li>
                <li>⏱ Les matchs se joueront en deux mi-temps de 30 minutes.</li>
                <li>⚽ Les joueurs doivent porter un équipement approprié, y compris des chaussures de football non à crampons métalliques.</li>
                <li>🔄 Les remplacements peuvent être effectués à tout moment pendant le match, mais les joueurs sortants doivent quitter le terrain avant que les remplaçants n'y entrent.</li>
                <li>🟨 Deux cartons jaunes pour un joueur lors d'un même match entraîneront une exclusion temporaire de 5 minutes.</li>
                <li>🔴 Un carton rouge direct entraînera l'exclusion automatique du joueur pour le prochain match.</li>
                <li>🚫 En cas d'inconduite grave, l'organisateur se réserve le droit de disqualifier une équipe du tournoi.</li>
                <li>📋 Chaque équipe doit avoir exactement 7 joueurs dans sa liste. Pour participer à un match, une équipe doit avoir au moins 4 joueurs présents, dont 3 sur le terrain et 1 gardien. Dans le cas contraire, l'équipe sera considérée comme forfait, ce qui signifie que l'autre équipe remporte le match avec un score de 3-0.</li>
            </ol>
            <h3 class="text-white">Informations Spécifiques:</h3>
            <ol start="10">
                <li>⚽ L'équipe DATA DEV jouera seulement les deux premiers matchs, puis elle terminera ses études et sera remplacée par l'équipe de Ghoulam, qui jouera le reste des matchs.</li>
                <li>🔄 Chaque équipe a la possibilité de modifier sa liste de joueurs avant chaque match. Cependant, les joueurs modifiés doivent être de la même classe que l'équipe et ne peuvent pas jouer avec d'autres équipes, à l'exception de l'équipe de Ghoulam, qui n'aura pas la possibilité de modifier son équipe.</li>
                <li>✔️ Les joueurs modifiés doivent accepter les changements, et toute modification doit être approuvée par l'organisateur du tournoi.</li>
                <li>⚠️ Tout comportement violent ou anti-sportif sera sévèrement sanctionné.</li>
                <li>🚫 L'utilisation de langage offensant ou discriminatoire est strictement interdite.</li>
                <li>⚖️ Les équipes doivent respecter les décisions de l'arbitre, qui est chargé de faire respecter les règles du jeu.</li>
                <li>📢 Toute réclamation ou contestation doit être soumise à l'arbitre ou à l'organisateur du tournoi dans les 15 minutes suivant la fin du match.</li>
            </ol>
            <p class="text-white">Gardez ces règles à l'esprit et profitez du tournoi! Bonne chance à toutes les équipes!</p>
        </div>
    `;
}
