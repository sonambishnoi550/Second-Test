"use client";
import React, { FormEvent, useState } from "react";
import Swal from "sweetalert2";

const Form = () => {
    const myState = {
        firstName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
        showPassword: false,
    };

    const [formValue, setFormValue] = useState(myState);
    const [errors, setErrors] = useState(false);
    const [tableData, setTableData] = useState([]);

    const emailRegax = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneRegax = /^[0-9]{10}$/;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setErrors(true);

        if (
            formValue.firstName.length > 0 &&
            formValue.email.length > 0 &&
            emailRegax.test(formValue.email) &&
            phoneRegax.test(formValue.phoneNumber) &&
            formValue.password.length >= 6 &&
            formValue.password === formValue.confirmPassword
        ) {
            setErrors(false);
            Swal.fire({
                title: "Success",
                text: "Login successful!",
                icon: "success",
                confirmButtonText: "OK",
            });

            setTableData([...tableData ,formValue]);

            setFormValue({
                firstName: "",
                email: "",
                phoneNumber: "",
                password: "",
                confirmPassword: "",
                showPassword: false,
            });
        }
    };

    const toggleShowPassword = () => {
        setFormValue({ ...formValue, showPassword: !formValue.showPassword });
    };

    const handleDelete = (index: number) => {
        const newData = tableData.filter((_, i) => i !== index);
        setTableData(newData);
    };

    return (
        <div className=" flex bg-white justify-center py-10">
            <div>
                <div className="container mx-auto">
                    <h1 className="text-center text-5xl pb-10">Todo App</h1>
                    <form className="pt-[31px] w-[600px]" onSubmit={handleSubmit}>
                        <div className="mb-[18px]">
                            <label className="text-black text-base font-medium">
                                First Name
                            </label>
                            <input
                                name="firstName"
                                type="text"
                                value={formValue.firstName}
                                onChange={(e) =>
                                    setFormValue({ ...formValue, firstName: e.target.value })
                                }
                                className="placeholder:text-black w-full mt-[6px] text-black border-black rounded-lg border p-4"
                                placeholder="First Name"
                            />
                            <p className="text-red-500">
                                {errors && formValue.firstName.length === 0 ? " Name is Required" : ""}
                            </p>
                        </div>
                        <div className="mb-[18px]">
                            <label className="text-black text-base font-medium">Email</label>
                            <input
                                name="email"
                                type="email"
                                value={formValue.email}
                                onChange={(e) =>
                                    setFormValue({ ...formValue, email: e.target.value })
                                }
                                className="placeholder:text-black w-full mt-[6px] text-black border-black rounded-lg border p-4"
                                placeholder="Email"
                            />
                            <p className="text-red-500">
                                {errors && formValue.email.length === 0
                                    ? "Email is Required"
                                    : !emailRegax.test(formValue.email) && formValue.email.length > 0
                                        ? "Email is invalid"
                                        : ""}
                            </p>
                        </div>
                        <div className="mb-[18px]">
                            <label className="text-black text-base font-medium">
                                Phone Number
                            </label>
                            <input
                                name="phoneNumber"
                                type="number"
                                value={formValue.phoneNumber}
                                onChange={(e) =>
                                    setFormValue({ ...formValue, phoneNumber: e.target.value })
                                }
                                className="placeholder:text-black w-full mt-[6px] text-black border-black rounded-lg border p-4"
                                placeholder="Phone Number"
                            />
                            <p className="text-red-500">
                                {errors && !phoneRegax.test(formValue.phoneNumber)
                                    ? "Phone number must be 10 digits"
                                    : ""}
                            </p>
                        </div>
                        <div className="mt-[6px] mb-5 relative">
                            <label className="text-black text-base font-medium">
                                Password
                            </label>
                            <input
                                name="password"
                                type={formValue.showPassword ? "text" : "password"}
                                value={formValue.password}
                                onChange={(e) =>
                                    setFormValue({ ...formValue, password: e.target.value })
                                }
                                className="placeholder:text-black w-full mt-[6px] text-black border-black rounded-lg border p-4"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={toggleShowPassword}
                                className="absolute right-4 top-12 text-black cursor-pointer"
                            >
                                {formValue.showPassword ? "Hide" : "Show"}
                            </button>
                            <p className="text-red-500">
                                {errors && formValue.password.length === 0
                                    ? "Password is required"
                                    : formValue.password.length < 6 && formValue.password.length > 0
                                        ? "Password must be at least 6 characters"
                                        : ""}
                            </p>
                        </div>
                        <div className="mt-[6px] mb-5 relative">
                            <label className="text-black text-base font-medium">
                                Confirm Password
                            </label>
                            <input
                                name="confirmPassword"
                                type={formValue.showPassword ? "text" : "password"}
                                value={formValue.confirmPassword}
                                onChange={(e) =>
                                    setFormValue({
                                        ...formValue,
                                        confirmPassword: e.target.value,
                                    })
                                }
                                className="placeholder:text-black w-full mt-[6px] text-black border-black rounded-lg border p-4"
                                placeholder="••••••••"
                            />
                            <p className="text-red-500">
                                {errors && formValue.confirmPassword.length === 0
                                    ? "Confirm password is required"
                                    : formValue.confirmPassword !== formValue.password &&
                                        formValue.confirmPassword.length > 0
                                        ? "Passwords do not match"
                                        : ""}
                            </p>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white p-3 mt-6 rounded-lg hover:bg-slate-500 transition-all duration-700"
                        >
                            Sign In
                        </button>
                    </form>
                </div>
                <div className="mt-10 text-black">
                    <h2 className="text-2xl text-black font-bold mb-4">Submitted Data</h2>
                    {tableData.length > 0 ? (
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-black">First Name</th>
                                    <th className="px-4 py-2 text-black">Email</th>
                                    <th className="px-4 py-2 text-black">Phone Number</th>
                                    <th className="px-4 py-2 text-black">Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data, index) => (
                                    <tr key={index}>
                                        <td className="border border-black px-4 py-2 text-black">{data.firstName}</td>
                                        <td className="border border-black px-4 py-2 text-black">{data.email}</td>
                                        <td className="border border-black px-4 py-2 text-black">{data.phoneNumber}</td>
                                        <td className="border border-black px-4 py-2 text-black">
                                            <button
                                                onClick={() => handleDelete(index)}
                                                className="text-red-500"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}                         
                            </tbody>
                        </table>
                    ) : (
               <p className="text-xl">No Data Found</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Form;