import React, { useState } from "react";
import SearchButton from '../searchButton';
import SearchTextBox from "../searchTextBox";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

const SearchComponent = () => {
	const { getUser } = useGithub();
	//Salva o valor digitado na caixa de busca
	const [userName, setUserName] = useState();

	function handleTextChange(newValue) {
		setUserName(newValue);
	}

	function handleKeyPress() {
		handleClick();
	}

	function handleClick() {
		if (!userName) return;
		return getUser(userName);
	};

	return (
		<S.SearchComponentStyle>
			<SearchTextBox onChange={handleTextChange} onKeyPress={handleKeyPress} />
			<SearchButton onClick={handleClick}/>
		</S.SearchComponentStyle>
	);
};
export default SearchComponent;
