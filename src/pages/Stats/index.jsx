import { useState, useEffect } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';
import StatsTable from '@components/StatsTable';
import Pagination from '@components/Pagination';
import Breadcrumbs from '@components/Breadcrumbs';
import { fetchUsers, fetchAllUsersStats } from '@components/StatsTable/gateways/index.js';

export const StatsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [tableData, setTableData] = useState({
    users: [],
    stats: [],
    totalPages: 63,
  });

  const limit = 16;

  useEffect(() => {
    setIsLoading(true);

    fetchUsers(currentPage, limit).then(response => {
      if (response && response.users && response.users.length > 0) {
        const pageUserIds = response.users.map(u => u.id);

        fetchAllUsersStats(pageUserIds).then(statsList => {
          setTableData({
            users: response.users,
            stats: statsList,
            totalPages: response.totalPages && response.totalPages > 0 ? response.totalPages : 63,
          });
          setIsLoading(false);
        });
      } else {
        setTableData(prev => ({
          ...prev,
          users: [],
          stats: [],
        }));
        setIsLoading(false);
      }
    });
  }, [currentPage]);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Header isStatsPage />

      <div id="linear-progress" className={isLoading ? '' : 'hidden'}>
        <div className="bar" />
      </div>

      <main className="stats">
        <div className="stats__container">
          <Breadcrumbs />

          <h1 className="stats__title">Users statistics</h1>

          <StatsTable users={tableData.users} stats={tableData.stats} />

          <Pagination
            totalPages={tableData.totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </main>

      <Footer isStatsPage />
    </>
  );
};

export default StatsPage;
