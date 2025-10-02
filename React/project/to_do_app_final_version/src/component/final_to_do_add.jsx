function Final_to_do({ todoName, todoDate }) {
  return (
    <div>
      <div class='row kg-row'>
        <div class='col-6'>{todoName}</div>
        <div class='col-4'>{todoDate}</div>
        <div class='col-2'>
          <button type='button' class='btn btn-danger kg-button'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Final_to_do;
