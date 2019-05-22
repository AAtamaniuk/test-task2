import React from 'react';
import UserInput from "./UserForm";

const UserColumn = ({data, setUserId, userId}) => {
  return (
    <div className="UserColumn">
      <UserInput/>
      {data.map(user => <div
        key={user.id}
        className={`Cell${user.id === userId ? " Cell--selected" : ""}`}
        onClick={() => setUserId(user.id)}
      >
        {user.name}
      </div>)}
    </div>
  );
};

export default UserColumn;
