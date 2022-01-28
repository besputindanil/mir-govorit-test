import {parseISO,format, formatDuration, add, intervalToDuration } from "date-fns";
import {ru} from "date-fns/locale";

export const formatDate = (date, template = 'dd MMM') => format(parseISO(date), template, {locale: ru})

export const createFormattedDuration = (duration, options) => {
    return formatDuration(duration, {...options, locale: ru})
}

export const getDuration = (date, options) => {
    const start = parseISO(date)
    const end = add(start, options)
    return intervalToDuration({start,end})
}

