import React from "react";
import { Card, CardBody } from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="text-center mt-3 mb-4">
      <img
        src={user.avatar_url}
        className="img-fluid  img-thumbnail rounded fluid img-circle"
        alt="User Avatar"
      />
      <CardBody>
        <div className="text-primary">
          USERNAME: <b>{user.name}</b>
        </div>
        <div className="text-success">
          No of Repos: <b>{user.public_repos}</b>
        </div>
        <div className="text-primary">Followers: {user.followers}</div>
        <div className="text-primary">Follows: {user.following}</div>
        <div className="text-primary">
          Bolg:
          <a href={user.blog} target="_blank" rel="noopener noreferrer">
            {user.blog}
          </a>{" "}
        </div>
        <div className="text-danger">
          Looking for job: <b>{user.hireable ? "YES" : "NO"}</b>
        </div>
      </CardBody>
    </Card>
  );
};
export default UserCard;
