
export default function Hero() {
   return (
    <div className="hero bg-[url(/hero_bg.png)] bg-opacity-40 min-h-screen">
        <div className="flex m-auto w-10/12">
            <div className="w-1/2">
                <img src="/phone.png"></img>
            </div>
            <div className="w-1/2 flex justify-center flex-col">
                <h1 className="text-5xl font-bold text-gray-100">
                    Welcome to VibeChat
                </h1>
                <p className="text-xl">
                Join a world of endless discussions! Whether you're catching up with friends or meeting new people, VibeChat lets you create and join chatrooms based on your favorite themes. Start vibing today!
                </p>
            </div>
            

        </div>
    </div>
   );
}