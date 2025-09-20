function TodoItem2() {
  let cm = 'go_to_college';
  let date = '5/7/2044';

  return (
    <div>
      <div class='row kg-row'>
        <div class='col-6'>{cm}</div>
        <div class='col-4'>{date}</div>
        <div class='col-2'>
          <button type='button' class='btn btn-danger kg-button'>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem2;
