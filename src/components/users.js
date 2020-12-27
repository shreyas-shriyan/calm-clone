let data = [{
    labels: ['0:00-2:00', '2:00-4:00', '4:00-6:00', '6:00-8:00', '8:00-10:00', '10:00-12:00', '12:00-14:00', '14:00-16:00', '16:00-18:00', '18:00-20:00', '20:00-22:00', '22:00-24'],
    datasets: [
        {
            label: "mood",
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [1, 5, 3, 4, 2, 4, 1, 3, 4, 2, 1, 4, 3, 2]
        }
    ]
}, {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
    datasets: [
        {
            label: "mood",
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [2, 4, 3, 4, 2, 4, 1, 2, 5, 3, 5, 2, 4, 1, 3, 5, 3, 4, 2, 4, 3, 1, 5, 4, 3, 2, 4, 1, 3, 5]
        }
    ]
}, {
    labels: ["1st week", "2nd week", "3rd week", "4th week", "5th week", "6th week", "7th week", "8th week", "9th week", "10th week", "11th week", "12th week"],
    datasets: [
        {
            label: "mood",
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [2, 4, 3, 4, 2, 4, 1, 2, 5, 3, 5, 2]
        }
    ]
}, {
    labels: ["1st week", "2nd week", "3rd week", "4th week", "5th week", "6th week", "7th week", "8th week", "9th week", "10th week", "11th week", "12th week", "13th week", "14th week", "15th week", "16th week", "17th week", "18th week", "19th week", "20th week", "21st week", "22nd week", "23rd week", "24th week"],
    datasets: [
        {
            label: "mood",
            fill: false,
            lineTension: 0.5,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [2, 4, 3, 4, 2, 4, 1, 2, 5, 3, 5, 2, 4, 1, 3, 5, 3, 4, 2, 4, 3, 1, 5, 4, 3, 2, 4, 1, 3, 5]
        }
    ]
}]

module.exports = data