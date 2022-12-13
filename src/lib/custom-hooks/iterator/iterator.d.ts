type params = {
    begin: number;
    end: number | null;
    step: number;
};

type iterable = {
    value: any;
    done: boolean;
};

declare function useIterator(params: params): iterable;

module.exports = {
    useIterator,
};
