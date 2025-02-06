import React from 'react'

function AddConsitituency() {
  return (
    <div>
        <div class="container mt-5">
    <h2 class="text-center mb-4">Add New Constituency</h2>
    
    <form action="/add-constituency" method="POST">
      <div class="mb-3">
        <label for="constituencyName" class="form-label">Constituency Name</label>
        <input type="text" class="form-control" id="constituencyName" name="constituencyName" required />
      </div>

      <button type="submit" class="btn btn-primary">Add Constituency</button>
    </form>
  </div>
    </div>
  )
}

export default AddConsitituency