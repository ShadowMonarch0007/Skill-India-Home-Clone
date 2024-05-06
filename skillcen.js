const searchInput = document.getElementById('skill-centre-search');
const searchResults = document.getElementById('skill-centre-search-result');


const data=[
'Client Location Digital Self Learning Product',
'Global Agriculture Innovation & Research institute',
'ABBEY WEST SERVICES BARIPADA',
'ABBEY WEST SERVICES BARIPADA',
'ABC For Java and Testing',
'Online Training Center',
'ACES Skill Center',
'Acme India Microsys Pvt Ltd',
'LawSikho - Online Training',
'Adept Edusys Raisen',
'Edvantage Future Edutech',
'ACCP COMPUTER & SKILL DEVELOPMENT',
'PURVANCHAL COLLEGE OF IT & MANAGEMENT',
'Yuva Junction Pilkhi',
'Yuva Junction Maliya',
'Yuva Junction Tajpur',
'Yuva Junction Dediapada',
'Yuva Junction Ahawa',
'Yuva Junction Mangrol',
'Yuva Junction Selmaba',
'Yuva Junction Talala',
'Yuva Junction Sakra',
'Yuva Juncation Umarpada',
'Yuva Junction Sakra',
'Yuva Junction Bhatiya',
'Yuva Junction Pusa',
'Yuva Junction Bandra',
'Yuva Junction Sakra',
'YUVA JUNCATION NETRANG',
'Yuva Junction Waghai',
'Yuva Junction Madhavpur',
'Yuva Junction Sakra',
'Yuva Juncation Dediapada',
'Yuva Junction Selmaba',
'Yuva Junction Pilkhi',
'Yuva Junction Tajpur',
'Yuva Junction Madhavpur',
'Yuva Junction Pusa',
'Yuva Juncation Ahawa',
'Yuva Junction Pusa',
'Yuva Junction Tajpur',
'Yuva Junction Bhatiya',
'Yuva Junction Maliya',
'Yuva Junction Wadhai',
'Yuva Junction Madhavpur',
'Yuva Junction Sakra',
'YUVA JUNCATION NETRANG',
'Yuva Juncation Netrang',
'Yuva Junction Maliya',
'Yuva Junction Ahawa',
'Yuva Junction Selmaba',
'Yuva Junction Pilkhi',
'Yuva Junction Dediapada',
'Yuva Junction Waghai',
'Yuva Junction Madhavpur',
'Yuva Junction Mangrol',
'Yuva Junction Talala',
'Yuva Junction Bandra',
'Yuva Junction Bhatiya',
'Yuva Junction Tajpur',
'Yuva Junction Pusa',
'Yuva Junction Sakra',
'Yuva Junction Pusa',
'Yuva Junction Sakra',
'Yuva Junction Sakra',
'Yuva Junction Pilkhi',
'Yuva Junction Tajpur',
'Yuva Junction Sakra',
];

searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    const filteredData = data.filter(item => item.toLowerCase().includes(searchText));
    
    displayResults(filteredData);
});

function displayResults(results) {
    searchResults.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        searchResults.appendChild(li);
    });
}

searchResults.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        searchInput.value = e.target.textContent;
        searchResults.innerHTML = '';
    }
});

document.body.addEventListener('click',()=>{
    searchResults.innerHTML='';
})