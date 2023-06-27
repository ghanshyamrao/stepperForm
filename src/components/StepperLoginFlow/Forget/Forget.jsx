import { Form, Input, Button } from "antd";
import './forget.css'

const ForgotPassword = () => {
    const onFinish = (values) => {
        console.log("Form data:", values);
        // Perform logic or API call for password recovery
    };

    return (
        <div className="login">
            <div className="title">

                <div className="login2">Forget Password</div>

                <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-quam-duis-vitae-curabitur-amet-fermentum-lorem">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam duis
                    vitae curabitur amet, fermentum lorem.
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
                </div>
                <button htmlType="submit" className="button custom-button">
                    <div className="add-to-cart">Reset Password</div>
                </button>

                <div className="already-have-an-account-login">
                    Already have an account? Login
                </div>
            </Form>


        </div>
    );
};

export default ForgotPassword;
