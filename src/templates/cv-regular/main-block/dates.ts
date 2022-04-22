import { getDateMonth, isNumber, isSomething } from 'utils';

export function formatDates(
  dateStarted: number,
  dateEnded: number | string | undefined,
): string {
  return [
    formatDateFromTimestamp(dateStarted),
    isNumber(dateEnded) ? formatDateFromTimestamp(dateEnded) : dateEnded,
  ]
    .filter(isSomething)
    .join(' - ');
}

export function formatDateFromTimestamp(timestamp: number): string {
  const date = new Date(timestamp);
  return `${getDateMonth(date).substring(0, 3)} ${date.getUTCFullYear()}`;
}

export function formatDuration(
  timestampA: number,
  timestampB = Date.now(),
): string {
  const difference = Math.abs(timestampA - timestampB);
  const mothsDifference = Math.floor(difference / 1000 / 60 / 60 / 24 / 30);

  const years = Math.floor(mothsDifference / 12);
  const months = (mothsDifference % 12) + 1;

  return [
    years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : undefined,
    `${months} ${months > 1 ? 'mos' : 'mon'}`,
  ]
    .filter(isSomething)
    .join(' ');
}
