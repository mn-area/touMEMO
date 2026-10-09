import { Link } from "react-router-dom";

type Props = {
    sideMenuMode: boolean
}

export default function SideMenu({ sideMenuMode }: Props) {
    console.log(sideMenuMode)
    return (
        <>
            <aside className={`sidebar ${sideMenuMode ? 'open' : 'closed'}`}>
                <div className="flex h-[76px] items-center border-b gap-3 px-7">
                    <div className="grid size-9 place-items-center rounded-xl text-white bg-[#283c8f]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-wallet" aria-hidden="true"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
                    </div>
                    <div>
                        <p className="text-[15px] font-bold tracking-[.16rem] text-[#243477]">ASSET NOTE</p>
                        <p className="text-[10px] tracking-[.18em] text-[#a0a8ba]">INVESTMENT MANAGER</p>
                    </div>
                </div>
                <nav className="flex flex-col gap-2 px-4 py-7">
                    <p className="px-3 pb-2 text-[10px] font-bold tracking-[.16em] text-[#a5adbf]">MENU</p>
                    <Link to="/" className="flex items-center gap-3 rounded-xl bg-[#eef1ff] px-4 py-3 text-[13px] font-bold text-[#30469b]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-column" aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                        投資一覧
                    </Link>
                    <Link to="/Calender" className="flex items-center gap-3 rounded-xl px-4 py-3 text-[13px] font-medium text-[#778198] hover:bg-[#f5f7fb]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar-days" aria-hidden="true"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
                        カレンダー
                    </Link>
                    <Link to="/TradeGraph" className="flex items-center gap-3 rounded-xl px-4 py-3 text-[13px] font-medium text-[#778198] hover:bg-[#f5f7fb]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-up" aria-hidden="true"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
                        投資推移グラフ
                    </Link>
                </nav>
            </aside>
        </>
    )
}