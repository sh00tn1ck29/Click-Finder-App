import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers, fetchAllUsersStats } from '../../entities/stats/gateways';
import { StatsHeader } from '../StatsHeader';
import { StatsTable } from '../StatsTable';
import { StatsFooter } from '../StatsFooter';
import { Pagination } from '../Pagination';

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
      <StatsHeader />

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

          <StatsTable usersData={usersData} />

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={page => setCurrentPage(page)}
          />
        </div>
      </main>

      <StatsFooter />
    </>
  );
};
