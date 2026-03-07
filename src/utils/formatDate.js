import { format, parseISO } from 'date-fns';

export function formatDate(dateString, formatStr = 'MMMM d, yyyy') {
    try {
        return format(parseISO(dateString), formatStr);
    } catch {
        return dateString;
    }
}
