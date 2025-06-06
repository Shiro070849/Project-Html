// ดึง element ที่ต้องใช้งาน
const modalOverlay = document.getElementById('modalOverlay');
const modalPopup = document.getElementById('modalPopup');
const closeModalBtn = document.getElementById('closeModal');
const modalContent = modalPopup.querySelector('.modal-content');

// ฟังก์ชันเปิด popup พร้อมข้อมูลที่ต้องการ
function openModal(contentHTML) {
    modalContent.innerHTML = contentHTML;
    modalOverlay.classList.add('active');
    modalPopup.classList.add('active');
}

// ฟังก์ชันปิด popup
function closeModal() {
    modalOverlay.classList.remove('active');
    modalPopup.classList.remove('active');
}

// ปิด popup เมื่อคลิก overlay หรือปุ่มปิด
modalOverlay.addEventListener('click', closeModal);
closeModalBtn.addEventListener('click', closeModal);

// เพิ่ม event ให้แต่ละแถวใน tbody
document.querySelectorAll('tbody tr').forEach(row => {
    row.style.cursor = 'pointer';
    row.addEventListener('click', () => {
        // ดึงข้อมูลจากแต่ละ cell ในแถวนั้น (แก้ได้ตามต้องการ)
        const cells = row.querySelectorAll('td');
        let html = '<h3>รายละเอียดแถวที่เลือก</h3><ul>';
        cells.forEach((cell, i) => {
            html += `<li><strong>คอลัมน์ ${i + 1}:</strong> ${cell.innerHTML}</li>`;
        });
        html += '</ul>';
        openModal(html);
    });
});
