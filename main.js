// Heat Index Checker
function checkHeatIndex() {
    let temperature = document.getElementById('input1').value;
    let humidity = document.getElementById('input2').value;
    let heatindex = temperature + (0.33 * humidity) - 4;

    // Heat Index Checker
    if (temperature >= 20 && temperature < 25 && humidity >= 30 && humidity < 51) {
        window.alert('Heat Index: ≤ 27. Status: Comfortable/Cool');
    } else if (temperature >= 25 && temperature < 28 && humidity >= 40 && humidity < 61) {
        window.alert('Heat Index: 28-32. Status: Warm');
    } else if (temperature >= 28 && temperature < 32 && humidity >= 50 && humidity < 71) {
        window.alert('Heat Index: 33-37. Status: Hot');
    } else if (temperature >= 32 && temperature < 36 && humidity >= 60 && humidity < 81) {
        window.alert('Heat Index: 38-41. Status: Very Hot/Caution');   
    } else if (temperature >= 36 && humidity >= 70 && humidity < 101) {
        window.alert('Heat Index: ≥ 42. Status: Extreme Heat/Danger');
    } else {
        window.alert('Invalid');
    }
}
