/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  return userInfo && userInfo.isAdmin ? (
    children
  ) : (
    <Navigate to='/login' replace />
  );
};

export default AdminRoute;
