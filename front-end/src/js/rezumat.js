import '../styles/rezumat.css';
import '../styles/tailwind.css';
import axios from 'axios';
import arrow from '../assets/back(1).png';
import robotel from '../assets/robot(1).png';

const fileBtn = document.querySelector('#fileBtn');
const textBtn = document.querySelector('#textBtn');
const textForm = document.querySelector('#form_text');
const fileForm = document.querySelector('#form_fisier');
const inputContainer = document.querySelector('#input_container');
const loading = document.querySelector('#loading');

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

// LOADING ANIMATION
const RemoveInputandAddLoading = () => {
  inputContainer.classList.remove('flex');
  inputContainer.classList.add('hidden');
  loading.classList.remove('scale-0');
  loading.classList.add('scale-1');
};

// UPDATE UI WITH OUTPUT
const OutputUpdate = (info, formix, numero) => {
  loading.classList.remove('scale-1');
  loading.classList.add('hidden');
  const resContent = info;
  const outputContainer = document.createElement('div');
  const outputContent = document.createElement('p');
  const backArrow = document.createElement('button');
  const arrowImg = document.createElement('img');
  const robotelImg = document.createElement('img');
  const outputTitle = document.createElement('h2');
  const regenBtn = document.createElement('button');
  outputTitle.textContent = 'Am terminat rezumatul!';
  outputTitle.classList.add(
    'mt-10',
    'mb-12',
    'text-center',
    'font-Play',
    'text-xl',
    'font-bold',
    'xs:text-2xl',
    'md:mt-12',
    '2xl:text-3xl'
  );
  robotelImg.src = robotel;
  robotelImg.classList.add(
    'absolute',
    '-top-14',
    'w-20',
    'md:-top-20',
    'md:w-32'
  );
  arrowImg.src = arrow;
  backArrow.appendChild(arrowImg);
  backArrow.setAttribute('type', 'button');
  regenBtn.setAttribute('type', 'button');
  regenBtn.textContent = 'Regenereaza';
  regenBtn.classList.add(
    'self-end',
    'rounded-md',
    'border',
    'border-gray-400',
    'px-5',
    'py-1',
    'font-Play',
    'uppercase',
    'mt-3',
    'text-gray-400',
    'transition-colors',
    'duration-300',
    'hover:border-white',
    'hover:bg-albastriu',
    'hover:text-white'
  );
  arrowImg.classList.add(
    'w-8',
    'h-8',
    'transition-transform',
    'duration-300',
    'hover:scale-110'
  );
  backArrow.classList.add('absolute', 'left-2', 'top-2');
  outputContent.style.whiteSpace = 'pre-line';
  outputContent.textContent = resContent;
  outputContent.classList.add(
    'font-exo',
    'text-white',
    'max-h-[60vh]',
    'overflow-y-scroll',
    'px-6',
    'py-4',
    'rounded-lg',
    'border',
    'border-purpuriu',
    'bg-albastriu',
    'bg-opacity-20'
  );
  outputContainer.classList.add(
    'relative',
    'mt-32',
    'mb-12',
    'mx-auto',
    'flex',
    'w-[85%]',
    'max-w-3xl',
    'flex-col',
    'items-center',
    'justify-center',
    'rounded-xl',
    'border-t',
    'border-b',
    'border-albastriu',
    'px-8',
    'scale-1',
    'duration-300',
    'transition-transform',
    'shadow-2xl',
    'shadow-purpuriu',
    'transition-all',
    'duration-300',
    'md:px-14',
    'py-14'
  );
  outputContainer.appendChild(outputTitle);
  outputContainer.appendChild(outputContent);
  outputContainer.appendChild(backArrow);
  outputContainer.appendChild(robotelImg);
  outputContainer.appendChild(regenBtn);
  document.querySelector('body').append(outputContainer);

  // INAPOI LA INPUT FORM
  backArrow.addEventListener('click', () => {
    inputContainer.classList.remove('hidden');
    inputContainer.classList.add('flex');
    loading.classList.add('scale-0');
    loading.classList.remove('hidden');
    outputContainer.remove();
    formix.reset();
  });

  // REGENEREAZA RASPUNS
  regenBtn.addEventListener('click', async () => {
    outputContainer.classList.remove('flex');
    outputContainer.classList.add('hidden');
    loading.classList.remove('hidden');
    loading.classList.add('scale-1');
    if (numero === 1) {
      const formData = new FormData();
      formData.append('pdfFile', formix.file.files[0]);
      try {
        const res = await axios.post('/rezumat/file', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        loading.classList.remove('scale-1');
        loading.classList.add('hidden');
        outputContainer.classList.remove('hidden');
        outputContainer.classList.add('flex');
        outputContent.textContent = res.data.completion.content;
      } catch (error) {
        console.log(error);
      }
    }
    if (numero === 2) {
      const formData = new FormData();
      formData.append('textData', formix.text.value);
      try {
        const res = await axios.post('/rezumat/text', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        loading.classList.remove('scale-1');
        loading.classList.add('hidden');
        outputContainer.classList.remove('hidden');
        outputContainer.classList.add('flex');
        outputContent.textContent = res.data.completion.content;
      } catch (error) {
        console.log(error);
      }
    }
  });
};

fileForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // SCHIMBA UI-ul, ADAUGA LOADING ANIMATION
  RemoveInputandAddLoading();
  const formData = new FormData();
  formData.append('pdfFile', e.target.file.files[0]);
  try {
    const res = await axios.post('/rezumat/file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    OutputUpdate(res.data.completion.content, fileForm, 1);
  } catch (error) {
    console.log(error);
  }
});

textForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  // SCHIMBA UI-ul, ADAUGA LOADING ANIMATION
  RemoveInputandAddLoading();
  const formData = new FormData();
  formData.append('textData', e.target.text.value);
  try {
    const res = await axios.post('/rezumat/text', formData);
    OutputUpdate(res.data.completion.content, textForm, 2);
  } catch (error) {
    console.log(error);
  }
});

window.onload = () => {
  textForm.reset();
  fileForm.reset();
};
