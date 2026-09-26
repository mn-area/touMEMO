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
                <dialog open className="static m-0 p-6 rounded-lg border shadow-xl">
                    <div>
                        <h2 className="text-lg font-bold">test</h2>
                        <button onClick={onClose}>閉じる</button>
                    </div>
                </dialog>
            </div>
        </>
    )
}