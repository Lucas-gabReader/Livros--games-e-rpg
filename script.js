const books = [
    { id: 1, title: "O Hobbit", price: 39.90, image: "ohobbit.png" },
    { id: 2, title: "1984", price: 29.90, image: "1984.png" },
    { id: 3, title: "Dom Casmurro", price: 19.90, image: "DomCasmurro.png" }
  ];
  
  let cart = [];
  
  function renderBooks() {
    const bookList = document.querySelector('.book-list');
    books.forEach(book => {
      const bookItem = document.createElement('div');
      bookItem.className = 'book';
      bookItem.innerHTML = `
        <img src="${book.image}" alt="${book.title}">
        <h3>${book.title}</h3>
        <p>R$ ${book.price.toFixed(2)}</p>
        <button onclick="addToCart(${book.id})">Adicionar ao Carrinho</button>
      `;
      bookList.appendChild(bookItem);
    });
  }
  
  function addToCart(bookId) {
    const book = books.find(b => b.id === bookId);
    cart.push(book);
    renderCart();
  }
  
  function renderCart() {
    const cartList = document.querySelector('.cart-list');
    cartList.innerHTML = '';
  
    if (cart.length === 0) {
      cartList.innerHTML = `
        <p style="text-align: center; color: #999;">
          Seu carrinho está vazio. Adicione livros para começar!
        </p>`;
      return;
    }
  
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <p>${item.title} - R$ ${item.price.toFixed(2)}</p>
        <button style="background: #ff6b6b; color: #fff; border: none; padding: 0.5rem; cursor: pointer;" onclick="removeFromCart(${item.id})">Remover</button>
      `;
      cartList.appendChild(cartItem);
    });
  
    cartList.classList.add('animate');
    setTimeout(() => cartList.classList.remove('animate'), 500);
  }
  
  function removeFromCart(bookId) {
    cart = cart.filter(item => item.id !== bookId);
    renderCart();
  }
  
  
  document.getElementById('checkout').addEventListener('click', () => {
    alert('Chamada para API de pagamento...');
    // Aqui você pode integrar com APIs como MercadoPago ou simuladores.
  });
  
  renderBooks();
  