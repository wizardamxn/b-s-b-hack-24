const points = {
    "q1": {
        "biology": 5,
        "chemistry": 4,
        "physics": 3,
        "earth": 2,
        "astronomy": 1,
        "technology": 0
    },
    "q2": {
        "q21": 5,
        "q22": 3,
        "q23": 4
    },
    "q3": {
        "q31": 5,
        "q32": 3,
        "q33": 2
    },
    "q4": {
        "q41": 5,
        "q42": 4,
        "q43": 2,
        "q44": 1,
        "q45": 3
    },
    "q5": {
        "q51": 4,
        "q52": 5,
        "q53": 3,
        "q54": 2,
        "q55": 1
    },
    "q6": {
        "q61": 4,
        "q62": 2,
        "q63": 5,
        "q64": 3
    },
    "q7": {
        "q71": 5,
        "q72": 3,
        "q73": 2,
        "q74": 1
    },
    "q8": {
        "q81": 2,
        "q82": 3,
        "q83": 4
    },
    "q9": {
        "q91": 5,
        "q92": 4,
        "q93": 2,
        "q94": 1
    },
    "q10": {
        "q101": 5,
        "q102": 3,
        "q103": 1,
        "q104": 4,
        "q105": 2
    },
    "q11": {
        "q111": 5,
        "q112": 4,
        "q113": 3,
        "q114": 2,
        "q115": 1
    },
    "q12": {
        "q121": 5,
        "q122": 3,
        "q123": 1
    },
    "q13": {
        "q131": 5,
        "q132": 3,
        "q133": 4
    },
    "q14": {
        "q141": 5,
        "q142": 4,
        "q143": 3,
        "q144": 2
    }
};

const form = document.forms["surveyForm"];

// Loop through the questions and calculate the score
for (const [question, answerValues] of Object.entries(points)) {
    const answer = form[question]?.value;  // Use optional chaining to avoid errors
    if (answer && answerValues[answer] !== undefined) {
        score += answerValues[answer];
    }
}

// Determine the result based on score
if (score >= 20) {
    resultText = "You might be interested in a career in Biology!";
} else if (score >= 15) {
    resultText = "Consider a career in Chemistry!";
} else {
    resultText = "Explore different fields to find your interest!";
}

document.getElementById("result").innerText = resultText;
