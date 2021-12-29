import { Form, Input, Button, Result } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { AppState } from '../store/actions/reducers';
import { login } from '../store/actions/userActions';
import { LoginForm } from '../types/user';
import api from '../utils/api';
import showError from "../utils/showError";
import showSuccess from '../utils/showSuccess';

function Login() {

    const navi = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const { data, loading, error } = useSelector((state: AppState) => state.user);

    const onFinish = (values: LoginForm) => {
        dispatch(login(values));
    }

    useEffect(() => {
        error && showError(error)
    }, [error]);


    useEffect(() => {
        data.username && showSuccess("You have successfuly logged in!");
    }, [data.username]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            navi("/");
        }
    }, [data]);

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            /*    onFinishFailed={onFinishFailed} */
            autoComplete="off"
        >
            <h2 style={{ textAlign: "center", marginBottom: 40 }}>
                Please Login
            </h2>
            {location.state?.newSignUp &&
                (<Result
                    status="success"
                    title="You successfully signed up!"
                    subTitle="Please login using your credentials."
                />)
            }

            <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>


            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
}
export default Login;

