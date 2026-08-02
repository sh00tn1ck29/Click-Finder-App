import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@components/Header';
import Footer from '@components/Footer';
import StatsTable from '@components/StatsTable';
import Pagination from '@components/Pagination';
import Breadcrumbs from '@components/Breadcrumbs';
import { fetchUsers, fetchAllUsersStats } from '@components/StatsTable/gateways/index.js';

export const StatsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(63);
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const limit = 16;

  useEffect(() => {
    setIsLoading(true);

    fetchUsers(currentPage, limit).then(response => {
      if (response && response.users && response.users.length > 0) {
        setUsers(response.users);

        if (response.totalPages && response.totalPages > 0) {
          setTotalPages(response.totalPages);
        }

        const pageUserIds = response.users.map(u => u.id);

        fetchAllUsersStats(pageUserIds).then(statsList => {
          setStats(statsList);
          setIsLoading(false);
        });
      } else {
        setUsers([]);
        setStats([]);
        setIsLoading(false);
      }
    });
  }, [currentPage]);

  const handlePageChange = newPage => {
    setCurrentPage(newPage);
  };

  return (
    <>
      <Header isStatsPage={true} />

      <div id="linear-progress" className={isLoading ? '' : 'hidden'}>
        <div className="bar"></div>
      </div>

      <main className="stats">
        <div className="stats__container">
          <Breadcrumbs />

          <h1 className="stats__title">Users statistics</h1>

          <StatsTable users={users} stats={stats} />

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </main>

      <Footer isStatsPage={true} />
    </>
  );
};

export default StatsPage;
