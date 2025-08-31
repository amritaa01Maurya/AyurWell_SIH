/**
 * Helper function to determine the Ayurvedic season from a JavaScript Date object.
 * @param {Date} date - The date to determine the season for.
 * @returns {string} The name of the season.
 */
const getSeason = (date) => {
    const month = new Date(date).getMonth(); // 0 for January, 11 for December

    // This mapping provides a general approximation of the Ayurvedic seasons.
    if (month >= 2 && month <= 4) return "Spring (Vasant)";   // Mar, Apr, May
    if (month >= 5 && month <= 6) return "Summer (Grishma)";  // Jun, Jul
    if (month >= 7 && month <= 8) return "Rainy (Varsha)";    // Aug, Sep
    if (month >= 9 && month <= 10) return "Autumn (Sharad)";  // Oct, Nov
    if (month === 11 || month === 0) return "Winter (Hemant)";// Dec, Jan
    return "Late Winter (Shishir)";                           // Feb
};

module.exports = {
    getSeason
};
