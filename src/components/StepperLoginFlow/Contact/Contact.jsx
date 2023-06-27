import { Form, Input, Button } from "antd";
import './contact.css'

const Contact = () => {
    const onFinish = (values) => {
        console.log("Form data:", values);
        // Perform logic or API call for password recovery
    };

    return (
        <div className="login">
            <div className="title">

                <div className="login2">Contact</div>

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
                                            name="contact"

                                        >
                                            <Input
                                                className="placeholder"
                                                placeholder="Your contact no"
                                            />
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className="mini-title-contaier2">
                                    <div className="title3">Contact No</div>
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
                                            name="feedback"

                                        >
                                            <Input
                                                className="placeholder"
                                                placeholder="Your review"
                                            />
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className="mini-title-contaier2">
                                    <div className="title3">Feedback</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button htmlType="submit" className="button custom-button">
                    <div className="add-to-cart">Enter</div>
                </button>

            </Form>


        </div>
    );
};

export default Contact;
