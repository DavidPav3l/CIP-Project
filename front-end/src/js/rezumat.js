import '../styles/rezumat.css';
import '../styles/tailwind.css';
import axios from 'axios';

const fileBtn = document.querySelector('#fileBtn');
const textBtn = document.querySelector('#textBtn');
const textForm = document.querySelector('#form_text');
const fileForm = document.querySelector('#form_fisier');

fileBtn.addEventListener('click', () => {
  fileBtn.classList.add('activ');
  textBtn.classList.remove('activ');
  fileForm.classList.add('flex');
  fileForm.classList.remove('hidden');
  textForm.classList.add('hidden');
  textForm.classList.remove('flex');
});

textBtn.addEventListener('click', () => {
  textBtn.classList.add('activ');
  fileBtn.classList.remove('activ');
  textForm.classList.add('flex');
  textForm.classList.remove('hidden');
  fileForm.classList.add('hidden');
  fileForm.classList.remove('flex');
});

fileForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData();
  formData.append('pdfFile', e.target.file.files[0]);
  try {
    const res = await axios.post('/rezumat/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
});

textForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  console.log(e.target.text.value);
  const formData = new FormData();
  formData.append('textData', e.target.text.value);
  try {
    const res = await axios.post('/rezumat/text', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(res);
  } catch (error) {
    console.log(error);
  }
});

window.onload = () => {
  textForm.reset();
  fileForm.reset();
};
