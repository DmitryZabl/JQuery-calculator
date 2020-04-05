


$(document).ready(function () {

  let rurUsdRate = 0;

  $.ajax({
    url: "https://www.cbr-xml-daily.ru/daily_json.js",
    cashe: false,
    success: function (data) {
      data = JSON.parse(data);
      rurUsdRate = data.Valute.USD.Value;
      showPrice()
    }
  })

  showPrice();
  $('#show-info__dollars').text("Обновление курса валют")
  showInfoContainer();

  $('#formSettings input').on('change', function () {
    showPrice();
    showInfoContainer();
  });

  $('#choise-car div').on('click', function () {
    let imgPath = $(this).attr('data-img-path');
    carName = $(this).text();
    $('#choise-car div').removeClass('choise-car__item--choised');
    $(this).addClass('choise-car__item--choised');
    $('#imgHolder').attr('src', imgPath);
    $('#show-info__title').text(carName);
    showPrice()
  })




  function calcPrice() {
    let enginePrice = +$('input[name = engine]:checked', '#formSettings').val(),
      transmissionPrice = +$('input[name = transmission]:checked', '#formSettings').val(),
      equipmentPrice = +$('input[name = equipment]:checked', '#formSettings').val(),
      modelPrice = +$('#choise-car div.choise-car__item--choised').attr('data-value');
    return enginePrice + transmissionPrice + equipmentPrice + modelPrice;

  }

  function showInfoContainer() {
    let checkedEngine = $('input[name = engine]:checked + label', '#formSettings').text(),
      checkedTransmission = $('input[name = transmission]:checked + label', '#formSettings').text(),
      checkedEquipment = $('input[name = equipment]:checked + label', '#formSettings').text();
    $('#show-info__engine').text(checkedEngine);
    $('#show-info__transmission').text(checkedTransmission);
    $('#show-info__equipment').text(checkedEquipment);
  }

  function showPrice() {
    let price = calcPrice(),
      priceRu = price.toLocaleString('ru-RU') + ' рублей',
      priceEn = '$ ' + convertPrice(price);
    $('#show-info__rubls').text(priceRu);
    $('#show-info__dollars').text(priceEn);
  }

  function convertPrice(price) {
    return Math.round(price / rurUsdRate).toLocaleString();
  }
})