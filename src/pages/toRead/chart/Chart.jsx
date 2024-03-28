import PropTypes from 'prop-types';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const Chart = ({book}) => {
  const {bookName, totalPages} = book;
  const data = [{name: bookName, pages: totalPages}];
console.log(data);
  return (
    <div>
      <BarChart width={400} height={200} data={data} className='font-inter'>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pages" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

Chart.propTypes={
  book:PropTypes.object.isRequired
}

export default Chart;