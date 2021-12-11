import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, withRouter, NavLink } from 'react-router-dom';
import { attemptToGetCategories } from '../../store/actions/categories'

function Sidebar(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();
  const { categories } = useSelector((state: any) => state.categories);
  const state = useSelector((state: any) => state);

  useEffect(() => {
    dispatch(attemptToGetCategories());
  }, [])
  return (
    <div style={{ minWidth: '200px', minHeight: '100vh', background: 'lightgray' }}>
      <ul>
        {categories?.map(value => {
          return <>
            <NavLink style={{display: 'block'}} key={value.id} to={`/${value.id}`} >{value.name}</NavLink>
          </>
        })}
      </ul>
    </div>
  );
}

export default Sidebar;
