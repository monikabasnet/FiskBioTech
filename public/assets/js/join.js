const form = document.getElementById('joinForm');
const feedback = document.getElementById('joinFeedback');
const btn = document.getElementById('submitBtn');

form.addEventListener('submit', async (e)=>{
  e.preventDefault();
  feedback.textContent = 'Submitting...';
  btn.disabled = true;

  const payload = Object.fromEntries(new FormData(form).entries());

  try{
    const res = await fetch('/api/join', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
    if(!res.ok) throw new Error('Request failed');
    feedback.textContent = 'Thanks! Your application was received.';
    form.reset();
  }catch(err){
    console.error(err);
    feedback.textContent = 'Something went wrong. Make sure the server is running.';
  }finally{
    btn.disabled = false;
  }
});
