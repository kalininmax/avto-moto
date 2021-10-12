import dayjs from 'dayjs';

const PRODUCT = {
  title: 'Марпех 11',
  price: {
    new: 2300000,
    old: 2400000
  },
  specifications: [
    {
      name: 'Трансмиссия',
      value: 'Роботизированная'
    },
    {
      name: 'Мощность двигателя, л.с.',
      value: 249
    },
    {
      name: 'Тип двигателя',
      value: 'Бензиновый'
    },
    {
      name: 'Привод',
      value: 'Полный'
    },
    {
      name: 'Объем двигателя, л',
      value: 2.4
    },
    {
      name: 'Макс. крутящий момент',
      value: '370/4500'
    },
    {
      name: 'Количество цилиндров',
      value: 4
    }
  ],
  photos: [
    {
      original: 'images/photo-1.jpg',
      srcSet: 'images/photo-1@2x.jpg 2x',
      originalWidth: 600,
      originalHeight: 375,
      thumbnail: 'images/photo-1-thumb.jpg',
      thumbnailWidth: 128,
      thumbnailHeight: 80
    },
    {
      original: 'images/photo-2.jpg',
      srcSet: 'images/photo-2@2x.jpg 2x',
      originalWidth: 600,
      originalHeight: 375,
      thumbnail: 'images/photo-2-thumb.jpg',
      thumbnailWidth: 128,
      thumbnailHeight: 80
    },
    {
      original: 'images/photo-3.jpg',
      srcSet: 'images/photo-3@2x.jpg 2x',
      originalWidth: 600,
      originalHeight: 375,
      thumbnail: 'images/photo-3-thumb.jpg',
      thumbnailWidth: 128,
      thumbnailHeight: 80
    }
  ],
  label: 'New model'
};

const REVIEWS = [
  {
    id: 1,
    author: 'Борис Иванов',
    advantages: 'мощность, внешний вид',
    disadvantages: 'Слабые тормозные колодки (пришлось заменить)',
    comment: 'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
    rating: 3,
    time: dayjs().subtract(1, 'minute')
  },
  {
    id: 2,
    author: 'Марсель Исмагилов',
    advantages: 'Cтиль, комфорт, управляемость',
    disadvantages: ' Дорогой ремонт и обслуживание',
    comment: 'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
    rating: 3,
    time: dayjs().subtract(1, 'minute')
  }
];

export {
  PRODUCT,
  REVIEWS,
}