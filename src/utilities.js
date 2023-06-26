export function formatMoney(number) {
    return  number.toLocaleString(undefined, {
        style: "currency",
        currency: "usd",
    });
}
export function formatPercent(number) {
    return  number.toLocaleString(undefined, {
        style: "percent",
    });
}
