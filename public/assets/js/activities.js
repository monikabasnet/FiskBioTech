const grids = {
  ongoing: document.getElementById('ongoingGrid'),
  upcoming: document.getElementById('upcomingGrid'),
  past: document.getElementById('pastGrid')
};

const card = (a) => `
  <div class="card reveal">
    <div class="media"><img src="${a.imageUrl || 'Images/event1.jpg'}" alt="${a.title}"></div>
    <div class="body">
      <h3>${a.title}</h3>
      <p>${a.description || ''}</p>
      <div class="badges">
        <span class="badge">${new Date(a.startDate).toLocaleDateString()}</span>
        ${a.endDate ? `<span class="badge">→ ${new Date(a.endDate).toLocaleDateString()}</span>` : ''}
      </div>
    </div>
  </div>
`;

async function loadActivities(){
  try{
    const res = await fetch('/api/activities');
    const data = await res.json();

    ['ongoing','upcoming','past'].forEach(k=>{
      if (data[k]?.length){
        grids[k].innerHTML = data[k].map(card).join('');
        // apply reveal to newly added
        document.querySelectorAll('#'+k+' .reveal').forEach(el=>{
          el.classList.add('visible');
          el.classList.remove('visible'); // reset so observer can animate
        });
      } else {
        grids[k].innerHTML = `<p class="lead">No ${k} activities right now.</p>`;
      }
    });
  }catch(e){
    console.error(e);
    Object.values(grids).forEach(g=>g.innerHTML = `<p class="lead">Couldn’t load activities. Is the server running?</p>`);
  }
}
loadActivities();
