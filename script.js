// Team data with logos (placeholder paths)
const teams = [
    { id: 1, name: "Royal Challengers Bengaluru", shortName: "RCB", logo: "rcb.png" },
    { id: 2, name: "Punjab Kings", shortName: "PBKS", logo: "pbks.png" },
    { id: 3, name: "Mumbai Indians", shortName: "MI", logo: "mi.png" },
    { id: 4, name: "Gujarat Titans", shortName: "GT", logo: "gt.png" },
    { id: 5, name: "Delhi Capitals", shortName: "DC", logo: "dc.png" },
    { id: 6, name: "Lucknow Super Giants", shortName: "LSG", logo: "lsg.png" },
    { id: 7, name: "Kolkata Knight Riders", shortName: "KKR", logo: "kkr.png" },
    { id: 8, name: "Rajasthan Royals", shortName: "RR", logo: "rr.png" },
    { id: 9, name: "Sunrisers Hyderabad", shortName: "SRH", logo: "srh.png" },
    { id: 10, name: "Chennai Super Kings", shortName: "CSK", logo: "csk.png", eliminated: true }
];


// Current points table data
let currentPointsTable = [
    { teamId: 1, matches: 10, won: 7, lost: 3, tied: 0, nr: 0, points: 14, nrr: +0.521 },
    { teamId: 2, matches: 10, won: 6, lost: 3, tied: 0, nr: 1, points: 13, nrr: +0.199 },
    { teamId: 3, matches: 10, won: 6, lost: 4, tied: 0, nr: 0, points: 12, nrr: +0.889 },
    { teamId: 4, matches: 9, won: 6, lost: 3, tied: 0, nr: 0, points: 12, nrr: +0.748 },
    { teamId: 5, matches: 10, won: 6, lost: 4, tied: 0, nr: 0, points: 12, nrr: +0.362 },
    { teamId: 6, matches: 10, won: 5, lost: 5, tied: 0, nr: 0, points: 10, nrr: -0.325 },
    { teamId: 7, matches: 10, won: 4, lost: 5, tied: 0, nr: 1, points: 9, nrr: +0.271 },
    { teamId: 8, matches: 10, won: 3, lost: 7, tied: 0, nr: 0, points: 6, nrr: -0.349 },
    { teamId: 9, matches: 9, won: 3, lost: 6, tied: 0, nr: 0, points: 6, nrr: -1.103 },
    { teamId: 10, matches: 10, won: 2, lost: 8, tied: 0, nr: 0, points: 4, nrr: -1.211 }
];

// Remaining matches data
const remainingMatches = [
    { id: 50, team1: 8, team2: 3, date: "May 01, Thu", time: "7:30 PM", venue: "Sawai Mansingh Stadium, Jaipur", winner: null },
    { id: 51, team1: 4, team2: 9, date: "May 02, Fri", time: "7:30 PM", venue: "Narendra Modi Stadium, Ahmedabad", winner: null },
    { id: 52, team1: 1, team2: 10, date: "May 03, Sat", time: "7:30 PM", venue: "M.Chinnaswamy Stadium, Bengaluru", winner: null },
    { id: 53, team1: 7, team2: 8, date: "May 04, Sun", time: "3:30 PM", venue: "Eden Gardens, Kolkata", winner: null },
    { id: 54, team1: 2, team2: 6, date: "May 04, Sun", time: "7:30 PM", venue: "Himachal Pradesh Cricket Association Stadium, Dharamsala", winner: null },
    { id: 55, team1: 9, team2: 5, date: "May 05, Mon", time: "7:30 PM", venue: "Rajiv Gandhi International Stadium, Hyderabad", winner: null },
    { id: 56, team1: 3, team2: 4, date: "May 06, Tue", time: "7:30 PM", venue: "Wankhede Stadium, Mumbai", winner: null },
    { id: 57, team1: 7, team2: 10, date: "May 07, Wed", time: "7:30 PM", venue: "Eden Gardens, Kolkata", winner: null },
    { id: 58, team1: 2, team2: 5, date: "May 08, Thu", time: "7:30 PM", venue: "Himachal Pradesh Cricket Association Stadium, Dharamsala", winner: null },
    { id: 59, team1: 6, team2: 1, date: "May 09, Fri", time: "7:30 PM", venue: "Ekana Cricket Stadium, Lucknow", winner: null },
    { id: 60, team1: 9, team2: 7, date: "May 10, Sat", time: "7:30 PM", venue: "Rajiv Gandhi International Stadium, Hyderabad", winner: null },
    { id: 61, team1: 2, team2: 3, date: "May 11, Sun", time: "3:30 PM", venue: "Himachal Pradesh Cricket Association Stadium, Dharamsala", winner: null },
    { id: 62, team1: 5, team2: 4, date: "May 11, Sun", time: "7:30 PM", venue: "Arun Jaitley Stadium, Delhi", winner: null },
    { id: 63, team1: 10, team2: 8, date: "May 12, Mon", time: "7:30 PM", venue: "MA Chidambaram Stadium, Chennai", winner: null },
    { id: 64, team1: 1, team2: 9, date: "May 13, Tue", time: "7:30 PM", venue: "M.Chinnaswamy Stadium, Bengaluru", winner: null },
    { id: 65, team1: 4, team2: 6, date: "May 14, Wed", time: "7:30 PM", venue: "Narendra Modi Stadium, Ahmedabad", winner: null },
    { id: 66, team1: 3, team2: 5, date: "May 15, Thu", time: "7:30 PM", venue: "Wankhede Stadium, Mumbai", winner: null },
    { id: 67, team1: 8, team2: 2, date: "May 16, Fri", time: "7:30 PM", venue: "Sawai Mansingh Stadium, Jaipur", winner: null },
    { id: 68, team1: 1, team2: 7, date: "May 17, Sat", time: "7:30 PM", venue: "M.Chinnaswamy Stadium, Bengaluru", winner: null },
    { id: 69, team1: 4, team2: 10, date: "May 18, Sun", time: "3:30 PM", venue: "Narendra Modi Stadium, Ahmedabad", winner: null },
    { id: 70, team1: 6, team2: 9, date: "May 18, Sun", time: "7:30 PM", venue: "Ekana Cricket Stadium, Lucknow", winner: null }
];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    renderPointsTable();
    renderRemainingMatches();
});

