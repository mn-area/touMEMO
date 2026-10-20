import { useState } from "react";
import SideMenu from "./SideMenu";
import type { FormData } from "./types/common";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Label, Tooltip, type TooltipContentProps } from 'recharts';
import type { NameType, ValueType } from "recharts/types/component/DefaultTooltipContent";

export const TradeGraph = () => {

    type GraphData = {
        date: string;
        buyprice: number;
        sellprice: number;
        total: number;
    }
    const [sideMenuMode, setSideMenuMode] = useState(true);

    const SampleData: FormData[] = [
        {
            tradedate: "2026/10/13",
            brandname: 'トヨタ自動車 (7203)',
            investmenttype: 1,
            tradetype: 1,
            unitprice: "200",
            fee: "100",
            quantity:  "10",
            reason: 'test',
            memo: 'aaaaa'
        },
        {
            tradedate: "2026/10/13",
            brandname: '任天堂 (7954)',
            investmenttype: 1,
            tradetype: 2,
            unitprice: "100",
            fee: "100",
            quantity:  "1",
            reason: '',
            memo: ''
        },
        {
            tradedate: "2026/10/15",
            brandname: 'Bitcoin (BTC)',
            investmenttype: 2,
            tradetype: 2,
            unitprice: "2500",
            fee: "100",
            quantity:  "1",
            reason: '',
            memo: ''
        },
        {
            tradedate: "2026/10/16",
            brandname: 'Bitcoin (BTC)',
            investmenttype: 2,
            tradetype: 1,
            unitprice: "200",
            fee: "100",
            quantity:  "1",
            reason: '',
            memo: ''
        },
        {
            tradedate: "2026/10/18",
            brandname: 'Bitcoin (BTC)',
            investmenttype: 2,
            tradetype: 2,
            unitprice: "1200",
            fee: "100",
            quantity:  "1",
            reason: '',
            memo: ''
        }
    ]

    // tradesから日付ごと＆購入区分毎にunitpriceを合計し、売却-購入で収支を割り出し、新しいグラフ用配列を作成
    const newGroupedArray: GraphData[] = Object.values(
        SampleData.reduce((acc, current) => {
            const key = current.tradedate;

            if (!acc[key]) {
                acc[key] = {
                    date: key,
                    buyprice: 0,
                    sellprice: 0,
                    total: 0
                };
            }

            if (current.tradetype === 1) {
                acc[key].buyprice += Number(current.unitprice || 0); // 文字列を数値に変換して足す
            } else if (current.tradetype === 2) {
                acc[key].sellprice += Number(current.unitprice || 0); // 文字列を数値に変換して足す
            }
            // 新しい型のオブジェクトに対して、データを計算・追加していく
            acc[key].total = acc[key].sellprice - acc[key].buyprice; // 文字列を数値に変換して足す

            return acc;
        }, {} as Record<string, GraphData>)
    );

    const CustomTooltip = ({active, payload}: TooltipContentProps<ValueType,NameType>) => {
        if (active && payload && payload.length > 0) {
            const data = payload[0].payload
            const balance = data.total
            const isPositive = balance >= 0

            return (
                <div className="rounded-lg border border-border bg-white p-2 shadow-md">
                    <p className="text-sm font-medium text-foreground">{data.date}</p>
                    <p className={`text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {isPositive ? '+' : ''}
                    {balance.toLocaleString()}円
                    </p>
                </div>
            )
        }
        return null;
    }

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
            <div id="content-area">
                <section id="card-area">
                    <div className="card-item border border-[#dfe4ed]">
                        <div className="card-data">
                            <div>
                                <p className="card-title font-bold">データ件数</p>
                                <p className="data-count font-bold">{SampleData.length}件</p>
                            </div>
                            <div id="data-count-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-column" aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                            </div>
                        </div>
                        <p className="card-text grey-text">登録済みの投資データ</p>
                    </div>
                    <div className="card-item border border-[#dfe4ed]">
                        <div className="card-data">
                            <div>
                                <p className="card-title font-bold">購入金額合計</p>
                                <p className="data-count font-bold green-text">¥1000</p>
                            </div>
                            <div id="total-buy-amount-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down" aria-hidden="true"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
                            </div>
                        </div>
                        <p className="card-text grey-text">これまでの購入総額</p>
                    </div>
                    <div className="card-item border border-[#dfe4ed]">
                        <div className="card-data">
                            <div>
                                <p className="card-title font-bold">売却金額合計</p>
                                <p className="data-count font-bold red-text">¥1000</p>
                            </div>
                            <div id="total-sell-amount-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up" aria-hidden="true"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
                            </div>
                        </div>
                        <p className="card-text grey-text">これまでの売却総額</p>
                    </div>
                    <div className="card-item border border-[#dfe4ed]">
                        <div className="card-data">
                            <div>
                                <p className="card-title font-bold">収支</p>
                                <p className={`data-count font-bold  100 > 0 ? "green-text" : totalSellPrice - totalUnitPrice < 0 ?  "red-text" : "black-text"}`}>¥1000</p>
                            </div>
                            <div id="balance-img">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-down" aria-hidden="true"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
                            </div>
                        </div>
                        <p className="card-text grey-text">売却金額 − 購入金額</p>
                    </div>
                </section>
                <div id="graph-area" className="border border-[#dfe4ed] rounded-xl bg-white p-5 shadow-[0_2px_10px_rgba(25,45,70,0.03)]">
                    <div>
                        <h2 className="font-bold text-[#25364b]">
                            収支の推移
                        </h2>
                        <p className="mt-1 text-xs text-[#8794a3]">2026年10月01日 〜 2026年10月31日</p>
                    </div>
                    <ResponsiveContainer  height={384}>
                        <LineChart data={newGroupedArray} margin={{top: 20, right: 30, bottom: 20, left: 20 }} className="border border-[#dfe4ed] rounded-xl">
                            <Line dataKey="total" strokeWidth={2} isAnimationActive={true} animationDuration={800} />
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey={"date"} />
                            <YAxis>
                                <Label value="収支" dx={-25} angle={-90}></Label>
                            </YAxis>
                            <Tooltip content={CustomTooltip}/>
                        </LineChart>
                    </ResponsiveContainer>

                </div>
            </div>
        </main>
    </div>
    );
};

