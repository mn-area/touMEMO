function Tradelist() {
    // JavaScriptのコードを書く
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
                </header>
                <div id="content-area">
                    <div id="summary-header">
                        <div>
                            <p id="summary-text">資産状況をひと目で確認</p>
                            <h2 id="summary-title">投資サマリー</h2>
                        </div>
                        <p>2026年9月</p>
                    </div>
                    <section id="card-area">
                        <div className="card-item border">
                            <div className="card-data">
                                <div>
                                    <p>データ件数</p>
                                    <p className="data-count">6件</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-column" aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                                </div>
                            </div>
                            <p className="card-text">登録済みの投資データ</p>
                        </div>
                        <div className="card-item border">
                            <div className="card-data">
                                <div>
                                    <p>購入金額合計</p>
                                    <p className="data-count">¥344,300</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down" aria-hidden="true"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
                                </div>
                            </div>
                            <p className="card-text">これまでの購入総額</p>
                        </div>
                        <div className="card-item border">
                            <div className="card-data">
                                <div>
                                    <p>売却金額合計</p>
                                    <p className="data-count">¥78,200</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up" aria-hidden="true"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
                                </div>
                            </div>
                            <p className="card-text">これまでの売却総額</p>
                        </div>
                        <div className="card-item border" >
                            <div className="card-data">
                                <div>
                                    <p>収支</p>
                                    <p className="data-count">-¥266,100</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-down" aria-hidden="true"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
                                </div>
                            </div>
                            <p className="card-text">売却金額 − 購入金額</p>
                        </div>
                    </section>
                    <section id="trade-data-area" className="border">
                        <div id="data-area-header" className="border-b">
                            <div>
                                <h2 id="data-area-title">投資データ</h2>
                                <p className="data-text">取引履歴を管理できます。行を選択すると詳細を確認できます。</p>
                            </div>
                            {/* <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-search absolute left-3 top-1/2 -translate-y-1/2 text-[#a3abbb]" aria-hidden="true"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
                                <input type="text" id="brand-search-input" aria-label="銘柄名を検索" placeholder="銘柄名を検索"></input>
                            </div> */}
                        </div>
                        <div id="trade-table-area">
                            <table id="trade-data-table">
                                <thead>
                                    <tr>
                                    <th>投資種別</th>
                                    <th>銘柄名</th>
                                    <th>区分</th>
                                    <th>合計金額</th>
                                    <th>単価</th>
                                    <th>数量</th>
                                    <th>手数料</th>
                                    <th>取引日</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>株式投資</td>
                                        <td>トヨタ自動車 (7203)</td>
                                        <td>購入</td>
                                        <td>¥108,500</td>
                                        <td>¥2,700</td>
                                        <td>40</td>
                                        <td>¥700</td>
                                        <td>2026/09/23</td>
                                    </tr>
                                    <tr>
                                        <td>株式投資</td>
                                        <td>任天堂 (7954)</td>
                                        <td>購入</td>
                                        <td>¥4,200</td>
                                        <td>¥700</td>
                                        <td>5</td>
                                        <td>¥1000</td>
                                        <td>2026/09/20</td>
                                    </tr>
                                    <tr>
                                        <td>仮想通貨</td>
                                        <td>Bitcoin (BTC)</td>
                                        <td>購入</td>
                                        <td>¥4,000</td>
                                        <td>¥500</td>
                                        <td>1</td>
                                        <td>¥100</td>
                                        <td>2026/08/10</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                </div>
            </main>
        </div>
        </>
    )
}

export default Tradelist
