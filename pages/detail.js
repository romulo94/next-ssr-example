import React from "react";
import axios from "axios";

import Link from "next/link";

import withAnalytics from "~/hocs/withAnalytics";

// import { Container } from './styles';

function Detail({ user }) {
  return (
    <div>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} alt="Avatar" width="200" />
      <Link href="/users">
        <a>Voltar</a>
      </Link>
    </div>
  );
}

Detail.getInitialProps = async ({ query }) => {
  const response = await axios.get(
    `https://api.github.com/users/${query.user}`
  );

  return { user: response.data };
};

export default withAnalytics()(Detail);
