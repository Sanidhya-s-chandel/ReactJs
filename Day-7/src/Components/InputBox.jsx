import React, { useState, useCallback, useEffect, useRef } from 'react'
import ReactJsAlert from "reactjs-alert";


const InputBox = () => {
    const [Length, setLength] = useState(8);
    const [Numbers, setNumbers] = useState(false);
    const [Characters, setCharacters] = useState(false);
    const [Password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState("");

    const passwordRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = ""
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if (Numbers) str += "0123456789"
        if (Characters) str += "~!@#$%^&*()_+[]{}"

        for (let i = 1; i <= Length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        };

        setPassword(pass)

    }, [Length, Numbers, Characters, setPassword]);

    const copyToClipboard = useCallback(() => {
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0, 24);

        setAlertMessage("Password copied to clipboard!");
        setShowAlert(true);

        setTimeout(() => setShowAlert(false), 3000);

        window.navigator.clipboard.writeText(Password);
    }, [Password]);

    useEffect(() => {
        passwordGenerator()
    }, [Length, Numbers, Characters, passwordGenerator])

    return (
        <div className='h-1/3 w-full bg-zinc-800 rounded-xl shadow-md px-4 py-4 text-white text-lg'>
            <div className='flex items-center gap-0 mb-3'>
                <input type="text" ref={passwordRef} value={Password} className='w-full py-3 px-3 text-orange-600 text-xl font-semibold rounded-tl-xl rounded-bl-xl bg-orange-100/90' placeholder='Password' />
                <button onClick={copyToClipboard} className='px-8 py-3 bg-blue-800 hover:bg-blue-600 hover:cursor-pointer font-semibold rounded-tr-lg rounded-br-lg'>Copy</button>
            </div>
            <div className='w-full flex items-center gap-12'>
                <div className='flex items-center justify-center w-[30%] text-xl mt-4 text-orange-400 gap-4'>
                    <input type="range" min={8} max={24} value={Length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
                    <label>Lenght : {Length}</label>
                </div>
                <div className='flex items-center justify-center text-xl mt-4 text-orange-400 gap-4'>
                    <label>Characters : {Characters}</label>
                    <input type="checkbox" defaultChecked={Characters} onChange={(e) => { setCharacters((prev) => !prev) }} />
                </div>
                <div className='flex items-center justify-center text-xl mt-4 text-orange-400 gap-4'>
                    <label>Numbers : {Numbers}</label>
                    <input type="checkbox" defaultChecked={Numbers} onChange={(e) => { setNumbers((prev) => !prev) }} />
                </div>
            </div>

            <ReactJsAlert status={showAlert} type="success" title={alertMessage} Close={() => setShowAlert(false)} />
        </div>
    )
}

export default InputBox