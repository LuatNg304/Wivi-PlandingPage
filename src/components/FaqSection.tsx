import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: 'Phương pháp 6 Hũ tài chính trong WIVI hoạt động như thế nào?',
    answer:
      'WIVI áp dụng chuẩn mực 6 Jars System của T. Harv Eker. Mỗi khi bạn có nguồn thu nhập mới, hệ thống tự động chia theo tỷ lệ khoa học: 55% Thiết yếu (NEC), 10% Tự do tài chính (FFA), 10% Tiết kiệm dài hạn (LTSS), 10% Học tập (EDU), 10% Hưởng thụ (PLAY) và 5% Cho đi (GIVE). Bạn hoàn toàn có thể tuỳ biến tỷ lệ này theo hoàn cảnh thực tế của mình.',
  },
  {
    question: 'Tính năng AI OCR bóc tách hoá đơn có chính xác không?',
    answer:
      'Mô hình AI thị giác máy tính của WIVI được huấn luyện chuyên sâu trên dữ liệu hoá đơn thanh toán tại Việt Nam (hóa đơn siêu thị, nhà hàng, quán cà phê, xăng xe, hoá đơn điện tử Vietcombank, Momo, VPBank...). Độ chính xác nhận diện tổng tiền và ngày tháng đạt trên 99.4% chỉ trong 2 giây.',
  },
  {
    question: 'Dữ liệu tài chính cá nhân của tôi có được bảo mật an toàn không?',
    answer:
      'Tuyệt đối an toàn. WIVI tuân thủ nghiêm ngặt nguyên tắc bảo mật quyền riêng tư: Mọi dữ liệu thu chi được mã hoá đầu cuối chuẩn AES-256 trên thiết bị của bạn. Chúng tôi không bao giờ lưu trữ mật khẩu ngân hàng, mã OTP hay chia sẻ dữ liệu của bạn cho bất kỳ bên thứ ba nào.',
  },
  {
    question: 'Tôi có thể dùng WIVI trên nhiều thiết bị (iPhone, Android, Máy tính) không?',
    answer:
      'Có. WIVI hỗ trợ đồng bộ đám mây tức thì qua tài khoản Apple ID hoặc Google. Bạn có thể ghi chép trên điện thoại và mở máy tính bảng hoặc máy tính bàn xem báo cáo dòng tiền trực quan bất cứ lúc nào.',
  },
  {
    question: 'Nếu tôi vượt quá hạn mức của một hũ thì WIVI sẽ xử lý ra sao?',
    answer:
      'Hệ thống sẽ gửi cảnh báo bội chi kịp thời và đề xuất giải pháp thông minh: trích bù từ hũ Hưởng thụ (PLAY) sang hũ Thiết yếu (NEC) hoặc giảm mức chi tiêu tối đa các ngày còn lại trong tháng để bạn không bao giờ rơi vào cảnh thiếu hụt ngân sách.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-10 md:grid-cols-5 items-start">
        {/* Left Column (2 cols): 2-line big title */}
        <div className="md:col-span-2">
          <div className="max-w-xs">
            <h2 className="text-3xl font-extrabold text-neutral-800 md:text-5xl md:leading-tight dark:text-neutral-100">
              Câu hỏi <br />
              <span className="text-sky-400">thường gặp</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              Những thắc mắc phổ biến nhất về cơ chế tự động hoá 6 hũ, AI OCR và tính an toàn bảo mật của WIVI.
            </p>
          </div>
        </div>

        {/* Right Column (3 cols): Accordion list */}
        <div className="md:col-span-3">
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800 rounded-2xl border border-neutral-700/60 bg-neutral-900/50 backdrop-blur-md px-6 shadow-xl">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="py-4 sm:py-5">
                  <button
                    type="button"
                    onClick={() => toggleAccordion(index)}
                    className="flex w-full items-center justify-between text-start text-base sm:text-lg font-bold text-neutral-800 dark:text-neutral-200 hover:text-sky-400 dark:hover:text-sky-300 transition cursor-pointer gap-4"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-sky-400 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="mt-3 text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed pr-6 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
