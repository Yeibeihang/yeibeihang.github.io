document.addEventListener('DOMContentLoaded', function () {
    const categoryBtns = document.querySelectorAll('.categoryBtn');
    const sections = document.querySelectorAll('section');

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // 移除所有按钮的激活状态和所有section的显示
            categoryBtns.forEach(btn => btn.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // 设置当前按钮为激活状态和对应section为显示
            btn.classList.add('active');
            document.querySelectorAll(`.category.${this.dataset.category}`).forEach(section => {
                section.classList.add('active');
            });
        });
    });
});
