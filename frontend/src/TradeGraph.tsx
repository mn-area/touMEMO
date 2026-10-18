import { useState } from "react";
import SideMenu from "./SideMenu";
import { LineChart, Line } from 'recharts';

export const TradeGraph = () => {

    const [sideMenuMode, setSideMenuMode] = useState(true);

    const data = [
    { day: '月', サイト訪問者数: 2200 },
    { day: '火', サイト訪問者数: 1280 },
    { day: '水', サイト訪問者数: 3300 },
    { day: '木', サイト訪問者数: 4000 },
    { day: '金', サイト訪問者数: 2900 },
    { day: '土', サイト訪問者数: 3800 },
    { day: '日', サイト訪問者数: 3500 },
    ];

    return (
    <div className="flex  h-screen">
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
            <div>
                <LineChart width={500} height={300} data={data}>
                    <Line type="monotone" dataKey="サイト訪問者数" />
                </LineChart>
            </div>
        </main>
    </div>
    );
};

