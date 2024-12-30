const monthYearElement = document.getElementById('monthYear');
const calendarGrid = document.getElementById('calendarGrid');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

let currentDate = new Date();

function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    monthYearElement.textContent = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });
    calendarGrid.innerHTML = '';
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        calendarGrid.appendChild(emptyCell);
    }

    for (let day = 1; day <= lastDate; day++) {
        const dayCell = document.createElement('div');
        dayCell.textContent = day;
        calendarGrid.appendChild(dayCell);
    }

    const lastDay = new Date(year, month, lastDate).getDay();
    const daysToFill = (lastDay === 6) ? 0 : 6 - lastDay;
    for (let i = 0; i < daysToFill; i++) {
        const emptyCell = document.createElement('div');
        calendarGrid.appendChild(emptyCell);
    }
}

prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();