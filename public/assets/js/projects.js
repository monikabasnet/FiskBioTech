const projects = [
  {
    title: 'CRISPR Guide Design',
    description: 'Design and evaluate gRNAs for model organisms. Deliverable: small dataset + writeup.',
    image: 'Images/project1.jpg'
  },
  {
    title: 'DNA Barcoding',
    description: 'Wet-lab mini project: PCR amplification & analysis with community dataset.',
    image: 'Images/project2.jpg'
  },
  {
    title: 'RNA-Seq Pipeline',
    description: 'Build a simple pipeline (FASTQ → QC → alignment → counts) with a friendly report.',
    image: 'Images/project3.jpg'
  }
];

const root = document.getElementById('projectsGrid');
root.innerHTML = projects.map(p => `
  <div class="card reveal">
    <div class="media"><img src="${p.image}" alt="${p.title}"></div>
    <div class="body"><h3>${p.title}</h3><p>${p.description}</p></div>
  </div>
`).join('');
