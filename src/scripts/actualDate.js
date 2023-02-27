
/**
 * @showActualDate function handle with actual Date to be shown on device.
 * 
 * @param isYear  Gets the year using Universal Coordinated Time (UTC).
 * @param isMonth  Gets the month of a Date object using Universal Coordinated Time (UTC).
 * @param isDay  Gets the day of the week using Universal Coordinated Time (UTC).
 * @param isDayOfMonth  Gets the year using Universal Coordinated Time (UTC).
 */

function showActualDate(isYear, isMonth, isDay, isDayOfMonth) {
    const yearDate = document.querySelector(".yearDate");
    const weekDay = document.querySelector(".weekDay span:first-child");
    
    const today = new Date();

    isYear = today.getFullYear();
    isMonth = today.getMonth();
    isDay = today.getDay();
    isDayOfMonth = today.getDate();

    const daysOfTheWeek = {
        sunday: "domingo",
        monday: "segunda",
        tuesday: "terça",
        wednesday: "quarta",
        thursday: "quinta",
        friday: "sexta",
        saturday: "sábado"
    }

    let dayOfWeek = "";

    switch (isDay) {
        case 0:
            dayOfWeek = daysOfTheWeek.sunday;
            break;

        case 1:
            dayOfWeek = daysOfTheWeek.monday;
            break;

        case 2:
            dayOfWeek = daysOfTheWeek.tuesday;
            break;

        case 3:
            dayOfWeek = daysOfTheWeek.wednesday;
            break;

        case 4:
            dayOfWeek = daysOfTheWeek.thursday;
            break;

        case 5:
            dayOfWeek = daysOfTheWeek.friday;
            break;

        case 6:
            dayOfWeek = daysOfTheWeek.saturday;
            break;
    }

    const setDayOfMonth = isDayOfMonth < 10 ? `0${isDayOfMonth}` : isDayOfMonth;
    const setIsMonth = isMonth < 10 ? `0${isMonth + 1}` : isMonth + 1;
    
    yearDate.textContent = `${setDayOfMonth}/${setIsMonth}/${isYear}`;
     weekDay.innerHTML = isDay > 0 && isDay <= 5 ? `${dayOfWeek}<span>- feira</span>` : dayOfWeek;
    
} showActualDate();



