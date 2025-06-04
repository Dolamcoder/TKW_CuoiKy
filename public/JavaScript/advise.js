// qua lại các bước
function goToStep(step) {
  const steps = document.querySelectorAll(".step-content");
  steps.forEach((s) => s.classList.remove("active"));
  document.getElementById(`step-${step}`).classList.add("active");

  const stepButtons = document.querySelectorAll(".stepper .step");
  stepButtons.forEach((btn) => btn.classList.remove("active"));
  stepButtons[step - 1].classList.add("active");

  // qua b5 thì hiển thị kq từ b2
  if (step === 5) {
    displayFinalResults();
  }
}

// Object câu hỏi Holland Code
const questions = [
  // Nhóm Kỹ thuật (R)
  {
    id: 1,
    type: "holland",
    category: "R",
    text: "Tự mua và lắp ráp máy vi tính theo ý mình",
    options: options5(),
  },
  {
    id: 2,
    type: "holland",
    category: "R",
    text: "Lắp ráp tủ theo hướng dẫn của sách hướng dẫn hoặc trang mạng",
    options: options5(),
  },
  {
    id: 3,
    type: "holland",
    category: "R",
    text: "Trang điểm cho mình hay cho bạn theo hướng dẫn của sách hướng dẫn hoặc trang mạng",
    options: options5(),
  },
  {
    id: 4,
    type: "holland",
    category: "R",
    text: "Cắt tỉa cây cảnh",
    options: options5(),
  },
  {
    id: 5,
    type: "holland",
    category: "R",
    text: "Tháo mở điện thoại di động hay máy tính ra để tìm hiểu",
    options: options5(),
  },
  {
    id: 6,
    type: "holland",
    category: "R",
    text: "Tham gia một chuyến du lịch thám hiểm (như khám phá hang động, núi rừng)",
    options: options5(),
  },
  {
    id: 7,
    type: "holland",
    category: "R",
    text: "Chăm sóc vật nuôi",
    options: options5(),
  },
  {
    id: 8,
    type: "holland",
    category: "R",
    text: "Sửa xe, như xe đạp, xe máy (các lỗi nhỏ)",
    options: options5(),
  },
  {
    id: 9,
    type: "holland",
    category: "R",
    text: "Làm đồ nội thất",
    options: options5(),
  },
  {
    id: 10,
    type: "holland",
    category: "R",
    text: "Lắp ráp máy vi tính",
    options: options5(),
  },
  {
    id: 11,
    type: "holland",
    category: "R",
    text: "Leo núi",
    options: options5(),
  },
  {
    id: 12,
    type: "holland",
    category: "R",
    text: "Đóng gói đồ đạc vào thùng",
    options: options5(),
  },
  {
    id: 13,
    type: "holland",
    category: "R",
    text: "Chơi một môn thể thao",
    options: options5(),
  },
  {
    id: 14,
    type: "holland",
    category: "R",
    text: "Tham gia chuyến đạp xe xuyên quốc gia (từ TPHCM ra Hà Nội, từ Hà Nội vào TPHCM)",
    options: options5(),
  },

  // Nhóm Nghiên cứu (I)
  {
    id: 15,
    type: "holland",
    category: "I",
    text: "Tham quan bảo tàng",
    options: options5(),
  },
  {
    id: 16,
    type: "holland",
    category: "I",
    text: "Tìm hiểu sự hình thành của các vì sao và vũ trụ",
    options: options5(),
  },
  {
    id: 17,
    type: "holland",
    category: "I",
    text: "Tìm hiểu về văn hóa một quốc gia mà mình thích",
    options: options5(),
  },
  {
    id: 18,
    type: "holland",
    category: "I",
    text: "Tìm hiểu về tâm lý con người",
    options: options5(),
  },
  {
    id: 19,
    type: "holland",
    category: "I",
    text: "Đọc một cuốn sách về tương lai của loài người trong một triệu năm nữa",
    options: options5(),
  },
  {
    id: 20,
    type: "holland",
    category: "I",
    text: "Đọc sách, báo hay xem trang tin tức về khoa học",
    options: options5(),
  },
  {
    id: 21,
    type: "holland",
    category: "I",
    text: "Tìm hiểu về cảm xúc con người",
    options: options5(),
  },
  {
    id: 22,
    type: "holland",
    category: "I",
    text: "Được xem một ca mổ tim",
    options: options5(),
  },
  {
    id: 23,
    type: "holland",
    category: "I",
    text: "Tìm hiểu nguồn gốc của một dịch bệnh, nguồn gốc loài người, v.v",
    options: options5(),
  },
  {
    id: 24,
    type: "holland",
    category: "I",
    text: "Đọc các bài báo về ảnh hưởng của AI (trí tuệ nhân tạo) lên nghề nghiệp tương lai",
    options: options5(),
  },
  {
    id: 25,
    type: "holland",
    category: "I",
    text: "Tìm hiểu về thế giới động vật (qua các kênh tìm hiểu khoa học)",
    options: options5(),
  },
  {
    id: 26,
    type: "holland",
    category: "I",
    text: "Phát minh xe điện",
    options: options5(),
  },
  {
    id: 27,
    type: "holland",
    category: "I",
    text: "Tiến hành thí nghiệm hóa học",
    options: options5(),
  },
  {
    id: 28,
    type: "holland",
    category: "I",
    text: "Nghiên cứu về chế độ dinh dưỡng",
    options: options5(),
  },

  // Nhóm Nghệ thuật (A)
  {
    id: 29,
    type: "holland",
    category: "A",
    text: "Tạo ra một tác phẩm nghệ thuật, tranh, câu chuyện",
    options: options5(),
  },
  {
    id: 30,
    type: "holland",
    category: "A",
    text: "Viết truyện ngắn",
    options: options5(),
  },
  {
    id: 31,
    type: "holland",
    category: "A",
    text: "Chứng tỏ năng lực nghệ thuật của bản thân với người khác (nói lên suy nghĩ/quan điểm qua tác phẩm nghệ thuật)",
    options: options5(),
  },
  {
    id: 32,
    type: "holland",
    category: "A",
    text: "Chơi trong một ban nhạc",
    options: options5(),
  },
  {
    id: 33,
    type: "holland",
    category: "A",
    text: "Chỉnh sửa phim",
    options: options5(),
  },
  {
    id: 34,
    type: "holland",
    category: "A",
    text: "Thuyết trình hoặc thiết kế, theo ý tưởng của mình",
    options: options5(),
  },
  {
    id: 35,
    type: "holland",
    category: "A",
    text: "Vẽ phim hoạt hình",
    options: options5(),
  },
  {
    id: 36,
    type: "holland",
    category: "A",
    text: "Hát trong một ban nhạc",
    options: options5(),
  },
  {
    id: 37,
    type: "holland",
    category: "A",
    text: "Biểu diễn nhảy hiện đại",
    options: options5(),
  },
  {
    id: 38,
    type: "holland",
    category: "A",
    text: "Dẫn chương trình (MC) cho một sự kiện",
    options: options5(),
  },
  {
    id: 39,
    type: "holland",
    category: "A",
    text: "Đọc thoại hay kể chuyện trên đài phát thanh/phần mềm",
    options: options5(),
  },
  {
    id: 40,
    type: "holland",
    category: "A",
    text: "Viết kịch bản cho phim hoặc chương trình truyền hình",
    options: options5(),
  },
  {
    id: 41,
    type: "holland",
    category: "A",
    text: "Chụp ảnh cho các sự kiện trong cuộc sống hoặc sự kiện nghệ thuật",
    options: options5(),
  },
  {
    id: 42,
    type: "holland",
    category: "A",
    text: "Viết một bài phê bình phim cho bộ phim mình thích/ghét nhất",
    options: options5(),
  },

  // Nhóm Xã hội (S)
  {
    id: 43,
    type: "holland",
    category: "S",
    text: "Giúp người khác chọn nghề nghiệp phù hợp",
    options: options5(),
  },
  {
    id: 44,
    type: "holland",
    category: "S",
    text: "Kết nối hai người bạn với nhau",
    options: options5(),
  },
  {
    id: 45,
    type: "holland",
    category: "S",
    text: "Dạy cho bạn mình cách giảm cân qua ăn uống đúng cách",
    options: options5(),
  },
  {
    id: 46,
    type: "holland",
    category: "S",
    text: "Tham gia ngày trái đất bằng cách lượm rác hay tắt điện",
    options: options5(),
  },
  {
    id: 47,
    type: "holland",
    category: "S",
    text: "Hướng dẫn khách nước ngoài chỗ ăn ngon",
    options: options5(),
  },
  {
    id: 48,
    type: "holland",
    category: "S",
    text: "Cứu động vật bị bỏ rơi ngoài đường",
    options: options5(),
  },
  {
    id: 49,
    type: "holland",
    category: "S",
    text: "Tham gia vào một cuộc thảo luận nhóm nhỏ",
    options: options5(),
  },
  {
    id: 50,
    type: "holland",
    category: "S",
    text: "Kể chuyện cười cho bạn bè nghe",
    options: options5(),
  },
  {
    id: 51,
    type: "holland",
    category: "S",
    text: "Dạy em nhỏ chơi một trò chơi hay một môn thể thao",
    options: options5(),
  },
  {
    id: 52,
    type: "holland",
    category: "S",
    text: "Lắng nghe bạn bè tâm sự về vấn đề cá nhân của họ",
    options: options5(),
  },
  {
    id: 53,
    type: "holland",
    category: "S",
    text: "Giúp bạn bè giải quyết vấn đề liên quan đến tình yêu",
    options: options5(),
  },
  {
    id: 54,
    type: "holland",
    category: "S",
    text: "Tham gia một chuyến đi từ thiện",
    options: options5(),
  },
  {
    id: 55,
    type: "holland",
    category: "S",
    text: "Giúp một dự án cộng đồng trong sức của mình nhằm giúp các đối tượng đặc biệt, như LGBTQ, da cam, khuyết tật, trẻ em, v.v.",
    options: options5(),
  },
  {
    id: 56,
    type: "holland",
    category: "S",
    text: "Sẵn sàng giúp thầy cô, bạn bè khi thấy họ cần",
    options: options5(),
  },

  // Nhóm Quản lý (E)
  {
    id: 57,
    type: "holland",
    category: "E",
    text: "Tham gia ban đại diện học sinh ở trường",
    options: options5(),
  },
  {
    id: 58,
    type: "holland",
    category: "E",
    text: "Làm cán bộ lớp",
    options: options5(),
  },
  {
    id: 59,
    type: "holland",
    category: "E",
    text: "Bán hàng trực tuyến",
    options: options5(),
  },
  {
    id: 60,
    type: "holland",
    category: "E",
    text: "Quản lý một cửa hàng trực tuyến",
    options: options5(),
  },
  {
    id: 61,
    type: "holland",
    category: "E",
    text: "Học về thị trường chứng khoán (bitcoin, cổ phiếu, tiền tệ, v.v.)",
    options: options5(),
  },
  {
    id: 62,
    type: "holland",
    category: "E",
    text: "Tham gia một khóa học về quản lý tài chính",
    options: options5(),
  },
  {
    id: 63,
    type: "holland",
    category: "E",
    text: "Tham dự một trại huấn luyện kỹ năng lãnh đạo dành cho lứa tuổi thanh thiếu niên",
    options: options5(),
  },
  {
    id: 64,
    type: "holland",
    category: "E",
    text: "Lập kế hoạch làm việc cho thành viên nhóm",
    options: options5(),
  },
  {
    id: 65,
    type: "holland",
    category: "E",
    text: "Kiếm tiền bằng cách kinh doanh trực tuyến",
    options: options5(),
  },
  {
    id: 66,
    type: "holland",
    category: "E",
    text: "Nói trước đám đông về một đề tài mình thích",
    options: options5(),
  },
  {
    id: 67,
    type: "holland",
    category: "E",
    text: "Tham gia xây dựng các luật lệ mới cho lớp/trường",
    options: options5(),
  },
  {
    id: 68,
    type: "holland",
    category: "E",
    text: "Thuyết phục cha mẹ theo ý mình",
    options: options5(),
  },
  {
    id: 69,
    type: "holland",
    category: "E",
    text: "Tổ chức đi chơi cho một nhóm bạn",
    options: options5(),
  },
  {
    id: 70,
    type: "holland",
    category: "E",
    text: "Kiếm tiền bằng cách làm thêm",
    options: options5(),
  },

  // Nhóm Nghiệp vụ (C)
  {
    id: 71,
    type: "holland",
    category: "C",
    text: "Mở tài khoản tiết kiệm",
    options: options5(),
  },
  {
    id: 72,
    type: "holland",
    category: "C",
    text: "Lập kế hoạch chi tiêu hàng tháng",
    options: options5(),
  },
  {
    id: 73,
    type: "holland",
    category: "C",
    text: "Chuẩn bị ngân sách cho chuyến đi chơi tập thể lớp",
    options: options5(),
  },
  {
    id: 74,
    type: "holland",
    category: "C",
    text: "Chuẩn bị cho buổi trình bày trước lớp",
    options: options5(),
  },
  {
    id: 75,
    type: "holland",
    category: "C",
    text: "Lập kế hoạch cho kỳ nghỉ hè/Tết",
    options: options5(),
  },
  {
    id: 76,
    type: "holland",
    category: "C",
    text: "Đếm và sắp xếp tiền",
    options: options5(),
  },
  {
    id: 77,
    type: "holland",
    category: "C",
    text: "Sắp xếp lại bàn học",
    options: options5(),
  },
  {
    id: 78,
    type: "holland",
    category: "C",
    text: "Viết kế hoạch học tập cho học kỳ mới",
    options: options5(),
  },
  {
    id: 79,
    type: "holland",
    category: "C",
    text: "Hoàn tất bài tập theo đúng hạn được giao",
    options: options5(),
  },
  {
    id: 80,
    type: "holland",
    category: "C",
    text: "Dò lỗi chính tả cho phụ đề của một phim ưa thích",
    options: options5(),
  },
  {
    id: 81,
    type: "holland",
    category: "C",
    text: "Học một khóa vi tính văn phòng và biết cách sắp xếp văn bản, thư mục sao cho chỉnh chu",
    options: options5(),
  },
  {
    id: 82,
    type: "holland",
    category: "C",
    text: "Làm thủ quỹ cho lớp",
    options: options5(),
  },
  {
    id: 83,
    type: "holland",
    category: "C",
    text: "Sắp xếp lại tủ quần áo cá nhân",
    options: options5(),
  },
  {
    id: 84,
    type: "holland",
    category: "C",
    text: "Giúp ba/mẹ quản lý tiền chợ của gia đình (mua gì, mua khi nào, mua bao nhiêu)",
    options: options5(),
  },
];

