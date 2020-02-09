import btoa from 'btoa';
const memo: { [key: string]: any } = {};

export function memoize(func: Function) {
    return (...args: any) => {
        const key = btoa(JSON.stringify(args) + func.toString());

        if (key in memo) {
            return memo[key];
        } else {
            const value = func(...args);
            memo[key] = value;

            return memo[key];
        }
    };
}
