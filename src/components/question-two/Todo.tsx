"use client";
import Link from "next/link";
import React, { useState } from "react";

interface FormValues {
    firstName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
}

const Todo: any = () => {
    const form: FormValues = {
        firstName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    };

    // States
    const [formData, setFormData] = useState<FormValues[]>([]);
    const [formValues, setFormValues] = useState<FormValues>(form);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(false);

    // Regex
    const EmailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // Handler Clicker
    const handlerSubmit = (e: any) => {
        e.preventDefault();
        setError(true);
        if (
            formValues.firstName.length > 0 &&
            EmailRegex.test(formValues.email) &&
            formData.every((item) => item.email !== formValues.email) &&
            formValues.email.length > 0 &&
            formValues.phone.length >= 10 &&
            formValues.password.length >= 6 &&
            formValues.confirmPassword === formValues.password
        ) {
            setFormValues(form);
            setError(false);
            setFormData([...formData, formValues]);
        }
    };
    // Table delete Data
    const handleDelete = (index: number) => {
        const updatedFormData = [...formData];
        updatedFormData.splice(index, 1);
        setFormData(updatedFormData);
    };

    return (
        <>
            <div className="flex justify-center items-center gap-3 py-3">
                <Link href={"/question-1/dashboard"} className="p-3 border whitespace-nowrap border-black rounded-lg bg-green-600">
                    Question-1
                </Link>
                <Link href={"/question-2/dashboard"} className="p-3 border whitespace-nowrap border-black rounded-lg bg-green-600">
                    Question-2
                </Link>
            </div>
            <div className="py-5 px-4 font-sans max-w-[1440px] overflow-hidden min-h-screen justify-center items-center flex flex-col mx-auto">
                <h2 className="text-2xl mb-6 text-center">To Do App</h2>
                {/* Form */}
                <form
                    className="max-w-md mx-auto flex justify-center items-center flex-col w-full"
                    id="form" onSubmit={handlerSubmit} >
                    {/* First Name */}
                    <div className="mb-4 w-full">
                        <label htmlFor="first-name" className="block mb-2">
                            {error && formValues.firstName.length === 0 ? (
                                <p className="text-red-600 font-bold leading-[30px]">
                                    First name is required </p>
                            ) : (
                                <p className="font-bold leading-[30px]">
                                    First name </p>
                            )}
                        </label>
                        <input type="text" id="first-name" name="first-name" value={formValues.firstName}
                            onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })
                            } className="w-full px-3 py-2 border border-black rounded"/>
                    </div>
                    {/* Email */}
                    <div className="mb-4 w-full">
                        <label htmlFor="email" className="block mb-2">
                            {/* Show 'Email' label first */}
                            {!formValues.email.length && !error ? (
                                <p className="font-bold leading-[30px]">Email</p>
                            ) : formValues.email.length === 0 ? (
                                <p className="text-red-600 font-bold leading-[30px]">
                                    Email is required </p>
                            ) : !EmailRegex.test(formValues.email) ? (
                                <p className="text-red-600 font-bold leading-[30px]">
                                    Email is not valid </p>
                            ) : formData.some((item) => item.email === formValues.email) ? (
                                <p className="text-red-600 font-bold leading-[30px]">
                                    Email already exists </p>
                            ) : (
                                <p className="font-bold leading-[30px]">Email</p>
                            )}
                        </label>

                        <input type="email" id="email" name="email" value={formValues.email}
                            onChange={(e) => setFormValues({ ...formValues, email: e.target.value })
                            } className="w-full px-3 py-2 border border-black rounded"/>
                    </div>
                    {/* Phone Number */}
                    <div className="mb-4 w-full">
                        <label htmlFor="phone" className="block mb-2">
                            {error && formValues.phone.length === 0 ? (
                                <p className="text-red-600 font-bold leading-[30px]"> Phone number is required </p>
                            ) : error &&
                                formValues.phone.length < 10 &&
                                formValues.phone.length > 0 ? (
                                <p className="text-red-600 font-bold leading-[30px]"> Phone number is not valid</p>
                            ) : (
                                <p className="font-bold leading-[30px]">Phone</p>
                            )}
                        </label>
                        <input type="number" id="phone" name="phone" value={formValues.phone}
                            onChange={(e) =>
                                setFormValues({ ...formValues, phone: e.target.value })
                            } className="w-full px-3 py-2 border border-black rounded"/>
                    </div>
                    {/* Password */}
                    <div className="mb-4 w-full">
                        <label htmlFor="password" className="block mb-2">
                            {error && formValues.password.length === 0 ? (
                                <p className="text-red-600 font-bold leading-[30px]"> Password is required</p>
                            ) : error &&
                                formValues.password.length < 6 &&
                                formValues.password.length > 0 ? (
                                <p className="text-red-600 font-bold leading-[30px]">
                                    Password must be at least 6 characters</p>
                            ) : (
                                <p className="font-bold leading-[30px]">
                                    Password</p>
                            )}
                        </label>
                        <div className="w-full relative">
                            <input type={showPassword ? "text" : "password"} id="password" name="password"
                                value={formValues.password}
                                onChange={(e) =>
                                    setFormValues({ ...formValues, password: e.target.value })
                                } className="w-full px-3 py-2 border border-black rounded"/>
                            {formValues.password.length === 0 ? (
                                ""
                            ) : (
                                <div onClick={() => setShowPassword(!showPassword)}
                                    className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2"
                                > {showPassword ? "Hide" : "Show"}</div>
                            )}
                        </div>
                    </div>
                    {/* Config Password */}
                    <div className="mb-4 w-full">
                        <label htmlFor="confirm-password" className="block mb-2">
                            {error && formValues.confirmPassword.length === 0 ? (
                                <p className="text-red-600 font-bold leading-[30px]">
                                    Confirm password is required </p>
                            ) : error &&
                                formValues.confirmPassword !== formValues.password ? (
                                <p className="text-red-600 font-bold leading-[30px]">
                                    Confirm password does not match</p>
                            ) : (
                                <p className="font-bold leading-[30px]"> Confirm password</p>
                            )}
                        </label>
                        <input value={formValues.confirmPassword}
                            onChange={(e) =>
                                setFormValues({
                                    ...formValues,
                                    confirmPassword: e.target.value,
                                })}
                            type="password" id="confirm-password" name="confirm-password" className="w-full px-3 py-2 border border-black rounded"/></div>
                    {/* Sumbit Button */}
                    <button type="submit"className="px-4 py-2 bg-blue-500 mx-auto hover:scale-105 transition duration-300 text-white rounded"
                    >  Submit</button>
                </form>
                {/* Output */}
                {formData.length === 0 ? (
                    <p className=" mt-8 text-center">No data found</p>
                ) : (
                    <div className="mt-8">
                        <h3 className="text-xl mb-4 w-full">Submitted Data</h3>
                        <div className="max-w-[768px] overflow-hidden">
                            <div className="overflow-auto max-md:w-[640px] max-sm:W-[576px] max-[576px]:w-[400px] max-[400px]:w-[300px] mx-auto">
                                <table className="w-full border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="border border-gray-300 px-4 py-2 text-left">
                                                First Name</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">
                                                Email</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">
                                                Phone</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">
                                                Password</th>
                                            <th className="border border-gray-300 px-4 py-2 text-left">
                                                Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {formData.map((data, index) => (
                                            <tr key={index}>
                                                <td className="border border-gray-300 whitespace-nowrap px-4 py-2">
                                                    {data.firstName} </td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    {data.email} </td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    {data.phone} </td>
                                                <td className="border border-gray-300 px-4 py-2">
                                                    {data.password} </td>
                                                <td>
                                                    <button onClick={() => handleDelete(index)}
                                                        className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Todo;