import { useState } from "react";
import SideMenu from "./SideMenu";
import FullCalendar from "@fullcalendar/react"; // FullCalendarコンポーネント
import dayGridPlugin from "@fullcalendar/daygrid"; // 月間カレンダー
import timeGridPlugin from "@fullcalendar/timegrid"; // 週間・日間カレンダー
import interactionPlugin from "@fullcalendar/interaction"; // ユーザー操作対応
import type { FormData } from "./types/common";
import type { DayCellContentArg } from "@fullcalendar/core/index.js";

export const Calendar = () => {

    type CalendarData = {
        tradedate: string;
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
        }
    ]

    // 何を入力にするのか？
    // SampleDataを入力にする

    // 何を表示したいか
    // SampleDataを表示

    //どんな処理が必要か
    // SampleDataを引数に受け取る関数を作成
    // 同一日付で複数データがあるときは合計値を表示する(一旦日付ごとに1件のデータを作成し表示確認からする)
    // データを1件づつループし、日付ごとにまとめた新しい配列を作る
    // 新しい配列からHTMLを作成し、文字色などを指定し、売却、購入、収支が３段になるようなHTMLを生成
    // 生成したHTMLをeventContentに渡して表示する

    // Object.values() は、オブジェクトの値だけを取り出して配列にする
    const newGroupedArray: CalendarData[] = Object.values(
        // accに初期値と集計結果、currentにSampleDataの１つずつのデータが入る
        SampleData.reduce((acc, current) => {
            const key = current.tradedate; // 日付をグループ化のキーにする
            // まだこの日付のデータが登録されていない場合は、新しい型で初期化
            if (!acc[key]) {
                acc[key] = {
                    tradedate: key,
                    buyprice: 0,
                    sellprice: 0,
                    total: 0,
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
        }, {} as Record<string, CalendarData>) // 型アサーションで連想配列を定義 型アサーション=コンパイラの型推論や型チェックを上書き
        // key(string):2026-10-13 value(CalendarData):tradedate: 日付
                            //  buyprice: 2000
                            //  sellprice: 0
                            //  total: 2000
    );

    function createDayCell(info:Date){
        const formattedDate = new Intl.DateTimeFormat('ja-JP', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
        }).format(info); // yyyy/mm/dd形式に変換

        const dayCellData = newGroupedArray.find(data => data.tradedate === formattedDate); // 日付に一致するデータを探す

        if (!dayCellData) return null; // なかった場合はreturnで終了

        return (
            <div>
                <span className="text-rose-600">売却 ￥{dayCellData.sellprice}</span><br></br>
                <span className="text-emerald-600">購入 ￥{dayCellData.buyprice}</span><br></br>
                <span className={dayCellData.total > 0 ? "text-emerald-600" : dayCellData.total < 0 ? "text-rose-600" : "black-text"}>収支 ￥{dayCellData.total}</span>
            </div>
        )
    }

    return (
        <>
            <div className="flex h-screen">
                <SideMenu sideMenuMode={sideMenuMode}/>
                <main>
                    <header className="h-[76px] border-b px-8 flex justify-between items-center bg-white">
                        <div className="flex items-center gap-4">
                            <button className="hover:bg-[#f3f3f3]" onClick={() => setSideMenuMode(!sideMenuMode)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu" aria-hidden="true"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
                            </button>
                            <h4>カレンダー</h4>
                        </div>
                    </header>
                    <div>
                        <FullCalendar
                            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                            initialView="dayGridMonth" // 月表示
                            height="auto"
                            locale={"ja"}
                            dayCellContent={(info:DayCellContentArg) =>
                                <>
                                    <span className="text-right">{info.dayNumberText}</span>
                                    <div>{createDayCell(info.date)}</div>
                                </>
                            }
                        >
                        </FullCalendar>
                    </div>
                </main>
            </div>
        </>
    );
};

