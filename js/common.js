$(document).ready(function() {

	$('.burger, .menu-close').click(function() {
        $('.menu').slideToggle();
    });

    $('.nav-drop').click(function(e) {
        e.preventDefault();
        
        var $this = $(this);
        var $submenu = $this.siblings('ul');

        $('.nav-drop').not($this).removeClass('active');
        $('.nav ul ul').not($submenu).hide();
        
        $this.toggleClass('active');
        $submenu.toggle();
    });  

    $('.accardion__top').on('click', function (e) {
        var $this = $(this);
        $this.parent('.accardion__item').toggleClass('active');
        $this.next('.accardion__full').slideToggle();
        $this.parent('.accardion__item').siblings('.accardion__item').removeClass('active').find('.accardion__full').slideUp();       
        e.stopPropagation();
    });

    $('.mask').mask('+7 (999) 999-99-99');

});

var swiper = new Swiper(".swiper-intro", {
	loop: true,
  	navigation: {
    	nextEl: ".intro-arrow .swiper-button-next",
    	prevEl: ".intro-arrow .swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper-about", {
	slidesPerView: 2,
	spaceBetween: 15,
	loop: true,
  	navigation: {
    	nextEl: ".arrow-about .swiper-button-next",
    	prevEl: ".arrow-about .swiper-button-prev",
  	},
  	breakpoints: {
	    768: {
	      slidesPerView: 2,
	      spaceBetween: 15,
	    },
	    1200: {
	      slidesPerView: 3,
	      spaceBetween: 30,
	    },
	},
});

document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper("#serv-slider", {
    // настройки слайдера
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".arrow-serv .swiper-button-next",
      prevEl: ".arrow-serv .swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
    on: {
      init: function(swiper) {
        updateCustomPagination(swiper);
      },
      slideChange: function(swiper) {
        updateCustomPagination(swiper);
      }
    }
  });

  // Функция для форматирования чисел с ведущими нулями
  function formatNumber(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  function updateCustomPagination(swiper) {
    const fractionEl = document.querySelector('#serv-pagination .fraction');
    const progressbarFillEl = document.querySelector('#serv-pagination .progressbar-fill');
    
    if (fractionEl && progressbarFillEl) {
      const currentSlide = swiper.realIndex + 1;
      const totalSlides = document.querySelectorAll('#serv-slider .swiper-slide:not(.swiper-slide-duplicate)').length;
      
      // Форматируем числа с ведущими нулями
      const formattedCurrent = formatNumber(currentSlide);
      const formattedTotal = formatNumber(totalSlides);
      
      // Обновляем fraction в формате "01 - 03"
      fractionEl.textContent = `${formattedCurrent} - ${formattedTotal}`;
      progressbarFillEl.style.width = `${(currentSlide / totalSlides) * 100}%`;
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper("#serv-slider-2", {
    // настройки слайдера
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".arrow-serv-2 .swiper-button-next",
      prevEl: ".arrow-serv-2 .swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
    on: {
      init: function(swiper) {
        updateCustomPagination(swiper);
      },
      slideChange: function(swiper) {
        updateCustomPagination(swiper);
      }
    }
  });

  // Функция для форматирования чисел с ведущими нулями
  function formatNumber(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  function updateCustomPagination(swiper) {
    const fractionEl = document.querySelector('#serv-pagination-2 .fraction');
    const progressbarFillEl = document.querySelector('#serv-pagination-2 .progressbar-fill');
    
    if (fractionEl && progressbarFillEl) {
      const currentSlide = swiper.realIndex + 1;
      const totalSlides = document.querySelectorAll('#serv-slider-2 .swiper-slide:not(.swiper-slide-duplicate)').length;
      
      // Форматируем числа с ведущими нулями
      const formattedCurrent = formatNumber(currentSlide);
      const formattedTotal = formatNumber(totalSlides);
      
      // Обновляем fraction в формате "01 - 03"
      fractionEl.textContent = `${formattedCurrent} - ${formattedTotal}`;
      progressbarFillEl.style.width = `${(currentSlide / totalSlides) * 100}%`;
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper("#team-slider", {
    // настройки слайдера
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    navigation: {
      nextEl: ".arrow-team .swiper-button-next",
      prevEl: ".arrow-team .swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 5,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
    },
    on: {
      init: function(swiper) {
        updateCustomPagination(swiper);
      },
      slideChange: function(swiper) {
        updateCustomPagination(swiper);
      }
    }
  });

  // Функция для форматирования чисел с ведущими нулями
  function formatNumber(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  function updateCustomPagination(swiper) {
    const fractionEl = document.querySelector('#team-pagination .fraction');
    const progressbarFillEl = document.querySelector('#team-pagination .progressbar-fill');
    
    if (fractionEl && progressbarFillEl) {
      const currentSlide = swiper.realIndex + 1;
      const totalSlides = document.querySelectorAll('#team-slider .swiper-slide:not(.swiper-slide-duplicate)').length;
      
      // Форматируем числа с ведущими нулями
      const formattedCurrent = formatNumber(currentSlide);
      const formattedTotal = formatNumber(totalSlides);
      
      // Обновляем fraction в формате "01 - 03"
      fractionEl.textContent = `${formattedCurrent} - ${formattedTotal}`;
      progressbarFillEl.style.width = `${(currentSlide / totalSlides) * 100}%`;
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper("#share-slider", {
    // настройки слайдера
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".arrow-share .swiper-button-next",
      prevEl: ".arrow-share .swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
    },
    on: {
      init: function(swiper) {
        updateCustomPagination(swiper);
      },
      slideChange: function(swiper) {
        updateCustomPagination(swiper);
      }
    }
  });

  // Функция для форматирования чисел с ведущими нулями
  function formatNumber(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  function updateCustomPagination(swiper) {
    const fractionEl = document.querySelector('#share-pagination .fraction');
    const progressbarFillEl = document.querySelector('#share-pagination .progressbar-fill');
    
    if (fractionEl && progressbarFillEl) {
      const currentSlide = swiper.realIndex + 1;
      const totalSlides = document.querySelectorAll('#share-slider .swiper-slide:not(.swiper-slide-duplicate)').length;
      
      // Форматируем числа с ведущими нулями
      const formattedCurrent = formatNumber(currentSlide);
      const formattedTotal = formatNumber(totalSlides);
      
      // Обновляем fraction в формате "01 - 03"
      fractionEl.textContent = `${formattedCurrent} - ${formattedTotal}`;
      progressbarFillEl.style.width = `${(currentSlide / totalSlides) * 100}%`;
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper("#share-slider-2", {
    // настройки слайдера
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".arrow-share-2 .swiper-button-next",
      prevEl: ".arrow-share-2 .swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
    on: {
      init: function(swiper) {
        updateCustomPagination(swiper);
      },
      slideChange: function(swiper) {
        updateCustomPagination(swiper);
      }
    }
  });

  // Функция для форматирования чисел с ведущими нулями
  function formatNumber(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  function updateCustomPagination(swiper) {
    const fractionEl = document.querySelector('#share-pagination-2 .fraction');
    const progressbarFillEl = document.querySelector('#share-pagination-2 .progressbar-fill');
    
    if (fractionEl && progressbarFillEl) {
      const currentSlide = swiper.realIndex + 1;
      const totalSlides = document.querySelectorAll('#share-slider-2 .swiper-slide:not(.swiper-slide-duplicate)').length;
      
      // Форматируем числа с ведущими нулями
      const formattedCurrent = formatNumber(currentSlide);
      const formattedTotal = formatNumber(totalSlides);
      
      // Обновляем fraction в формате "01 - 03"
      fractionEl.textContent = `${formattedCurrent} - ${formattedTotal}`;
      progressbarFillEl.style.width = `${(currentSlide / totalSlides) * 100}%`;
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper("#share-slider-3", {
    // настройки слайдера
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".arrow-share-3 .swiper-button-next",
      prevEl: ".arrow-share-3 .swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
    on: {
      init: function(swiper) {
        updateCustomPagination(swiper);
      },
      slideChange: function(swiper) {
        updateCustomPagination(swiper);
      }
    }
  });

  // Функция для форматирования чисел с ведущими нулями
  function formatNumber(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  function updateCustomPagination(swiper) {
    const fractionEl = document.querySelector('#share-pagination-3 .fraction');
    const progressbarFillEl = document.querySelector('#share-pagination-3 .progressbar-fill');
    
    if (fractionEl && progressbarFillEl) {
      const currentSlide = swiper.realIndex + 1;
      const totalSlides = document.querySelectorAll('#share-slider-3 .swiper-slide:not(.swiper-slide-duplicate)').length;
      
      // Форматируем числа с ведущими нулями
      const formattedCurrent = formatNumber(currentSlide);
      const formattedTotal = formatNumber(totalSlides);
      
      // Обновляем fraction в формате "01 - 03"
      fractionEl.textContent = `${formattedCurrent} - ${formattedTotal}`;
      progressbarFillEl.style.width = `${(currentSlide / totalSlides) * 100}%`;
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper("#cert-slider", {
    // настройки слайдера
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".arrow-cert .swiper-button-next",
      prevEl: ".arrow-cert .swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 2.65,
        spaceBetween: 10,
      },
    },
    on: {
      init: function(swiper) {
        updateCustomPagination(swiper);
      },
      slideChange: function(swiper) {
        updateCustomPagination(swiper);
      }
    }
  });

  // Функция для форматирования чисел с ведущими нулями
  function formatNumber(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  function updateCustomPagination(swiper) {
    const fractionEl = document.querySelector('#cert-pagination .fraction');
    const progressbarFillEl = document.querySelector('#cert-pagination .progressbar-fill');
    
    if (fractionEl && progressbarFillEl) {
      const currentSlide = swiper.realIndex + 1;
      const totalSlides = document.querySelectorAll('#cert-slider .swiper-slide:not(.swiper-slide-duplicate)').length;
      
      // Форматируем числа с ведущими нулями
      const formattedCurrent = formatNumber(currentSlide);
      const formattedTotal = formatNumber(totalSlides);
      
      // Обновляем fraction в формате "01 - 03"
      fractionEl.textContent = `${formattedCurrent} - ${formattedTotal}`;
      progressbarFillEl.style.width = `${(currentSlide / totalSlides) * 100}%`;
    }
  }
});

document.addEventListener('DOMContentLoaded', function() {
  var swiper = new Swiper("#price-slider-1", {
    // настройки слайдера
    slidesPerView: "auto",
    spaceBetween: 20,
    loop: true,
    navigation: {
      nextEl: ".arrow-price .swiper-button-next",
      prevEl: ".arrow-price .swiper-button-prev",
    },
    on: {
      init: function(swiper) {
        updateCustomPagination(swiper);
      },
      slideChange: function(swiper) {
        updateCustomPagination(swiper);
      }
    }
  });

  // Функция для форматирования чисел с ведущими нулями
  function formatNumber(num) {
    return num < 10 ? `0${num}` : `${num}`;
  }

  function updateCustomPagination(swiper) {
    const fractionEl = document.querySelector('#price-pagination .fraction');
    const progressbarFillEl = document.querySelector('#price-pagination .progressbar-fill');
    
    if (fractionEl && progressbarFillEl) {
      const currentSlide = swiper.realIndex + 1;
      const totalSlides = document.querySelectorAll('#price-slider-1 .swiper-slide:not(.swiper-slide-duplicate)').length;
      
      // Форматируем числа с ведущими нулями
      const formattedCurrent = formatNumber(currentSlide);
      const formattedTotal = formatNumber(totalSlides);
      
      // Обновляем fraction в формате "01 - 03"
      fractionEl.textContent = `${formattedCurrent} - ${formattedTotal}`;
      progressbarFillEl.style.width = `${(currentSlide / totalSlides) * 100}%`;
    }
  }
});
