// Make sure DOM is ready
document.addEventListener('DOMContentLoaded', () => {

  const projects = [
    {
      title: 'CRISPR Guide Design',
      description: 'Design and evaluate gRNAs for model organisms. Deliverable: small dataset + writeup.',
      image: 'assets/Images/achievements.png'
    },
    {
      title: 'DNA Barcoding',
      description: 'Wet-lab mini project: PCR amplification & analysis with community dataset.',
      image: 'assets/Images/achievements.png'
    },
    {
      title: 'RNA-Seq Pipeline',
      description: 'Build a simple pipeline (FASTQ → QC → alignment → counts) with a friendly report.',
      image: 'assets/Images/achievements.png'
    }
  ];

  const root = document.getElementById('projectsGrid');
  if (!root) return; // stop if the container doesn't exist

  // Render project cards
  root.innerHTML = projects.map(p => `
    <div class="card reveal">
      <div class="media"><img src="${p.image}" alt="${p.title}"></div>
      <div class="body"><h3>${p.title}</h3><p>${p.description}</p></div>
    </div>
  `).join('');

  // Attach scroll reveal to the new cards
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

});

