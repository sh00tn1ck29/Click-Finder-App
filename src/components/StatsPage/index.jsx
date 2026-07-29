import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import StatsHeader from '../StatsHeader';
import StatsFooter from '../StatsFooter';
import StatsTable from '../StatsTable';
import Pagination from '../Pagination';
import { fetchUsers, fetchAllUsersStats } from '../../entities/stats/gateways/index.js';

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
        setTotalPages(response.totalPages);

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
      <StatsHeader />

      {/* Лоадер */}
      <div id="linear-progress" className={isLoading ? '' : 'hidden'}>
        <div className="bar"></div>
      </div>

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

          <StatsTable users={users} stats={stats} />

          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </main>

      <StatsFooter />
    </>
  );
};

export default StatsPage;
