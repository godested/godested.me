import { getDateMonth, isSomething, optionalMap } from 'utils';

export function formatDates(
  dateStarted: Date,
  dateEnded: Date | string | undefined,
): string {
  return [
    formatDate(dateStarted),
    optionalMap(dateEnded, (endedAt) =>
      endedAt instanceof Date ? formatDate(endedAt) : endedAt,
    ),
  ]
    .filter(isSomething)
    .join(' - ');
}

export function formatDate(date: Date): string {
  return `${getDateMonth(date).substring(0, 3)} ${date.getFullYear()}`;
}

export function formatDuration(
  dateA: Date,
  dateB = new Date(Date.now()),
): string {
  const difference = Math.abs(dateA.getTime() - dateB.getTime());
  const mothsDifference = Math.floor(difference / 1000 / 60 / 60 / 24 / 30) + 1;

  const years = Math.floor(mothsDifference / 12);
  const months = mothsDifference % 12;

  return [
    years > 0 ? `${years} ${years > 1 ? 'yrs' : 'yr'}` : undefined,
    months > 0 ? `${months} ${months > 1 ? 'mos' : 'mon'}` : undefined,
  ]
    .filter(isSomething)
    .join(' ');
}