function options5() {
  return [
    { text: "Rất không thích", value: 0 },
    { text: "Không thích", value: 25 },
    { text: "Bình thường", value: 50 },
    { text: "Thích", value: 75 },
    { text: "Rất thích", value: 100 },
  ];
}

// object dữ liệu ngành
const programs = [
  {
    id: "cntt",
    name: "Công nghệ Thông tin",
    description:
      "Đào tạo kỹ sư CNTT có khả năng phát triển phần mềm, quản trị hệ thống và ứng dụng công nghệ vào giải quyết các vấn đề thực tiễn.",
    strengths: [
      "Giảng viên chất lượng cao",
      "Phòng lab hiện đại",
      "Hợp tác doanh nghiệp",
    ],
    fitScore: 85,
    image: "https://via.placeholder.com/300x200?text=CNTT",
    link: "#",
  },
  {
    id: "kt",
    name: "Kế toán",
    description:
      "Chương trình đào tạo cử nhân Kế toán có năng lực chuyên môn, đạo đức nghề nghiệp và khả năng ứng dụng công nghệ trong lĩnh vực kế toán - kiểm toán.",
    strengths: [
      "Chứng chỉ quốc tế",
      "Thực hành thực tế",
      "Cơ hội nghề nghiệp rộng",
    ],
    fitScore: 72,
    image: "https://via.placeholder.com/300x200?text=Kế+Toán",
    link: "#",
  },
  {
    id: "qtkd",
    name: "Quản trị Kinh doanh",
    description:
      "Trang bị kiến thức và kỹ năng quản lý, điều hành doanh nghiệp trong môi trường kinh doanh hiện đại với các chuyên ngành hấp dẫn như Marketing, Quản trị nhân sự.",
    strengths: [
      "Giảng viên kinh nghiệm",
      "Case study thực tế",
      "Mạng lưới doanh nghiệp",
    ],
    fitScore: 68,
    image: "https://via.placeholder.com/300x200?text=QTKD",
    link: "#",
  },
  {
    id: "mkt",
    name: "Marketing",
    description:
      "Đào tạo chuyên gia Marketing có khả năng phân tích thị trường, xây dựng chiến lược và triển khai các hoạt động marketing hiệu quả trong môi trường số.",
    strengths: ["Digital marketing", "Dự án thực tế", "Đối tác doanh nghiệp"],
    fitScore: 65,
    image: "https://via.placeholder.com/300x200?text=Marketing",
    link: "#",
  },
  {
    id: "nn",
    name: "Ngôn ngữ Anh",
    description:
      "Chương trình đào tạo cử nhân Ngôn ngữ Anh với các chuyên ngành Biên phiên dịch, Giảng dạy tiếng Anh và Tiếng Anh thương mại đáp ứng nhu cầu thị trường.",
    strengths: ["Giáo viên bản ngữ", "Môi trường quốc tế", "Chứng chỉ quốc tế"],
    fitScore: 60,
    image: "https://via.placeholder.com/300x200?text=Ngôn+Ngữ+Anh",
    link: "#",
  },
  {
    id: "truyen-thong",
    name: "Truyền thông Đa phương tiện",
    description:
      "Đào tạo chuyên gia sáng tạo nội dung đa phương tiện với các kỹ năng thiết kế đồ họa, quay phim, biên tập và sản xuất các sản phẩm truyền thông hiện đại.",
    strengths: [
      "Studio hiện đại",
      "Giảng viên giàu kinh nghiệm",
      "Dự án thực tế",
    ],
    fitScore: 55,
    image: "https://via.placeholder.com/300x200?text=Truyền+Thông",
    link: "#",
  },
];

