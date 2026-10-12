

import { useState } from "react";

function Button({ text, color, size, onClick, disabled }) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`
            px-6 py-3 rounded-xl font-semibold tracking-wide
            shadow-md hover:shadow-lg
            transform hover:-translate-y-0.5
            active:translate-y-0 active:scale-95
            transition-all duration-300 ease-in-out
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300

            ${size === 'small' ? 'text-sm px-2 py-2' : ''}
            ${size === 'large' ? 'text-lg px-10 py-4' : ''}

            ${color === 'primary' ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-400' : ''}
            ${color === 'secondary' ? 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-400' : ''}
            ${color === 'danger' ? 'bg-red-600 hover:bg-red-700 text-white focus:ring-red-400' : ''}
            ${color === 'success' ? 'bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-400' : ''}

            ${disabled
                ? "opacity-50 cursor-not-allowed shadow-none transform-none hover:shadow-none"
                : "cursor-pointer"}
        `}>
            {text}
        </button>
    )
}

function BasicProps() {
    const [clickCount, setClickCount] = useState(0)
    return (
        <>
            <section className=" bg-gray-400 rounded-2xl border border-gray-200  p-6 text-gray-800 shadow-lg sm:p-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                    Basic Props
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-7 text-black sm:text-base">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque facere obcaecati
                    quae ullam minima harum a accusantium suscipit cumque earum?
                </p>

                <div className="mt-8 space-y-5">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Different Colors
                    </h3>

                    <div className="flex flex-wrap gap-4 rounded-xl bg-gray-50 p-5">
                        <Button
                            text="Primary button"
                            color="primary"
                            onClick={() => setClickCount(clickCount + 1)} />

                        <Button
                            text="Secondary button"
                            color="secondary"
                            onClick={() => setClickCount(clickCount + 1)} />

                        <Button
                            text="Danger button"
                            color="danger"
                            onClick={() => setClickCount(clickCount + 1)} />

                        <Button
                            text="Success button"
                            color="success"
                            onClick={() => setClickCount(clickCount + 1)} />
                    </div>

                    
                </div>
                 <div className="mt-8 space-y-5">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Different Sizes
                    </h3>

                    <div className="flex flex-wrap gap-4 rounded-xl bg-gray-50 p-5">
                        <Button
                            text="Primary button"
                            color="primary"
                            size={"small"}
                            onClick={() => setClickCount(clickCount + 1)} />

                        <Button
                            text="Secondary button"
                            color="secondary"
                            size={"large"}
                            onClick={() => setClickCount(clickCount + 1)} />

                    
                    </div>

                    
                </div>
                 <div className="mt-8 space-y-5">
                    <h3 className="text-lg font-semibold text-gray-800">
                        Disabled State
                    </h3>

                    <div className="flex flex-wrap gap-4 rounded-xl bg-gray-50 p-5">
                        <Button
                            text="Enable Button"
                            color="primary"
                            size={"small"}
                            onClick={() => setClickCount(clickCount + 1)} />

                        <Button
                            text="Disabled Button"
                            color="secondary"
                            size={"large"}
                            disable={true}
                            onClick={() =>alert("this should not fire")} />

                    
                    </div>

                    <div className="flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50 px-5 py-4">
                        <span className="text-sm font-medium text-gray-600">
                            Total button clicks
                        </span>

                        <span className="rounded-lg bg-blue-600 px-4 py-2 text-lg font-bold tabular-nums text-white shadow-sm">
                            {clickCount}
                        </span>
                    </div>
                </div>
                
                
                
                
            </section>
        </>
    )
}

export default BasicProps
