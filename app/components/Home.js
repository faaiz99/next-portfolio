'use client'
import Image from "next/image";
const Home = () => {
    return (<>
        <div className="flex justify-around bg-zinc-900 p-6 h-auto w-auto rounded-3xl gap-24 ">
            <div className="flex justify-start bg-zinc-900 p-6 rounded-3xl h-auto w-auto mb-4">
                <p className="text-left font-medium break-normal text-zinc-400">A self-motivated programmer with a passion to learn new things by experimenting.
                    As a student, I look forward to get
                    hands-on experience with test driven (TDD) as well as behavaior driven development (BDD) to build solutions that are robust and scalable.</p>
            </div>

            <div className="flex justify-start bg-zinc-900 p-6 rounded-3xl h-auto w-auto mb-4">
                <p className="text-left font-medium  text-zinc-400">
                    Future Plans
                </p>
            </div>
        </div>

    </>
    );
}

export default Home