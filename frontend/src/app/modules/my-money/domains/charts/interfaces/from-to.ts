export interface FromTo {
  from: Date,
  to: Date
}

export function fromToByWeek(weeksAgo: number = 0): FromTo {
  const currentDate = new Date();
  // Определяем день недели (воскресенье: 0, понедельник: 1 и т.д.)
  const currentDayOfWeek = currentDate.getDay() || 7; // Приводим воскресенье к 7
  // Вычисляем разницу между текущим днем и понедельником текущей недели
  const diff = (weeksAgo * 7) + (currentDayOfWeek - 1);
  // Получаем понедельник недели
  const startOfWeek = new Date(currentDate);
  startOfWeek.setDate(currentDate.getDate() - diff);

  // Получаем воскресенье недели
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  // Возвращаем даты начала и конца недели в формате YYYY-MM-DD
  return {
    from: startOfWeek,
    to: endOfWeek
  };
}

export function fromToByMonth(monthAgo: number = 0): FromTo {
  const currentDate = new Date();

  let currentMonth = currentDate.getMonth();  // 0-январь, 11-декабрь
  let currentYear = currentDate.getFullYear();
  currentMonth -= monthAgo;

  return {
    from: new Date(currentYear, currentMonth, 1),
    to: new Date(currentYear, currentMonth + 1, 0)
  };
}
