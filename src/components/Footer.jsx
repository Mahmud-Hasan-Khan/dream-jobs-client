import { Link } from 'react-router-dom';
import logoImg from '../assets/image/Logo_dream.png'
import appleImg from '../assets/image/appStore.png'
const Footer = () => {
    return (
        <div className='bg-black p-10 rounded-md'>
            <div className="footer">
                <aside>
                    <Link to='/'><img className='w-3/4' src={logoImg} alt="" /></Link>
                    <p className="text-[#cecaca] lg:w-96">Dream Jobs, your gateway to a world of career possibilities. Explore your passions, discover your dream job, and make your professional aspirations a reality with our comprehensive job search and career guidance platform.</p>
                </aside>
                <nav>
                    <header className="text-xl font-semibold text-white">Company</header>
                    <Link className="text-[#cecaca] hover:underline">About us</Link>
                    <Link className="text-[#cecaca] hover:underline">Contact</Link>
                    <Link className="text-[#cecaca] hover:underline">Jobs</Link>
                </nav>
                <nav>
                    <header className="text-xl font-semibold text-white">Legal</header>
                    <Link className="text-[#cecaca] hover:underline">Terms of use</Link>
                    <Link className="text-[#cecaca] hover:underline">Privacy policy</Link>
                    <Link className="text-[#cecaca] hover:underline">Cookie policy</Link>
                </nav>
                <nav>
                    <header className="text-xl font-semibold text-white">Contact Information</header>
                    <Link className="text-[#cecaca] hover:underline">Email: info@dreamjobs.com</Link>
                    <Link className="text-[#cecaca] hover:underline">Web: www.dreamjobs.com</Link>
                    <Link className="text-[#cecaca] hover:underline">Phone: +880 1521 353 320</Link>
                </nav>
                <nav>
                    <header className="text-xl font-semibold text-white">Address</header>
                    <Link className="text-[#cecaca] hover:underline">House: 23/3 A</Link>
                    <Link className="text-[#cecaca] hover:underline">Road: 2, Banani</Link>
                    <Link className="text-[#cecaca] hover:underline">Dhaka, Bangladesh</Link>
                </nav>
            </div>
            <div className='text-center grid grid-cols-1 lg:grid-cols-2 p-10'>
                <div>
                    <p className='text-base font-semibold text-white'>Find us on social media</p>
                    <div className="flex gap-5 lg:gap-10 items-center justify-center py-4">

                        {/* <!-- facebook --> */}
                        <a className="text-lg " href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                            viewBox="0 0 40 40" fill="none">
                            <g clipPath="url(#clip0_12_5269)">
                                <path
                                    d="M40 20C40 29.9828 32.6859 38.257 23.125 39.757V25.7813H27.7852L28.6719 20H23.125V16.2484C23.125 14.6664 23.9 13.125 26.3844 13.125H28.9062V8.20313C28.9062 8.20313 26.6172 7.8125 24.4289 7.8125C19.8609 7.8125 16.875 10.5813 16.875 15.5938V20H11.7969V25.7813H16.875V39.757C7.31406 38.257 0 29.9828 0 20C0 8.95469 8.95469 0 20 0C31.0453 0 40 8.95469 40 20Z"
                                    fill="white" />
                                <path
                                    d="M27.7852 25.7812L28.6719 20H23.125V16.2484C23.125 14.6667 23.8998 13.125 26.3843 13.125H28.9062V8.20312C28.9062 8.20312 26.6175 7.8125 24.4293 7.8125C19.8609 7.8125 16.875 10.5813 16.875 15.5938V20H11.7969V25.7812H16.875V39.757C17.8933 39.9167 18.9369 40 20 40C21.0631 40 22.1067 39.9167 23.125 39.757V25.7812H27.7852Z"
                                    fill="#1877F2" />
                            </g>
                            <defs>
                                <clipPath id="clip0_12_5269">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg></a>

                        {/* twitter */}
                        <a className="text-lg " href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                            viewBox="0 0 40 40" fill="none">
                            <g clipPath="url(#clip0_12_5266)">
                                <path
                                    d="M40 7.5975C38.5125 8.25 36.9275 8.6825 35.275 8.8925C36.975 7.8775 38.2725 6.2825 38.8825 4.36C37.2975 5.305 35.5475 5.9725 33.6825 6.345C32.1775 4.7425 30.0325 3.75 27.6925 3.75C23.1525 3.75 19.4975 7.435 19.4975 11.9525C19.4975 12.6025 19.5525 13.2275 19.6875 13.8225C12.87 13.49 6.8375 10.2225 2.785 5.245C2.0775 6.4725 1.6625 7.8775 1.6625 9.39C1.6625 12.23 3.125 14.7475 5.305 16.205C3.9875 16.18 2.695 15.7975 1.6 15.195C1.6 15.22 1.6 15.2525 1.6 15.285C1.6 19.27 4.4425 22.58 8.17 23.3425C7.5025 23.525 6.775 23.6125 6.02 23.6125C5.495 23.6125 4.965 23.5825 4.4675 23.4725C5.53 26.72 8.545 29.1075 12.13 29.185C9.34 31.3675 5.7975 32.6825 1.9625 32.6825C1.29 32.6825 0.645 32.6525 0 32.57C3.6325 34.9125 7.9375 36.25 12.58 36.25C27.67 36.25 35.92 23.75 35.92 12.915C35.92 12.5525 35.9075 12.2025 35.89 11.855C37.5175 10.7 38.885 9.2575 40 7.5975Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_12_5266">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg></a>
                        {/* <!-- youtube --> */}
                        <a className="text-lg " href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                            viewBox="0 0 58 40" fill="none">
                            <path
                                d="M55.9526 6.25899C55.294 3.81162 53.3644 1.88249 50.9175 1.22347C46.4468 0 28.5643 0 28.5643 0C28.5643 0 10.6821 0 6.21148 1.17683C3.81162 1.83542 1.83498 3.81206 1.17639 6.25899C0 10.7292 0 20 0 20C0 20 0 29.3174 1.17639 33.741C1.83542 36.1879 3.76455 38.1175 6.21192 38.7765C10.7292 40 28.5647 40 28.5647 40C28.5647 40 46.4468 40 50.9175 38.8232C53.3649 38.1646 55.294 36.235 55.953 33.7881C57.1294 29.3174 57.1294 20.0471 57.1294 20.0471C57.1294 20.0471 57.1765 10.7292 55.9526 6.25899Z"
                                fill="white" />
                            <path d="M22.8706 28.5648L37.7409 20.0001L22.8706 11.4354V28.5648Z" fill="#FF0000" />
                        </svg></a>

                        {/* <!-- instagram --> */}
                        <a className="text-lg " href=""><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                            viewBox="0 0 41 40" fill="none">
                            <g clipPath="url(#clip0_12_5283)">
                                <path
                                    d="M40.0905 11.7601C39.9968 9.63476 39.6531 8.17359 39.1607 6.90748C38.6528 5.56353 37.8714 4.36029 36.8477 3.36003C35.8474 2.34421 34.6362 1.55487 33.3078 1.05489C32.0344 0.562549 30.5809 0.218854 28.4555 0.125146C26.3143 0.0235031 25.6345 0 20.2038 0C14.773 0 14.0933 0.0235031 11.96 0.11721C9.83463 0.210918 8.37347 0.554918 7.10766 1.04696C5.7634 1.55487 4.56016 2.33627 3.55991 3.36003C2.54408 4.36029 1.75505 5.57146 1.25477 6.89985C0.762424 8.17359 0.418729 9.62682 0.325021 11.7522C0.223378 13.8934 0.199875 14.5732 0.199875 20.0039C0.199875 25.4347 0.223378 26.1144 0.317085 28.2477C0.410793 30.3731 0.754793 31.8342 1.24714 33.1003C1.75505 34.4443 2.54408 35.6475 3.55991 36.6478C4.56016 37.6636 5.77134 38.4529 7.09972 38.9529C8.37347 39.4453 9.82669 39.789 11.9524 39.8827C14.0853 39.9767 14.7654 39.9999 20.1962 39.9999C25.6269 39.9999 26.3067 39.9767 28.44 39.8827C30.5653 39.789 32.0265 39.4453 33.2923 38.9529C35.9805 37.9136 38.1058 35.7882 39.1452 33.1003C39.6372 31.8266 39.9812 30.3731 40.0749 28.2477C40.1686 26.1144 40.1921 25.4347 40.1921 20.0039C40.1921 14.5732 40.1842 13.8934 40.0905 11.7601ZM36.4884 28.0914C36.4023 30.0449 36.0742 31.0998 35.8007 31.8031C35.1286 33.5457 33.7456 34.9287 32.003 35.6008C31.2997 35.8743 30.2372 36.2024 28.2913 36.2882C26.1815 36.3822 25.5488 36.4054 20.2117 36.4054C14.8747 36.4054 14.234 36.3822 12.1318 36.2882C10.1783 36.2024 9.12343 35.8743 8.42017 35.6008C7.553 35.2803 6.76366 34.7724 6.12297 34.1082C5.45878 33.4596 4.95086 32.6782 4.63037 31.811C4.35688 31.1078 4.02875 30.0449 3.94298 28.0994C3.84896 25.9896 3.82577 25.3565 3.82577 20.0195C3.82577 14.6824 3.84896 14.0417 3.94298 11.9399C4.02875 9.98639 4.35688 8.93149 4.63037 8.22823C4.95086 7.36075 5.45878 6.57172 6.1309 5.93072C6.77922 5.26653 7.56063 4.75862 8.42811 4.43843C9.13137 4.16494 10.1942 3.83681 12.1398 3.75073C14.2496 3.65703 14.8826 3.63352 20.2194 3.63352C25.5643 3.63352 26.1971 3.65703 28.2992 3.75073C30.2527 3.83681 31.3076 4.16494 32.0109 4.43843C32.8781 4.75862 33.6674 5.26653 34.3081 5.93072C34.9723 6.57935 35.4802 7.36075 35.8007 8.22823C36.0742 8.93149 36.4023 9.99402 36.4884 11.9399C36.5821 14.0497 36.6056 14.6824 36.6056 20.0195C36.6056 25.3565 36.5821 25.9816 36.4884 28.0914Z"
                                    fill="white" />
                                <path
                                    d="M20.2038 9.72845C14.531 9.72845 9.92834 14.3308 9.92834 20.0039C9.92834 25.677 14.531 30.2793 20.2038 30.2793C25.8769 30.2793 30.4792 25.677 30.4792 20.0039C30.4792 14.3308 25.8769 9.72845 20.2038 9.72845ZM20.2038 26.6693C16.5236 26.6693 13.5384 23.6844 13.5384 20.0039C13.5384 16.3234 16.5236 13.3385 20.2038 13.3385C23.8843 13.3385 26.8692 16.3234 26.8692 20.0039C26.8692 23.6844 23.8843 26.6693 20.2038 26.6693Z"
                                    fill="white" />
                                <path
                                    d="M33.2846 9.32218C33.2846 10.6469 32.2105 11.721 30.8855 11.721C29.5608 11.721 28.4866 10.6469 28.4866 9.32218C28.4866 7.99716 29.5608 6.92334 30.8855 6.92334C32.2105 6.92334 33.2846 7.99716 33.2846 9.32218Z"
                                    fill="white" />
                            </g>
                            <defs>
                                <clipPath id="clip0_12_5283">
                                    <rect width="40" height="40" fill="white" transform="translate(0.129608)" />
                                </clipPath>
                            </defs>
                        </svg></a>

                    </div>
                </div>
                <div className='flex flex-col items-center space-y-4'>
                    <p className='text-base font-semibold text-white'>Get the Dream Jobs App</p>
                    <img className='w-fit h-14' src={appleImg} alt="" />
                </div>
            </div>
            <p className='text-[#cecaca] text-center text-sm'>Copyright © 2023 - All right reserved by Dream Jobs Ltd</p>
        </div >

    );
};

export default Footer;
