const colorBtn = document.getElementById('colorBtn');

    colorBtn.addEventListener('click', () => {
        // Генеруємо випадковий колір
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        
        // Змінюємо колір рамок або фону контенту замість всього фону body, 
        // щоб зберегти гарний градієнт сторінки
        const pageContent = document.querySelector('.page-content');
        pageContent.style.borderColor = color;
        pageContent.style.boxShadow = `0 8px 16px ${color}66`;
        
        alert('Колір рамки змінено на: ' + color);
    });