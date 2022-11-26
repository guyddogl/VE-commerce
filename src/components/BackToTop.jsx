import React from 'react';

const scrollFunction = () => {
  const backToTop = document.getElementById('backToTop');
  const scroll = 20;
  if (document.body.scrollTop > scroll || document.documentElement.scrollTop > scroll) {
    backToTop.style.opacity = 1;
  } else {
    backToTop.style.opacity = 0;
  }
};

window.onscroll = () => { scrollFunction(); };

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

function BackToTop() {
  return (
    <span onClick={topFunction} id="backToTop" role="presentation">
      <i className="fa-solid fa-arrow-up fa-lg mx-1" />
    </span>
  );
}

export default BackToTop;
