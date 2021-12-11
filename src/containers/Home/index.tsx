import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { attemptToGetCats } from '../../store/actions/categories'

function Sidebar(): JSX.Element {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state);
  const id = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);
  const [limit, setLimit] = useState(10);

  useEffect(() => {
    if (id) {
      dispatch(attemptToGetCats({ limit, id }));
    }
  }, [limit, id])

  return (
    <div>
      {state?.categories?.cats?.map(value => {
        return <img width={100} height={100} src={value.url} alt="" style={{ objectFit: 'cover', margin: '20px' }} />
      })}
      <br />
      {id && <button style={{
        background: '#4CAF50',
        border: 'none',
        color: 'white',
        padding: '15px 32px',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: ' 16px',
        margin: '4px 2px',
        cursor: ' pointer',
      }} onClick={() => setLimit(limit + 10)}>Add</button>}
    </div>
  );
}

export default Sidebar;
