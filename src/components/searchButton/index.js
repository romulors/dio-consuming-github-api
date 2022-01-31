import React from 'react';
import * as S from "./styled";

const SearchButton = (props) => {

	function handleClick () {
		props.onClick();
	}

	return (
		<S.SearchButtonStyle>
		<button type="submit" onClick={handleClick}>
			<span>Buscar</span>
		</button>
		</S.SearchButtonStyle>
	);
};

export default SearchButton;