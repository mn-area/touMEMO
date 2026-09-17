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
                            <p>資産状況をひと目で確認</p>
                            <p>投資サマリー</p>
                        </div>
                        <p>2026年9月</p>
                    </div>
                    <section>
                        <div id="card-area">
                            <div className="card-item">
                                <div className="card-data">
                                    <div>
                                        <p>データ件数</p>
                                        <p>6件</p>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chart-column" aria-hidden="true"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
                                    </div>
                                </div>
                                <p>登録済みの投資データ</p>
                            </div>
                            <div className="card-item">
                                <div className="card-data">
                                    <div>
                                        <p>購入金額合計</p>
                                        <p>¥344,300</p>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-down" aria-hidden="true"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                                <p>これまでの購入総額</p>
                            </div>
                            <div className="card-item">
                                <div className="card-data">
                                    <div>
                                        <p>売却金額合計</p>
                                        <p>¥78,200</p>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-arrow-up" aria-hidden="true"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
                                    </div>
                                </div>
                                <p>これまでの売却総額</p>
                            </div>
                            <div className="card-item">
                                <div className="card-data">
                                    <div>
                                        <p>収支</p>
                                        <p>-¥266,100</p>
                                    </div>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trending-down" aria-hidden="true"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
                                    </div>
                                </div>
                                <p>売却金額 − 購入金額</p>
                            </div>
                        </div>
                    </section>
                    <section id="trade-data-area">
                        <div>
                            <p>投資データ</p>
                            <p>取引履歴を管理できます。行を選択すると詳細を確認できます。</p>
                        </div>
                    </section>
                </div>
            </main>
        </div>
        </>
    )
}

export default Tradelist