// objet ss ngành b4
const comparisonData = {
  cntt: {
    jobs: "Rất cao",
    salary: "12-20 triệu",
    skills: "Lập trình, phân tích, giải quyết vấn đề",
    duration: "4 năm",
    strengths: "Phòng lab hiện đại, giảng viên chất lượng",
    reviews: "4.8/5 (120 đánh giá)",
  },
  kt: {
    jobs: "Cao",
    salary: "8-15 triệu",
    skills: "Phân tích số liệu, tỉ mỉ, am hiểu luật",
    duration: "4 năm",
    strengths: "Chứng chỉ quốc tế, thực hành nhiều",
    reviews: "4.5/5 (95 đánh giá)",
  },
  qtkd: {
    jobs: "Cao",
    salary: "10-18 triệu",
    skills: "Giao tiếp, quản lý, phân tích thị trường",
    duration: "4 năm",
    strengths: "Case study thực tế, mạng lưới doanh nghiệp",
    reviews: "4.6/5 (110 đánh giá)",
  },
  mkt: {
    jobs: "Cao",
    salary: "10-20 triệu",
    skills: "Sáng tạo, phân tích, giao tiếp",
    duration: "4 năm",
    strengths: "Digital marketing, dự án thực tế",
    reviews: "4.7/5 (85 đánh giá)",
  },
  nn: {
    jobs: "Trung bình - cao",
    salary: "8-15 triệu",
    skills: "Ngôn ngữ, giao tiếp, nghiên cứu",
    duration: "4 năm",
    strengths: "Giáo viên bản ngữ, môi trường quốc tế",
    reviews: "4.4/5 (75 đánh giá)",
  },
  "truyen-thong": {
    jobs: "Trung bình - cao",
    salary: "8-18 triệu",
    skills: "Sáng tạo, công nghệ, làm việc nhóm",
    duration: "4 năm",
    strengths: "Studio hiện đại, dự án thực tế",
    reviews: "4.5/5 (65 đánh giá)",
  },
};

