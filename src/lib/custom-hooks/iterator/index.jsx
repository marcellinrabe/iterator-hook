const useIterator = ({ begin = 0, end = null, step = 1 }) => {
    let nextIndex = begin;
    let iterationCount = 0;

    const rangeIterator = {
        next() {
            let result;
            if (nextIndex < end) {
                result = { value: nextIndex, done: false };
                nextIndex += step;
                iterationCount++;
                return result;
            }
            return { value: iterationCount, done: true };
        },
    };

    return rangeIterator;
};

export { useIterator };
