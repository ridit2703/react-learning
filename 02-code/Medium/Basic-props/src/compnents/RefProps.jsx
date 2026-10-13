


import { useRef, forwardRef } from "react";

const CustomInput = forwardRef(
  ({ label, placeholder, className }, ref) => {
    return (
      <div className="flex flex-col gap-2 mb-4">
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>

        <input
          ref={ref}
          type="text"
          placeholder={placeholder}
          className={`border border-gray-300 rounded-md px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 ${className || ""}`}
        />
      </div>
    );
  }
);

function RefProps() {
  const inputRef = useRef(null);
  const secondInputRef = useRef(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  const getInputRef = () => {
    if (inputRef.current) {
      alert(`Input value: ${inputRef.current.value}`);
    }
  };

  const clearInputValue = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

  const focusSecondInput = () => {
    secondInputRef.current?.focus();
  };

  return (
    <section className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        Ref Props
      </h2>

      <p className="text-gray-600 mb-6">
        Learn how to use useRef and forwardRef to focus,
        read, and clear input values.
      </p>

      <div className="bg-gray-50 border rounded-lg p-5">
        <h3 className="text-lg font-semibold mb-4">
          Try It Out
        </h3>

        <CustomInput
          ref={inputRef}
          label="First Input with Ref"
          placeholder="Type something"
        />

        <CustomInput
          ref={secondInputRef}
          label="Second Input with Ref"
          placeholder="Type something"
        />

        <div className="flex flex-wrap gap-3 mt-5">
          <button
            onClick={focusInput}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Focus First
          </button>

          <button
            onClick={focusSecondInput}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Focus Second
          </button>

          <button
            onClick={getInputRef}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Get Input
          </button>

          <button
            onClick={clearInputValue}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Clear Input
          </button>
        </div>
      </div>
    </section>
  );
}

export default RefProps;
