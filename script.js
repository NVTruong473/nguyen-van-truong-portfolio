const translations = {
  en: {
    title: "Nguyen Van Truong | Software, AI & Data Portfolio",
    description:
      "Portfolio of Nguyen Van Truong, Computer Science graduate focused on Software Engineering, AI, Data and QA Automation intern/fresher roles.",
    cvHref: "assets/nguyen-van-truong-cv-en-photo.pdf",
    cvFileName: "NguyenVanTruong_CV_EN_Photo.pdf",
    items: [
      ["nav a[href='#projects']", "Projects"],
      ["nav a[href='#skills']", "Skills"],
      ["nav a[href='#fit']", "Role fit"],
      ["nav a[href='#contact']", "Contact"],
      [".hero .eyebrow", "Computer Science graduate | Ho Chi Minh City"],
      [".hero h1", "Nguyen Van Truong"],
      [
        ".lead",
        "I build practical AI, data and software prototypes with a test-minded engineering workflow: clear inputs, traceable outputs, reproducible checks and concise documentation.",
      ],
      [
        ".recruiter-note",
        "Best fit now: intern/fresher roles where Python, data handling, AI prototypes, API workflows and careful validation matter more than years of commercial experience.",
      ],
      [".hero-actions .primary", "Download CV with photo"],
      [
        ".cv-download-note",
        "The download button follows the selected language and provides a photo CV for recruiter review.",
      ],
      [".hero-actions .secondary", "Email me"],
      [".hero-actions .ghost:nth-of-type(3)", "LinkedIn"],
      [".hero-actions .ghost:nth-of-type(4)", "GitHub"],
      [".profile-card h2", "Open to intern and fresher roles"],
      [
        ".profile-card > div:last-child p",
        "Software Engineering, AI/Computer Vision, Data Engineering, Data Analytics and QA Automation.",
      ],
      [".signal-strip div:nth-child(1) strong", "Role target"],
      [
        ".signal-strip div:nth-child(1) span",
        "AI/CV, Software, Data or QA Automation intern/fresher",
      ],
      [".signal-strip div:nth-child(2) strong", "Evidence"],
      [
        ".signal-strip div:nth-child(2) span",
        "PPE monitoring, RAG chatbot, video processing and data mining projects",
      ],
      [".signal-strip div:nth-child(3) strong", "Growth edge"],
      [
        ".signal-strip div:nth-child(3) span",
        "Solid Java/OOP foundation; strengthening JavaScript and ready to learn role-specific tooling",
      ],
      [".signal-strip div:nth-child(4) strong", "Availability"],
      [
        ".signal-strip div:nth-child(4) span",
        "Ho Chi Minh City; onsite or hybrid depending on role requirements",
      ],
      ["#projects .eyebrow", "Selected work"],
      ["#projects h2", "Projects that show how I work"],
      [".project-card.featured .project-meta span:nth-child(2)", "Computer Vision"],
      [".project-card.featured h3", "PPE Compliance Monitoring System"],
      [
        ".project-card.featured > p",
        "Fixed-camera AI pipeline for person detection, head/torso crops, PPE classification, temporal stabilization and operational status output.",
      ],
      [
        ".project-card.featured li:nth-child(1)",
        "Integrated FastAPI inference service and local UI for image/video workflows.",
      ],
      [".project-card.featured li:nth-child(2)", "Created smoke-test evidence on 10 images with 51 detections."],
      [
        ".project-card.featured li:nth-child(3)",
        "Used source provenance, pHash deduplication, grouped splits and artifact hashes.",
      ],
      [".project-card:nth-child(2) .project-meta span:nth-child(1)", "Academic prototype"],
      [".project-card:nth-child(2) .project-meta span:nth-child(2)", "RAG"],
      [".project-card:nth-child(2) h3", "EDGAR Financial Reports Chatbot"],
      [
        ".project-card:nth-child(2) > p:not(.tech)",
        "Retrieval-augmented question answering over 10-K and 10-Q reports, covering preprocessing, chunking, embeddings, vector search and answer generation.",
      ],
      [".project-card:nth-child(3) .project-meta span:nth-child(1)", "Academic project"],
      [".project-card:nth-child(3) .project-meta span:nth-child(2)", "Video processing"],
      [".project-card:nth-child(3) h3", "Traffic Sign Detection from Video"],
      [
        ".project-card:nth-child(3) > p:not(.tech)",
        "Video pipeline using HSV segmentation, morphology, contour filtering and template matching, with parameter checks across lighting and background conditions.",
      ],
      [".project-card:nth-child(4) .project-meta span:nth-child(1)", "Academic project"],
      [".project-card:nth-child(4) .project-meta span:nth-child(2)", "Data mining"],
      [".project-card:nth-child(4) h3", "Transaction Analysis and Recommendation"],
      [
        ".project-card:nth-child(4) > p:not(.tech)",
        "Processed transactional data with SQL-style grouping and PySpark workflows; implemented frequent-itemset mining and compared recommendation approaches.",
      ],
      ["#skills .eyebrow", "Capability map"],
      ["#skills h2", "Skills grouped by recruiter use case"],
      [".skill-list article:nth-child(1) h3", "Programming and web fundamentals"],
      [
        ".skill-list article:nth-child(1) p",
        "Python, Java/OOP, SQL basics, PHP, HTML/CSS, C/C++; JavaScript fundamentals under active strengthening; plus FastAPI, REST API, Pydantic, Git/GitHub and environment setup.",
      ],
      [".skill-list article:nth-child(2) h3", "AI and computer vision"],
      [
        ".skill-list article:nth-child(2) p",
        "PyTorch, Torchvision, OpenCV, YOLO, MobileNetV3, tracking, model inference workflows and result validation.",
      ],
      [".skill-list article:nth-child(3) h3", "Data and analytics"],
      [
        ".skill-list article:nth-child(3) p",
        "SQL basics, Pandas, NumPy, PySpark, Power BI from MIS coursework, basic ERP concepts, preprocessing, aggregation and reporting.",
      ],
      [".skill-list article:nth-child(4) h3", "QA and testing readiness"],
      [
        ".skill-list article:nth-child(4) p",
        "Manual test cases, smoke tests, API/UI validation and bug reproduction; solid Java/OOP foundation plus HTML/PHP basics, with readiness to strengthen JavaScript, Selenium and C#/.NET when needed.",
      ],
      [".task-map .eyebrow", "Tool-to-task map"],
      [".task-map h2", "How I choose tools for real work"],
      [".task-grid article:nth-child(1) span", "AI Agent / RAG"],
      [".task-grid article:nth-child(1) h3", "Retrieve, summarize and evaluate answers"],
      [
        ".task-grid article:nth-child(1) p",
        "Python, FAISS, Sentence Transformers, LLaMA, FastAPI; learning LangChain and Microsoft Copilot Studio for agent workflows.",
      ],
      [".task-grid article:nth-child(2) span", "Data analysis"],
      [".task-grid article:nth-child(2) h3", "Clean, query and report data"],
      [
        ".task-grid article:nth-child(2) p",
        "SQL basics, Pandas, NumPy, PySpark, Excel, PowerPoint and Power BI practice from MIS coursework; basic ERP awareness for business-process context.",
      ],
      [".task-grid article:nth-child(3) span", "Web / API"],
      [".task-grid article:nth-child(3) h3", "Turn requirements into usable prototypes"],
      [
        ".task-grid article:nth-child(3) p",
        "HTML/CSS, PHP basics, JavaScript under active strengthening, React/TypeScript practice, Supabase/PostgreSQL, REST API and GitHub Pages deployment.",
      ],
      [".task-grid article:nth-child(4) span", "Business systems"],
      [".task-grid article:nth-child(4) h3", "Understand process before choosing tools"],
      [
        ".task-grid article:nth-child(4) p",
        "MIS coursework, Power BI exposure and basic ERP concepts; ready to relearn company-specific workflows, data fields and reporting logic.",
      ],
      [".task-grid article:nth-child(5) span", "Testing / QA"],
      [".task-grid article:nth-child(5) h3", "Check behavior and document issues"],
      [
        ".task-grid article:nth-child(5) p",
        "Manual test cases, smoke tests, API/UI validation, bug reproduction notes and Git; solid Java/OOP foundation with readiness to learn Selenium and C#/.NET.",
      ],
      [".learning-system .eyebrow", "Learning system"],
      [".learning-system h2", "I learn fastest when the work has real constraints."],
      [
        ".learning-lead > p:last-child",
        "Supporting proof: Codex Video Wizard, a small AI workflow and QA handoff workspace for documenting routes, tools, fallback rules and final checks.",
      ],
      [
        ".learning-lead > p:not(.eyebrow):not(.supporting-proof)",
        "I do not position myself as someone who already knows every tool. My value is a practical learning loop: understand the expected output, build a small version, test it, document what changed and improve with feedback.",
      ],
      [".learning-grid article:nth-child(1) h3", "Clarify the task"],
      [
        ".learning-grid article:nth-child(1) p",
        "Break down requirements, inputs, expected outputs, constraints and acceptance criteria before coding.",
      ],
      [".learning-grid article:nth-child(2) h3", "Build a small proof"],
      [
        ".learning-grid article:nth-child(2) p",
        "Use the closest language or tool I know first, then learn the role-specific stack needed to finish properly.",
      ],
      [".learning-grid article:nth-child(3) h3", "Test and document"],
      [
        ".learning-grid article:nth-child(3) p",
        "Check behavior with examples, record issues clearly and keep enough notes for another teammate to follow.",
      ],
      [".learning-grid article:nth-child(4) h3", "Improve with feedback"],
      [
        ".learning-grid article:nth-child(4) p",
        "Ask sharper questions after trying, then refine the solution until it matches the team's standard.",
      ],
      ["#fit .eyebrow", "Role fit"],
      ["#fit h2", "Where I can contribute now"],
      [".fit-grid article:nth-child(1) h3", "AI / Computer Vision Intern"],
      [
        ".fit-grid article:nth-child(1) p",
        "Best fit for model inference, image/video pipelines, dataset checks and prototype integration.",
      ],
      [".fit-grid article:nth-child(2) h3", "Software Engineer Intern"],
      [
        ".fit-grid article:nth-child(2) p",
        "Useful for backend/API tasks, debugging, Git workflows and turning requirements into working prototypes.",
      ],
      [".fit-grid article:nth-child(3) h3", "Data / Analytics Intern"],
      [
        ".fit-grid article:nth-child(3) p",
        "Comfortable with SQL-style analysis, Python data workflows, reporting logic and quality checks.",
      ],
      [".fit-grid article:nth-child(4) h3", "QA Automation Intern"],
      [
        ".fit-grid article:nth-child(4) p",
        "Ready for manual and automation testing support, using Java/OOP foundation while learning role-specific test tools under guidance.",
      ],
      [".compact .eyebrow", "Education and availability"],
      [".compact h2", "Practical details"],
      [".detail-grid p:nth-child(1)", "University: Ton Duc Thang University"],
      [".detail-grid p:nth-child(2)", "Degree: B.Sc. in Computer Science"],
      [".detail-grid p:nth-child(3)", "Status: Completed coursework, awaiting official graduation"],
      [".detail-grid p:nth-child(4)", "GPA: 7.14/10"],
      [".detail-grid p:nth-child(5)", "Location: Ho Chi Minh City, Vietnam"],
      [
        ".detail-grid p:nth-child(6)",
        "Availability: Internship/fresher roles, onsite or hybrid depending on role requirements",
      ],
      ["#contact .eyebrow", "Contact"],
      ["#contact h2", "Let's discuss where I can contribute."],
      [
        "#contact div:first-child > p:not(.eyebrow)",
        "For each application, I can provide a tailored CV version aligned with the job description.",
      ],
      [".contact-actions .secondary", "Phone / Zalo: +84 915 577 490"],
      [".zalo-qr span", "Zalo QR"],
      [".site-footer p", "Thanks for taking the time to visit. Wishing you a productive and positive day."],
    ],
  },
  vi: {
    title: "Nguyễn Văn Trường | Portfolio Software, AI & Data",
    description:
      "Portfolio của Nguyễn Văn Trường, ứng viên Khoa học máy tính định hướng Kỹ thuật phần mềm, AI, Dữ liệu và QA Automation intern/fresher.",
    cvHref: "assets/nguyen-van-truong-cv-vi-photo.pdf",
    cvFileName: "NguyenVanTruong_CV_VI_CoAnh.pdf",
    items: [
      ["nav a[href='#projects']", "Dự án"],
      ["nav a[href='#skills']", "Kỹ năng"],
      ["nav a[href='#fit']", "Vị trí phù hợp"],
      ["nav a[href='#contact']", "Liên hệ"],
      [".hero .eyebrow", "Khoa học máy tính | TP. Hồ Chí Minh"],
      [".hero h1", "Nguyễn Văn Trường"],
      [
        ".lead",
        "Tôi xây dựng các mẫu thử AI, dữ liệu và phần mềm theo tư duy kỹ thuật chú trọng kiểm thử: đầu vào rõ ràng, đầu ra có thể truy vết, kiểm tra lặp lại được và tài liệu ngắn gọn.",
      ],
      [
        ".recruiter-note",
        "Phù hợp nhất hiện tại: các vị trí intern/fresher cần Python, xử lý dữ liệu, mẫu thử AI, quy trình API và kiểm tra kết quả cẩn thận hơn là nhiều năm kinh nghiệm thương mại.",
      ],
      [".hero-actions .primary", "Tải CV có ảnh"],
      [
        ".cv-download-note",
        "Nút tải CV sẽ đổi theo ngôn ngữ đang chọn và cung cấp bản CV có ảnh để nhà tuyển dụng xem nhanh.",
      ],
      [".hero-actions .secondary", "Gửi email"],
      [".hero-actions .ghost:nth-of-type(3)", "LinkedIn"],
      [".hero-actions .ghost:nth-of-type(4)", "GitHub"],
      [".profile-card h2", "Sẵn sàng cho vị trí intern và fresher"],
      [
        ".profile-card > div:last-child p",
        "Kỹ thuật phần mềm, AI/Thị giác máy tính, Kỹ thuật dữ liệu, Phân tích dữ liệu và QA Automation.",
      ],
      [".signal-strip div:nth-child(1) strong", "Định hướng"],
      [
        ".signal-strip div:nth-child(1) span",
        "AI/Thị giác máy tính, Phần mềm, Dữ liệu hoặc QA Automation intern/fresher",
      ],
      [".signal-strip div:nth-child(2) strong", "Bằng chứng"],
      [
        ".signal-strip div:nth-child(2) span",
        "Dự án giám sát PPE, RAG chatbot, xử lý video và khai phá dữ liệu",
      ],
      [".signal-strip div:nth-child(3) strong", "Đang củng cố"],
      [
        ".signal-strip div:nth-child(3) span",
        "Nền tảng Java/OOP ổn; đang củng cố JavaScript và sẵn sàng học công cụ riêng theo yêu cầu vị trí",
      ],
      [".signal-strip div:nth-child(4) strong", "Sẵn sàng"],
      [
        ".signal-strip div:nth-child(4) span",
        "TP. Hồ Chí Minh; làm việc tại văn phòng hoặc kết hợp tùy yêu cầu vị trí",
      ],
      ["#projects .eyebrow", "Dự án tiêu biểu"],
      ["#projects h2", "Dự án thể hiện cách tôi làm việc"],
      [".project-card.featured .project-meta span:nth-child(2)", "Computer Vision"],
      [".project-card.featured h3", "Hệ thống giám sát tuân thủ PPE"],
      [
        ".project-card.featured > p",
        "Pipeline AI cho camera cố định: phát hiện người, crop vùng đầu/thân, phân loại PPE, ổn định trạng thái theo thời gian và xuất kết quả vận hành.",
      ],
      [
        ".project-card.featured li:nth-child(1)",
        "Tích hợp dịch vụ suy luận FastAPI và giao diện cục bộ cho quy trình ảnh/video.",
      ],
      [".project-card.featured li:nth-child(2)", "Tạo smoke-test evidence trên 10 ảnh với 51 lượt phát hiện."],
      [
        ".project-card.featured li:nth-child(3)",
        "Áp dụng source provenance, pHash deduplication, grouped splits và artifact hashes.",
      ],
      [".project-card:nth-child(2) .project-meta span:nth-child(1)", "Prototype học thuật"],
      [".project-card:nth-child(2) .project-meta span:nth-child(2)", "RAG"],
      [".project-card:nth-child(2) h3", "Chatbot báo cáo tài chính EDGAR"],
      [
        ".project-card:nth-child(2) > p:not(.tech)",
        "Hỏi đáp dạng retrieval-augmented trên báo cáo 10-K và 10-Q, gồm tiền xử lý, chia đoạn, tạo embedding, tìm kiếm vector và sinh câu trả lời.",
      ],
      [".project-card:nth-child(3) .project-meta span:nth-child(1)", "Dự án học thuật"],
      [".project-card:nth-child(3) .project-meta span:nth-child(2)", "Xử lý video"],
      [".project-card:nth-child(3) h3", "Nhận diện biển báo giao thông từ video"],
      [
        ".project-card:nth-child(3) > p:not(.tech)",
        "Pipeline xử lý video dùng HSV segmentation, morphology, contour filtering và template matching; kiểm tra tham số qua nhiều điều kiện ánh sáng và nền đường.",
      ],
      [".project-card:nth-child(4) .project-meta span:nth-child(1)", "Dự án học thuật"],
      [".project-card:nth-child(4) .project-meta span:nth-child(2)", "Data mining"],
      [".project-card:nth-child(4) h3", "Phân tích giao dịch và gợi ý"],
      [
        ".project-card:nth-child(4) > p:not(.tech)",
        "Xử lý dữ liệu giao dịch bằng nhóm dữ liệu kiểu SQL và PySpark; triển khai frequent-itemset mining và so sánh các hướng recommendation.",
      ],
      ["#skills .eyebrow", "Bản đồ năng lực"],
      ["#skills h2", "Kỹ năng nhóm theo góc nhìn nhà tuyển dụng"],
      [".skill-list article:nth-child(1) h3", "Lập trình và nền tảng web"],
      [
        ".skill-list article:nth-child(1) p",
        "Python, Java/OOP, SQL cơ bản, PHP, HTML/CSS, C/C++; JavaScript đang củng cố thêm khi cần; cùng FastAPI, REST API, Pydantic, Git/GitHub và setup môi trường.",
      ],
      [".skill-list article:nth-child(2) h3", "AI và computer vision"],
      [
        ".skill-list article:nth-child(2) p",
        "PyTorch, Torchvision, OpenCV, YOLO, MobileNetV3, tracking, quy trình suy luận và kiểm tra kết quả model.",
      ],
      [".skill-list article:nth-child(3) h3", "Dữ liệu và phân tích"],
      [
        ".skill-list article:nth-child(3) p",
        "SQL cơ bản, Pandas, NumPy, PySpark, từng dùng Power BI trong môn MIS, hiểu khái niệm ERP cơ bản, tiền xử lý, tổng hợp và báo cáo.",
      ],
      [".skill-list article:nth-child(4) h3", "QA và testing readiness"],
      [
        ".skill-list article:nth-child(4) p",
        "Manual test cases, smoke tests, API/UI validation và tái lập lỗi; nền tảng Java/OOP ổn, có HTML/PHP cơ bản, sẵn sàng củng cố JavaScript, Selenium và C#/.NET khi công việc cần.",
      ],
      [".task-map .eyebrow", "Công cụ theo task"],
      [".task-map h2", "Tôi dùng công cụ nào cho từng việc"],
      [".task-grid article:nth-child(1) span", "AI Agent / RAG"],
      [".task-grid article:nth-child(1) h3", "Truy xuất, tóm tắt và đánh giá câu trả lời"],
      [
        ".task-grid article:nth-child(1) p",
        "Python, FAISS, Sentence Transformers, LLaMA, FastAPI; đang học LangChain và Microsoft Copilot Studio cho workflow AI Agent.",
      ],
      [".task-grid article:nth-child(2) span", "Phân tích dữ liệu"],
      [".task-grid article:nth-child(2) h3", "Làm sạch, truy vấn và báo cáo dữ liệu"],
      [
        ".task-grid article:nth-child(2) p",
        "SQL cơ bản, Pandas, NumPy, PySpark, Excel, PowerPoint và Power BI đã dùng trong môn MIS; hiểu ERP ở mức khái niệm để nắm bối cảnh quy trình nghiệp vụ.",
      ],
      [".task-grid article:nth-child(3) span", "Web / API"],
      [".task-grid article:nth-child(3) h3", "Biến yêu cầu thành mẫu thử dùng được"],
      [
        ".task-grid article:nth-child(3) p",
        "HTML/CSS, PHP cơ bản, JavaScript đang củng cố, thực hành React/TypeScript, Supabase/PostgreSQL, REST API và triển khai bằng GitHub Pages.",
      ],
      [".task-grid article:nth-child(4) span", "Business systems"],
      [".task-grid article:nth-child(4) h3", "Hiểu quy trình trước khi chọn công cụ"],
      [
        ".task-grid article:nth-child(4) p",
        "Môn MIS, từng dùng Power BI và hiểu ERP ở mức khái niệm; sẵn sàng học lại workflow, trường dữ liệu và logic báo cáo riêng của doanh nghiệp.",
      ],
      [".task-grid article:nth-child(5) span", "Testing / QA"],
      [".task-grid article:nth-child(5) h3", "Kiểm tra hành vi và ghi nhận vấn đề"],
      [
        ".task-grid article:nth-child(5) p",
        "Manual test cases, smoke tests, API/UI validation, ghi chú tái lập lỗi và Git; nền tảng Java/OOP ổn, sẵn sàng học Selenium và C#/.NET.",
      ],
      [".learning-system .eyebrow", "Cách tôi học"],
      [".learning-system h2", "Tôi học nhanh nhất khi công việc có yêu cầu thật."],
      [
        ".learning-lead > p:last-child",
        "Bằng chứng phụ: Codex Video Wizard, một workspace nhỏ về AI workflow và QA handoff để tài liệu hóa route, công cụ, quy tắc fallback và bước kiểm tra cuối.",
      ],
      [
        ".learning-lead > p:not(.eyebrow):not(.supporting-proof)",
        "Tôi không định vị mình là người đã biết mọi công cụ. Giá trị của tôi nằm ở vòng lặp học thực tế: hiểu đầu ra cần đạt, dựng bản nhỏ, kiểm thử, ghi lại thay đổi và cải thiện từ phản hồi.",
      ],
      [".learning-grid article:nth-child(1) h3", "Làm rõ task"],
      [
        ".learning-grid article:nth-child(1) p",
        "Tách yêu cầu thành input, output mong muốn, ràng buộc và tiêu chí đạt trước khi bắt đầu code.",
      ],
      [".learning-grid article:nth-child(2) h3", "Dựng bản nhỏ trước"],
      [
        ".learning-grid article:nth-child(2) p",
        "Dùng ngôn ngữ hoặc công cụ gần nhất mình biết để tạo proof, sau đó học stack riêng của vị trí để hoàn thiện đúng chuẩn.",
      ],
      [".learning-grid article:nth-child(3) h3", "Kiểm thử và ghi chép"],
      [
        ".learning-grid article:nth-child(3) p",
        "Kiểm tra hành vi bằng ví dụ cụ thể, ghi nhận lỗi rõ ràng và giữ đủ note để teammate khác có thể theo dõi.",
      ],
      [".learning-grid article:nth-child(4) h3", "Cải thiện từ feedback"],
      [
        ".learning-grid article:nth-child(4) p",
        "Sau khi đã tự thử, đặt câu hỏi sắc hơn rồi refine giải pháp cho đến khi khớp tiêu chuẩn của team.",
      ],
      ["#fit .eyebrow", "Độ phù hợp"],
      ["#fit h2", "Tôi có thể đóng góp ở đâu ngay hiện tại"],
      [".fit-grid article:nth-child(1) h3", "AI / Computer Vision Intern"],
      [
        ".fit-grid article:nth-child(1) p",
        "Phù hợp nhất với suy luận model, pipeline ảnh/video, kiểm tra dataset và tích hợp mẫu thử.",
      ],
      [".fit-grid article:nth-child(2) h3", "Software Engineer Intern"],
      [
        ".fit-grid article:nth-child(2) p",
        "Có thể hỗ trợ backend/API, debugging, quy trình Git và biến yêu cầu thành mẫu thử chạy được.",
      ],
      [".fit-grid article:nth-child(3) h3", "Data / Analytics Intern"],
      [
        ".fit-grid article:nth-child(3) p",
        "Quen với phân tích kiểu SQL, quy trình dữ liệu bằng Python, logic báo cáo và kiểm tra chất lượng.",
      ],
      [".fit-grid article:nth-child(4) h3", "QA Automation Intern"],
      [
        ".fit-grid article:nth-child(4) p",
        "Sẵn sàng hỗ trợ manual/automation testing, tận dụng nền tảng Java/OOP và học thêm test tools theo hướng dẫn của team.",
      ],
      [".compact .eyebrow", "Học vấn và sẵn sàng làm việc"],
      [".compact h2", "Thông tin thực tế"],
      [".detail-grid p:nth-child(1)", "Trường: Đại học Tôn Đức Thắng"],
      [".detail-grid p:nth-child(2)", "Bằng cấp: Cử nhân Khoa học máy tính"],
      [".detail-grid p:nth-child(3)", "Tình trạng: Đã hoàn thành chương trình học, chờ tốt nghiệp chính thức"],
      [".detail-grid p:nth-child(4)", "GPA: 7.14/10"],
      [".detail-grid p:nth-child(5)", "Địa điểm: TP. Hồ Chí Minh, Việt Nam"],
      [
        ".detail-grid p:nth-child(6)",
        "Sẵn sàng: Internship/fresher, làm việc tại văn phòng hoặc kết hợp tùy yêu cầu vị trí",
      ],
      ["#contact .eyebrow", "Liên hệ"],
      ["#contact h2", "Trao đổi thêm về nơi tôi có thể đóng góp."],
      [
        "#contact div:first-child > p:not(.eyebrow)",
        "Với từng vị trí ứng tuyển, tôi có thể cung cấp bản CV đã điều chỉnh theo mô tả công việc.",
      ],
      [".contact-actions .secondary", "Điện thoại / Zalo: +84 915 577 490"],
      [".zalo-qr span", "Mã QR Zalo"],
      [".site-footer p", "Cảm ơn bạn đã ghé qua. Chúc bạn luôn giữ được tinh thần lạc quan, bình an và gặp nhiều điều tốt lành trong ngày hôm nay."],
    ],
  },
};

