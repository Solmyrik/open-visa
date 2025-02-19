const mapSection = document.querySelector('.map-section');
console.log(mapSection);
if (mapSection) {
  ymaps.ready(init);

  function init() {
    let map = new ymaps.Map('map', {
      center: [55.66147841302425, 37.555366262565556], // ваши данные
      theme: 'islands#dark',
      zoom: 16,
      // theme: 'dark',
    });

    let placemark = new ymaps.Placemark([55.66147841302425, 37.555366262565556], {}, {});
    const layer = new ymaps.YMapDefaultSchemeLayer({
      theme: 'dark',
    });

    // map.controls.remove('geolocationControl'); // удаляем геолокацию
    // map.controls.remove('searchControl'); // удаляем поиск
    // map.controls.remove('trafficControl'); // удаляем контроль трафика
    // map.controls.remove('typeSelector'); // удаляем тип
    // map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    // map.controls.remove('rulerControl'); // удаляем контрол правил
    // map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    map.geoObjects.add(placemark);
  }
}
