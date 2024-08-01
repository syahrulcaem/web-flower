window.onload = () => {
    // Menunggu 1 detik sebelum menghapus class 'preload' dari body
    const timeoutId = setTimeout(() => {
        document.body.classList.remove("preload");
        clearTimeout(timeoutId); // Tidak perlu jika hanya satu timeout yang digunakan
    }, 1000);
};