const languageButtons = document.querySelectorAll("[data-lang]");

function applyLanguage(language) {
  const selected = translations[language] ? language : "en";
  const { title, description, cvHref, cvFileName, items } = translations[selected];

  document.documentElement.lang = selected;
  document.title = title;
  const descriptionTag = document.querySelector("meta[name='description']");
  if (descriptionTag) descriptionTag.setAttribute("content", description);

  for (const [selector, text] of items) {
    const element = document.querySelector(selector);
    if (!element) continue;

    if (text.includes(":") && element.querySelector("strong")) {
      const [label, ...rest] = text.split(":");
      element.innerHTML = `<strong>${label}:</strong>${rest.join(":")}`;
    } else {
      element.textContent = text;
    }
  }

  const cvButton = document.querySelector(".hero-actions .primary");
  if (cvButton) {
    cvButton.setAttribute("href", cvHref);
    cvButton.setAttribute("download", cvFileName);
  }

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === selected;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("portfolio-language", selected);
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

const preferredLanguage =
  localStorage.getItem("portfolio-language") || "en";

applyLanguage(preferredLanguage);

const revealTargets = document.querySelectorAll("[data-reveal]");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.08, rootMargin: "160px 0px 160px" },
  );

  revealTargets.forEach((target) => observer.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
