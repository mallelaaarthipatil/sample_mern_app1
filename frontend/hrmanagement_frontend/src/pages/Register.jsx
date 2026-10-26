import { useState } from 'react';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const req = await fetch('http://localhost:3000/api/emp/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    password,
                    role
                })
            });

            const data = await req.json();

            if (req.ok) {
                console.log('Data inserted successfully');
                console.log(data);
            } else {
                console.log('Registration failed');
                console.log(data);
            }
        } catch (error) {
            console.error('Server connection error:', error);
        }
    };

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={handleRegister}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                />
                <br />

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                />
                <br />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    required
                />
                <br />

                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                >
                    <option value="">Choose role</option>
                    <option value="hr">HR</option>
                    <option value="employee">Employee</option>
                </select>
                <br />

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Register;