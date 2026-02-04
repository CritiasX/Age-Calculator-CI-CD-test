import {Head} from "@inertiajs/react";
import { useState } from "react";

export default function Welcome() {
    const [name, setName] = useState<string>("");
    function calculateAge(e){
        e.preventDefault();
        const birthdate = new Date(e.target.birthdate.value);
        const today = new Date();
        if(today < birthdate){
            throw new Error("Birthdate cannot be in the future");
        }else{
            let age : number =  today.getFullYear() - birthdate.getFullYear();
            if(today.getMonth() <= birthdate.getMonth()){
                console.log(name + " is turning " + age);
            }else{
                console.log(name + "is " + age);
            }
        }
    }
    return (
        <>
            <Head title="Age Calculator"/>

            <div className="p-6 flex flex-col items-center justify-center">
                <h1 className="text-3xl font-bold">
                    Age Calculator
                </h1>
                <input type="text"
                       onChange={(e) => setName(e.target.value)}

                       className={"m-4"}/>
                <form method="post" onSubmit={calculateAge}>
                    <input type="date" name="birthdate" required />
                    <div className="mt-4 ml-4">
                        <input type="submit"
                               value="Calculate Age"
                               className="px-4 py-2 bg-blue-500 text-white rounded hover:scale-120 cursor-pointer"/>
                    </div>
                </form>
            </div>
        </>
    );
}
