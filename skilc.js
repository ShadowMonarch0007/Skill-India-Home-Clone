const searchInput1 = document.getElementById('skill-courses-search');
const searchResults1 = document.getElementById('skill-courses-search-result');

const data1=[
'   prepare',
'maintain',
'establishing',
'about',
'program',
'preparation',
'measures',
'organisational',
'pears',
'safety',
'understanding',
'pre-machining',
'Integrated',
'Operations',
'plan',
'tasks',
'addition',
'layup',
'remedial',
'surface',
'dealing',
'cultivator',
'Harvesting',
'diseases',
'landscaping',
'an',
'ratooning',
'quality',
'planning',
'as',
'flakes',
'at',
'orchard',
'farms',
'deals',
'Wheat',
'post-harvest',
'inter-cultura',
'paddy',
'care',
'appropriate',
'transporting',
'treatment',
'Irrigation',
'gardening',
'grafting',
'peaches',
'instant',
'vineyard',
'plants',
'taken',
'pre-programming',
'casting',
'wheat',
'after',
'operating',
'ratoon',
'hand',
'soybean',
'a',
'laying',
'change',
'maize',
'cultivation',
'plantations',
'marketing',
'machine',
'aerospace',
'operation',
'flavoured',
'added',
'intercultural',
'specialised',
'Harvest',
'sugarcane',
'that',
'undertake',
'mustard',
'irrigation',
'awareness',
'create',
'generate',
'programming',
'all',
'banana',
'raising',
'manually',
'individual',
'Cultivation',
'bagging',
'mesta',
'grape',
'cereals',
'maintaining',
'Banana',
'temperate',
'preparing',
'varieties',
'cereal',
'machining',
'materials',
'Cultivator',
'parts',
'managing',
'carry',
'apples',
'carrying',
'grapes',
'regulatory',
'training',
'makhanamakhana',
'integrated',
'establishments',
'operations',
'harvesting',
'along',
'plantation',
'and',
'land',
'Paddy',
'value',
'enhance',
'assisting',
'carried',
'coordinating',
'post-harvesting',
'harvest',
'makhana',
'transplanting',
'disease',
'also',
'Management',
'soyabean',
'mango',
'special',
'caring',
'material',
'management',
'activities',
'various',
'healthy',
'learner',
'planting',
'farmer',
'location',
'machines',
'maintenance',
'treating',
'landscape',
'taking'
];


searchInput1.addEventListener('input', () => {
    const searchText = searchInput1.value.toLowerCase();
    const filteredData = data1.filter(item => item.toLowerCase().includes(searchText));
    
    displayResults(filteredData);
});

function displayResults(results) {
    searchResults1.innerHTML = '';
    results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        searchResults1.appendChild(li);
    });
}

searchResults1.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        searchInput1.value = e.target.textContent;
        searchResults1.innerHTML = '';
    }
});

document.body.addEventListener('click',()=>{
    searchResults1.innerHTML='';
})



