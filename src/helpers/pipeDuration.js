export function pipeGenerator(minutes) {
    const hours = Math.floor(minutes / 60)
    const min = minutes % 60;

    return `${hours < 9 ? '0' : '' }${hours} : ${min < 9 ? '0' : '' }${min} hours`
}