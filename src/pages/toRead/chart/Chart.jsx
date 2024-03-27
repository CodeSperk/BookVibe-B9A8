import PropTypes from 'prop-types';
const Chart = ({book}) => {
 const {bookName, totalPages} = book;
  return (
    <div>
      <p>{bookName}</p>
      <p>{totalPages}</p>
    </div>
  );
};

Chart.propTypes={
  book:PropTypes.object
}

export default Chart;