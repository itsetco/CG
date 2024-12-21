// Store the current chord components
let chord = {
    tonic: null,
    triad: null,
    fifth: null,
    tetrad: null,
    ninth: null,
    fourth: null,
    sixth: null,
};

// Function to select an option
function selectOption(category, option) {
    chord[category] = option === 'none' ? null : option; // If "none", set to null
    displayChord();            // Update the displayed chord
}

// Generate the chord string
function generateChordString() {
    const parts = [];
    if (chord.tonic) parts.push(chord.tonic); // Tonic
    if (chord.triad) parts.push(chord.triad); // Triad
    if (chord.fifth) parts.push(chord.fifth); // Fifth
    if (chord.tetrad) parts.push(chord.tetrad); // Tetrad
    if (chord.ninth || chord.fourth || chord.sixth) {
        if (chord.ninth) parts.push(chord.ninth);   // Ninth extension
        if (chord.fourth) parts.push(chord.fourth); // Fourth extension
        if (chord.sixth) parts.push(chord.sixth);   // Sixth extension
    }
    return parts.join(', '); // Join the parts into a chord string with commas
}

// Display the current chord
function displayChord() {
    const chordString = generateChordString();
    document.getElementById('chord-display').innerText = `Your Chord: ${chordString || '...'}`;
}

// Generate a random chord
function generateRandomChord() {
    const options = {
        tonic: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'none'],
        triad: ['sus2', 'b3', '3', 'sus4', 'sus#4', 'none'],
        fifth: ['5', 'b5', '#5', 'none'],
        tetrad: ['b7', 'maj7', 'none'],
        ninth: ['b9', '9', '#9', 'none'],
        fourth: ['11', '#11', 'none'],
        sixth: ['13', 'b13', 'none'],
    };

    // Randomly select an option from each category
    for (const category in options) {
        const randomIndex = Math.floor(Math.random() * options[category].length);
        chord[category] = options[category][randomIndex] === 'none' ? null : options[category][randomIndex]; // If "none", set to null
    }
    displayChord(); // Update the display
}

// Randomize a specific category
function randomizeCategory(category) {
    const options = {
        tonic: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'none'],
        triad: ['sus2', 'b3', '3', 'sus4', 'sus#4', 'none'],
        fifth: ['5', 'b5', '#5', 'none'],
        tetrad: ['b7', 'maj7', 'none'],
        ninth: ['b9', '9', '#9', 'none'],
        fourth: ['11', '#11', 'none'],
        sixth: ['13', 'b13', 'none'],
    };

    const randomIndex = Math.floor(Math.random() * options[category].length);
    chord[category] = options[category][randomIndex] === 'none' ? null : options[category][randomIndex]; // If "none", set to null
    displayChord(); // Update the display
}

// Reset the chord
function resetChord() {
    for (const key in chord) {
        chord[key] = null; // Clear all options
    }
    displayChord(); // Update the display
}
