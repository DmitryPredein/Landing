let arrayModel =  [['Телефон', '5s'],['Телефон', '6 Pro'],['Телефон', '6i'],['Телефон', '6'],['Телефон', 'C3'],['Телефон', 'C2s'],['Телефон', '5i'],['Телефон', 'X50'],['Телефон', 'X2 Pro'],['Телефон', 'Q'],['Телефон', 'X Line'],['Телефон', '5 Pro'],['Телефон', '3i'],['Телефон', 'X'],['Телефон', 'C2'],['Телефон', 'U1'],['Телефон', 'XT'],['Телефон', 'X2'],['Телефон', '5'],['Телефон', '3 Pro'],['Телефон', '3'],];

let priceService =   [];

let priceServicePhoneDefault = [["Диагностика","от 150","от 2 ч до 1 дня"],["Замена камеры","от 700","от 6 ч до 1 дня"],["Замена микрофона/динамика/звонка","от 700","от 2 ч до 1 дня"],["Замена аккумулятора","от 600","от 2 ч до 1 дня"],["Восстановление после попадания воды","от 550","от 2 ч до 1 дня"],["Замена кнопки включения","от 700","от 2 ч до 1 дня"],["Замена задней крышки/корпуса в сборе","от 600","от 2 ч до 1 дня"],["Замена разъема питания/гарнитуры","от 700","от 2 ч до 1 дня"],["Замена шлейфа/кнопки home","от 700","от 2 ч до 1 дня"],["Программный ремонт/Обновление ПО/Разблокировка","от 500","от 2 ч до 1 дня"],["Технически сложный ремонт","от 1200","от 2 ч до 1 дня"],["Замена стекла (touch screen)","от 700","от 2 ч до 1 дня"]];

let priceServiceLaptopDefault = [["Чистка ноутбука","от 500","от 5 ч до 2 дней"],["Замена камеры","от 700","от 6 ч до 1 дня"],["Восстановление после падения","от 1200","от 5 ч до 2 дней"],["Восстановление после воды, падения","от 1000","от 5 ч до 2 дней"],["Замена видеокарты","от 1500","от 5 ч до 2 дней"],["Ремонт видеокарты","от 1500","от 5 ч до 2 дней"],["Ремонт платы","от 1200","от 5 ч до 2 дней"],["Диагностика","от 500","5 ч до 2 дней"],["Замена матрицы ноутбука","от 700","от 5 ч до 2 дней"],["Замена разъемов","от 900","от 5 ч до 2 дней"],["Замена разъема зарядки/usb","от 950","от 5 ч до 2 дней"],["Ремонт клавиатуры","от 1200","от 5 ч до 2 дней"],["Замена клавиатуры","от 700","от 5 ч до 2 дней"]];

let priceServiceTabletDefault = [["Программный ремонт/Обновление ПО/Разблокировка","от 850","от 6 ч до 2 дней"],["Замена шлейфа/кнопки home","от 1190","от 6 ч до 2 дней"],["Замена стекла (touch screen)","от 1190","от 6 ч до 2 дней"],["Замена разъема питания/гарнитуры","от 1190","от 6 ч до 2 дней"],["Замена кнопки включения","от 1360","от 6 ч до 2 дней"],["Замена задней крышки/корпуса в сборе","от 1020","от 6 ч до 2 дней"],["Технически сложный ремонт","от 2040","от 6 ч до 2 дней"],["Диагностика","от 255","от 6 ч до 2 дней"],["Восстановление после попадания воды","от 935","от 6 ч до 2 дней"],["Замена аккумулятора","от 1020","от 6 ч до 2 дней"],["Замена микрофона/динамика/звонка","от 1190","от 6 ч до 2 дней"],["Замена камеры","от 1190","от 6 ч до 2 дней"]];



