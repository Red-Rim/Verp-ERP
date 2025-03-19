const Table = ({ columns, data }) => {
   return (
     <div className="overflow-x-auto bg-[#1e1e2f] rounded-lg shadow-lg">
       <table className="min-w-full">
         <thead>
           <tr className="bg-[#4f46e5] text-white">
             {columns.map((col) => (
               <th key={col} className="py-3 px-4 text-left">
                 {col}
               </th>
             ))}
           </tr>
         </thead>
         <tbody>
           {data.map((row, index) => (
             <tr key={index} className="hover:bg-[#4338ca]/20 transition">
               {columns.map((col) => (
                 <td key={col} className="py-3 px-4 text-gray-300">
                   {row[col]}
                 </td>
               ))}
             </tr>
           ))}
         </tbody>
       </table>
     </div>
   );
 };
 
 export default Table;