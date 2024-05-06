const searchInput = document.getElementById('job-exchange-search');
const searchResults = document.getElementById('job-exchange-search-result');

const data=[
'    Hiring For Sales Executive',
'Customer Support Specialist',
'Caregiver',
'Trainer',
'Process Associate',
'Customer Service Representative',
'Gda/ Caregivers/ Patient Home Care',
'Data Entry Operator',
'Machine Operator (Iti Welder)',
'Bpo Telecaller',
'Trainee',
'Customer Support Associate',
'Manufacturing Smo',
'Territory Sales RepresentativeE',
'vv Battery (Bajaj Chetak Electric Auto)',
'Operator-Brazing(Min 6 Months Exp In Brazing)',
'Recruiter Cum Telecaller',
'Relationship Manager- Fresher Female Considered- Mohali',
'Field Sales Executive',
'Manufacturing Of Two Wheeler Spare Parts',
'Warehouse Executive',
'Tool & Die Maker',
'Sewing Machine Operator Knits',
'Warehouse Picker',
'Operation Co-Ordinator',
'Machine Operator',
'Sales Officer - Fmcg | Bfsi | Home Loan Officer',
'Iti Fitter, Iti Electrical',
'Process Associate/ Executive',
'Telecaller',
'Machine Operator Cnc , Vmc',
'Relationship Manager',
'Telecalling Services',
'Loan Officer',
'Student Counselor Trainee',
'Mall Staff',
'Sorter And Packer',
'Trainee Trainer',
'Master Copier',
'Cafe Manager',
'Delivery Executive , (Van Delivery Boy )',
'Assembler',
'In Design Operator',
'Team Members',
'Sample Tailor',
'Line Operator',
'Care Giver',
'Sewing Machine Operator',
'Entertainment Service Provider',
'B2B Field Sales Account Manager With Airtel_Tamilnadu / Kerala',
'Production Operator | Assembly Line Operator',
'Unarmed Security Guard',
'Sales Executive',
'Operation Maintenance Engineer',
'Sr Sales Officer-Loan',
'Picker Packer',
'Technicians/Mechanics',
'Customer Care Executive',
'Machine Operator At Oragadam',
'Field Maintenance Engineer',
'Care Taker',
'Housemaid',
'Technical Imr ( On Site Promoter)(Civil Engineering Only )',
'Computer Operator',
'Technician',
'Iti Wireman',
'Warehouse Executive(Packer & Loader)',
'Security Guard',
'Assistant Supervisor - ( Only Migrant Candidates Will Be Considered)',
'Warehouse Picker Packer',
'Banking / Insurance Operations',
'Sales Marketing',
'Machine Operator At Irrungattukottai',
'Delivery Associate',
'Relationship Officer',
'Service Advisors',
'Executive Trainee',
'Virtual Relationship Manager',
'Back Office Executive',
'Sales Officer',
'Associate',
'Sales Manager',
'B.Voc Trainee'
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
