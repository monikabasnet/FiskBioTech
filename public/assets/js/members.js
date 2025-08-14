document.addEventListener('DOMContentLoaded', () => {
  const members = [
    { name: 'Monika Basnet', role: 'President', image: 'assets/Images/member1.jpeg' },
    { name: 'Amshu Walge', role: 'VP, Projects', image: 'assets/Images/member2.jpeg' },
    { name: 'Diego Ramirez', role: 'Events Lead', image: 'assets/Images/member3.jpg' },
    { name: 'Maya Chen', role: 'Bioinformatics Lead', image: 'assets/Images/member4.jpg' },
    { name: 'Liam O’Connor', role: 'Outreach', image: 'assets/Images/member5.jpg' },
    { name: 'Fatima Noor', role: 'Treasurer', image: 'assets/Images/member6.jpg' }
  ];

  const grid = document.getElementById('membersGrid');
  grid.innerHTML = members.map(member => `
    <div class="member-card">
      <div class="member-image">
        <img src="${member.image}" alt="${member.name}">
      </div>
      <div class="member-info">
        <h3>${member.name}</h3>
        <p>${member.role}</p>
      </div>
    </div>
  `).join('');
});

