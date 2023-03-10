import { showActualDate } from "./actualDate.js";


/**
 * @ShowTime function handle with Real Time to be shown on device.
 * 
 * @param isHours   Gets the hour value to the Universal Coordinated Time (UTC);
 * @param isMinutes gets the minute value to the Universal Coordinated Time (UTC);
 * 
 */

const periodOfday = {
    morning: "manhã",
    afternoon: "tarde",
    night: "noite",
    dawn: "madrugada"
}
let setPeriodOfday = "";

const updateDate = () => showActualDate();

function showTime(isHours, isMinutes) {

    const today = new Date();
    isHours = today.getHours();
    isMinutes = today.getMinutes();

    /**
     * convert 24 hours to 12 hours and add 0 before if hour is below than 10.
     * @param {Interger} hours 
     * @returns 
     */
    const convert24HrsTo12Hrs = (hours) => {
        const halfDayInHours = 12;
        hours = isHours > halfDayInHours ? isHours - halfDayInHours : isHours;
        return hours;
    }

    /**
     *  Format hour and minutes if below than 10
     * @param {Interger} hours 
     * @param {Interger} minutes 
     * @returns 
     */

    const formatHourAndMinute = (hours, minutes) => {
        let isAmOrPm = isHours >= 12 && isMinutes >= 0 ? "pm" : "am";

        if (localStorage.getItem("isPeriodOfDayActived") === "true") {
            isAmOrPm = setPeriodOfday;
        }

        hours = convert24HrsTo12Hrs();
        hours = hours < 10 ? `0${hours}` : hours;
        minutes = isMinutes < 10 ? `0${isMinutes}` : isMinutes;

        return `${hours}:${minutes} <span>${isAmOrPm}</span>`;
    }

    /**
     * draw hour on screen
     */
    const renderHour = () => {
        const hour = document.querySelector(".hour");
        hour.innerHTML = formatHourAndMinute();
    }
    renderHour();

    const clock = {
        itsMorningTime: 6,
        itsAfternoonTime: 6,
        itsNightTime: 6,
        itsDawnTime: 6,
    }

    /**
     * handle with icons and text to be show in three cycles of the day
     *  (morning - afternoon - night)
     */
    const shiftDayAndNightIcon = () => {        
        const icon = document.querySelector(".icon");
        const wellcome = document.querySelector(".wellcome");

        // show moring Icon
        if ((isHours >= 6 && isMinutes >= 0) && (isHours <= 11 && isMinutes <= 59)) {
            icon.innerHTML = '<i class="fa fa-cloud-sun" style="color:#fff8b9"></i>';
            wellcome.textContent = "Bom dia";
            return setPeriodOfday = `da ${periodOfday.morning}`;
        }

        // show afternoon Icon
        if (isHours >= 12 && isHours < 18) {
            icon.innerHTML = '<i class="fa fa-sun" style="color:#ffeb3b"></i>';
            wellcome.textContent = `Boa ${periodOfday.afternoon}`;
            return setPeriodOfday = `da ${periodOfday.afternoon}`;
            
        }

        // show night Icon
        if ((isHours >= 18 && isMinutes >= 0) && (isHours <= 23 && isMinutes <= 59)) {
            icon.innerHTML = '<i class="fa-solid fa-cloud-moon" style="color:#fff5a1"></i>';
            wellcome.textContent = `Boa ${periodOfday.night}`;
            return setPeriodOfday = `da ${periodOfday.night}`;
        }

        // show dawn Icon    

        if ((isHours >= 0 && isMinutes >= 0) && (isHours <= 5 && isMinutes <= 59)) {
            updateDate();
            icon.innerHTML = '<i class="fa fa-moon" style="color:#fff5a1"></i>';
            wellcome.textContent = `É ${periodOfday.dawn}`;
            return setPeriodOfday = `da ${periodOfday.dawn}`;
        }
    }  
 
    shiftDayAndNightIcon();


} setInterval(showTime, 1000);

