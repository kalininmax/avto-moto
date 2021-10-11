import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.locale('ru');
dayjs.extend(relativeTime);

const humanizeDate = (date, template = 'D MMMM YYYY') => {
  if (template === 'relative') {
    return dayjs().to(date);
  }

  return dayjs(date).format(template);
};

export {
  humanizeDate
};