// --- HOLLAND GROUP LOGIC ---

// 1. Chia nhóm câu hỏi
const hollandGroups = [
  {
    code: "R",
    name: "Nhóm Kỹ thuật (Realistic - R)",
    description: "Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...",
    questions: questions.filter((q) => q.category === "R"),
  },
  {
    code: "I",
    name: "Nhóm Nghiên cứu (Investigative - I)",
    description: "Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...",
    questions: questions.filter((q) => q.category === "I"),
  },
  {
    code: "A",
    name: "Nhóm Nghệ thuật (Artistic - A)",
    description: "Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...",
    questions: questions.filter((q) => q.category === "A"),
  },
  {
    code: "S",
    name: "Nhóm Xã hội (Social - S)",
    description: "Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...",
    questions: questions.filter((q) => q.category === "S"),
  },
  {
    code: "E",
    name: "Nhóm Quản lý (Enterprising - E)",
    description: "Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...",
    questions: questions.filter((q) => q.category === "E"),
  },
  {
    code: "C",
    name: "Nhóm Nghiệp vụ (Conventional - C)",
    description: "Nếu có đầy đủ cơ hội và nguồn lực, tôi có thích...",
    questions: questions.filter((q) => q.category === "C"),
  },
];

let hollandCurrentGroup = 0;
let hollandAnswers = {}; // { R: {id: value, ...}, ... }

