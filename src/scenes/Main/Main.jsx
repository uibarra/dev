import React from 'react';
import styled from 'styled-components';
import { SCREEN_MAX } from './../../util/screen';

function Main() {
	return (
		<MainWrapper>
			<InnerWrapper>
				<Name>{'Ulises'}</Name>
			</InnerWrapper>
		</MainWrapper>
	);
}

export { Main };

const MainWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

const InnerWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	flex: 1 1 100%;
	background: url('./main_bg.jpg') center center no-repeat;
	box-shadow: inset 0px 0px 40px 40px #131313;

	@media only screen and (max-width: ${SCREEN_MAX.xs}) {
		background: url(./main_bg.jpg) right center no-repeat;
	}
`;

const Name = styled.h1`
	font-family: Pacifico, cursive;
	font-size: 3rem;
	color: ${props => props.theme.nameText};
	text-shadow: ${props => props.theme.nameTextShadow};
	padding: 1rem 4rem;

	@media only screen and (max-width: ${SCREEN_MAX.xs}) {
		font-size: 3rem;
		padding: 1rem 1.75rem;
	}
`;
