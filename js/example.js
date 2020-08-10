// var chart = circularHeatChart()

// /* Labels */
// chart.innerRadius(50)
//     .segmentHeight(50)
//     .range(['white', 'steelblue'])
//     .radialLabels([
//         'Novato', 
//         'Principiante',
//         'Competente',
//         'Proficiente',
//         'Experto'
//     ])
//     .segmentLabels([
//         'Internet',
//         'Backend',
//         'Programación',
//         'Control Versiones',
//         'HTML y A11y',
//         'CSS',
//         'Javascript',
//         'Testing',
//         'Performance',
//         'Devops',
//         'Arquitectura'
//     ]);
// var data = [];
// for(var i=0; i<55; i++) {
//     data[i] = Math.random();
// }
// d3.select('#chart3')
//     .selectAll('svg')
//     .data([data])
//     .enter()
//     .append('svg')
//     .call(chart);

const formData = {
    'Internet': [1,1,1,2,3],
    'Backend': [1,1,0,0,0],
    'Programación': [1,1,3,0,0],
    'Control Versiones': [1,1,2,3,0],
    'HTML y A11y': [1,1,1,2,3],
    'CSS': [1,1,1,2,3],
    'Javascript': [1,1,3,0,0],
    'Testing': [1,1,3,0,0],
    'Performance': [1,1,0,0,0],
    'Devops': [1,1,1,0,0],
    'Arquitectura': [1,3,0,0,0]
};

const skillsMap = SkillsMapChart();

skillsMap.innerRadius(50)
    .segmentHeight(50)
    .radialLabels([
        'Novato', 
        'Principiante',
        'Competente',
        'Proficiente',
        'Experto'
    ])
    .segmentLabels(
        Object.keys(formData),
    );
const data = Object.keys(formData)
    .reduce((data, value) => {
        return [ ...data, ...formData[value]]
    }, []);

d3.select('#chart-test')
    .selectAll('svg')
    .data([data])
    .enter()
    .append('svg')
    .call(skillsMap);