// 2. Render stepper
function renderHollandStepper() {
  const stepper = document.getElementById("holland-stepper");
  stepper.innerHTML = hollandGroups
    .map(
      (g, idx) => `
    <span class="inline-block px-3 py-1 rounded-full ${
      idx === hollandCurrentGroup
        ? "bg-blue-600 text-white"
        : "bg-gray-200 text-gray-700"
    } mr-2">${idx + 1}. ${g.name.split("(")[0]}</span>
  `
    )
    .join("");
}

// 3. Render nhóm hiện tại
function renderHollandGroup() {
  renderHollandStepper();
  const group = hollandGroups[hollandCurrentGroup];
  document.getElementById("holland-group-title").innerText = group.name;
  document.getElementById("holland-group-desc").innerText = group.description;
  let html = "";
  group.questions.forEach((q, idx) => {
    html += `<tr>
      <td>${idx + 1}. ${q.text}</td>
      ${q.options
        .map(
          (opt, i) => `
        <td class="text-center">
          <input type="radio" name="q${q.id}" value="${opt.value}" ${
            hollandAnswers[group.code]?.[q.id] == opt.value ? "checked" : ""
          }>
        </td>
      `
        )
        .join("")}
    </tr>`;
  });
  document.getElementById("holland-questions-table").innerHTML = html;
  // Ẩn/hiện nút
  document.getElementById("holland-prev-btn").style.display =
    hollandCurrentGroup === 0 ? "none" : "";
  document.getElementById("holland-next-btn").innerText =
    hollandCurrentGroup === hollandGroups.length - 1
      ? "Hoàn thành"
      : "Tiếp tục";
}