$(document).ready( function () {
  let ua = window.navigator.userAgent;
  let msie = ua.indexOf("MSIE ");
  let heightModel = '';
  let modelWindow_check = '';
  let priceDevice_check = 'Телефон';
  let priceModel_check = '';
  let price_check = '';
  let model_check = false;
  let metrika_chek = '';

  let nodeJob_status = '';

  const btnPrevNavBar = $("#carouselLeftNavBarMobile");
  const btnNextNavBar = $("#carouselRightNavBarMobile");

  let valNavBar = 1;
  btnNextNavBar.click(function(){

    valNavBar++;

    if(valNavBar <= 3){
      $(".navBar > ul > li").css({
        "display" : "none",
      });
      $(".navBar > ul > li:nth-of-type("+valNavBar+")").css({
        "display" : "grid",
      });
    }
    else{
      valNavBar--;
    }

  });
  btnPrevNavBar.click(function(){

    valNavBar--;

    if(valNavBar >= 1){
      $(".navBar > ul > li").css({
        "display" : "none",
      });
      $(".navBar > ul > li:nth-of-type("+valNavBar+")").css({
        "display" : "grid",
      });
    }
    else{
      valNavBar++;
    }

  });

  function deviceSelectedActions(typedevice){
    switch (typedevice) {
      case "Телефон":
        $('.deviceSelectedImages').removeClass('deviceSelectedImagesActive');
        $('.deviceSelectedPhone').addClass('deviceSelectedImagesActive');
        break;
      case "Ноутбук":
        $('.deviceSelectedImages').removeClass('deviceSelectedImagesActive');
        $('.deviceSelectedLaptop').addClass('deviceSelectedImagesActive');
        break;
      case "Планшет":
        $('.deviceSelectedImages').removeClass('deviceSelectedImagesActive');
        $('.deviceSelectedTablet').addClass('deviceSelectedImagesActive');
        break;
      default:
        return false;
    }
  }
  function addPriceService(array){
    $('.priceMainContent section').empty();
    //if (priceDevice_check == 'Планшет' || priceDevice_check == 'Ноутбук' || (priceDevice_check == 'Телефон' && priceModel_check == '')) {
    //  array.forEach((item, i) => {
    //    $('.priceMainContent section').append('<div class="priceBox"><span class="titlePriceBox">'+item[0]+'</span>'+'<span class="dedlaine">'+item[2]+'</span>'+'<span class="price">'+item[1]+' ₽</span></div>');
    //  });
    //}
    //else{
    //  array.forEach((item, i) => {
    //
    //    if (item[1] == priceModel_check) {
    //      if (item[0] == 'Восстановление после попадания воды') {
    //        $('.priceMainContent section').append('<div class="priceBox"><span class="titlePriceBox">'+item[0]+'</span>'+'<span class="dedlaine">'+item[3]+' минут</span>'+'<span class="price">От '+(+item[2]+500)+' ₽</span></div>');
    //        return;
    //      }
    //      $('.priceMainContent section').append('<div class="priceBox"><span class="titlePriceBox">'+item[0]+'</span>'+'<span class="dedlaine">'+item[3]+' минут</span>'+'<span class="price">'+(+item[2]+500)+' ₽</span></div>');
    //    }
    //  });
    //}
    array.forEach((item, i) => {
        $('.priceMainContent section').append('<div class="priceBox"><span class="titlePriceBox">'+item[0]+'</span>'+'<span class="dedlaine">'+item[2]+'</span>'+'<span class="price">'+item[1]+' ₽</span></div>');
    });
  }
  function sendAjaxForm(url) {
      $.ajax({
          url:     url, //url страницы (action_ajax_form.php)
          type:     "POST", //метод отправки
          dataType: "html", //формат данных
          data: "name="+$("#firstNameId").val()+" "+$("#nameId").val()+" "+$("#lastNameId").val()+"&tel="+$("#telId").val()+"&nodeJob="+nodeJob_status+"&desp="+$("#descId").val()+"&type="+priceDevice_check+"&brand=Realme&model="+priceModel_check+"&service="+$("#service_title").text()+"&priceService="+price_check,  // Сеарилизуем объект
          success: function() { //Данные отправлены успешно
            priceModel_check='';
            $('.modelCheck').text('Модель не выбрана');
            switch (metrika_chek) {
              case 'click_perezvonit':
                ym(67091065,'reachGoal','otpravka_perezvonit');
                break;
              case 'zakazat_remont':
                ym(67091065,'reachGoal','zakazat_remont_otpravlen');
                break;
              case 'zakaz_uslugi':
                ym(67091065,'reachGoal','zakaz_uslugi_otpravlen');
                break;
              case 'razbor_otpravlen':
                ym(67091065,'reachGoal','razbor_otpravlen');
                break;
              default:
                return false;
            }
            $('.popup-fade').fadeIn(200);
            $('.popup').hide();
            $('.popup_success').fadeIn(200);
        },
        error: function(response) { // Данные не отправлены
          alert("Что то пошло не так, повторите попытку позже");
        }
    });
  }
  function sendAjaxFormConsult(url, name, tel) {
      $.ajax({
          url:     url, //url страницы (action_ajax_form.php)
          type:     "POST", //метод отправки
          dataType: "html", //формат данных
          data: "name="+name+"&tel="+tel+"&brand=Realme&nodeJob="+nodeJob_status,  // Сеарилизуем объект
          success: function(data) { //Данные отправлены успешно
            priceModel_check='';
            $('.modelCheck').text('Модель не выбрана');
            switch (metrika_chek) {
              case 'zaberem_iz_doma':
                ym(67091065,'reachGoal','otpravka_perezvonit');
                break;
              case 'konsultacia':
                ym(67091065,'reachGoal','zakazat_remont_otpravlen');
                break;
              default:
                return false;
            }
            $('.popup').hide();
            $('.popup_success').fadeIn();
        		$('.popup-fade').fadeIn(100);
            $('input[name=homeOrderFormTel]').val("");
            $('input[name=homeOrderFormName]').val("");
            someFunction( data );
            return data;

        },
        error: function(response) { // Данные не отправлены
          alert("Что то пошло не так, повторите попытку позже");
        }
    });
  }
 function someFunction(data) {
   $(".menu").text(data);
 }


  arrayModel.forEach((item, i) => {
    $('.modelMainContent section').append('<div class="modelBox"><span class="titleModelBox">'+item[1]+'</span>'+'<img src="img/Realme/realme/'+item[1].trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-")+'.png" class="img_modelBox"></div>');
  });



  addPriceService(priceServicePhoneDefault);


    $(".modelBox").mouseenter(function(){
    if(!(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) || !(window.matchMedia('(max-width: 860px)').matches)){
      $(this).children(".img_modelBox").animate({
  	      "margin-bottom": "10px", // высота элемента
  	   }, 200);
     }
    });
    $(".modelBox").mouseleave(function(){
      if(!(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) || !(window.matchMedia('(max-width: 860px)').matches)){
      $(this).children(".img_modelBox").animate({
  	      "margin-bottom": "-30px", // высота элемента
  	   }, 200);
     }
    });

    $(window).scroll(function(){
      if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.matchMedia('(max-width: 860px)').matches){
        if($(window).scrollTop() > 200){
          $('.headerTop').css({
            "grid-template-rows" : "40px 1fr auto",
          });
        }
        else{
          $('.headerTop').css({
            "grid-template-rows" : "60px 1fr auto",
          });
        }
      }
    });


  $(window).resize(function() {
    if($(".bg_navBar").width() > 426){
      $(".navBar > ul > li").css({
        "display" : "grid",
      });
    }
    if($(".bg_navBar").width() < 426){
      $(".navBar > ul > li").css({
        "display" : "none",
      });
      $(".navBar > ul > li:nth-of-type(1)").css({
        "display" : "grid",
      });
    }
  });

  $('.collapseMenu').click(function(){
    if($('.menu').css('display') == 'grid'){
      $('.menu').hide(400);
    }
    else if($('.menu').css('display') == 'none'){

        $('.menu').show(400, function(){
          $('.menu').css({
            'display': 'grid'
          });
        });
    }
  });

  $('#collapseContactHeaderId').click(function(){
    if($('#contactHeaderId').css('display') == 'grid'){
      $('#contactHeaderId').hide(400);
    }
    else if($('#contactHeaderId').css('display') == 'none'){
        $('#contactHeaderId').show({
          duration: 400,
          options: "start",
          complete: function(){
            $('#contactHeaderId').css({
              'display': 'grid'
            });
          }});
    }});

    $('input[name=homeOrderFormTel]').inputmask("+7(999)999-9999");
    $('input[name=homeOrderFormSubmit]').click(
      function() {
        if ($(this).attr('id') == 'homeOrderFormSubmitId homeOrderFormSubmit1') {
          nodeJob_status = 'Забрать у клиента';
          metrika_chek = 'zaberem_iz_doma';
        }
        else if($(this).attr('id') == 'homeOrderFormSubmitId homeOrderFormSubmit2') {
          nodeJob_status = 'Консультация';
          metrika_chek = 'konsultacia';
        }
        let valtel = $(this).siblings('input[name=homeOrderFormTel]').val();
        let valName = $(this).siblings('input[name=homeOrderFormName]').val();
        let reges = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;

        if(valName.length >= 1 && reges.test(valtel)){
          sendAjaxFormConsult('obrabotchik.php', valName, valtel);
        }

        if(valName.length < 1){
          $(this).siblings('input[name=homeOrderFormName]').css({"border" : " 1px solid red",});
        }
        else{
          $(this).siblings('input[name=homeOrderFormName]').css({"border" : "none"});
        }

        if(!(reges.test(valtel))){
          $(this).siblings('input[name=homeOrderFormTel]').css({"border" : " 1px solid red",});
        }
        else{
          $(this).siblings('input[name=homeOrderFormTel]').css({"border" : "none"});
        }
      }
    );

    $('#telId').inputmask("+7(999)999-9999");
    $("#btnSend").click(
      function(){
        let valName = $('#nameId').val();
        let valFirstName = $('#firstNameId').val();
        let valtel = $('#telId').val();
        let valDataProcessing = $('#dataProcessingId').val();
        let reges = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/;

        if(valName.length >= 1 && reges.test(valtel) && $('#dataProcessingId').is(":checked") && valFirstName.length >= 1){
          sendAjaxForm('obrabotchik.php');
        }

        if(valName.length < 1){
          $('#nameId').css({"border-color" : "red"});
        }
        else{
          $('#nameId').css({"border-color" : "#BDBDBD"});
        }
        
        if(valFirstName.length < 1){
          $('#firstNameId').css({"border-color" : "red"});
        }
        else{
          $('#firstNameId').css({"border-color" : "#BDBDBD"});
        }

        if(!(reges.test(valtel))){
          $('#telId').css({"border-color" : "red"});
        }
        else{
          $('#telId').css({"border-color" : "#BDBDBD"});
        }

        if(!($('#dataProcessingId').is(":checked"))){
          $('#dataProcessingId + label').css({"color" : "red"});
        }
        else{
          $('#dataProcessingId + label').css({"color" : "#BDBDBD"});
        }
        return false;
      }
    );

    $('.deviceSelectedImages').click(function() {
      switch($(this).attr('id')) {
        case 'deviceSelectedPhoneId':
          priceDevice_check = 'Телефон';
          deviceSelectedActions(priceDevice_check);
          if (priceModel_check != '') {
            addPriceService(priceServicePhoneDefault);
            $('.modelCheck').text(priceModel_check);
            break
          }
          addPriceService(priceServicePhoneDefault);
          $('.modelCheck').text('Модель не выбрана');
          break
        case 'deviceSelectedLaptopId':
          priceDevice_check = 'Ноутбук';
          addPriceService(priceServiceLaptopDefault);
          deviceSelectedActions(priceDevice_check);
          $('.modelCheck').text('Модель не выбрана');
          break
        case 'deviceSelectedTabletId':
          priceDevice_check = 'Планшет';
          addPriceService(priceServiceTabletDefault);
          deviceSelectedActions(priceDevice_check);
          $('.modelCheck').text('Модель не выбрана');
          break
        default:
          return false;
      }
    });

    $(".modelBox").click(function(){
      priceModel_check = $(this).children('.titleModelBox').text();
      $('.modelCheck').text(priceModel_check);
      
      arrayModel.forEach((item, i) => {
        if (item[1] == priceModel_check) {
          priceDevice_check = item[0];
        }
      });
      addPriceService(priceServicePhoneDefault);
      deviceSelectedActions(priceDevice_check);
      let titleModel = $(this).children(".titleModelBox").text().trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
      location.href = '#priceMainContentHref';
      location.href = '#model-'+titleModel;
    });
    
    $(document).on("click", ".searchModelItem", function(){
      priceModel_check = $(this).text();
      $('.modelCheck').text(priceModel_check);
                  
      arrayModel.forEach((item) => {
          if (item[1] == priceModel_check) {
              priceDevice_check = item[0];
          }
      });
                        
      addPriceService(priceServicePhoneDefault);
                    
      deviceSelectedActions(priceDevice_check);
                    
      let titleModel = $(this).text().trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "-");
                    
      location.href = '#priceMainContentHref';
      location.href = '#model-'+titleModel;
      $("#js-search").val("");
      $(".searchModelItems").slideUp();
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 800){
          $('#upPage').fadeIn(200);
        }
        else if($(window).scrollTop() <= 800){
          $('#upPage').hide(200);
        }
    });

    $('#upPage').click(function() {
  		$('html, body').animate({scrollTop: 0},200);
  		return false;
  	})

    $(document).on("click", '#order, .titleInfoBoxDestroy, .priceBox, .contact', function() {
      switch($(this).attr('class')) {
        case 'orderSubmit':
          ym(67091065,'reachGoal','zakazat_remont');
          metrika_chek = 'zakazat_remont';
          nodeJob_status = 'Заявка на ремонт';
          $('.popup_form_input_desc').css({'display' : 'flex'});
          modelWindow_check = '.popup_form_input_desc';
          break;

        case 'titleInfoBoxDestroy':
          metrika_chek = 'razbor_otpravlen';
          nodeJob_status = 'Заявка на разбор телефона';
          $('.popup_form_dropdown_loyaut').css({'display' : 'grid'});
          modelWindow_check = '.popup_form_dropdown_loyaut';
          break;

        case 'priceBox':
          ym(67091065,'reachGoal','zakaz_uslugi');
          metrika_chek = 'zakaz_uslugi';
          nodeJob_status = 'Заявка на ремонт';
          $('.popup_form_service_loyaut').css({'display' : 'flex'});
          $('#service_title').append($(this).children(".titlePriceBox").text());
          if (priceModel_check == '') {
            $('#service_device_device').append(priceDevice_check+', ');
          }
          else {
            $('#service_device_device').append(priceModel_check+', ');
          }
          $('#service_device_cost').append($(this).children(".price").text());
          modelWindow_check = '.popup_form_service_loyaut';
          price_check = $(this).children('.price').text();
          break;

        case 'contact':
          ym(67091065,'reachGoal','click_perezvonit');
          metrika_chek = 'click_perezvonit';
          nodeJob_status = 'Консультация';
          break;

        default:
          return false;
      }
      $('.popup').fadeIn();
      $('.popup_success').hide();
  		$('.popup-fade').fadeIn(100);
  		return false;
    });
    // Клик по ссылке "Закрыть".
    $('.closes').click(function() {
      $(modelWindow_check).hide();
      $(this).parents('.popup-fade').fadeOut(100);
      $('#service_title').empty();
      $('#service_device_device').empty();
      $('#service_device_cost').empty();
      modelWindow_check='';
      price_check='';
      return false;
    });
    // Закрытие по клавише Esc.
    $(document).keydown(function(e) {
      if (e.keyCode === 27) {
        e.stopPropagation();
        $('.popup-fade').fadeOut(100);
        $(modelWindow_check).hide();
        $('#service_title').empty();
        $('#service_device_device').empty();
        $('#service_device_cost').empty();
        modelWindow_check='';
        price_check='';
      }

    });
    // Клик по фону, но не по окну.
    $('.popup-fade').click(function(e) {
      if ($(e.target).closest('.popup').length == 0 && $(e.target).closest('.popup_success').length == 0) {
        $(this).fadeOut(100);
        $(modelWindow_check).hide();
        $('#service_title').empty();
        $('#service_device_device').empty();
        $('#service_device_cost').empty();
        modelWindow_check='';
        price_check='';
      }
    });
    $('select[name=device]').change(function() {
      $('select[name=model]').empty();
      $('select[name=model]').append('<option selected disabled >-</option>');
      let items = $(this).val();
      arrayModel.forEach((item, i) => {
        if (item[0] == items) {
          $('select[name=model]').append('<option value="'+item[1]+'">'+item[1]+'</option>')
        }
      });
      priceDevice_check = $(this).val();
    });
    $('select[name=model]').change(function() {
      priceModel_check = $(this).val();
    });

    $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 426,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            centerMode: true,
            variableWidth: true
          }
        },
      ]
    });

    $('.sliderNavBar').slick({
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.trackComment').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1330,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 860,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


});
