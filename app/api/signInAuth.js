import axios from 'axios';

export default async function customAuth({ user }) {
	// const email = user.email;
	const userExistsResponse = await axios.get(
		`http://localhost:3001/users/${user.email}`,
	);
	if (!userExistsResponse.data) {
		// const password = nanoid();
		const newUser = {
			name: user.name,
			email: user.email,
			password: 'GoogleNextAuthPassword32',
		};
		await axios.post('http://localhost:3001/users', newUser);
	} else {
		const url = `password=GoogleNextAuthPassword32&email=${userExistsResponse.data.email}`;
		await axios.get(`http://localhost:3001/users/login?${url}`);
	}
}
