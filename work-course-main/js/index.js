document.addEventListener('DOMContentLoaded', function() {
    // Загрузка курсов
    const coursesContainer = document.getElementById('courses-container');
    
    // В реальном проекте здесь будет fetch запрос к API
    const courses = [
        {
            id: 1,
            title: 'Основы экономики',
            image: '/web-course1/img/course1.jpg',
            duration: '30 часов',
            level: 'Начинающий',
            price: '9 990 ₽'
        },
        {
            id: 2,
            title: 'Микроэкономика',
            image: '/web-course1/img/course2.jpg',
            duration: '40 часов',
            level: 'Средний',
            price: '12 990 ₽'
        },
        {
            id: 3,
            title: 'Макроэкономика',
            image: '/web-course1/img/course3.jpg',
            duration: '35 часов',
            level: 'Продвинутый',
            price: '14 990 ₽'
        }
    ];
    
    courses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}">
            </div>
            <div class="course-info">
                <h3>${course.title}</h3>
                <div class="course-meta">
                    <span><i class="fas fa-clock"></i> ${course.duration}</span>
                    <span><i class="fas fa-signal"></i> ${course.level}</span>
                </div>
                <div class="course-price">${course.price}</div>
                <a href="course.html?id=${course.id}" class="btn btn-primary">Подробнее</a>
            </div>
        `;
        coursesContainer.appendChild(courseCard);
    });
});