import { zonedTimeToUtc } from 'date-fns-tz'

const getTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;
const getDate = (date: Date) => zonedTimeToUtc(date, getTimezone());
