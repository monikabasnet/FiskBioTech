const members = [
  { name:'Alex Morgan', role:'President', image:'Images/member1.jpg' },
  { name:'Priya Shah', role:'VP, Projects', image:'Images/member2.jpg' },
  { name:'Diego Ramirez', role:'Events Lead', image:'Images/member3.jpg' },
  { name:'Maya Chen', role:'Bioinformatics Lead', image:'Images/member4.jpg' },
  { name:'Liam O’Connor', role:'Outreach', image:'Images/member5.jpg' },
  { name:'Fatima Noor', role:'Treasurer', image:'Images/member6.jpg' }
];

const grid = document.getElementById('membersGrid');
grid.innerHTML = members.map(m => `
  <div class="card reveal">
    <div class="media"><img src="${m.image}" alt="${m.name}"></div>
    <div class="body"><h3>${m.name}</h3><p>${m.role}</p></div>
  </div>
`).join('');
