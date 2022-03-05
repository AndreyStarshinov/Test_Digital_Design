function getDayInfo(date) {
    let dateParts = date.split(".");
    let mydate = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
    
    let year = mydate.getFullYear();

    let months = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
    let mymonths = months[mydate.getMonth()]

    let prefixes = ['1', '2', '3', '4', '5'];
    let week = prefixes[Math.floor(mydate.getDate() / 7)];

    let days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    let day = days[mydate.getDay()];

    return `${day}, ${week} неделя ${mymonths} ${year} года`;
}

console.log(getDayInfo("01.01.2022"));

