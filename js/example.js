var chart = circularHeatChart()

/* Labels */
chart.innerRadius(50)
    .segmentHeight(50)
    .range(['white', 'steelblue'])
    .radialLabels([
        'Novice', 
        'Advanced begin',
        'Competent',
        'Proficient',
        'Expert'
    ])
    .segmentLabels([
        'Internet',
        'Backend',
        'Programación',
        'Control Versiones',
        'HTML y A11y',
        'CSS',
        'Javascript',
        'Testing',
        'Performance',
        'Devops',
        'Arquitectura'
    ]);
var data = [];
for(var i=0; i<55; i++) {
    data[i] = Math.random();
}
d3.select('#chart3')
    .selectAll('svg')
    .data([data])
    .enter()
    .append('svg')
    .call(chart);
