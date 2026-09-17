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
                    <section>
                        <div id="summary-header">
                            <div>
                                <p>資産状況をひと目で確認</p>
                                <p>投資サマリー</p>
                            </div>
                            <p>2026年9月</p>
                        </div>
                        <div id="card-area">
                            <div className="card"><p>データ件数</p></div>
                            <div className="card"><p>購入金額合計</p></div>
                            <div className="card"><p>売却金額合計</p></div>
                            <div className="card"><p>収支</p></div>
                        </div>
                    </section>
                    <section>
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
