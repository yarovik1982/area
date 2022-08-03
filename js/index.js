const arrLang = {
   en: {
     about: "About Us",
     services: "Services",
     process: "Process",
     review: "Review",
     team: "Team",
     tariff: "Tariff",
     estateTitle: "selection of real estate in Poland",
     estateDesc:
       "We will select an individual option for residential or investment real estate.",
     consultationBtn: "Consultation (free)",
   },
   ru: {
     about: "О Нас",
     services: "Услуги",
     process: "Процесс",
     review: "Отзывы",
     team: "Команда",
     tariff: "Тарифы",
     estateTitle: "подбор недвижимости в польше",
     estateDesc:
       "Мы подберем индивидуальный вариант жилой или инвестиционной недвижимости.",
     consultationBtn: "Консультация (бесплатно)",
   },
   pl: {
     about: "O Nas",
     services: "Usługi",
     process: "Proces",
     review: "Opinie",
     team: "Zespół",
     tariff: "Taryfy",
     estateTitle: "wybór nieruchomości w Polsce",
     estateDesc:
       "Dobierzemy indywidualną opcję dla nieruchomości mieszkalnej lub inwestycyjnej. ",
     consultationBtn: "Konsultacja (bezpłatna)",
   },
   ua: {
     about: "Про нас",
     services: "Послуги",
     process: "Процесс",
     review: "Відгуки",
     team: "Команда",
     tariff: "Тарифи",
     estateTitle: "підбір нерухомості у Польщі",
     estateDesc:
       "Ми підберемо індивідуальний варіант житлової чи інвестиційної нерухомості.",
     consultationBtn: "Консультація (безкоштовно)",
   },
 };
 
 // multi language
 
 $(function () {
   $(".translate").click(function () {
     const lang = $(this).attr("id");
     const language = document.querySelector(".lng__desc");
 
     if (lang === "en") {
       language.innerHTML = "EN";
     } else if (lang === "ru") {
       language.innerHTML = "RU";
     } else if (lang === "pl") {
       language.innerHTML = "PL";
     } else if (lang === "ua") {
       language.innerHTML = "UA";
     }
 
     $(".lang").each(function (index, item) {
       $(this).text(arrLang[lang][$(this).attr("key")]);
     });
   });
 });
 
 //dropdown
//  $(function () {
//    $(".dropdown,.dropdown-mobile").click(function () {
//      $("#myDropdown").toggleClass("show");
//    });
//  });
const dropdown = document.querySelectorAll('[data-name="dropdown"]')

dropdown.forEach(item => {
  item.addEventListener('click', () => {
    item.querySelector('[data-id="myDropdown"]').classList.toggle('show')
  })
})

 
 function showLngChanger() {
   // Close the dropdown menu if the user clicks outside of it
   window.onclick = function (event) {
     if (!event.target.matches(".dropbtn")) {
       var dropdowns = document.getElementsByClassName("dropdown-content");
       var i;
       for (i = 0; i < dropdowns.length; i++) {
         var openDropdown = dropdowns[i];
         if (openDropdown.classList.contains("show")) {
           openDropdown.classList.remove("show");
         }
       }
     }
   };
 }
 
 // loader
 
 $(window).on("load", function () {
   $(".preloader").delay(1000).fadeOut("slow");
 });
 
 // плавная прокрутка к якорям
 
 $(window).on("load", function () {
   var margin = 100;
   $(".scroll-to").click(function () {
     $("html, body").animate(
       {
         scrollTop: $($(this).attr("href")).offset().top + margin + "px",
       },
       {
         duration: 1600, // тут можно контролировать скорость
         easing: "swing",
       }
     );
     return false;
   });
 });
 
 $(function () {
   // при нажатии на кнопку to-top
   $(".to-top").click(function () {
     // переместиться в верхнюю часть страницы
     $("html, body").animate(
       {
         scrollTop: 0,
       },
       1000
     );
   });
 });
 // при прокрутке окна (window)
 $(window).scroll(function () {
   // если пользователь прокрутил страницу более чем на 200px
   if ($(this).scrollTop() > 200) {
     // то сделать кнопку to-top видимой
     $(".to-top").fadeIn();
   }
   // иначе скрыть кнопку to-top
   else {
     $(".to-top").fadeOut();
   }
 });

 document.addEventListener("click", function(event){
  const el = event.target;
  if(el.closest("[data-burger]")){
    document.querySelector('.wrap__nav-mobile').classList.toggle('active')
    
     document.querySelectorAll("[data-burger]").forEach(item=>{
        item.classList.toggle("toggle");
     })
  }
}, true)