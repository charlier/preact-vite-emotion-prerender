import { hydrate, prerender as ssr } from 'preact-iso';
import styled from '@emotion/styled';

const Heading = styled.h1`
    display: inline-block;
	font-size: 18px;
	line-height: 24px;
	background-color: #008f68;
	color: #fae042;
`;

export function App() {
	return (
		<Heading>Heading with a green background and yellow text.</Heading>
	);
}

if (typeof window !== 'undefined') {
	hydrate(<App />, document.getElementById('app'));
}

export async function prerender(data) {
	return await ssr(<App {...data} />);
}
