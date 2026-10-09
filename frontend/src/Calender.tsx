import { useState } from "react";
import SideMenu from "./SideMenu";

export const Calendar = () => {

    const [sideMenuMode, setSideMenuMode] = useState(true);

    return (
    <div className="flex h-screen">
        <SideMenu sideMenuMode={sideMenuMode}/>
        <main>
            <header className="h-[76px] border-b px-8 flex justify-between items-center bg-white">
                <div className="flex items-center gap-4">
                    <button className="hover:bg-[#f3f3f3]" onClick={() => setSideMenuMode(!sideMenuMode)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
                    </button>
                    <h4>投資推移グラフ</h4>
                </div>
            </header>
        </main>
    </div>
    );
};

