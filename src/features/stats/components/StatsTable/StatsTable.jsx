import React from 'react';
import './_stats-table.scss';

export const StatsTable = ({ usersData }) => {
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
        <tbody>
          {usersData.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.email}</td>
              <td>{user.gender}</td>
              <td>{user.ip_address}</td>
              <td>{user.clicks}</td>
              <td>{user.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
