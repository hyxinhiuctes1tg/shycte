document.addEventListener('DOMContentLoaded', () => {
    const followBtn = document.querySelector('.follow-btn');
    let isFollowing = false;

    followBtn.addEventListener('click', () => {
        if (isFollowing) {
            followBtn.textContent = 'Follow';
            followBtn.style.backgroundColor = 'var(--pink-medium)';
        } else {
            followBtn.textContent = 'Đang Follow';
            followBtn.style.backgroundColor = 'var(--pink-dark)';
        }
        isFollowing = !isFollowing;
    });

    // Thêm animation nhẹ khi hover vào card profile
    const profileCard = document.querySelector('.profile-card');
    profileCard.addEventListener('mousemove', (e) => {
        const rect = profileCard.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        profileCard.style.transform = `perspective(1000px) rotateX(${-y * 10}deg) rotateY(${x * 10}deg) scale(1.01)`;
    });

    profileCard.addEventListener('mouseleave', () => {
        profileCard.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    });
});
