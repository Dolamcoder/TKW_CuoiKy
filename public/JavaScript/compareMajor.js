
const majorData = {
    CNTT: {
        displayName: "Công nghệ Thông tin",
        "Mức lương trung bình": "12-18 triệu",
        "Nhu cầu tuyển dụng": "Rất cao",
        "Khối học": "A00, A01, D01",
        "Thời gian đào tạo": "4 năm"
    },
    AI: {
        displayName: "Trí tuệ Nhân tạo",
        "Mức lương trung bình": "15-25 triệu",
        "Nhu cầu tuyển dụng": "Cao",
        "Khối học": "A00, A02, D07",
        "Thời gian đào tạo": "4 năm"
    },
    ATTT: {
        displayName: "An toàn Thông tin",
        "Mức lương trung bình": "14-20 triệu",
        "Nhu cầu tuyển dụng": "Ổn định",
        "Khối học": "A00, C03, D04",
        "Thời gian đào tạo": "4 năm"
    },
    KT: {
        displayName: "Kế toán",
        "Mức lương trung bình": "10-15 triệu",
        "Nhu cầu tuyển dụng": "Trung bình",
        "Khối học": "A00, A01, D01",
        "Thời gian đào tạo": "3.5 năm"
    },
    QTKD: {
        displayName: "Quản trị Kinh doanh",
        "Mức lương trung bình": "12-20 triệu",
        "Nhu cầu tuyển dụng": "Rất cao",
        "Khối học": "A00, A01, D01, D07",
        "Thời gian đào tạo": "4 năm"
    },
    DLNHA: {
        displayName: "Du lịch và Nhà hàng Khách sạn",
        "Mức lương trung bình": "8-14 triệu",
        "Nhu cầu tuyển dụng": "Cao",
        "Khối học": "D01, D14, D15",
        "Thời gian đào tạo": "4 năm"
    },
    TMĐT: {
        displayName: "Thương mại điện tử",
        "Mức lương trung bình": "12-18 triệu",
        "Nhu cầu tuyển dụng": "Cao",
        "Khối học": "A00, A01, D01",
        "Thời gian đào tạo": "4 năm"
    },
    MKT: {
        displayName: "Marketing",
        "Mức lương trung bình": "10-20 triệu",
        "Nhu cầu tuyển dụng": "Rất cao",
        "Khối học": "A00, A01, D01, D07",
        "Thời gian đào tạo": "4 năm"
    },
    QHQT: {
        displayName: "Quan hệ Quốc tế",
        "Mức lương trung bình": "12-22 triệu",
        "Nhu cầu tuyển dụng": "Ổn định",
        "Khối học": "D01, D14, D15",
        "Thời gian đào tạo": "4 năm"
    },
    NGNN: {
        displayName: "Ngôn ngữ Anh",
        "Mức lương trung bình": "10-18 triệu",
        "Nhu cầu tuyển dụng": "Cao",
        "Khối học": "D01, D14, D15",
        "Thời gian đào tạo": "4 năm"
    },
    TKT: {
        displayName: "Thiết kế đồ họa",
        "Mức lương trung bình": "12-20 triệu",
        "Nhu cầu tuyển dụng": "Cao",
        "Khối học": "H00, H01, D01",
        "Thời gian đào tạo": "4 năm"
    },
    LTHDT: {
        displayName: "Lập trình Game & Ứng dụng di động",
        "Mức lương trung bình": "15-25 triệu",
        "Nhu cầu tuyển dụng": "Rất cao",
        "Khối học": "A00, A01, D01",
        "Thời gian đào tạo": "4 năm"
    }
};


// references tới các element
const select1 = document.getElementById("compare-select-1");
const select2 = document.getElementById("compare-select-2");
const warning = document.getElementById("comparison-warning");
const table = document.getElementById("comparison-table");
const tbody = table.querySelector("tbody");

// Tiêu chí so sánh
const criteria = ["Mức lương trung bình", "Nhu cầu tuyển dụng", "Khối học", "Thời gian đào tạo"];

function pushMajor() {

    Object.entries(majorData).forEach(([key, data]) => {
        const text = data.displayName;
        const opt1 = document.createElement("option");
        opt1.value = key;
        opt1.textContent = text;
        select1.appendChild(opt1);

        // clone option 1 vào select 2
        const opt2 = opt1.cloneNode(true);
        select2.appendChild(opt2);
    });
}

function updateComparison() {
    const m1 = select1.value, m2 = select2.value;
    // nếu chưa chọn đủ
    if (!m1 || !m2) {
        warning.style.display = "block";
        table.style.display = "none";
        tbody.innerHTML = "";
        return;
    }

    warning.style.display = "none";
    table.style.display = "table";

    // đổ dữ liệu
    tbody.innerHTML = "";
    const d1 = majorData[m1], d2 = majorData[m2];
    criteria.forEach(key => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td>${key}</td>
                    <td>${d1[key] || "-"}</td>
                    <td>${d2[key] || "-"}</td>
                    `;
        tbody.appendChild(tr);
    });
}

// gắn sự kiện change cho cả 2 select
select1.addEventListener("change", updateComparison);
select2.addEventListener("change", updateComparison);

// khởi chạy 1 lần để show cảnh báo lúc load
updateComparison();
pushMajor();