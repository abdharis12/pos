export function formatNumber(
    value: number | string,
) {
    if (!value) {
        return '';
    }

    return Number(value).toLocaleString(
        'id-ID',
    );
}

export function parseNumber(
    value: string,
) {
    return Number(
        value.replace(/\./g, ''),
    );
}
