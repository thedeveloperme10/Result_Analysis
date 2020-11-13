const asl = document.querySelector('.analytical-skill');
const lsl = document.querySelector('.Logical-Skill');
const msl = document.querySelector('.Math-Skill');
const pl = document.querySelector('.Programming-Skill');
const psl = document.querySelector('.Problem-Solving-Skill');
const csl = document.querySelector('.Creativity-Skill');
const hsl = document.querySelector('.Hardware-Skill');

const ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
	type: 'pie',
	data: {
		labels: ['Analytical Skill', 'Logical Skill', 'Math Skill', 'Programming Skill', 'Problem Solving Skill', 'Creativity Skill', 'Hardware Skill'],
		datasets: [
			{
				label: '# of Votes',
				data: [0, 0, 0, 0, 0, 0, 0],
				backgroundColor: ['#9900f2', '#0030f2', '#009df2', '#00f218', '#f2e200', '#f28d00', '#e83131'],
				borderWidth: 1
			}
		]
	}
});

const updateChartValue = (input, dataOrder) => {
	input.addEventListener('change', e => {
		myChart.data.datasets[0].data[dataOrder] = e.target.value;
		myChart.update();
	});
};

updateChartValue(asl, 0);
updateChartValue(lsl, 1);
updateChartValue(msl, 2);
updateChartValue(pl, 3);
updateChartValue(psl, 4);
updateChartValue(csl, 5);
updateChartValue(hsl, 6);