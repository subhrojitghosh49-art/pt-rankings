// --- DATABASE ---
// IMPORTANT: Replace the "image" URLs below with your actual photo paths.
// Example: image: "images/subhrojit.jpg"

const database = {
    batting: [
        { 
            rank: 1, 
            name: "Subhrojit Ghosh", 
            team: "PT Legends", 
            rating: 915, 
            best: "915", 
            trend: "steady",
            // PLACEHOLDER IMAGE - REPLACE THIS
            image: "images/subhrojit.jpg" 
        },
        { rank: 2, name: "Subham Mohapatra", team: "PT Legends", rating: 889, best: "895", trend: "up" },
        { rank: 3, name: "Samir Thakur", team: "PT Legends", rating: 842, best: "860", trend: "down" },
        { rank: 4, name: "Debarpan Kayal", team: "PT Legends", rating: 810, best: "820", trend: "steady" }
    ],
    bowling: [
        { 
            rank: 1, 
            name: "Ayush Khan", 
            team: "PT Kings", 
            rating: 890, 
            best: "890", 
            trend: "up",
            // PLACEHOLDER IMAGE - REPLACE THIS
            image: "images/ayush.jpg"
        },
        { rank: 2, name: "Soumalya Jana", team: "PT Kings", rating: 865, best: "870", trend: "steady" },
        { rank: 3, name: "Subham Mohapatra", team: "PT Legends", rating: 830, best: "830", trend: "up" },
        { rank: 4, name: "Debarpan Kayal", team: "PT Legends", rating: 795, best: "800", trend: "down" }
    ],
    allrounder: [
        { 
            rank: 1, 
            name: "Subham Mohapatra", 
            team: "PT Legends", 
            rating: 450, 
            best: "450", 
            trend: "steady",
             // PLACEHOLDER IMAGE - REPLACE THIS
            image: "images/subham.jpg"
        },
        { rank: 2, name: "Debarpan Kayal", team: "PT Legends", rating: 410, best: "425", trend: "up" },
        { rank: 3, name: "Ayush Khan", team: "PT Kings", rating: 385, best: "390", trend: "down" },
        { rank: 4, name: "Soumalya Jana", team: "PT Kings", rating: 360, best: "365", trend: "steady" }
    ]
};

// --- LOGIC ---

function updateCategory(category) {
    // 1. Update Buttons
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.innerText.toLowerCase().includes(category === 'allrounder' ? 'all' : category.substring(0, 4))) {
            btn.classList.add('active');
        }
    });

    const data = database[category];
    const topPlayer = data[0];

    // 2. Update Hero Section (Top Player) - UPDATED TO INCLUDE IMAGE
    const hero = document.getElementById('hero-card');
    // Using a default placeholder if the image property is missing
    const imgSrc = topPlayer.image || "https://via.placeholder.com/150";
    
    hero.innerHTML = `
        <div class="hero-left">
            <div class="rank-badge-lg">1</div>
            <div class="hero-info">
                <h4>World No.1 ${category.toUpperCase()}</h4>
                <h1>${topPlayer.name}</h1>
                <p style="color:#94a3b8">${topPlayer.team} • Rating: <span style="color:var(--accent-gold); font-weight:800">${topPlayer.rating}</span></p>
            </div>
        </div>
        <img src="${imgSrc}" alt="${topPlayer.name}" class="hero-img">
    `;

    // 3. Update Table
    const tbody = document.getElementById('rankingBody');
    tbody.innerHTML = ''; // Clear existing rows

    data.forEach((player, index) => {
        const row = document.createElement('tr');
        row.classList.add('animate-row');
        row.style.animationDelay = `${index * 0.1}s`; // Staggered animation

        row.innerHTML = `
            <td class="center-text rank-num">${player.rank}</td>
            <td class="center-text">${getTrendIcon(player.trend)}</td>
            <td>
                <div class="player-flex">
                    <div class="avatar-circle">${player.name.charAt(0)}</div>
                    <strong>${player.name}</strong>
                </div>
            </td>
            <td style="color:#94a3b8">${player.team}</td>
            <td class="rating-val">${player.rating}</td>
            <td class="career-best">${player.best}</td>
        `;
        tbody.appendChild(row);
    });
}

function getTrendIcon(trend) {
    if (trend === 'up') return '<span style="color:var(--success)">▲</span>';
    if (trend === 'down') return '<span style="color:var(--danger)">▼</span>';
    return '<span style="color:#64748b">●</span>';
}

// Initialize with Batting stats
updateCategory('batting');