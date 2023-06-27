import { Checkbox, Form, Input, Select, DatePicker, Button } from "antd";
import "./Register.css";
import { FlagOutlined } from "@ant-design/icons";

const { Option } = Select;

const Register = ({ onSwitchForm }) => {
    const onFinish = (values) => {
        console.log("Form data:", values);
        // Perform registration logic or API call with the form data
    };

    return (
        <div className="login">
            <div className="title">

                <div className="login2">Welcome</div>

                <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-quam-duis-vitae-curabitur-amet-fermentum-lorem">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam duis
                    vitae curabitur amet, fermentum lorem.
                </div>
            </div>

            <Form className="form" onFinish={onFinish}>
                <div className="input-group">

                    <div className="multi-input">
                        <div className="input">
                            <div className="input-title-section">
                                <div className="input-section">
                                    <div className="base-input-rounded-not-selected"></div>

                                    <div className="frame-185">
                                        <div className="input-items-group">
                                            <Form.Item
                                                name="firstName"

                                            >
                                                <Input
                                                    className="placeholder"
                                                    placeholder="Your name"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>

                                    <div className="mini-title-contaier2">
                                        <div className="title3">First name</div>
                                    </div>
                                </div>
                            </div>
                        </div><div className="input">
                            <div className="input-title-section">
                                <div className="input-section">
                                    <div className="base-input-rounded-not-selected"></div>

                                    <div className="frame-185">
                                        <div className="input-items-group">
                                            <Form.Item
                                                name="lastName"
                                            >
                                                <Input
                                                    className="placeholder"
                                                    placeholder="Your Last name"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>

                                    <div className="mini-title-contaier2">
                                        <div className="title3">Last Name</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="input">
                        <div className="input-title-section">
                            <div className="input-section">
                                <div className="base-input-rounded-not-selected"></div>

                                <div className="frame-185">
                                    <div className="input-items-group">
                                        <Form.Item
                                            name="email"

                                        >
                                            <Input
                                                className="placeholder"
                                                placeholder="yourmail@gmail.com"
                                            />
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className="mini-title-contaier2">
                                    <div className="title3">Email</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="input">
                        <div className="input-title-section">
                            <div className="input-section">
                                <div className="base-input-rounded-not-selected"></div>

                                <div className="frame-185">
                                    <div className="input-items-group">

                                        <Form.Item
                                            name="password"

                                        >
                                            <Input.Password
                                                style={{ width: '100%' }}
                                                className="placeholder"
                                                placeholder="Enter your password"
                                            />
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className="mini-title-contaier2">
                                    <div className="title3">Passwrod</div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="input">
                        <div className="input-title-section">
                            <div className="input-section">
                                <div className="base-input-rounded-not-selected"></div>

                                <div className="frame-185">
                                    <div className="input-items-group">
                                        <Form.Item
                                            name="city"
                                        >
                                            <Select
                                                className="placeholder custom-select"
                                                placeholder="Select your city"
                                            >
                                                <Option value="city1">City 1</Option>
                                                <Option value="city2">City 2</Option>
                                                <Option value="city3">City 3</Option>
                                                {/* Add more city options as needed */}
                                            </Select>
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className="mini-title-contaier2">
                                    <div className="title3">City</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="input">
                        <div className="input-title-section">
                            <div className="input-section">
                                <div className="base-input-rounded-not-selected"></div>
                                <div className="frame-185">
                                    <div className="input-items-group">
                                        <Form.Item
                                            name="birthday"

                                        >
                                            <DatePicker
                                                className="date-picker"
                                                placeholder="DD / MM / YYYY"
                                                format="YYYY-MM-DD"
                                            />
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="mini-title-contaier2">
                                    <div className="title3">Birthday</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="input">
                        <div className="input-title-section">
                            <div className="input-section">
                                <div className="base-input-rounded-not-selected"></div>
                                <div className="frame-185">
                                    <div className="input-items-group">
                                        <Form.Item
                                            name="nationality"
                                        >
                                            <Select
                                                className="placeholder custom-select"
                                                placeholder="Select your nationality"
                                            >
                                                <Option value="country1">
                                                    <span className="flag-icon">
                                                        <FlagOutlined />
                                                    </span>
                                                    Country 1
                                                </Option>
                                                <Option value="country2">
                                                    <span className="flag-icon">
                                                        <FlagOutlined />
                                                    </span>
                                                    Country 2
                                                </Option>
                                                <Option value="country3">
                                                    <span className="flag-icon">
                                                        <FlagOutlined />
                                                    </span>
                                                    Country 3
                                                </Option>
                                                {/* Add more country options as needed */}
                                            </Select>
                                        </Form.Item>
                                    </div>
                                </div>
                                <div className="mini-title-contaier2">
                                    <div className="title3">Nationality</div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="check-box">
                    <Form.Item
                        name="checkbox"
                        valuePropName="checked"
                    >
                        <Checkbox className="main-checkbox"><span className="remember-me"> Remember me</span></Checkbox>

                    </Form.Item>
                </div>

                <div className="forgot-password custom-button">Forgot password?</div>
                <button htmlType="submit" className="button">
                    <div className="add-to-cart">Enter</div>
                </button>
            </Form>
        </div>
    );
};

export default Register;
