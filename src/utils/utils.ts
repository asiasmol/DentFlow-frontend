import dayjs from "dayjs";
import "dayjs/plugin/isSameOrAfter";
import "dayjs/plugin/isSameOrBefore";

export function getMonth(currentMonth : number): dayjs.Dayjs[][]{
    const currentYear = dayjs().year();
    const firstDayOfMonth = dayjs(new Date(currentYear,currentMonth,0)).day()
    let currentMonthCount = 0-firstDayOfMonth;
    return new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            currentMonthCount++;
            return dayjs(new Date(currentYear, currentMonth, currentMonthCount))
        })
    })
}

export function getWeek(date:dayjs.Dayjs): dayjs.Dayjs[] {
    const dayjs = require('dayjs');
    require('dayjs/locale/pl'); // opcjonalnie, jeśli chcesz użyć języka polskiego
    const startOfWeek = date.startOf('week');
    const endOfWeek = startOfWeek.endOf('week'); // koniec tygodnia

    const weekDays = [];
     for (let day = startOfWeek; day <= endOfWeek; day = day.add(1, 'day')) {
        weekDays.push(dayjs(day));
    }
    return  weekDays
}
