export const StatsTable = ({ users, stats }) => {
  const safeStats = Array.isArray(stats) ? stats : [];

  return (
    <div className="table-holder">
      <table className="stats-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>IP address</th>
            <th>Total clicks</th>
            <th>Total page views</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {users.map(user => {
            const userStatsRecords = safeStats.filter(
              el => Number(el.user_id || el.userId || el.id) === Number(user.id),
            );

            const clicks = userStatsRecords.reduce((sum, el) => sum + Number(el.clicks || 0), 0);
            const views = userStatsRecords.reduce((sum, el) => sum + Number(el.page_views || 0), 0);

            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.ip_address}</td>
                <td>{clicks}</td>
                <td>{views}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StatsTable;
