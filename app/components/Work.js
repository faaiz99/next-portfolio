


const Work = ({ repos }) => {

    return (
        <>
            <div className=" mt-12 mb-12 container mx-auto  flex flex-row justify-around space-x-4 p-2">
                <p className="text-6xl text-center font-semibold  text-zinc-200">My Coding Crafts</p>

            </div>
            <div className="container rounded-3xl mt-2  p-8 bg-zinc-900 mx-auto" id="work">
                <div className="relative overflow-x-auto sm:rounded-lg">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-zinc-800 dark:text-gray-400">
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
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
            </div></>

    );
}

export default Work;