import React from "react";
import AppLayout from "./components/appLayout";
import BigTextMessage from "./components/bigTextMessage";
import Profile from "./components/profile";
import Repositories from "./components/repositories";
import useGithub from "./hooks/github-hooks";

const App = () => {
	const { githubState } = useGithub();
	return (
		<AppLayout>
			{githubState.hasUser ? (
				<>
					{githubState.loading ? (
						<p>Loading</p>
					) : (
						<>
							<Profile />
							<Repositories />
						</>
					)}
				</>
			) : (
				<BigTextMessage message="Nenhum usuario pesquisado"/>
			)}
		</AppLayout>
	);
};

export default App;
