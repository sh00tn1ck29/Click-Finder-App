const range = (start, end) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

export const getPaginationRange = (currentPage, totalPages) => {
  const total = Math.max(1, Number(totalPages) || 1);
  const current = Math.max(1, Math.min(Number(currentPage) || 1, total));

  if (total <= 7) {
    return range(1, total);
  }

  if (current <= 4) {
    return [...range(1, 5), '...', total];
  }

  if (current >= total - 3) {
    return [1, '...', ...range(total - 4, total)];
  }

  return [1, '...', current - 1, current, current + 1, '...', total];
};
