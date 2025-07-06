import { useAuth } from "../context/AuthContext";

function xd() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <div>Access Denied</div>;
  } else {
    console.log("xd");
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("xd");
  };

  return <button onClick={onSubmit}>Pene</button>;
}

export default xd;
