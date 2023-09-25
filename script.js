var data = {
    'total_matches_last_30_days': [4, 6, 8, 10, 12],
    'age': [25, 28, 30, 32, 35],
    'weight': [70, 75, 80, 85, 90],
    'fitness_level': [8, 7, 9, 6, 8],
    'injured': [0, 0, 0, 1, 1]
};

function sigmoid(z) {
    return 1 / (1 + Math.exp(-z));
}

function predict(features) {
    // Model parameters based on a trained logistic regression model
    var modelParams = [-5.21315612,  0.23277084,  0.14344451,  0.08739442,  0.17189524];
    var z = modelParams[0];
    for (var i = 0; i < features.length; i++) {
        z += features[i] * modelParams[i + 1];
    }
    return sigmoid(z) >= 0.5 ? 1 : 0;
}

function predictInjury() {
    var totalMatches = parseInt(document.getElementById('total_matches').value);
    var age = parseInt(document.getElementById('age').value);
    var weight = parseInt(document.getElementById('weight').value);
    var fitnessLevel = parseInt(document.getElementById('fitness_level').value);

    var features = [1, totalMatches, age, weight, fitnessLevel]; // Adding a bias term

    var predictedInjury = predict(features);

    displayResult(predictedInjury);
}

function displayResult(predictedInjury) {
    var resultElement = document.getElementById('result');
    if (predictedInjury === 1) {
        resultElement.innerText = 'The player is predicted to get injured.';
    } else {
        resultElement.innerText = 'The player is predicted to not get injured.';
    }
}
