import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers, fetchAllUsersStats } from '../common/gateways/index.js';
import { Pagination } from '../components/Pagination/Pagination';

export const StatsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const limit = 16;

  useEffect(() => {
    setIsLoading(true);

    fetchUsers(currentPage, limit)
      .then(response => {
        if (response && response.users && response.users.length > 0) {
          setTotalPages(response.totalPages);
          const pageUserIds = response.users.map(u => u.id);

          return fetchAllUsersStats(pageUserIds).then(statsList => {
            const safeStats = Array.isArray(statsList) ? statsList : [];

            const combinedData = response.users.map(user => {
              const userStatsRecords = safeStats.filter(
                el => Number(el.user_id || el.userId || el.id) === Number(user.id),
              );

              const clicks = userStatsRecords.reduce((sum, el) => sum + Number(el.clicks || 0), 0);
              const views = userStatsRecords.reduce(
                (sum, el) => sum + Number(el.page_views || 0),
                0,
              );

              return { ...user, clicks, views };
            });

            setUsersData(combinedData);
          });
        } else {
          setUsersData([]);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage]);

  return (
    <>
      <header className="header header--bg">
        <div className="header__container">
          <div className="header__bottom">
            <div className="header__text header--size">ClickFinder</div>
          </div>
        </div>
      </header>

      {isLoading && (
        <div id="linear-progress">
          <div className="bar"></div>
        </div>
      )}

      <main className="stats">
        <div className="stats__container">
          <nav className="crumbs stats__crumbs">
            <Link to="/" className="crumbs__link">
              Main page
            </Link>
            <span className="crumbs__sep">›</span>
            <span className="crumbs__current">User statistics</span>
          </nav>

          <h1 className="stats__title">Users statistics</h1>

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

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={page => setCurrentPage(page)}
          />
        </div>
      </main>

      <footer className="footer footer--bg">
        <section className="footer__bottom footer__bottom--size">
          <p className="footer__logo logo footer--size">ClickFinder</p>
          <p className="footer__rights footer__rights--size">All rights reserved by ThemeTags</p>
          <p className="footer__copyright">Copyrights © 2025</p>
        </section>
      </footer>
    </>
  );
};
