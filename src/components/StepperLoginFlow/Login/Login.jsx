/* Code generated with AutoHTML Plugin for Figma */
import { Checkbox, Form, Input } from "antd";
import "./Login.css";

const Login = ({onSwitchForm}) => {
    const onFinish = (values) => {
        console.log("Form data:", values);
        // Perform login logic or API call with the form data
      };

    return (
        <div className="login">
            <div className="title">
           
                <div className="login2">Login</div>

                <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-quam-duis-vitae-curabitur-amet-fermentum-lorem">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam duis
                    vitae curabitur amet, fermentum lorem.
                </div>
            </div>

            <div className="social-login">
                <div className="apple">
                    <svg
                        className="group"
                        width="20"
                        height="24"
                        viewBox="0 0 20 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.5499 12.7504C16.5836 16.3824 19.736 17.591 19.771 17.6065C19.7443 17.6917 19.2673 19.3289 18.1101 21.0199C17.1098 22.482 16.0716 23.9386 14.4362 23.9688C12.8292 23.9984 12.3124 23.0159 10.4752 23.0159C8.63846 23.0159 8.06433 23.9386 6.54313 23.9984C4.9645 24.0582 3.76239 22.4174 2.75377 20.9608C0.692767 17.9811 -0.882264 12.5409 1.2326 8.86873C2.28322 7.0451 4.16076 5.8903 6.19867 5.86069C7.74884 5.83112 9.21202 6.9036 10.1597 6.9036C11.1067 6.9036 12.8848 5.61385 14.754 5.80327C15.5365 5.83584 17.7331 6.11936 19.1435 8.18392C19.0299 8.25437 16.5226 9.71399 16.5499 12.7504M13.5297 3.83196C14.3678 2.81747 14.9319 1.4052 14.778 0C13.5699 0.0485534 12.1091 0.805022 11.2426 1.81896C10.466 2.71684 9.78593 4.15397 9.96943 5.53135C11.316 5.63553 12.6915 4.8471 13.5297 3.83196"
                            fill="black"
                        />
                    </svg>
                </div>

                <div className="facebook">
                    <div className="facebook-1">
                        <svg
                            className="group2"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.38823 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9165 4.6875 14.6576 4.6875C15.9705 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.3399 7.875 13.875 8.80001 13.875 9.74899V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                                fill="#1877F2"
                            />
                            <path
                                d="M16.6711 15.4688L17.2031 12H13.875V9.74899C13.875 8.80001 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9165 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.7359 23.9501 11.3621 24 12 24C12.6379 24 13.2641 23.9501 13.875 23.8542V15.4688H16.6711Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>

                <div className="google">
                    <svg
                        className="group3"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M23.7602 12.2666C23.7602 11.2799 23.6802 10.5599 23.5069 9.81329H12.2402V14.2666H18.8535C18.7202 15.3733 18.0002 17.0399 16.4002 18.1599L16.3778 18.309L19.9401 21.0687L20.1869 21.0933C22.4535 18.9999 23.7602 15.9199 23.7602 12.2666Z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12.2391 23.9999C15.479 23.9999 18.199 22.9332 20.1857 21.0933L16.399 18.1599C15.3857 18.8666 14.0257 19.3599 12.2391 19.3599C9.06576 19.3599 6.37245 17.2666 5.41236 14.3733L5.27163 14.3852L1.56748 17.2519L1.51904 17.3866C3.49236 21.3065 7.5457 23.9999 12.2391 23.9999Z"
                            fill="#34A853"
                        />
                        <path
                            d="M5.41327 14.3733C5.15994 13.6266 5.01333 12.8266 5.01333 11.9999C5.01333 11.1732 5.15994 10.3732 5.39994 9.62658L5.39323 9.46756L1.64267 6.55484L1.51996 6.61321C0.706662 8.2399 0.23999 10.0666 0.23999 11.9999C0.23999 13.9333 0.706662 15.7599 1.51996 17.3866L5.41327 14.3733Z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12.2391 4.63997C14.4924 4.63997 16.0123 5.6133 16.879 6.42669L20.2657 3.12C18.1858 1.18667 15.479 0 12.2391 0C7.5457 0 3.49236 2.69331 1.51904 6.61328L5.39903 9.62666C6.37245 6.73333 9.06576 4.63997 12.2391 4.63997Z"
                            fill="#EB4335"
                        />
                    </svg>
                </div>
            </div>

            <div className="seperator">
                <div className="line-13"></div>

                <div className="mini-title-contaier">
                    <div className="title2">OR</div>
                </div>
            </div>

            <Form className="form" onFinish={onFinish}>
                <div className="input-group">
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
                </div>

                <div className="check-box">
                    <Form.Item
                        name="checkbox"
                        valuePropName="checked"
                    >
                        <Checkbox className="main-checkbox"><span  className="remember-me"> Remember me</span></Checkbox>
                       
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

export default Login;