// Render current and predicted points tables
function renderPointsTable() {
    const currentTableBody = document.querySelector('#pointsTable tbody');
    const predictedTableBody = document.querySelector('#predictedTable tbody');
    
    currentTableBody.innerHTML = '';
    predictedTableBody.innerHTML = '';
    
    // Create a deep copy of the current points table for predictions
    let predictedPointsTable = JSON.parse(JSON.stringify(currentPointsTable));
    
    // Update predicted table based on user selections
    remainingMatches.forEach(match => {
        if (match.winner) {
            const winnerTeam = predictedPointsTable.find(team => team.teamId === match.winner);
            const loserTeam = predictedPointsTable.find(team => 
                team.teamId === (match.team1 === match.winner ? match.team2 : match.team1));
            
            if (winnerTeam && loserTeam) {
                winnerTeam.matches += 1;
                winnerTeam.won += 1;
                winnerTeam.points += 2;
                
                loserTeam.matches += 1;
                loserTeam.lost += 1;
            }
        }
    });
    
    // Sort tables by points and NRR
    const sortedCurrentTable = [...currentPointsTable].sort(sortTeams);
    const sortedPredictedTable = [...predictedPointsTable].sort(sortTeams);
    
    // Render current table
    sortedCurrentTable.forEach(teamData => {
        const team = teams.find(t => t.id === teamData.teamId);
        const row = document.createElement('tr');
        if (team.eliminated) row.classList.add('eliminated');
        
        row.innerHTML = `
            <td>
                <div class="team-name">
                    <img src="logos/${team.logo}" alt="${team.shortName}" class="team-logo">
                    ${team.shortName}
                </div>
            </td>
            <td>${teamData.matches}</td>
            <td>${teamData.won}</td>
            <td>${teamData.lost}</td>
            <td>${teamData.nr}</td>
            <td>${teamData.points}</td>
            <td>${teamData.nrr > 0 ? '+' : ''}${teamData.nrr.toFixed(3)}</td>
        `;
        currentTableBody.appendChild(row);
    });
    
    // Render predicted table
    sortedPredictedTable.forEach(teamData => {
        const team = teams.find(t => t.id === teamData.teamId);
        const row = document.createElement('tr');
        if (team.eliminated) row.classList.add('eliminated');
        
        row.innerHTML = `
            <td>
                <div class="team-name">
                    <img src="logos/${team.logo}" alt="${team.shortName}" class="team-logo">
                    ${team.shortName}
                </div>
            </td>
            <td>${teamData.matches}</td>
            <td>${teamData.won}</td>
            <td>${teamData.lost}</td>
            <td>${teamData.nr}</td>
            <td>${teamData.points}</td>
            <td>${teamData.nrr > 0 ? '+' : ''}${teamData.nrr.toFixed(3)}</td>
        `;
        predictedTableBody.appendChild(row);
    });
}

// Sort teams by points (descending) and NRR (descending)
function sortTeams(a, b) {
    if (b.points !== a.points) {
        return b.points - a.points;
    }
    return b.nrr - a.nrr;
}

// Render remaining matches
function renderRemainingMatches() {
    const container = document.getElementById('remainingMatches');
    container.innerHTML = '';
    
    remainingMatches.forEach(match => {
        const team1 = teams.find(t => t.id === match.team1);
        const team2 = teams.find(t => t.id === match.team2);
        
        const matchCard = document.createElement('div');
        matchCard.className = 'match-card';
        
        matchCard.innerHTML = `
            <div class="match-number">Match ${match.id}</div>
            <div class="match-date">${match.date}</div>
            <div class="match-venue">${match.venue}</div>
            <div class="match-time">${match.time}</div>
            
            <div class="team-selector">
                <div class="team-option ${match.winner === team1.id ? 'selected' : ''}" 
                     onclick="selectWinner(${match.id}, ${team1.id})">
                    <img src="logos/${team1.logo}" alt="${team1.shortName}" class="team-logo">
                    ${team1.shortName}
                </div>
                
                <div class="vs-text">vs</div>
                
                <div class="team-option ${match.winner === team2.id ? 'selected' : ''}" 
                     onclick="selectWinner(${match.id}, ${team2.id})">
                    <img src="logos/${team2.logo}" alt="${team2.shortName}" class="team-logo">
                    ${team2.shortName}
                </div>
            </div>
        `;
        
        container.appendChild(matchCard);
    });
}

// Handle winner selection
function selectWinner(matchId, teamId) {
    const match = remainingMatches.find(m => m.id === matchId);
    if (match) {
        // Toggle selection - if same team clicked again, deselect
        match.winner = match.winner === teamId ? null : teamId;
        renderRemainingMatches();
        renderPointsTable();
    }
}

