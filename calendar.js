document.addEventListener('DOMContentLoaded', function() {
    // Generate calendar for next 30 days
    const calendarGrid = document.getElementById('calendarGrid');
    const today = new Date();
    
    // Protest types and colors
    const protestTypes = [
        { type: 'political', color: 'var(--primary-color)' },
        { type: 'social', color: 'var(--secondary-color)' },
        { type: 'student', color: 'var(--accent-color)' },
        { type: 'other', color: '#6c757d' }
    ];
    
    // Generate random protest data
    for (let i = 0; i < 30; i++) {
        const date = new Date();
        date.setDate(today.getDate() + i);
        
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'short' });
        const dayOfMonth = date.getDate();
        const month = date.toLocaleDateString('en-US', { month: 'short' });
        const year = date.getFullYear();
        
        const formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`;
        
        // Random number of protests for this day (1-3)
        const numProtests = Math.floor(Math.random() * 3) + 1;
        const protests = [];
        
        for (let j = 0; j < numProtests; j++) {
            const protestType = protestTypes[Math.floor(Math.random() * protestTypes.length)];
            const protestTitle = getRandomProtestTitle(protestType.type);
            const organizingBody = getRandomOrganization(protestType.type);
            
            protests.push({
                title: protestTitle,
                org: organizingBody,
                type: protestType.type
            });
        }
        
        // Create calendar day element
        const calendarDay = document.createElement('div');
        calendarDay.className = `calendar-day ${protests[0].type}`;
        
        let eventsHTML = '';
        protests.forEach(protest => {
            eventsHTML += `
                <div class="event-item">
                    <div class="event-title">${protest.title}</div>
                    <div class="event-org">${protest.org}</div>
                </div>
            `;
        });
        
        calendarDay.innerHTML = `
            <div class="day-date">${formattedDate}</div>
            <div class="day-status"><i class="fas fa-calendar-check"></i> Fully Booked</div>
            <div class="day-events">${eventsHTML}</div>
        `;
        
        calendarGrid.appendChild(calendarDay);
    }
    
    // Navigation active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Helper functions for random data generation
    function getRandomProtestTitle(type) {
        const politicalTitles = [
            "Bimpi ke khomotay chai",
            "Zarek Tia chara goti nai",
            "Aamlig ke ban maro",
            "Huda hudi blockade",
            "Mon chaise blockade dimu"
        ];
        
        const socialTitles = [
            "Rasta ghate maiader cigerate khaite dao",
            "Desh keno roshatole",
            "Protidin Shari Panjabi Day chai",
            "Mahfuzer Mathay bottle er bari",
            "Porashona bad dao"
        ];
        
        const studentTitles = [
            "Buira boyose sorkari chakri chai",
            "Adu bhai hoye BCS dite chai",
            "prosnofash chara exam dimu na",
            "HSC cancel please",
            "Yusuf sorkar naki HSC?"
        ];
        
        const otherTitles = [
            "Haw Kaw Kormosuchi",
            "Kaoa kaderer sorone shok shobha",
            "March to mohakash",
            "Aamlig er bichar chai",
            "Yusuf sorkar 5 bochor chai"
        ];
        
        switch(type) {
            case 'political':
                return politicalTitles[Math.floor(Math.random() * politicalTitles.length)];
            case 'social':
                return socialTitles[Math.floor(Math.random() * socialTitles.length)];
            case 'student':
                return studentTitles[Math.floor(Math.random() * studentTitles.length)];
            default:
                return otherTitles[Math.floor(Math.random() * otherTitles.length)];
        }
    }
    
    function getRandomOrganization(type) {
        const politicalOrgs = [
            "Bimpi",
            "Aamlig",
            "ENCHIPI",
            "Hasnater Dol",
            "Sarjiser Chela"
        ];
        
        const socialOrgs = [
            "Bedibadi songho",
            "Bangladesh Mohila Neta Kormi",
            "Coca Cola Public",
            "Gosol na kora manushjon",
            "Gaye ghondho niye ghora public"
        ];
        
        const studentOrgs = [
            "Buira beda bedi",
            "Adubhais",
            "Aul faul",
            "Chagoler Tin Number Baccha",
            "Amra ke janina"
        ];
        
        const otherOrgs = [
            "Ghum Party",
            "Jhaka naka kormi",
            "Sukh prio manusjon",
            "Nameless",
            "Ajaira People"
        ];
        
        switch(type) {
            case 'political':
                return politicalOrgs[Math.floor(Math.random() * politicalOrgs.length)];
            case 'social':
                return socialOrgs[Math.floor(Math.random() * socialOrgs.length)];
            case 'student':
                return studentOrgs[Math.floor(Math.random() * studentOrgs.length)];
            default:
                return otherOrgs[Math.floor(Math.random() * otherOrgs.length)];
        }
    }
});