// 4. Validate và lưu đáp án nhóm
function validateAndSaveHollandGroup() {
  const group = hollandGroups[hollandCurrentGroup];
  if (!hollandAnswers[group.code]) hollandAnswers[group.code] = {};
  let allAnswered = true;
  group.questions.forEach((q) => {
    const checked = document.querySelector(`input[name="q${q.id}"]:checked`);
    if (!checked) allAnswered = false;
    else hollandAnswers[group.code][q.id] = parseInt(checked.value);
  });
  return allAnswered;
}

// 5. Điều hướng
function setupHollandNav() {
  document.getElementById("holland-next-btn").onclick = function () {
    if (!validateAndSaveHollandGroup()) {
      alert("Bạn cần trả lời tất cả câu hỏi!");
      return;
    }
    if (hollandCurrentGroup < hollandGroups.length - 1) {
      hollandCurrentGroup++;
      renderHollandGroup();
    } else {
      // Chuyển sang hiển thị kết quả
      showHollandResults();
    }
  };
  document.getElementById("holland-prev-btn").onclick = function () {
    if (hollandCurrentGroup > 0) {
      hollandCurrentGroup--;
      renderHollandGroup();
    }
  };
}

// 6. Hiển thị kết quả Holland Code
function showHollandResults() {
  document.getElementById("test-questions").classList.add("hidden");
  document.getElementById("test-results").classList.remove("hidden");
  // Gom đáp án thành mảng answers như cũ
  let answers = [];
  hollandGroups.forEach((g) => {
    Object.entries(hollandAnswers[g.code] || {}).forEach(([qid, value]) => {
      answers.push({ questionId: parseInt(qid), value });
    });
  });
  // Gọi lại showResults cũ
  showResults(answers);
}

