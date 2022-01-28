import {parseISO,format} from "date-fns";
import {ru} from "date-fns/locale";

export const formatDate = (date, template = 'dd MMM') => format(parseISO(date), template, {locale: ru})