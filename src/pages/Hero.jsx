
export default function Hero() {
    return (
        <>
            <div className="hero bg-[url(/hero_bg.png)] bg-opacity-40 min-h-screen mb-50">
                <div className="flex m-auto w-10/12">
                    <div className="w-1/2 flex justify-center flex-col">
                        <h1 className="text-5xl font-bold text-gray-100 mb-4">
                            Welcome to VibeChat
                        </h1>
                        <p className="text-xl w-3/5">
                            Join a world of endless discussions! Whether you're catching up with friends or meeting new people, VibeChat lets you create and join chatrooms based on your favorite themes. Start vibing today!
                        </p>
                    </div>
                    <div className="w-1/2">
                        <img src="/phone.png" className="transform scale-x-[-1] m-auto bop-image"></img>
                    </div>



                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-semibold text-center mb-12">Features of VibeChat</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Feature 1: Create & Customize Chatrooms */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <svg className="w-10" fill="#ffffff" viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <title /> <g> <path d="M66,42H54V30a6,6,0,0,0-12,0V42H30a6,6,0,0,0,0,12H42V66a6,6,0,0,0,12,0V54H66a6,6,0,0,0,0-12Z" /> <path d="M48,0A48,48,0,1,0,96,48,48.0512,48.0512,0,0,0,48,0Zm0,84A36,36,0,1,1,84,48,36.0393,36.0393,0,0,1,48,84Z" /> </g> </g></svg>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Create &amp; Customize Chatrooms</h2>
                            <p>Design your own chatroom with unique themes, set rules, and invite your friends. The possibilities are endless!</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    {/* Feature 2: Real-Time Messaging */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <svg className="w-11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M8 11H8.01M12 11H12.01M16 11H16.01M21 20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20Z" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /> </g></svg>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Real-Time Messaging</h2>
                            <p>Send messages instantly and keep the conversation flowing with real-time updates and notifications!</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                    {/* Feature 3: Private & Public Rooms */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <svg className="w-11" viewBox="-3 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <title>lock_close_round [#707]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-103.000000, -5079.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M59,4936.00046 C59,4936.55246 58.552,4937.00046 58,4937.00046 L50,4937.00046 C49.448,4937.00046 49,4936.55246 49,4936.00046 L49,4928.00046 C49,4927.44846 49.448,4927.00046 50,4927.00046 L58,4927.00046 C58.552,4927.00046 59,4927.44846 59,4928.00046 L59,4936.00046 Z M52,4923.00046 C52,4921.89746 52.897,4921.00046 54,4921.00046 C55.103,4921.00046 56,4922.00046 56,4923.00046 L56,4925.00046 L52,4925.00046 L52,4923.00046 Z M58,4925.00046 L58,4923.00046 C58,4920.75346 55.739,4918.50546 53.164,4919.09546 C51.266,4919.53046 50,4921.34146 50,4923.28846 L50,4925.00046 L49,4925.00046 C47.895,4925.00046 47,4925.89546 47,4927.00046 L47,4937.00046 C47,4938.10546 47.895,4939.00046 49,4939.00046 L59,4939.00046 C60.105,4939.00046 61,4938.10546 61,4937.00046 L61,4927.00046 C61,4925.89546 60.105,4925.00046 59,4925.00046 L58,4925.00046 Z" id="lock_close_round-[#707]"> </path> </g> </g> </g> </g></svg>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Private &amp; Public Rooms</h2>
                            <p>Choose between open rooms or invite-only spaces, giving you total control over who joins your conversation.</p>
                            <div className="card-actions">
                                {/* <button className="btn btn-primary">Explore Rooms</button> */}
                                <button>Coming Soon!</button>
                            </div>
                        </div>
                    </div>
                    {/* Feature 4: Emoji Reactions */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <svg className="w-11" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <path d="M8.5 11C9.32843 11 10 10.3284 10 9.5C10 8.67157 9.32843 8 8.5 8C7.67157 8 7 8.67157 7 9.5C7 10.3284 7.67157 11 8.5 11Z" fill="#ffffff" /> <path d="M16.4472 13.1056C16.9412 13.3526 17.1414 13.9532 16.8944 14.4472L16 14C16.8944 14.4472 16.8946 14.4468 16.8944 14.4472L16.8928 14.4504L16.8908 14.4543L16.8857 14.4644L16.8706 14.493C16.8585 14.5158 16.8421 14.5458 16.8214 14.5821C16.78 14.6544 16.7212 14.7523 16.6445 14.8672C16.4924 15.0954 16.2643 15.3999 15.9571 15.7071C15.3481 16.3161 14.3588 17 13 17C11.8272 17 10.9251 16.7056 10.3028 16.3944C9.99328 16.2397 9.75496 16.0818 9.5875 15.9563C9.5037 15.8934 9.43735 15.8384 9.38837 15.7955C9.36387 15.7741 9.34367 15.7557 9.32778 15.7408L9.30713 15.7211L9.29922 15.7134L9.29585 15.7101L9.29432 15.7085L9.2936 15.7078C9.29324 15.7075 9.2929 15.7071 9.99207 15.0079L9.2936 15.7078C8.90307 15.3173 8.90237 14.6834 9.29289 14.2929C9.68007 13.9057 10.3057 13.9024 10.697 14.2829L10.7054 14.2904C10.7189 14.3022 10.7463 14.3253 10.7875 14.3562C10.87 14.4182 11.0067 14.5103 11.1972 14.6056C11.5749 14.7944 12.1728 15 13 15C13.6412 15 14.1519 14.6839 14.5429 14.2929C14.7357 14.1001 14.8825 13.9046 14.9804 13.7578C15.0288 13.6852 15.0637 13.6268 15.0849 13.5898C15.0954 13.5713 15.1024 13.5584 15.1059 13.5519L15.1081 13.5478C15.3566 13.0575 15.9549 12.8594 16.4472 13.1056Z" fill="#ffffff" /> <path d="M14 9C13.4477 9 13 9.44771 13 10C13 10.5523 13.4477 11 14 11H16C16.5523 11 17 10.5523 17 10C17 9.44771 16.5523 9 16 9H14Z" fill="#ffffff" /> <path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 20.9932C7.03321 20.9932 3.00683 16.9668 3.00683 12C3.00683 7.03321 7.03321 3.00683 12 3.00683C16.9668 3.00683 20.9932 7.03321 20.9932 12C20.9932 16.9668 16.9668 20.9932 12 20.9932Z" fill="#ffffff" /> </g></svg>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Emoji Reactions</h2>
                            <p>Express yourself in conversations with a range of fun emoji reactions to messages!</p>
                            <div className="card-actions">
                                {/* <button className="btn btn-primary">Join Now</button> */}
                                <button>Coming Soon!</button>
                            </div>
                        </div>
                    </div>
                    {/* Feature 5: Secure & Safe */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <svg className="w-11" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="secure" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"><path d="M19.42,3.83,12.24,2h0A.67.67,0,0,0,12,2a.67.67,0,0,0-.2,0h0L4.58,3.83A2,2,0,0,0,3.07,5.92l.42,5.51a12,12,0,0,0,7.24,10.11l.88.38h0a.91.91,0,0,0,.7,0h0l.88-.38a12,12,0,0,0,7.24-10.11l.42-5.51A2,2,0,0,0,19.42,3.83ZM15.71,9.71l-4,4a1,1,0,0,1-1.42,0l-2-2a1,1,0,0,1,1.42-1.42L11,11.59l3.29-3.3a1,1,0,0,1,1.42,1.42Z" style={{ fill: '#ffffff' }} /></g></svg>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Secure &amp; Safe</h2>
                            <p>Your privacy is important. VibeChat ensures a safe environment with built-in moderation tools.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Learn More</button>
                            </div>
                        </div>
                    </div>
                    {/* Feature 6: Easy-To-Use Interface */}
                    <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <svg className="w-11" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth={0} /><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier"> <style type="text/css" dangerouslySetInnerHTML={{ __html: "  .st0{fill:#ffffff;}  " }} /> <g> <path className="st0" d="M459.12,295.188c8.203-9.359,13.609-21.297,13.609-34.469c0-33.922-27.594-61.516-61.5-61.516h-78.531 c-17.25-0.797-21.453-4.063-21.625-4.203l-0.141-0.188c0.469-4.563,8.375-15.719,12.25-21.156 c5.563-7.813,10.813-15.203,13.813-23.406l1.328-3.594c7.672-20.641,21.969-59.063,6.469-103.219 C335.401,16.656,314.51,0,290.292,0c-28.203,0-51.656,22.563-57.016,54.891c-1.797,10.875-25.641,51.875-71.156,105.391 c-12.594,14.813-26.797,27.125-41.828,40.156c-11.875,10.281-24.156,20.906-37.172,33.922 c-34.141,34.125-50.391,91.984-41.406,147.359c7.766,47.938,32.781,84.688,70.438,103.516 c30.844,15.422,90.734,24.047,136.406,25.734c19.109,0.703,33.516,1.031,45.328,1.031c22.594,0,33.828-1.266,48.047-2.875 l4.797-0.531l0.813-0.094l23.078-3.344l0.438-0.063c29.891-4.875,51.578-30.344,51.578-60.563l-0.047-2.172 c17.454-10.828,28.813-30.078,28.813-52.031c0-7.438-1.141-13.906-3.109-19.516c11.922-11.219,19.344-27.109,19.344-44.609 C467.636,315.031,464.558,304.375,459.12,295.188z M412.838,299.25h18c7.359,6.656,12.016,16.219,12.016,26.953 c0,11.453-5.359,21.547-13.609,28.234H405.12c-4.563,0-8.25,3.688-8.25,8.25s3.688,8.266,8.25,8.266h15.063 c5,5.609,6.438,12.234,6.438,19.375c0,11.391-5.297,21.453-13.469,28.125h-23.203c-4.578,0-8.266,3.703-8.266,8.266 s3.688,8.25,8.266,8.25h6.531c0.875,3.047,1.375,6.234,1.375,9.563c0,18.25-13.328,33.25-30.781,36.094l-23.078,3.344 c-16.719,1.844-26.531,3.25-50.109,3.25c-11.063,0-25.156-0.313-44.406-1.031c-43.641-1.609-99.625-9.813-126.25-23.125 c-74.531-37.266-74.578-159.188-22.578-211.188c29.359-29.359,56.469-47.438,80.344-75.531 c36.891-43.391,73.016-94.906,76.734-117.406c3.656-22.063,17.984-34.156,32.563-34.156c12.25,0,24.688,8.547,31.125,26.875 c13.406,38.219-1.203,72.25-7.688,90.063c-6.531,17.844-42.547,46.813-20.594,70.359c8.156,8.75,24.172,11.281,39.016,11.922 h79.078c20.297,0,36.719,16.438,36.719,36.719c0,8.672-4.906,16.469-11.406,22h-23.704c-4.563,0-8.266,3.688-8.266,8.25 S408.276,299.25,412.838,299.25z" /> </g> </g></svg>
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Easy-To-Use Interface</h2>
                            <p>Navigate with ease! Our intuitive design makes creating and joining chatrooms a breeze.</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Try it Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#A33C99] text-white py-16 mb-20">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-semibold text-center mb-12">How It Works</h2>
                    <div className="flex flex-col space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8 items-center">
                    <div className="relative flex flex-col items-center text-center md:col-span-1">
                        <div className="w-16 h-16 flex items-center justify-center bg-[#DF4CCF] rounded-full text-2xl font-bold mb-4">1</div>
                        <h3 className="text-xl font-semibold">Sign Up &amp; Create Profile</h3>
                        <p className="text-gray-300">Register, set up your profile, and add an avatar to start connecting with others.</p>
                    </div>
                    {/* Connector Line (Only on Desktop) */}
                    <div className="hidden md:flex justify-center">
                        <div className="w-1 h-full bg-white rounded-full" />
                    </div>
                    <div className="relative flex flex-col items-center text-center md:col-span-1">
                        
                        <div className="w-16 h-16 flex items-center justify-center bg-[#DF4CCF] rounded-full text-2xl font-bold mb-4">3</div>
                        <h3 className="text-xl font-semibold">Start Chatting</h3>
                        <p className="text-gray-300">Send messages, react with emojis, and have fun connecting with people!</p>
                    </div>
                    {/* Connector Line (Only on Desktop) */}
                    <div className="hidden md:flex justify-center">
                        <div className="w-1 h-full bg-white rounded-full" />
                    </div>
                    <div className="relative flex flex-col items-center text-center md:col-span-1">
                        <div className="w-16 h-16 flex items-center justify-center bg-[#DF4CCF] rounded-full text-2xl font-bold mb-4">2</div>
                        <h3 className="text-xl font-semibold">Join or Create a Chatroom</h3>
                        <p className="text-gray-300">Find the perfect chatroom or start your own with a custom theme.</p>
                    </div>
                    </div>
                    <div className="mt-12 flex justify-center">
                    <button className="p-3 rounded text-white bg-[#DF4CCF] hover:bg-pink-600">Get Started Now</button>
                    </div>
                </div>
            </div>




        </>
    );
}