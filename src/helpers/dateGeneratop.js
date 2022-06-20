export function dateGenerator(minutes) {
    const hours = Math.floor(minutes / 60)
    const min = minutes % 60;

    const date = {
        hours,
        min
    }

    return date
}