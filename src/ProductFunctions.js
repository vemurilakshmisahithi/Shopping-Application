export const HandleAddProduct = (newProduct, isEditing, products, setProducts, setNewProduct, setShowForm,setIsEditing) => {
    if (isEditing) {
        const updatedProducts = products.map(product => {
            if (product.id === newProduct.id) {
                return newProduct;
            }
            return product;
        });
        setProducts(updatedProducts);
        setIsEditing(false);
    } else {
        setProducts([...products, { ...newProduct, id: Date.now() }]);
    }
    setNewProduct({
        id: '',
        title: '',
        category: '',
        brand: '',
        price: '',
        images: []
    });
    setShowForm(false);
};

export const handleEditProduct = (product, setIsEditing, setNewProduct, setShowForm) => {
    setIsEditing(true);
    setNewProduct(product);
    setShowForm(true);
};

export const handleDeleteProduct = (productId, products, setProducts) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this product?");
    if (isConfirmed) {
        setProducts(products.filter(product => product.id !== productId));
        alert("Product deleted");
    } else {
        alert("Deletion canceled");
    }
};

export const handleInputChange = (e, newProduct, setNewProduct) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
};

export const handleDrop = (e, newProduct, setNewProduct) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        setNewProduct({ ...newProduct, images: [reader.result] });
    };
    reader.readAsDataURL(file);
};

export const handleDragOver = (e) => {
    e.preventDefault();
};
