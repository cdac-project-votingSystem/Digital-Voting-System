import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { addNewConstituency } from '../../../API/Admin';

function AddConstituency() {
  const [form, setForm] = useState({
    name: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await addNewConstituency(form);
      if (res.status === 201) {
        toast.success(res.data.message);
        setForm({ name: '' });
      }
    } catch {
      toast.error('Try again');
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add New Constituency</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Constituency Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add Constituency
        </button>
      </form>
    </div>
  );
}

export default AddConstituency;
