import axios from 'axios';

export default async function customAuth({ user }) {
	const userExistsResponse = await axios.get(
		`http://localhost:3001/users/authNew/${user.email}`,
	);

	if (!userExistsResponse.data) {
		const newUserInfo = {
			name: user.name,
			email: user.email,
			password: 'GoogleNextAuthPassword32',
		};
		await axios.post('http://localhost:3001/users', newUserInfo);
	}
}
