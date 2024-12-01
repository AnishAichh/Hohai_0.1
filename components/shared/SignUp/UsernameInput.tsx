import React from "react";

const UsernameInput = () => (
    <div>
        <label className="block text-md py-2 font-semibold">Username*</label>
        <input
            type="text"
            className="mb-2 h-12 w-full rounded-lg border-2 border-black px-5 text-sm placeholder-gray-400"
            placeholder="Enter your username"
        />
    </div>
);

export default UsernameInput;
