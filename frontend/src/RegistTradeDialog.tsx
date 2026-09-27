type Props = {
    isOpen: boolean,
    onClose:  () => void
}
export default function RegistTradeDialog ({isOpen, onClose}: Props) {
    
    if (!isOpen) {
        return null;
    }
    return (
        <>
            <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md">
                <dialog open className="static m-0 rounded-2xl shadow-xl w-full max-w-xl">
                    <div>
                        <div className="flex justify-between border-b px-7 py-5">
                            <div>
                                <p className="text-[10px] font-bold text-[#8c96aa] tracking-[.16em]">CMN-03 / TRADE DATA</p>
                                <h2 className="text-lg font-bold mt-1">投資データを登録</h2>
                            </div>
                            <button type="button" onClick={onClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            </button>
                        </div>
                        <form className="grid gap-5 px-7 py-6">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <label className="grid gap-2 text-xs font-bold text-[#5d6880]">
                                    取引日
                                    <input id="tradedate-input" type="date" className="h-10 rounded-lg border border-[#dfe4ed] px-3 text-sm font-normal text-[#26334f] outline-none focus:border-[#6276c2]" name="date"></input>
                                </label>
                                <label className="grid gap-2 text-xs font-bold text-[#5d6880]">
                                    銘柄名
                                    <select id="brandname-select" className="h-10 border border-[#dfe4ed] rounded-lg px-3 text-sm font-normal text-[#26334f] outline-none focus:border-[#6276c2]">
                                        <option disabled selected>銘柄名を選択してください</option>
                                        <option>トヨタ自動車（7203）</option>
                                        <option>任天堂（7974）</option>
                                        <option>ソニーグループ（6758）</option>
                                        <option>三菱UFJ FG（8306）</option>
                                    </select>
                                </label>
                            </div>
                            <div className="grid gap-2">
                                <span className="text-xs font-bold text-[#5d6880]">投資種別</span>
                                <div className="flex gap-2">
                                    <button className="flex-1 border rounded-lg px-3 py-2.5 text-xs font-bold border-[#30469b] bg-[#eef1ff] text-[#30469b]">株式投資</button>
                                    <button className="flex-1 border rounded-lg px-3 py-2.5 text-xs font-bold border-[#dfe4ed] text-[#8791a4]">仮想通貨</button>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <span className="text-xs font-bold text-[#5d6880]">区分</span>
                                <div className="flex gap-2">
                                    <button className="flex-1 border rounded-lg px-3 py-2.5 text-xs font-bold border-[#42aa82] bg-[#edf9f3] text-[#258861]">購入</button>
                                    <button className="flex-1 border rounded-lg px-3 py-2.5 text-xs font-bold border-[#dfe4ed] text-[#8791a4]">売却</button>
                                </div>
                            </div>
                            <div  className="grid gap-4 sm:grid-cols-3">
                                <label className="grid gap-2 text-xs font-bold text-[#5d6880]">
                                    単価
                                    <input id="unitprice-input" type="number" placeholder="0" min={0} className="h-10 border rounded-lg border-[#dfe4ed] font-normal outline-none focus:border-[#6276c2]"></input>
                                </label>
                                <label className="grid gap-2 text-xs font-bold text-[#5d6880]">
                                    手数料
                                    <input id="fee-input" type="number" placeholder="0" min={0} className="h-10 border rounded-lg border-[#dfe4ed] font-normal outline-none focus:border-[#6276c2]"></input>
                                </label>
                                <label className="grid gap-2 text-xs font-bold text-[#5d6880]">
                                    数量
                                    <input id="quantity-input" type="number" placeholder="0" min={0} className="h-10 border rounded-lg border-[#dfe4ed] font-normal outline-none focus:border-[#6276c2]"></input>
                                </label>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <label className="grid gap-2 text-xs font-bold text-[#5d6880]">
                                    購入/売却理由
                                    <textarea id="reason-input" placeholder="取引の理由を入力" rows={3} className="resize-none rounded-lg border border-[#dfe4ed] px-3 py-2 text-sm font-normal text-[#26334f] outline-none focus:border-[#6276c2]" name="date"></textarea>
                                </label>
                                <label className="grid gap-2 text-xs font-bold text-[#5d6880]">
                                    メモ
                                    <textarea id="memo-input" placeholder="メモを入力" rows={3} className="resize-none rounded-lg border border-[#dfe4ed] px-3 py-2 text-sm font-normal text-[#26334f] outline-none focus:border-[#6276c2]" name="date"></textarea>
                                </label>
                            </div>
                            <div className="flex justify-between border-t border-[#edf0f5] pt-5">
                                <span></span>
                                <button type="submit" id="trade-regist-btn" className="border rounded-lg text-sm font-medium px-2.5 bg-[#30469b] h-8 text-white">登録する</button>
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}