const BASE_URL = 'https://appco-snowy.vercel.app';

const USER_DATA_API = `${BASE_URL}/api/users`;
const STATS_API = `${BASE_URL}/api/users/statistics`;
const FETCH_ERROR_MESSAGE = 'Internal server error. Please try again later.';

export const fetchUsers = (page = 1, limit = 16) => {
  return fetch(`${USER_DATA_API}?page=${page}&count=${limit}`)
    .then(res => (res.ok ? res.json() : Promise.reject(FETCH_ERROR_MESSAGE)))
    .then(result => {
      return {
        users: result.data || [],
        totalPages: result.pagesCount || result.totalPages || 1,
      };
    })
    .catch(err => {
      console.error('fetchUsers error:', err);
      return { users: [], totalPages: 1 };
    });
};

export const fetchAllUsersStats = idsArray => {
  if (!idsArray || idsArray.length === 0) {
    return Promise.resolve([]);
  }

  return fetch(`${STATS_API}?userIds=${idsArray.join(',')}`)
    .then(res => (res.ok ? res.json() : Promise.reject(FETCH_ERROR_MESSAGE)))
    .then(result => {
      return result || [];
    })
    .catch(err => {
      console.error('fetchAllUsersStats error:', err);
      return [];
    });
};
