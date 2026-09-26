import { useState } from "react";
import RegistTradeDialog from './RegistTradeDialog'

export default function TradeListTemp() {

    // JavaScriptのコードを書く
    const [isOpen, setIsOpen] = useState(false);

    return (
        /* HTMLで画面の見た目部分を書く */
        <>
        <div id="screen-area">
            <aside>
                <h2>関連リンク</h2>
                <ul>
                    <li><a href="#link1">投資一覧</a></li>
                    <li><a href="#link2">カレンダー</a></li>
                    <li><a href="#link3">投資推移グラフ</a></li>
                </ul>
            </aside>
            <main>
                <header>
                    <h4>投資一覧</h4>
                    <button type="button" id="regist-trade-btn" className="font-bold" onClick={() => setIsOpen(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-plus" aria-hidden="true" data-icon="inline-start"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8"></path><path d="M12 8v8"></path></svg>
                        投資データを登録
                    </button>
                </header>
                <div id="content-area">
                    <div id="summary-header">
                        <div>
                            <p id="summary-text">資産状況をひと目で確認</p>
                            <h2 id="summary-title">投資サマリー</h2>
                        </div>
                        <span id="current-month" className="font-bold">2026年9月</span>
                    </div>
                    <section id="card-area">
                        <div className="card-item border">
                            <div className="card-data">
                                <div>
                                    <p className="card-title font-bold">データ件数</p>
                                    <p className="data-count font-bold">6件</p>
                                </div>
                                <div id="data-count-img">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-column" aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                                </div>
                            </div>
                            <p className="card-text grey-text">登録済みの投資データ</p>
                        </div>
                        <div className="card-item border">
                            <div className="card-data">
                                <div>
                                    <p className="card-title font-bold">購入金額合計</p>
                                    <p className="data-count font-bold green-text">¥344,300</p>
                                </div>
                                <div id="total-buy-amount-img">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down" aria-hidden="true"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
                                </div>
                            </div>
                            <p className="card-text grey-text">これまでの購入総額</p>
                        </div>
                        <div className="card-item border">
                            <div className="card-data">
                                <div>
                                    <p className="card-title font-bold">売却金額合計</p>
                                    <p className="data-count font-bold red-text">¥78,200</p>
                                </div>
                                <div id="total-sell-amount-img">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up" aria-hidden="true"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
                                </div>
                            </div>
                            <p className="card-text grey-text">これまでの売却総額</p>
                        </div>
                        <div className="card-item border" >
                            <div className="card-data">
                                <div>
                                    <p className="card-title font-bold">収支</p>
                                    <p className="data-count font-bold  red-text">-¥266,100</p>
                                </div>
                                <div id="balance-img">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-down" aria-hidden="true"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
                                </div>
                            </div>
                            <p className="card-text grey-text">売却金額 − 購入金額</p>
                        </div>
                    </section>
                    <section id="trade-data-area" className="border">
                        <div id="data-area-header" className="border-b">
                            <div>
                                <h2 id="data-area-title">投資データ</h2>
                                <p className="data-text">取引履歴を管理できます。行を選択すると詳細を確認できます。</p>
                            </div>
                        </div>
                        <div id="trade-table-area">
                            <table id="trade-data-table">
                                <thead id="trade-data-thead">
                                    <tr>
                                        <th className="table-padding">
                                            <button className="header-sort-btn">
                                                投資種別
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down opacity-30" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                                            </button>
                                        </th>
                                        <th className="table-padding">
                                            <button className="header-sort-btn">
                                                銘柄名
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down opacity-30" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                                            </button>
                                        </th>
                                        <th className="table-padding">
                                            <button className="header-sort-btn">
                                                区分
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down opacity-30" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                                            </button>
                                        </th>
                                        <th className="table-padding">
                                            <button className="header-sort-btn">
                                                合計金額
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down opacity-30" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                                            </button>
                                        </th>
                                        <th className="table-padding">
                                            <button className="header-sort-btn">
                                                単価
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down opacity-30" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                                            </button>
                                        </th>
                                        <th className="table-padding">
                                            <button className="header-sort-btn">
                                                数量
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down opacity-30" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                                            </button>
                                        </th>
                                        <th className="table-padding">
                                            <button className="header-sort-btn">
                                                手数料
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down opacity-30" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                                            </button>
                                        </th>
                                        <th className="table-padding">
                                            <button className="header-sort-btn">
                                                取引日 
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-down opacity-30" aria-hidden="true"><path d="m6 9 6 6 6-6"></path></svg>
                                            </button>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="table-padding border-b"><span className="font-bold purple-text trade-type-span">株式投資</span></td>
                                        <td className="table-padding font-bold blue-text border-b">トヨタ自動車 (7203)</td>
                                        <td className="table-padding font-bold green-text border-b">購入</td>
                                        <td className="table-padding font-bold border-b">¥108,500</td>
                                        <td className="table-padding grey-text border-b">¥2,700</td>
                                        <td className="table-padding grey-text border-b">40</td>
                                        <td className="table-padding grey-text border-b">¥700</td>
                                        <td className="table-padding grey-text border-b">2026/09/23</td>
                                    </tr>
                                    <tr>
                                        <td className="table-padding border-b"><span className="font-bold purple-text trade-type-span">株式投資</span></td>
                                        <td className="table-padding font-bold blue-text border-b">任天堂 (7954)</td>
                                        <td className="table-padding font-bold green-text border-b">購入</td>
                                        <td className="table-padding font-bold border-b">¥4,200</td>
                                        <td className="table-padding grey-text border-b">¥700</td>
                                        <td className="table-padding grey-text border-b">5</td>
                                        <td className="table-padding grey-text border-b">¥1000</td>
                                        <td className="table-padding grey-text border-b">2026/09/20</td>
                                    </tr>
                                    <tr>
                                        <td className="table-padding border-b"><span className="font-bold purple-text trade-type-span">仮想通貨</span></td>
                                        <td className="table-padding font-bold blue-text border-b">Bitcoin (BTC)</td>
                                        <td className="table-padding font-bold red-text border-b">売却</td>
                                        <td className="table-padding font-bold border-b">¥4,000</td>
                                        <td className="table-padding grey-text border-b" >¥500</td>
                                        <td className="table-padding grey-text border-b">1</td>
                                        <td className="table-padding grey-text border-b">¥100</td>
                                        <td className="table-padding grey-text border-b">2026/08/10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div id="data-area-footer">
                            <span>全3件</span>
                            <div id="pagination-area">
                                <button type="button" data-slot="button" aria-label="前のページ"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-left" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg></button>
                                <span className="font-bold">1</span>
                                <button type="button" data-slot="button" aria-label="次のページ"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right" aria-hidden="true"><path d="m9 18 6-6-6-6"></path></svg></button>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <RegistTradeDialog isOpen={isOpen} onClose={() => setIsOpen(false)}/>
        </div>
        </>
    )
}

// export default Tradelist
