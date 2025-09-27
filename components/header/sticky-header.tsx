import Image from "next/image"


const StickyHeader = () => {
    return(
        <header className="w-full sticky top-0 z-50 py-4 bg-background/60 backdrop-blur">
            <div className="flex justify-between items-center container">
                <a href="/" title="brand-logo" className="relative mr-6 flex items-center space-x-2">
                    <Image src="" width={60} alt="logo"/>
                </a>
                <div className="hidden lg:block">
                    <div className="flex items-center">
                        <nav>
                            <nav aria-label="menu" className="z-10 relative flex flex-1 items-center justify-center">
                                <ul className="group flex flex-1 list-none items-center justify-center space-x-6">
                                    <li>Home</li>
                                    <li>Chi Siamo</li>
                                    <li>Contatti</li>
                                    <li>Login</li>
                                    <li className="px-4 py-1 rounded-full bg-orange-500">
                                        <span className="">Registrati</span>
                                    </li>
                                </ul>
                            </nav>
                        </nav>
                    </div>
                </div>
            </div>
            <hr className="absolute w-full bottom-0 transition-opacity duration-300 ease-in-out opacity-100"/>
        </header>
    )
}

export default StickyHeader