// --- Kích hoạt logic mới khi bắt đầu test ---
document.addEventListener("DOMContentLoaded", function () {
    // Initialize first step and setup navigation
    goToStep(1);
    setupHollandNav();

    // Start test button
    const startTestBtn = document.getElementById("start-test-btn");
    const testIntro = document.getElementById("test-intro");
    const testQuestions = document.getElementById("test-questions");

    if (startTestBtn) {
        startTestBtn.addEventListener("click", function (e) {
            e.preventDefault();
            console.log("Start test button clicked");

            // Call the check-login API
            fetch("/check-login", {
                method: "GET",
                credentials: "include" // Include session cookies
            })
                .then((response) => {
                    console.log("Response status:", response.status); // Debug status
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log("Response data:", data); // Debug response
                    if (data.loggedIn) {
                        // User is logged in, proceed to the test
                        goToStep(2);
                        if (testIntro && testQuestions) {
                            testIntro.classList.add("hidden");
                            testQuestions.classList.remove("hidden");
                            hollandCurrentGroup = 0;
                            hollandAnswers = {};
                            renderHollandGroup();
                            setupHollandNav();
                        } else {
                            console.error("Test intro or questions elements not found");
                        }
                    } else {
                        // User is not logged in, show SweetAlert
                        Swal.fire({
                            title: "Yêu cầu đăng nhập",
                            text: "Bạn phải đăng nhập để làm bài kiểm tra.",
                            icon: "error",
                            confirmButtonText: "OK",
                            allowOutsideClick: false,
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error checking login status:", error.message);
                    Swal.fire({
                        title: "Lỗi",
                        text: "Đã xảy ra lỗi khi kiểm tra trạng thái đăng nhập. Vui lòng thử lại.",
                        icon: "error",
                        confirmButtonText: "OK",
                        allowOutsideClick: false,
                    });
                });
        });
    }

    // Retake test button
    const retakeBtn = document.getElementById("retake-btn");
    if (retakeBtn) {
        retakeBtn.addEventListener("click", function (e) {
            e.preventDefault();
            goToStep(2);
            document.getElementById("test-results").classList.add("hidden");
            document.getElementById("test-intro").classList.remove("hidden");
            localStorage.removeItem("hollandResults");
            hollandCurrentGroup = 0;
        });
    }
});

// --- Sửa showResults để nhận answers truyền vào (nếu có) ---
function showResults(answersOverride) {
  const answers = answersOverride || getAnswers();
  const scores = calculateHollandScores(answers);

  // Sort scores to get top 3 types
  const sortedTypes = Object.entries(scores)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 3)
    .map(([type]) => type);

  // Hide questions, show results
  document.getElementById("test-questions").classList.add("hidden");
  document.getElementById("test-results").classList.remove("hidden");

  // Clear previous results
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = "";

  // Show matching programs based on Holland code
  showMatchingPrograms(sortedTypes.join(""));

  // Save results for final step
  localStorage.setItem(
    "hollandResults",
    JSON.stringify({
      types: sortedTypes,
      scores: scores,
    })
  );
}

function showMatchingPrograms(hollandCode) {
  const resultsContainer = document.getElementById("results-container");
  resultsContainer.innerHTML = ""; // Clear previous results

  // Sort programs by fit score
  const sortedPrograms = [...programs]
    .sort((a, b) => b.fitScore - a.fitScore)
    .slice(0, 3);

  // Display each program
  sortedPrograms.forEach((program) => {
    const programCard = document.createElement("div");
    programCard.className = "bg-white p-4 rounded-lg shadow-sm";
    programCard.innerHTML = `
            <h4 class="text-lg font-bold text-gray-800 mb-2">${
              program.name
            }</h4>
            <p class="text-gray-600 mb-3">${program.description}</p>
            <div class="flex items-center mb-3">
                <div class="w-full bg-gray-200 rounded-full h-2">
                    <div class="bg-blue-600 h-2 rounded-full" style="width: ${
                      program.fitScore
                    }%"></div>
                </div>
                <span class="ml-2 text-sm font-medium text-gray-600">${
                  program.fitScore
                }%</span>
            </div>
            <ul class="mb-4">
                ${program.strengths
                  .map(
                    (
                      s
                    ) => `<li class="flex items-center text-sm text-gray-600 mb-1">
                    <i class="fas fa-check-circle text-green-500 mr-2"></i>${s}
                </li>`
                  )
                  .join("")}
            </ul>
            <a href="${
              program.link
            }" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Tìm hiểu thêm <i class="fas fa-arrow-right ml-1"></i>
            </a>
        `;
    resultsContainer.appendChild(programCard);
  });
}

// Add event listeners when document loads

// Thêm các hàm cũ khác
function calculateHollandScores(answers) {
  const scores = {
    R: 0, // Realistic
    I: 0, // Investigative
    A: 0, // Artistic
    S: 0, // Social
    E: 0, // Enterprising
    C: 0, // Conventional
  };

  let counts = {
    R: 0,
    I: 0,
    A: 0,
    S: 0,
    E: 0,
    C: 0,
  };

  answers.forEach((answer) => {
    const question = questions.find((q) => q.id === answer.questionId);
    if (question && question.type === "holland") {
      scores[question.category] += answer.value;
      counts[question.category]++;
    }
  });

  // Tính điểm trung bình cho mỗi loại
  Object.keys(scores).forEach((key) => {
    if (counts[key] > 0) {
      scores[key] = scores[key] / counts[key];
    }
  });

  return scores;
}

function getHollandTypeDescription(type) {
  const descriptions = {
    R: {
      name: "Realistic (Người thực tế)",
      traits: "Thích làm việc với đồ vật, máy móc, động vật, công cụ",
      strengths: "Kỹ năng thực hành, kỹ thuật, cơ khí",
      careers: "Kỹ sư, thợ máy, nông dân, kiến trúc sư, đầu bếp",
      description:
        "Bạn là người thực tế, thích làm việc với đồ vật hơn là con người. Bạn giỏi về kỹ thuật, cơ khí và thích giải quyết các vấn đề thực tiễn.",
    },
    I: {
      name: "Investigative (Người nghiên cứu)",
      traits: "Thích tìm hiểu, phân tích, giải quyết vấn đề",
      strengths: "Tư duy logic, nghiên cứu, phân tích",
      careers: "Nhà khoa học, bác sĩ, lập trình viên, nhà nghiên cứu",
      description:
        "Bạn là người có tư duy phân tích, thích tìm hiểu và giải quyết các vấn đề phức tạp. Bạn giỏi về khoa học và nghiên cứu.",
    },
    A: {
      name: "Artistic (Người nghệ thuật)",
      traits: "Thích sáng tạo, độc đáo, tự do biểu đạt",
      strengths: "Sáng tạo, nghệ thuật, thiết kế",
      careers: "Nghệ sĩ, nhà thiết kế, nhạc sĩ, nhiếp ảnh gia, nhà văn",
      description:
        "Bạn là người có óc sáng tạo, thích thể hiện bản thân qua nghệ thuật. Bạn đánh giá cao cái đẹp và sự độc đáo.",
    },
    S: {
      name: "Social (Người xã hội)",
      traits: "Thích giúp đỡ, dạy dỗ và làm việc với người khác",
      strengths: "Giao tiếp, đồng cảm, hỗ trợ",
      careers: "Giáo viên, tư vấn viên, nhân viên xã hội, y tá",
      description:
        "Bạn là người hướng ngoại, thích làm việc với con người. Bạn có khả năng giao tiếp tốt và thích giúp đỡ người khác.",
    },
    E: {
      name: "Enterprising (Người quản lý)",
      traits: "Thích lãnh đạo, thuyết phục và kinh doanh",
      strengths: "Lãnh đạo, quản lý, kinh doanh",
      careers: "Quản lý, doanh nhân, luật sư, nhân viên bán hàng",
      description:
        "Bạn là người có khả năng lãnh đạo, thích kinh doanh và thuyết phục người khác. Bạn hướng đến thành công và mục tiêu.",
    },
    C: {
      name: "Conventional (Người quy ước)",
      traits: "Thích trật tự, quy tắc và chi tiết",
      strengths: "Tổ chức, quản lý dữ liệu, chính xác",
      careers: "Kế toán, thư ký, nhân viên ngân hàng, quản trị văn phòng",
      description:
        "Bạn là người có tổ chức, thích làm việc với số liệu và quy trình rõ ràng. Bạn đánh giá cao sự ổn định và trật tự.",
    },
  };
  return descriptions[type] || {};
}

// func cho chat (ch xong)
sendChatBtn.addEventListener("click", sendChatMessage);
chatInput.addEventListenear("keydown", function (event) {
  if (event.key === "Enter") {
    sendChatMessage();
  }
});
// Xử lý form đặt lịch (có thể thêm logic gửi dữ liệu nếu cần)
document
  .getElementById("consultation-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Đặt lịch thành công!");
    this.reset();
  });
