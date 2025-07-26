import { useContext, useState } from 'react';
import { PageContext } from '../App';

const FirstPage = () => {
    const { setCurrentPage } = useContext(PageContext);
    const [coments, setComents] = useState([]);
    const [count, setCount] = useState(0);
    function AddPosts() {
        fetch(`https://jsonplaceholder.typicode.com/comments?_start=${count}&_limit=4`)
        .then(response => response.json())
        .then(json => setComents([...coments,...json]))
        setCount(count+4)
    }

    return (
        <div className='min-h-screen  flex flex-col items-center p-8'>
            
            <div className="w-full max-w-6xl mb-8">
                <button 
                    onClick={() => setCurrentPage('main')}
                    className='bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg shadow-sm border border-gray-200 font-medium transition-all duration-200 hover:shadow-md flex items-center gap-2'
                >
                    ← return
                </button>
            </div>

            
            <div className="w-full max-w-6xl flex flex-col items-center gap-8">
                


                
                <div className="w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                    <table className="w-full">
                        <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                            <tr>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Post ID
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    ID
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Body
                                </th>
                                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                   
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {coments.map((coment,idx) =>(
                                <tr key={idx} className="hover:bg-gray-50 transition-colors duration-150">

                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        {coment.postId}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                        {coment.id}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900">
                                        {coment.name}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-900">
                                        {coment.email}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-700 max-w-xs">
                                     <div className="truncate">
                                        {coment.body}
                                     </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <button 
                                            className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all duration-200"
                                            onClick={() => setComents(coments.filter(c => c.id !== coment.id))}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                            </svg>
                                        </button> 
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

               
                <button 
                    onClick={() => AddPosts()}
                    className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300/50"
                >
                    Load mor
                </button>
            </div>
        </div>
    );
};

export default FirstPage;