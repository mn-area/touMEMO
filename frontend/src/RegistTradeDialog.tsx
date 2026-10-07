import { useForm } from 'react-hook-form';
import type { FormData, Trade } from '../src/types/common'
import { useEffect } from 'react';
type Props = {
    isOpen: boolean,
    isMode: string,
    onClose:  () => void,
    addTrade: (data: FormData) => void,
    editTrade: (id:number, data:FormData) => void,
    deleteTrade: (id:number, data:FormData) => void,
    selectedTrade: Trade | null
}

export default function RegistTradeDialog ({ isOpen, isMode, onClose, addTrade, editTrade, deleteTrade, selectedTrade }: Props) {
    const { register, setValue, watch, handleSubmit, formState: { errors }, getValues, reset } = useForm<FormData>({
        mode: 'onSubmit', 
        defaultValues:{
            investmenttype: 1,
            tradetype: 1
        },
    });

    useEffect(() => {
        if (isMode !== "edit" ||   !selectedTrade) {
            return;
        }
        reset(
            {
                tradedate: `${selectedTrade.tradedate.getFullYear()}-${String(selectedTrade.tradedate.getMonth() + 1).padStart(2, "0")}-${String(selectedTrade.tradedate.getDate()).padStart(2, "0")}`,
                brandname: selectedTrade.brandname,
                investmenttype: selectedTrade.investmenttype,
                tradetype: selectedTrade.tradetype,
                unitprice: selectedTrade.unitprice.toString(),
                fee: selectedTrade.fee.toString(),
                quantity: selectedTrade.quantity.toString(),
                reason: selectedTrade.reason,
                memo: selectedTrade.memo
            }
        )
    },[isMode, selectedTrade, setValue])

    if (!isOpen) {
        return null;
    }

    const onSubmit = (data: FormData) => {
        addTrade(data);
        onClose();
        reset();
    };

    const editData = (data: FormData) => {
        if (selectedTrade?.id !== null && selectedTrade?.id !== undefined) {
            editTrade(selectedTrade.id, data);
        }
        onClose();
        reset();
    }

    const deleteData = (data: FormData) => {
        if (selectedTrade?.id !== null && selectedTrade?.id !== undefined) {
            deleteTrade(selectedTrade.id,data);
        }
        onClose();
        reset();
    }

    
    const investmenttypeValue = watch("investmenttype");
    const tradetypeValue = watch("tradetype");

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
                            <button type="button" onClick={()=> {onClose(); reset();}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-x" aria-hidden="true"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                            </button>
                        </div>
                        <form className="grid gap-5 px-7 py-6" onSubmit={handleSubmit(onSubmit)}>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <label className="grid gap-2 text-xs font-bold text-[#5d6880]">
                                    取引日
                                    <input {...register("tradedate", { required: "取引日は必須です" })} id="tradedate-input" type="date" className="h-10 rounded-lg border border-[#dfe4ed] px-3 text-sm font-normal text-[#26334f] outline-none focus:border-[#6276c2]"></input>
                                    {errors.tradedate && <p>{errors.tradedate.message}</p>}
                                </label>
                                <label className="grid gap-2 text-xs font-bold text-[#5d6880]">
                                    銘柄名
                                    <select {...register("brandname" , { required: "銘柄名は必須です" })} id="brandname-select" className="h-10 border border-[#dfe4ed] rounded-lg px-3 text-sm font-normal text-[#26334f] outline-none focus:border-[#6276c2]">
                                        <option disabled selected value={""}>銘柄名を選択してください</option>
                                        <option value={"トヨタ自動車 (7203)"}>トヨタ自動車 (7203)</option>
                                        <option value={"任天堂 (7954)"}>任天堂 (7954)</option>
                                        <option value={"ソニーグループ（6758）"}>ソニーグループ（6758）</option>
                                        <option value={"Bitcoin (BTC)"}>Bitcoin (BTC)</option>
                                    </select>
                                    {errors.brandname && <p>{errors.brandname.message}</p>}
                                </label>
                            </div>
                            <div className="grid gap-2">
                                <span className="text-xs font-bold text-[#5d6880]">投資種別</span>
                                <div className="flex gap-2">
                                    <button type='button' onClick={() => setValue('investmenttype', 1)} className={`flex-1 border rounded-lg px-3 py-2.5 text-xs font-bold ${investmenttypeValue === 1 ? "border-[#30469b] bg-[#eef1ff] text-[#30469b]" : "border-[#dfe4ed] text-[#8791a4]"}`}>株式投資</button>
                                    <button type='button' onClick={() => {setValue('investmenttype', 2); setValue('quantity', "1")}} className={`flex-1 border rounded-lg px-3 py-2.5 text-xs font-bold ${investmenttypeValue === 2 ? "border-[#0b975] bg-[#fffaee] text-[#9b7230]" : "border-[#dfe4ed] text-[#8791a4]"}`}>仮想通貨</button>
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <span className="text-xs font-bold text-[#5d6880]">区分</span>
                                <div className="flex gap-2">
                                    <button type='button' onClick={() => setValue('tradetype', 1)} className={`flex-1 border rounded-lg px-3 py-2.5 text-xs font-bold ${tradetypeValue === 1 ? "border-[#42aa82] bg-[#edf9f3] text-[#258861]" : "border-[#dfe4ed] text-[#8791a4]"}`}>購入</button>
                                    <button type='button' onClick={() => setValue('tradetype', 2)} className={`flex-1 border rounded-lg px-3 py-2.5 text-xs font-bold ${tradetypeValue === 2 ? "border-[#db7c85] bg-[#fff1f2] text-[#c44f5d]" : "border-[#dfe4ed] text-[#8791a4]"}`}>売却</button>
                                </div>
                            </div>
                            <div  className="grid gap-4 sm:grid-cols-3">
                                <label className="grid gap-2 text-xs font-bold text-[#5d6880]">
                                    単価
                                    <input {...register("unitprice" , { required: "単価は必須です" , min:{value:1 , message:"0以上で入力してください"}})} id="unitprice-input" type="number" placeholder="0" min={0} className="h-10 border rounded-lg border-[#dfe4ed] font-normal outline-none focus:border-[#6276c2]"></input>
                                    {errors.unitprice && <p>{errors.unitprice.message}</p>}
                                </label>
                                <label className="grid gap-2 text-xs font-bold text-[#5d6880]">
                                    手数料
                                    <input {...register("fee" , {min:{value:1 , message:"0以上で入力してください"}})} id="fee-input" type="number" placeholder="0" min={0} className="h-10 border rounded-lg border-[#dfe4ed] font-normal outline-none focus:border-[#6276c2]"></input>
                                    {errors.fee && <p>{errors.fee.message}</p>}
                                </label>
                                <label className="grid gap-2 text-xs font-bold text-[#5d6880]">
                                    数量
                                    <input {...register("quantity" , { required: "数量は必須です" , min:{value:1 , message:"0以上で入力してください"} })} id="quantity-input" type="number" placeholder="0" min={0} className="h-10 border rounded-lg border-[#dfe4ed] font-normal outline-none focus:border-[#6276c2]" disabled={investmenttypeValue === 2}></input>
                                    {errors.quantity && <p>{errors.quantity.message}</p>}
                                </label>
                            </div>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <label className="grid gap-2 text-xs font-bold text-[#5d6880]">
                                    購入/売却理由
                                    <textarea {...register("reason")} id="reason-input" placeholder="取引の理由を入力" rows={3} className="resize-none rounded-lg border border-[#dfe4ed] px-3 py-2 text-sm font-normal text-[#26334f] outline-none focus:border-[#6276c2]"></textarea>
                                </label>
                                <label className="grid gap-2 text-xs font-bold text-[#5d6880]">
                                    メモ
                                    <textarea {...register("memo")}  id="memo-input" placeholder="メモを入力" rows={3} className="resize-none rounded-lg border border-[#dfe4ed] px-3 py-2 text-sm font-normal text-[#26334f] outline-none focus:border-[#6276c2]"></textarea>
                                </label>
                            </div>
                            <div className="flex justify-between border-t border-[#edf0f5] pt-5">
                                <span></span>
                                {isMode === "new" &&
                                    <button type="submit" id="trade-regist-btn" className="border rounded-lg text-sm font-medium px-2.5 bg-[#30469b] h-8 text-white">登録する</button>
                                }
                                {isMode === "edit" &&
                                <div>
                                    <button type='button' id="trade-delete-btn" onClick={() => deleteData(getValues())} className="border rounded-lg text-sm font-medium px-2.5 bg-[#30469b] h-8 text-white">削除</button>
                                    <button type='button' id="trade-edit-btn" onClick={() => editData(getValues())} className="border rounded-lg text-sm font-medium px-2.5 bg-[#30469b] h-8 text-white">編集内容を保存</button>
                                </div>
                                }
                            </div>
                        </form>
                    </div>
                </dialog>
            </div>
        </>
    )
}