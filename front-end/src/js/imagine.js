import '../styles/imagine.css';
import '../styles/tailwind.css';
import axios from 'axios';

const formFisier = document.querySelector('#form_fisier');
const imgGen1 = document.querySelector('#img_gen_1');
const imgGen2 = document.querySelector('#img_gen_2');
const imgGen3 = document.querySelector('#img_gen_3');
const imgUser = document.querySelector('#img_user');
const outputSec = document.querySelector('#output_section');
const loadingUser = document.querySelector('.loading_user');
const loadings = document.querySelectorAll('.loading');
const downloadLinks = document.querySelectorAll('.download_img');
const descriere = document.querySelector('#descriere');

const ImgGenLoadingUI = (file) => {
  imgUser.classList.add('hidden');
  imgGen1.classList.add('hidden');
  imgGen2.classList.add('hidden');
  imgGen3.classList.add('hidden');
  descriere.classList.add('hidden');
  if (loadingUser.classList.contains('hidden')) {
    loadingUser.classList.remove('hidden');
    loadings.forEach((loading) => {
      loading.classList.remove('hidden');
    });
  }
  if (outputSec.classList.contains('hidden'));
  {
    outputSec.classList.remove('hidden');
    outputSec.classList.add('grid');
  }
  document.querySelector('#scroll').scrollIntoView();

  downloadLinks.forEach((link) => {
    link.classList.add('hidden');
  });

  const readery = new FileReader();
  readery.onload = () => {
    imgUser.src = readery.result;
    imgUser.classList.remove('hidden');
    loadingUser.classList.add('hidden');
  };
  readery.readAsDataURL(file);
};

const ImgGenPhotoRender = async (resImg, resDescp) => {
  let promise1 = new Promise(function (resolve, reject) {
    try {
      const imgload1 = new Image();
      imgload1.onload = function () {
        imgGen1.src = this.src;
        resolve();
      };
      imgload1.src = `${resImg.value.data.data[0].url}`;
    } catch (error) {
      reject(error);
    }
  });
  let promise2 = new Promise(function (resolve, reject) {
    try {
      const imgload2 = new Image();
      imgload2.onload = function () {
        imgGen2.src = this.src;
        resolve();
      };
      imgload2.src = `${resImg.value.data.data[1].url}`;
    } catch (error) {
      reject(error);
    }
  });
  let promise3 = new Promise(function (resolve, reject) {
    try {
      const imgload3 = new Image();
      imgload3.onload = function () {
        imgGen3.src = this.src;
        resolve();
      };
      imgload3.src = `${resImg.value.data.data[2].url}`;
    } catch (error) {
      reject(error);
    }
  });
  await Promise.all([promise1, promise2, promise3]);
  imgGen1.classList.remove('hidden');
  imgGen2.classList.remove('hidden');
  imgGen3.classList.remove('hidden');
  descriere.classList.remove('hidden');
  descriere.textContent = `"${resDescp.value.data.content}"`;
  loadings.forEach((loading) => {
    loading.classList.add('hidden');
  });
};

const ImgGenErrorHandel = (info) => {
  outputSec.classList.add('hidden');
  outputSec.classList.remove('grid');
  const errContainer = document.createElement('div');
  errContainer.classList.add(
    'absolute',
    'right-5',
    'left-5',
    'mx-auto',
    'max-w-max',
    'bottom-5',
    'bg-red-600',
    'bg-opacity-70',
    'text-center',
    'px-3',
    'py-6',
    'font-Play',
    'transition-all',
    'duration-1000',
    'rounded-lg',
    'pointer-events-none'
  );
  errContainer.textContent = info;
  document.querySelector('body').appendChild(errContainer);
  setTimeout(() => {
    errContainer.classList.add('opacity-0');
  }, 2500);
};

formFisier.addEventListener('submit', async (e) => {
  e.preventDefault();
  const file = e.target.file.files[0];
  if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
    ImgGenErrorHandel('Acest tip de fisier nu este suportat.');
    return;
  }
  // UI UPDATE WITH THE LOADING ANIMATIONS
  ImgGenLoadingUI(file);

  const reader = new FileReader();
  reader.onload = async () => {
    const base64Data = reader.result.split(',')[1];
    const formData = new FormData();
    formData.append('img', base64Data);
    try {
      const resImg = axios
        .post('/imagine', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .catch((error) => {
          const errorStatus = JSON.parse(
            error.response.request.response
          ).status;
          if (errorStatus === 429) {
            ImgGenErrorHandel(
              'A fost depasita limita de cereri, va rugam sa incercati intr-un minut.'
            );
            return;
          }
          ImgGenErrorHandel('A aparut o eroare neasteptata.');
        });
      const resDescp = axios.post('/imagine/descp', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      const res = await Promise.allSettled([resImg, resDescp]);
      await ImgGenPhotoRender(res[0], res[1]);
    } catch (error) {
      console.log(error);
    }
  };
  reader.readAsDataURL(file);
  formFisier.reset();
});

window.onload = () => {
  formFisier.reset();
};
