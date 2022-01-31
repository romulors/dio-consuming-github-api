import styled from "styled-components";

export const SearchButtonStyle = styled.div`
button {
    background-color: rgb(50,130,130);
    padding: 8px 16px;
    margin: 5px 16px;
    border-radius: 8px;

    &:hover {
      background-color: rgb(50,80,130);
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

	span {
		background: transparent;
		text-color: rgb(230,230,230);
	}
`;