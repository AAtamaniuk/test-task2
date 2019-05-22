import * as React from "react";
import { connect } from "react-redux";
import { fetchData, setUserId, deleteHobby } from "../redux/users.actions";
import { getUserHobbies } from "../redux/users.reducer";
import UserColumn from "./UserColumn";
import HobbyColumn from "./HobbyColumn";

function App({
  fetchData,
  data,
  isLoading,
  isError,
  userId,
  setUserId,
  hobbies,
  deleteHobby
}) {
  React.useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Something goes wrong, try to reload the page</h1>;

  return (
    <div className="App">
      <h1>User hobbies</h1>
      <div className="Table">
        <UserColumn data={data} setUserId={setUserId} userId={userId} />
        <HobbyColumn
          isUserSelected={userId !== null}
          hobbies={hobbies}
          onDelete={deleteHobby}
        />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.users.data,
    isLoading: state.users.isLoading,
    isError: state.users.isError,
    userId: state.users.activeUser,
    hobbies: getUserHobbies(state)
  };
};

export default connect(
  mapStateToProps,
  { fetchData, setUserId, deleteHobby }
)(App);
