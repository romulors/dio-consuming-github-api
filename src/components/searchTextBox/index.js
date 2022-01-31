import React from 'react';
import * as S from "./styled";

const SearchTextBox = (props) => {

	function handleChange (eventKeyChanged) {
		props.onChange(eventKeyChanged.target.value);
	}

	function handleKeyPress (eventKeyPressed) {
		if(eventKeyPressed.key === 'Enter')
		{
			props.onKeyPress();
		}
	}

	return (
		<S.SearchTextBoxStyle>
			<input
				type="text"
				placeholder="Digite o username para pesquisa..."
				onChange={(eventChange) => handleChange(eventChange)}
				onKeyPress={(eventKeyPress) =>handleKeyPress(eventKeyPress)}
			/>
		</S.SearchTextBoxStyle>
	);
};

export default SearchTextBox;