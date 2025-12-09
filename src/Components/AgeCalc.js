import moment from 'moment';
import React, { useState } from 'react';


const AgeCalc = () =>{
    const [birth, setBirth] = useState('')
	const [today, setToday] = useState(moment().format('YYYY-MM-DD'))

	console.log(moment());

	const changeBirthHandler = (e) => {
		setBirth(e.target.value)
	}

	const changeTodayHandler = (e) => {
		setToday(e.target.value)
	}

	function getYearsMonthsDays(date1, date2) {
		const a = moment(date1);
		const b = moment(date2);
		var years = a.diff(b, 'year');
		b.add(years, 'years');

		const noOfDaysInb = b.daysInMonth();
		const noOfDaysIna = a.daysInMonth();
		let months = 0;
		if (noOfDaysInb > noOfDaysIna) {
			months = b.diff(a, "months");
			a.add(months, "months");
		} else {
			months = a.diff(b, 'months');
			b.add(months, 'months');
		}
		var days = a.diff(b, 'days');

		var totalYears = Math.abs(years);
		var totalMonths = Math.abs(months);
		var totalDays = Math.abs(days);

		if (totalMonths === 0 && totalDays === 0 && totalYears > 0) {
			return `Happy Birthday! 🎉 You're ${totalYears} years old!`;
		}

		return `${totalYears} Years ${totalMonths} Months ${totalDays} Days`;
	}
    return(
        <div className='age-calc'>
			<label for="birth">Birthday</label>
            <input value={birth.length > 0 ? birth : today} onChange={changeBirthHandler} type="date" name="birth" id="birth" className="p-3 mb-5 w-full form-control" placeholder="Birthday" />

			<label for="today">Today</label>
            <input value={today} onChange={changeTodayHandler} type="date" name="today" id="today" className="mb-5 p-3 w-full form-control" placeholder="Today" disabled/>


                <h3 className="age-result text-center lg:text-2xl md:text-lg text-base font-semibold">
                    {birth.length > 0 && today.length > 0 ? getYearsMonthsDays(birth, today) : ''}
                </h3>
        </div>
    )
}

export default AgeCalc;