import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadBooks } from "../../utils/localStorage";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red',];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const ToRead = () => {
  const books = useLoaderData();
  const [readList, setReadList] = useState([]);

  useEffect(()=>{
    const readBooksIds = getStoredReadBooks();
    
    const filteredBooks = books.filter(book=> readBooksIds.includes(book.bookId) );
    setReadList(filteredBooks);
  },[books]);

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-8 lg:px-10 2xl:px-14 mb-16 md:mb-20 lg:mb-28  rounded-xl">
      <ResponsiveContainer width="100%" className="p-6 lg:p-16 bg-[var(--bg-primary)] rounded-xl min-h-[600px]">
      <BarChart data={readList}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" className="text-[10px]"/>
        <YAxis />
        <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
          {readList.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
      </ResponsiveContainer>
      
    </section>
  );
};

export default ToRead;