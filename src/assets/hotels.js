import i1 from './img/i1.png';
import i2 from './img/i2.png';

// массив для проверки работоспособности

export const hotels = [
    {
      id: 1,
      name: 'Хостел на Меркурии',
      verified: true,
      type: 'Хостел 2★',
      rating: '4.9',
      address: 'г. Красногорск, ул. Лесная 12',
      distance: '1,3 км от центра',
      roomType: 'Двухместный стандарт',
      tags: ['Бесплатная отмена', 'Завтрак включен', 'Оплата на месте'],
      nights: '5',
      guests: '2',
      price: '122 000',
      image: i1,
      lat: 55.835832,
      lng: 37.320338
    },
    {
      id: 2,
      name: 'Хостел на Венере',
      type: 'Хостел 3★',
      verified: true,
      rating: '3.2',
      address: 'г. Белогорск, ул. Победы 10',
      distance: '12,3 км от центра',
      roomType: 'Одноместный стандарт',
      tags: ['Платная отмена', 'Без завтрака', 'Оплата на месте'],
      nights: '5',
      guests: '2',
      price: '22 000',
      image: i2,
      lat: 50.922116,
      lng: 128.462248
    }
  ]