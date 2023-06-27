import { Form, Input, Select} from "antd";
import "./credit.css";

const { Option } = Select;

const CreditCard = () => {
    const onFinish = (values) => {
        console.log("Form data:", values);
        // Perform registration logic or API call with the form data
    };

    return (
        <div className="login">

            <Form className="form" onFinish={onFinish}>
                <div className="input-group">

                    <div className="input">
                        <div className="input-title-section">
                            <div className="input-section">
                                <div className="base-input-rounded-not-selected"></div>

                                <div className="frame-185">
                                    <div className="input-items-group">
                                        <Form.Item
                                            name="cardname"

                                        >
                                            <Input
                                                className="placeholder"
                                                placeholder="Give this card a name"
                                            />
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className="mini-title-contaier2">
                                    <div className="title3">Card name</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-front">
                        <div className="group">
                            <div className="frame-174">
                                <div className="_0000">0000</div>

                                <div className="_0000">0000</div>

                                <div className="_0000">0000</div>

                                <div className="_0000">0000</div>
                            </div>

                            <div className="group-74">
                                <div className="name-surname">Name Surname</div>

                                <div className="mm-yyyy">MM / YYYY</div>
                            </div>
                        </div>

                        <div className="mastercard">
                            <div className="base"></div>

                            <svg
                                className="mastercard2"
                                width="54"
                                height="34"
                                viewBox="0 0 54 34"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M27 29.3017C24.1675 31.7695 20.4932 33.2593 16.4782 33.2593C7.51956 33.2593 0.257141 25.842 0.257141 16.6922C0.257141 7.54237 7.51956 0.125 16.4782 0.125C20.4932 0.125 24.1675 1.6148 27 4.08267C29.8325 1.6148 33.5068 0.125 37.5218 0.125C46.4804 0.125 53.7429 7.54237 53.7429 16.6922C53.7429 25.842 46.4804 33.2593 37.5218 33.2593C33.5068 33.2593 29.8325 31.7695 27 29.3017Z"
                                    fill="#ED0006"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M27 29.3017C30.4877 26.2629 32.6993 21.7413 32.6993 16.6922C32.6993 11.643 30.4877 7.12139 27 4.08267C29.8325 1.6148 33.5068 0.125 37.5218 0.125C46.4804 0.125 53.7429 7.54237 53.7429 16.6922C53.7429 25.842 46.4804 33.2593 37.5218 33.2593C33.5068 33.2593 29.8325 31.7695 27 29.3017Z"
                                    fill="#F9A000"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M27 29.3011C30.4878 26.2624 32.6993 21.7408 32.6993 16.6916C32.6993 11.6425 30.4878 7.12094 27 4.08221C23.5123 7.12094 21.3008 11.6425 21.3008 16.6916C21.3008 21.7408 23.5123 26.2624 27 29.3011Z"
                                    fill="#FF5E00"
                                />
                            </svg>
                        </div>

                        <svg
                            className="chip"
                            width="48"
                            height="43"
                            viewBox="0 0 48 43"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g opacity="0.3">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 35.3038C0 39.5607 3.45977 42.9998 7.73162 42.9998H15.9245V34.3902H0V35.3038Z"
                                    fill="#878773"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 31.6546H15.9197V22.8681H0V31.6546Z"
                                    fill="#878773"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 7.70078V8.61913H15.9245V0H7.73162C3.45977 0 0 3.44861 0 7.70078Z"
                                    fill="#878773"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M40.267 0H18.6675V43H29.6523V8.61913H47.9986V7.70078C47.9986 3.44861 44.5341 0 40.267 0Z"
                                    fill="#878773"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M0 20.1362H15.9197V11.3496H0V20.1362Z"
                                    fill="#878773"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M32.3974 20.1361H48V11.3496H32.3974V20.1361Z"
                                    fill="#878773"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M32.3974 31.6547H48V22.8682H32.3974V31.6547Z"
                                    fill="#878773"
                                />
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M32.3974 42.9998H40.2684C44.5354 42.9998 48 39.5608 48 35.3038V34.3903H32.3974V42.9998Z"
                                    fill="#878773"
                                />
                            </g>
                        </svg>

                        <svg
                            className="frame"
                            width="142"
                            height="39"
                            viewBox="0 0 142 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_1_273)">
                                <path d="M57.3574 0H19.1491V39H57.3574V0Z" fill="white" />
                                <path
                                    d="M76.4615 19.5459L57.3574 0V39.0459L76.4615 19.5459Z"
                                    fill="#DB0011"
                                />
                                <path
                                    d="M38.2532 19.5459L57.3574 0H19.1491L38.2532 19.5459Z"
                                    fill="#DB0011"
                                />
                                <path d="M0 19.5459L19.1491 39.0459V0L0 19.5459Z" fill="#DB0011" />
                                <path
                                    d="M38.2532 19.5459L19.1491 39.0459H57.3574L38.2532 19.5459Z"
                                    fill="#DB0011"
                                />
                                <path
                                    d="M93.2282 20.6929H86.3058V27.6671H82.8446V11.3329H86.3058V18.0318H93.2282V11.3329H96.6895V27.6671H93.2282V20.6929Z"
                                    fill="black"
                                />
                                <path
                                    d="M105.05 27.9882C101.589 27.9882 98.7572 26.5659 98.7122 22.6659H102.173C102.218 24.4094 103.207 25.4647 105.095 25.4647C106.489 25.4647 108.107 24.7306 108.107 23.1247C108.107 21.84 107.028 21.4729 105.23 20.9224L104.061 20.6012C101.544 19.8671 99.0269 18.8576 99.0269 15.9212C99.0269 12.2965 102.353 11.0576 105.365 11.0576C108.467 11.0576 111.164 12.1588 111.209 15.7835H107.747C107.613 14.3153 106.758 13.4435 105.14 13.4435C103.837 13.4435 102.578 14.1318 102.578 15.6C102.578 16.7929 103.657 17.16 105.904 17.8941L107.253 18.3071C109.995 19.1788 111.748 20.1424 111.748 22.8953C111.703 26.5659 108.197 27.9882 105.05 27.9882Z"
                                    fill="black"
                                />
                                <path
                                    d="M113.681 11.3788H119.255C120.289 11.3329 121.368 11.3788 122.401 11.5624C124.334 12.0212 125.818 13.3059 125.818 15.5082C125.818 17.6188 124.514 18.6741 122.626 19.1788C124.784 19.5918 126.402 20.6929 126.402 23.1247C126.402 26.8412 122.806 27.6671 120.019 27.6671H113.726L113.681 11.3788ZM119.255 18.1694C120.783 18.1694 122.356 17.8482 122.356 15.9671C122.356 14.2694 120.918 13.8106 119.48 13.8106H117.052V18.1694H119.255V18.1694ZM119.569 25.2353C121.188 25.2353 122.761 24.8682 122.761 22.8494C122.761 20.8306 121.412 20.4635 119.749 20.4635H117.007V25.2353H119.569Z"
                                    fill="black"
                                />
                                <path
                                    d="M135.392 27.9883C130.223 27.9883 127.93 24.6388 127.93 19.6377C127.93 14.6365 130.493 11.0118 135.572 11.0118C138.764 11.0118 141.865 12.48 141.955 16.1506H138.359C138.179 14.4988 137.1 13.673 135.572 13.673C132.425 13.673 131.481 17.1141 131.481 19.7294C131.481 22.3447 132.425 25.373 135.437 25.373C137.01 25.373 138.179 24.5012 138.404 22.8494H142C141.64 26.6118 138.719 27.9883 135.392 27.9883Z"
                                    fill="black"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_273">
                                    <rect width="142" height="39" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>

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
                                                name="surname"
                                            >
                                                <Input
                                                    className="placeholder"
                                                    placeholder="Your Last name"
                                                />
                                            </Form.Item>
                                        </div>
                                    </div>

                                    <div className="mini-title-contaier2">
                                        <div className="title3">Surname</div>
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
                                            name="cardnumber"

                                        >
                                            <Input
                                                className="placeholder"
                                                placeholder="••••  ••••  ••••  ••••"
                                            />
                                        </Form.Item>
                                    </div>
                                </div>

                                <div className="mini-title-contaier2">
                                    <div className="title3">Card number</div>
                                </div>
                            </div>
                        </div>
                    </div>





                    <div className="multi-input multi-input-for-seletion">
                        <div className="input">
                            <div className="input-title-section">
                                <div className="input-section">
                                    <div className="base-input-rounded-not-selected"></div>

                                    <div className="frame-185">
                                        <div className="input-items-group">
                                            <Form.Item
                                                name="month"
                                            >
                                                <Select
                                                    className="placeholder custom-select"
                                                    placeholder="Select"
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
                                        <div className="title3">Month</div>
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
                                                name="year"
                                            >
                                                <Select
                                                    className="placeholder custom-select"
                                                    placeholder="Select"
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
                                        <div className="title3">Year</div>
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
                                                name="cvv"
                                            >
                                                <Select
                                                    className="placeholder custom-select"
                                                    placeholder="Select"
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
                                        <div className="title3">CVV</div>
                                    </div>
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

export default CreditCard;
