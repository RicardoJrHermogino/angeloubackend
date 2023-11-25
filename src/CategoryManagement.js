import React, { useState } from 'react';

const CategoryManagement = ({ categories, addCategory, updateCategory, deleteCategory }) => {
  const [newCategory, setNewCategory] = useState('');

  const addCategoryHandler = () => {
    addCategory(newCategory);
    setNewCategory('');
  };

  return (
    <div>
      <h2>Category Management</h2>
      <input
        type="text"
        placeholder="New Category"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button onClick={addCategoryHandler}>Add Category</button>

      <ul>
        {categories && categories.map((category, index) => (
          <li key={index}>
            {category}
            <button onClick={() => updateCategory(index, prompt('Update category:', category))}>Update</button>
            <button onClick={() => deleteCategory(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManagement;
