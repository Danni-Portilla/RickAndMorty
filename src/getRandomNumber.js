export const getRandomNumber = (minimum, maximum) => {
    const amplitude = maximum - minimum;
    const random = Math.random() * amplitude;
    return minimum + Math.round(random);
}