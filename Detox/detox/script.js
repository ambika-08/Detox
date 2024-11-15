// Usage Chart with Animation
const ctx = document.getElementById('usageChart').getContext('2d');
const usageChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Goal 1', 'Goal 2', 'Goal 3', 'Actual 1', 'Actual 2'],
        datasets: [{
            label: 'Social Usage',
            data: [10, 20, 30, 45, 60],
            backgroundColor: ['#7fb5b5', '#7fb5b5', '#7fb5b5', '#2a5f5f', '#2a5f5f'],
            borderColor: '#4a6f70',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeOutBounce'
        }
    }
});