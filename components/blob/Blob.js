import React from 'react';

function Blob() {
  return (
    <div className="absolute -top-20 z-0 h-[320px] w-[320px] blur-lg md:-top-28 md:left-20 lg:-top-32 lg:left-16 lg:h-[375px] lg:w-[375px] xl:-top-40 xl:left-0 xl:h-[425px] xl:w-[425px] xl:blur-xl">
      <svg
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        id="blobSvg"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#b45309' }} />
            <stop offset="100%" style={{ stopColor: '#312e81' }} />
          </linearGradient>
        </defs>
        <path fill="url(#gradient)">
          <animate
            attributeName="d"
            dur="6000ms"
            repeatCount="indefinite"
            values="M411.5,342Q356,434,254.5,426Q153,418,105.5,334Q58,250,105,165Q152,80,252.5,76Q353,72,410,161Q467,250,411.5,342Z;

            M407.5,354Q370,458,267.5,428Q165,398,85.5,324Q6,250,87.5,180Q169,110,255.5,100Q342,90,393.5,170Q445,250,407.5,354Z;

            M409.5,326.5Q338,403,238,423Q138,443,88,346.5Q38,250,103.5,180Q169,110,257.5,97Q346,84,413.5,167Q481,250,409.5,326.5Z;

            M389.5,350.5Q366,451,246,458Q126,465,106.5,357.5Q87,250,127.5,179Q168,108,267,79Q366,50,389.5,150Q413,250,389.5,350.5Z;

            M411.5,342Q356,434,254.5,426Q153,418,105.5,334Q58,250,105,165Q152,80,252.5,76Q353,72,410,161Q467,250,411.5,342Z;
            "
          />
        </path>
      </svg>
    </div>
  );
}

export default Blob;
