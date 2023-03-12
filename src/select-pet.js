import axios from 'axios'

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4Mzk2NDg1LCJpYXQiOjE2NzgzOTQ2ODUsImp0aSI6ImE5MzBhYTIxZWZmNzQxZmVhOTFkZmFjOWU0YzgyZGUxIiwidXNlcl9pZCI6MX0.3RM8J4wAD8nPP5UeVmWdjB7aOGGzzOxZMH9mIGI7dtE"

const config = {
    headers: { Authorization: `Bearer ${token}` }
};
const baseURL = `${process.env.REACT_APP_DB_URL}/tasks/`

const petselection = () => {
    const request = axios.post(baseURL, pet, config)
}

export default petselection