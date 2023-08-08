const Work = ({ repos }) => {

    return (
        <>
            <div className="mt-12 mb-12 flex flex-row justify-around space-x-4 p-2">
                <p className="text-4xl text-center font-semibold  text-zinc-200 sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl">My Coding Crafts</p>
            </div>
            <div className="overflow-x-auto mt-12 mb-12 space-x-4 p-2">
                <table className="text-sm text-left text-gray-400 rounded-lg">
                    <thead className="text-xs uppercase bg-zinc-800 text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Project
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Description
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Open Issues
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Forks

                                </div>
                            </th>
                            <th scope="col" className="px-9 py-3">
                                <div className="flex items-center">
                                    Created At

                                </div>
                            </th>
                            <th scope="col" className="px-9 py-3">
                                <div className="flex items-center">
                                    Updated At
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                <div className="flex items-center">
                                    Github Link
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className=" border-b bg-zinc-700 ">
                            <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                                Apple MacBook Pro 17"
                            </th>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Silver
                            </td>
                            <td className="px-6 py-4">
                                Laptop
                            </td>
                            <td className="px-6 py-4">
                                $2999
                            </td>
                            <td className="px-6 py-4">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>

    );
}

export default Work;