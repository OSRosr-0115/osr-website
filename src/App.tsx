import  { useState, useEffect, useRef } from 'react'

import image6 from './image6.jpeg'
import image7 from './image7.jpeg'
import image0 from './image0.png'
import image1 from './image1.png'
import image2 from './image2.png'
import image3 from './image3.png'
import image4 from './image4.png'
import image5 from './image5.png'
import before1 from './image8.jpg'
import before2 from './image9.jpg'
import before3 from './image10.jpg'
import after1 from './image11.jpg'
import after2 from './image31.jpeg'
import before4 from './image30.jpeg'

const NAVY = '#0d1f35'
const NAVY2 = '#162d47'
const GOLD = '#c9a84c'
const GOLD2 = '#f0d88a'
const GOLDDIM = '#a07830'
const WHITE = '#ffffff'
const OFF = '#f7f6f2'
const GRAY = '#e8e5df'
const MUTED = '#6b6b6b'
const BORDER = 'rgba(201,168,76,0.25)'

type Lang = 'jp' | 'en' | 'zh' | 'vi'

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, visible }
}

function Reveal({
  children,
  className,
  delay = 0,
  tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  tag?: 'div' | 'section' | 'p' | 'h2' | 'h3' | 'li'
}) {
  const { ref, visible } = useReveal()
  const Tag = tag as any

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  )
}

function SectionHead({
  en,
  main,
  light = false,
}: {
  en: string
  main: string
  light?: boolean
}) {
  return (
    <div className="mb-14">
      <Reveal>
        <p
          className="text-xs tracking-[0.35em] mb-3 font-medium"
          style={{
            fontFamily: 'Shippori Mincho',
            color: GOLD,
          }}
        >
          {en}
        </p>
      </Reveal>

      <Reveal delay={100}>
        <h2
          className="text-3xl lg:text-4xl font-bold leading-snug"
          style={{
            fontFamily: 'Shippori Mincho',
            color: light ? WHITE : NAVY,
          }}
        >
          {main}
        </h2>
      </Reveal>

      <div
        className="mt-5 w-12 h-px"
        style={{
          background: `linear-gradient(90deg, ${GOLD}, ${GOLD2})`,
        }}
      />
    </div>
  )
}

const TEXT = {
  jp: {
    nav: [
      'サービス紹介',
      '施工実績',
      'OSRが選ばれる6つの理由',
      '代表取締役メッセージ',
      '企業理念・使命',
      'お知らせ',
      '求人',
      '事業紹介',
      '対応エリア',
      '会社概要',
    ],

    hero1: '原状回復工事',
    hero2: 'リフォーム工事',
    hero3: '一社完結',

    heroDesc: [
      '株式会社OSRは、退去立ち合い・原状回復・リフォーム',
      '内装・外装・外構・設備工事・ハウスクリーニング',
      '建物に関する幅広い工事に対応しています。',
      '現地調査・お見積りから施工・清掃・完了確認まで一貫して対応し、',
      '個人のお客様から不動産管理会社・法人のお客様まで、建物に関するさまざまなご要望に',
      'ワンストップでお応えします。',
      
    ],

    contact: 'お問い合わせ',
    serviceList: 'サービス一覧',

    servicesTitle: 'サービス紹介',
    servicesLead:[
      '原状回復からリフォーム、内装・外装、ハウスクリーニングまで。',
    '建物に関するさまざまなご要望に、確かな施工力と柔軟な対応力でお応えします。',
],
    worksTitle: '施工実績',
    worksLead1: 'OSRが手掛けた施工事例をご紹介します。',
    worksLead2:
      '内装・リフォーム・原状回復・外装・外構など、さまざまな建物・工事に対応しています。',

    whyTitle: 'OSRが選ばれる6つの理由',

    messageTitle: '代表取締役メッセージ',

    philosophyTitle: '企業理念・私たちの使命',
    philosophy:
      '熱情と知恵で生む挑戦により、新たな価値・豊かな暮らしを創造する',
    mission:
      '熱情を力に、知恵を技術に、挑戦を価値に。期待を超える仕事で、人と社会の未来をつくる',

    newsTitle: 'お知らせ',

    recruitTitle: '採用情報',
    recruitCatch: '仕事に誇りを。挑戦と情熱を。',
    recruitText1:
      '株式会社OSRでは、事業の拡大に伴い、新たな仲間を募集しています。',
    recruitText2:
      '経験の有無だけではなく、仕事に向き合う姿勢や挑戦する気持ちを大切にしています。',
    recruitText3:
      '未経験者・経験者歓迎｜資格取得支援制度あり',

    apply: '応募する →',

    businessTitle: '事業紹介',
    details: '詳しく見る',

    contactTitle: 'お問い合わせ',
    contactLead:
      'お見積り・ご相談は無料です。工事内容や物件の状況、ご希望などお気軽にお問い合わせください。内容を確認のうえ、担当者よりご連絡いたします。',

    sentTitle: '送信が完了しました',
    sentText: '内容を確認の上、翌営業日中にご連絡いたします。',
    another: '別のお問い合わせ',

    name: 'お名前',
    company: '会社名・屋号',
    tel: '電話番号',
    email: 'メールアドレス',
    inquiryType: 'お問い合わせ種別',
    select: '選択してください',
    message: 'お問い合わせ内容',
    submit: '送信する（無料）',

    areaTitle: '対応エリア',

    areaText: [
      '関東エリアを中心に対応しています。',
      '埼玉・東京・千葉・神奈川など、幅広い地域でご相談いただけます。',
      '工事内容や現場の場所によっては、その他のエリアも対応可能です。',
      'まずはお気軽にお問い合わせください。',
    ],

    companyTitle: '会社概要',

    phone: '電話する',
    line: 'LINEで問い合わせ',

    officeArea: '埼玉県春日部市',
  },

  en: {
    nav: [
      'Services',
      'Projects',
      'Why OSR',
      'President Message',
      'Philosophy & Mission',
      'News',
      'Careers',
      'Business',
      'Service Area',
      'Company',
    ],

    hero1: 'Restoration Work',
    hero2: 'Renovation Work',
    hero3: 'All-in-One Service',

    heroDesc: [
      'OSR provides move-out inspections, restoration and renovation,',
      'interior, exterior, landscaping, equipment work and house cleaning,',
      'covering a wide range of building-related services.',
    ],

    contact: 'Contact Us',
    serviceList: 'View Services',

    servicesTitle: 'Services',
    servicesLead:
      'From restoration and renovation to interior, exterior and house cleaning, OSR responds to a wide range of building needs with reliable workmanship and flexible service.',

    worksTitle: 'Projects',
    worksLead1: 'Explore selected projects completed by OSR.',
    worksLead2:
      'We handle interior work, renovation, restoration, exterior and landscaping projects.',

    whyTitle: '6 Reasons to Choose OSR',

    messageTitle: 'President Message',

    philosophyTitle: 'Philosophy & Mission',
    philosophy:
      'Through challenges driven by passion and wisdom, we create new value and richer lives.',
    mission:
      'Turn passion into strength, wisdom into skill, and challenges into value. We create the future through work that exceeds expectations.',

    newsTitle: 'News',

    recruitTitle: 'Careers',
    recruitCatch: 'Pride in Our Work. Challenge with Passion.',
    recruitText1:
      'As our business grows, OSR is looking for new team members.',
    recruitText2:
      'We value attitude, commitment and the willingness to take on challenges.',
    recruitText3:
      'Beginners and experienced applicants welcome | Qualification support available',

    apply: 'Apply →',

    businessTitle: 'Our Business',
    details: 'Learn More',

    contactTitle: 'Contact',
    contactLead:
      'Estimates and consultations are free. Please feel free to contact us about your project or property.',

    sentTitle: 'Your message has been sent',
    sentText:
      'We will review your inquiry and contact you by the next business day.',
    another: 'Send Another Inquiry',

    name: 'Name',
    company: 'Company / Business Name',
    tel: 'Phone Number',
    email: 'Email Address',
    inquiryType: 'Inquiry Type',
    select: 'Please select',
    message: 'Message',
    submit: 'Send',

    areaTitle: 'Service Area',

    areaText: [
      'We mainly serve the Kanto region.',
      'We accept inquiries across Saitama, Tokyo, Chiba and Kanagawa.',
      'Depending on the project, other areas may also be available.',
      'Please feel free to contact us.',
    ],

    companyTitle: 'Company',

    phone: 'Call',
    line: 'Contact via LINE',

    officeArea: 'Kasukabe, Saitama',
  },

  zh: {
    nav: [
      '服务介绍',
      '施工案例',
      '选择OSR的6个理由',
      '董事长致辞',
      '企业理念与使命',
      '通知',
      '招聘',
      '业务介绍',
      '服务区域',
      '公司简介',
    ],

    hero1: '恢复原状工程',
    hero2: '翻新工程',
    hero3: '一站式完成',

    heroDesc: [
      'OSR提供退租验房、恢复原状及翻新工程，',
      '并承接室内、外墙、外构、设备工程及房屋清洁，',
      '广泛满足各类建筑相关需求。',
    ],

    contact: '联系我们',
    serviceList: '服务一览',

    servicesTitle: '服务介绍',
    servicesLead:
      '从恢复原状、翻新到室内外工程及房屋清洁，OSR凭借可靠的施工能力和灵活的服务满足各种建筑需求。',

    worksTitle: '施工案例',
    worksLead1: '为您介绍OSR承接的部分施工案例。',
    worksLead2:
      '我们可承接室内装修、翻新、恢复原状、外墙及外构等工程。',

    whyTitle: '选择OSR的6个理由',

    messageTitle: '董事长致辞',

    philosophyTitle: '企业理念与使命',
    philosophy:
      '以热情与智慧推动挑战，创造新的价值与更丰富的生活。',
    mission:
      '把热情化为力量，把智慧化为技术，把挑战化为价值。',

    newsTitle: '通知',

    recruitTitle: '招聘信息',
    recruitCatch: '以工作为荣，以热情迎接挑战。',
    recruitText1:
      '随着业务不断扩大，OSR正在招募新的团队成员。',
    recruitText2:
      '我们不仅重视经验，更重视面对工作的态度和挑战精神。',
    recruitText3:
      '欢迎无经验者及有经验者｜提供资格证取得支援',

    apply: '应聘 →',

    businessTitle: '业务介绍',
    details: '查看详情',

    contactTitle: '联系我们',
    contactLead:
      '报价与咨询免费。欢迎就工程内容、物业现状及您的需求与我们联系。',

    sentTitle: '发送成功',
    sentText:
      '确认内容后，我们将在下一个工作日内与您联系。',
    another: '再次咨询',

    name: '姓名',
    company: '公司名称',
    tel: '电话号码',
    email: '电子邮箱',
    inquiryType: '咨询类别',
    select: '请选择',
    message: '咨询内容',
    submit: '发送',

    areaTitle: '服务区域',

    areaText: [
      '我们主要服务关东地区。',
      '埼玉、东京、千叶、神奈川等地区均可咨询。',
      '根据工程内容，其他地区也可能提供服务。',
      '欢迎与我们联系。',
    ],

    companyTitle: '公司简介',

    phone: '电话咨询',
    line: '通过LINE咨询',

    officeArea: '埼玉县春日部市',
  },

  vi: {
    nav: [
      'Dịch vụ',
      'Công trình',
      '6 lý do chọn OSR',
      'Thông điệp Chủ tịch',
      'Triết lý & Sứ mệnh',
      'Tin tức',
      'Tuyển dụng',
      'Lĩnh vực kinh doanh',
      'Khu vực phục vụ',
      'Công ty',
    ],

    hero1: 'Khôi phục hiện trạng',
    hero2: 'Cải tạo',
    hero3: 'Dịch vụ trọn gói',

    heroDesc: [
      'OSR cung cấp dịch vụ kiểm tra khi trả nhà, khôi phục và cải tạo,',
      'thi công nội thất, ngoại thất, cảnh quan và vệ sinh nhà ở,',
      'đáp ứng nhiều nhu cầu liên quan đến công trình.',
    ],

    contact: 'Liên hệ',
    serviceList: 'Xem dịch vụ',

    servicesTitle: 'Dịch vụ',
    servicesLead:
      'Từ khôi phục hiện trạng, cải tạo, nội ngoại thất đến vệ sinh nhà ở, OSR đáp ứng nhiều nhu cầu bằng năng lực thi công vững chắc.',

    worksTitle: 'Công trình',
    worksLead1: 'Giới thiệu một số công trình do OSR thực hiện.',
    worksLead2:
      'Chúng tôi thi công nội thất, cải tạo, khôi phục hiện trạng và ngoại thất.',

    whyTitle: '6 lý do chọn OSR',

    messageTitle: 'Thông điệp Chủ tịch',

    philosophyTitle: 'Triết lý & Sứ mệnh',
    philosophy:
      'Bằng nhiệt huyết và trí tuệ, chúng tôi tạo ra giá trị mới và cuộc sống tốt đẹp hơn.',
    mission:
      'Biến nhiệt huyết thành sức mạnh, trí tuệ thành kỹ năng và thử thách thành giá trị.',

    newsTitle: 'Tin tức',

    recruitTitle: 'Tuyển dụng',
    recruitCatch: 'Tự hào trong công việc. Thử thách bằng nhiệt huyết.',
    recruitText1:
      'OSR đang tìm kiếm thêm thành viên mới.',
    recruitText2:
      'Chúng tôi coi trọng thái độ làm việc và tinh thần thử thách.',
    recruitText3:
      'Chào đón cả người chưa có kinh nghiệm và người có kinh nghiệm',

    apply: 'Ứng tuyển →',

    businessTitle: 'Lĩnh vực kinh doanh',
    details: 'Xem chi tiết',

    contactTitle: 'Liên hệ',
    contactLead:
      'Báo giá và tư vấn hoàn toàn miễn phí. Hãy liên hệ với chúng tôi về công trình của bạn.',

    sentTitle: 'Đã gửi thành công',
    sentText:
      'Chúng tôi sẽ liên hệ trong ngày làm việc tiếp theo.',
    another: 'Gửi yêu cầu khác',

    name: 'Họ tên',
    company: 'Tên công ty',
    tel: 'Số điện thoại',
    email: 'Email',
    inquiryType: 'Loại yêu cầu',
    select: 'Vui lòng chọn',
    message: 'Nội dung liên hệ',
    submit: 'Gửi',

    areaTitle: 'Khu vực phục vụ',

    areaText: [
      'Chúng tôi chủ yếu phục vụ khu vực Kanto.',
      'Có thể tư vấn tại Saitama, Tokyo, Chiba và Kanagawa.',
      'Tùy công trình, chúng tôi có thể phục vụ khu vực khác.',
      'Hãy liên hệ với chúng tôi.',
    ],

    companyTitle: 'Thông tin công ty',

    phone: 'Gọi điện',
    line: 'Liên hệ qua LINE',

    officeArea: 'Kasukabe, Saitama',
  },
} as const
const SERVICE_DATA = {
  jp: [
    {
      no: '01',
      title: '退去立ち合い・原状回復',
      en: 'Restoration',
      desc: '退去時の立会いから、原状回復工事、クロス・床の張替え、設備交換、補修・ハウスクリーニングまで一貫して対応します。管理会社、オーナー様の負担を減らし、次の入居に向けてスムーズに仕上げます。',
      image: image0,
    },
    {
      no: '02',
      title: 'リフォーム工事',
      en: 'Renovation',
      desc: 'キッチン・浴室・洗面・トイレなどの水回りから、間取り変更、内装・設備の改修まで幅広く対応。住まいや店舗のご要望に合わせ、機能性と快適性を考えたリフォームをご提案します。',
      image: image1,
    },
    {
      no: '03',
      title: '内装・設備工事',
      en: 'Interior & Equipment',
      desc: 'クロス・床・建具などの内装工事をはじめ、照明・水回り・空調などの設備交換・修繕まで幅広く対応。小規模な修繕から全面的な改修まで、確かな施工力で快適で使いやすい空間づくりを行います。',
      image: image2,
    },
    {
      no: '04',
      title: '外構・エクステリア工事',
      en: 'Exterior Works',
      desc: 'フェンス・ブロック塀・門扉・駐車場・土間コンクリート・アプローチなど、建物まわりの外構工事に対応。安全性・使いやすさ・デザイン性を考え、建物やご要望に合わせた外構をご提案・施工します。',
      image: image3,
    },
    {
      no: '05',
      title: '不用品回収・残置物撤去',
      en: 'Clearance & Removal',
      desc: '家具・家電・生活用品などの不用品回収から、退去後や空室の残置物撤去まで対応。原状回復工事やハウスクリーニングとあわせて、片付けから施工・清掃まで一貫してお任せいただけます。',
      image: image4,
    },
    {
      no: '06',
      title: 'ハウスクリーニング',
      en: 'House Cleaning',
      desc: '退去後・入居前の清掃をはじめ、水回り・床・窓・エアコンなど幅広く対応。原状回復やリフォーム後の清掃まで、細部に配慮し、気持ちよく使える空間へ仕上げます。',
      image: image5,
    },
  ],

  en: [
    {
      no: '01',
      title: 'Move-out Inspection & Restoration',
      en: 'Restoration',
      desc: 'We provide support from move-out inspection through restoration, repairs and house cleaning.',
      image: image0,
    },
    {
      no: '02',
      title: 'Renovation Work',
      en: 'Renovation',
      desc: 'We handle kitchens, bathrooms, layout changes, interior upgrades and equipment improvements.',
      image: image1,
    },
    {
      no: '03',
      title: 'Interior & Equipment Work',
      en: 'Interior & Equipment',
      desc: 'We handle wallpaper, flooring, fittings, lighting, plumbing, air conditioning and repairs.',
      image: image2,
    },
    {
      no: '04',
      title: 'Exterior & Landscaping',
      en: 'Exterior Works',
      desc: 'We handle fences, gates, parking areas, concrete work, approaches and other exterior work.',
      image: image3,
    },
    {
      no: '05',
      title: 'Clearance & Removal',
      en: 'Clearance & Removal',
      desc: 'We collect unwanted furniture, appliances and remaining items from vacant properties.',
      image: image4,
    },
    {
      no: '06',
      title: 'House Cleaning',
      en: 'House Cleaning',
      desc: 'We provide cleaning before move-in and after move-out, including kitchens, bathrooms, floors and windows.',
      image: image5,
    },
  ],

  zh: [
    {
      no: '01',
      title: '退租验房・恢复原状',
      en: 'Restoration',
      desc: '从退租验房到恢复原状、修补及房屋清洁，我们提供一贯式服务。',
      image: image0,
    },
    {
      no: '02',
      title: '翻新工程',
      en: 'Renovation',
      desc: '可承接厨房、浴室、卫生间、户型调整及室内设备改修等工程。',
      image: image1,
    },
    {
      no: '03',
      title: '室内・设备工程',
      en: 'Interior & Equipment',
      desc: '可承接墙纸、地板、建具、照明、水回路及空调等工程。',
      image: image2,
    },
    {
      no: '04',
      title: '外构・景观工程',
      en: 'Exterior Works',
      desc: '可承接围栏、门扉、停车场、混凝土地坪及通道等外构工程。',
      image: image3,
    },
    {
      no: '05',
      title: '废品回收・遗留物清运',
      en: 'Clearance & Removal',
      desc: '可回收家具、家电及生活用品，并清运空置物业中的遗留物。',
      image: image4,
    },
    {
      no: '06',
      title: '房屋清洁',
      en: 'House Cleaning',
      desc: '承接入住前、退租后的厨房、浴室、地板、窗户等房屋清洁。',
      image: image5,
    },
  ],

  vi: [
    {
      no: '01',
      title: 'Kiểm tra trả nhà & Khôi phục',
      en: 'Restoration',
      desc: 'Hỗ trợ từ kiểm tra khi trả nhà đến khôi phục, sửa chữa và vệ sinh.',
      image: image0,
    },
    {
      no: '02',
      title: 'Thi công cải tạo',
      en: 'Renovation',
      desc: 'Thi công bếp, phòng tắm, thay đổi bố trí và cải tạo thiết bị.',
      image: image1,
    },
    {
      no: '03',
      title: 'Nội thất & thiết bị',
      en: 'Interior & Equipment',
      desc: 'Thi công giấy dán tường, sàn, cửa, đèn, cấp thoát nước và điều hòa.',
      image: image2,
    },
    {
      no: '04',
      title: 'Ngoại thất & cảnh quan',
      en: 'Exterior Works',
      desc: 'Thi công hàng rào, cổng, bãi đỗ xe, bê tông và lối đi.',
      image: image3,
    },
    {
      no: '05',
      title: 'Thu gom & dọn đồ tồn',
      en: 'Clearance & Removal',
      desc: 'Thu gom đồ nội thất, thiết bị gia dụng và đồ còn sót lại.',
      image: image4,
    },
    {
      no: '06',
      title: 'Vệ sinh nhà ở',
      en: 'House Cleaning',
      desc: 'Vệ sinh trước khi vào ở và sau khi trả nhà.',
      image: image5,
    },
  ],
} as const

const WORKS_DATA = {
  jp: [
    {
      tag: '内装工事',
      title: 'オフィス内装工事①',
      area: '埼玉県春日部市',
      description:
        'クロス・床・建具などの内装を改修。お客様のご要望に合わせ、デザイン性と使いやすさを考えた空間に仕上げました。',
      content: '施工内容｜クロス・床・建具・内装仕上げ',
      before: before1,
      after: image6,
    },
    {
      tag: '内装工事',
      title: 'オフィス内装工事②',
      area: '埼玉県春日部市',
      description:
        'クロス・床・建具などの内装を改修。お客様のご要望に合わせ、デザイン性と使いやすさを考えた空間に仕上げました。',
      content: '施工内容｜クロス・床・建具・内装仕上げ',
      before: before2,
      after: image7,
    },
    {
      tag: '看板工事',
      title: '看板設置工事',
      area: '埼玉県春日部市',
      description:
        '建物前の看板を新設・設置。設置位置や見え方を確認しながら施工し、夜間でも視認しやすいように照明を含めて仕上げました。',
      content: '施工内容｜看板製作・設置・取付・照明調整',
      before: before3,
      after: after1,
    },
  {
      tag: 'エントランス工事',
      title: 'エントランスシート取り付け',
      area: '埼玉県春日部市',
      description:'会社入口のガラス面にシート施工を行いました。企業ロゴ、会社名、電話番号を配置し、外観の印象を整えるとともに、会社の存在が分かりやすいエントランスへと仕上げています。',
      content: '施工内容｜ガラス面シート施工・サイン施工',
      before: before4,
      after: after2,
    },  
  ],

  en: [
    {
      tag: 'Interior Work',
      title: 'Office Interior Project ①',
      area: 'Kasukabe, Saitama',
      description:
        'We renovated wallpaper, flooring and fittings to create a practical and well-designed space.',
      content: 'Work｜Wallpaper / Flooring / Fittings / Interior Finish',
      before: before1,
      after: image6,
    },
    {
      tag: 'Interior Work',
      title: 'Office Interior Project ②',
      area: 'Kasukabe, Saitama',
      description:
        'We renovated wallpaper, flooring and fittings to create a practical and well-designed space.',
      content: 'Work｜Wallpaper / Flooring / Fittings / Interior Finish',
      before: before1,
      after: image7,
    },
    {
  tag: 'Signage Work',
  title: 'Sign Installation Work',
  area: 'Kasukabe, Saitama',
  description:
    'A new freestanding sign was installed in front of the building. We carried out the work while checking the installation position and visibility, and completed the lighting so the sign remains easy to see at night.',
  content: 'Work｜Sign Production / Installation / Mounting / Lighting Adjustment',
  before: before3,
  after: after1,
},

      
  ],

  zh: [
    {
      tag: '室内工程',
      title: '办公室室内工程①',
      area: '埼玉县春日部市',
      description:
        '对墙纸、地板、建具等进行了改修，打造兼顾设计感与实用性的空间。',
      content: '施工内容｜墙纸・地板・建具・室内饰面',
      before: before1,
      after: image6,
    },
    {
      tag: '室内工程',
      title: '办公室室内工程②',
      area: '埼玉县春日部市',
      description:
        '对墙纸、地板、建具等进行了改修，打造兼顾设计感与实用性的空间。',
      content: '施工内容｜墙纸・地板・建具・室内饰面',
      before: before1,
      after: image7,
    },
    {
  tag: '招牌工程',
  title: '招牌安装工程',
  area: '埼玉县春日部市',
  description:
    '在建筑物前方新设并安装招牌。施工过程中确认安装位置及可视性，并配合照明进行调整，使夜间也能清晰识别。',
  content: '施工内容｜招牌制作・安装・固定・照明调整',
  before: before3,
  after: after1,
},
  ],

  vi: [
    {
      tag: 'Nội thất',
      title: 'Công trình văn phòng ①',
      area: 'Kasukabe, Saitama',
      description:
        'Cải tạo giấy dán tường, sàn và phụ kiện để tạo không gian tiện dụng và đẹp mắt.',
      content: 'Nội dung｜Tường / Sàn / Cửa / Hoàn thiện',
      before: before1,
      after: image6,
    },
    {
      tag: 'Nội thất',
      title: 'Công trình văn phòng ②',
      area: 'Kasukabe, Saitama',
      description:
        'Cải tạo giấy dán tường, sàn và phụ kiện để tạo không gian tiện dụng và đẹp mắt.',
      content: 'Nội dung｜Tường / Sàn / Cửa / Hoàn thiện',
      before: before1,
      after: image7,
    },
      {
  tag: 'Thi công biển hiệu',
  title: 'Lắp đặt biển hiệu',
  area: 'Kasukabe, Saitama',
  description:
    'Lắp đặt biển hiệu mới phía trước tòa nhà. Trong quá trình thi công, chúng tôi kiểm tra vị trí lắp đặt và khả năng quan sát, đồng thời điều chỉnh hệ thống chiếu sáng để biển hiệu dễ nhìn cả vào ban đêm.',
  content: 'Nội dung｜Sản xuất biển hiệu / Lắp đặt / Cố định / Điều chỉnh chiếu sáng',
  before: before3,
  after: after1,
},
  ],
} as const

const WHY_DATA = {
  jp: [
    ['01', '建設現場で培った確かな施工力', '様々な建設現場で培った経験を活かし、安全と品質を重視した施工を行います。'],
    ['02', 'ご相談から完了まで一社完結', '現地調査・お見積り・業者手配・施工・清掃・完了確認までOSRが窓口となって一貫して対応します。'],
    ['03', '建物に関する幅広い工事に対応', '原状回復、リフォーム、内装、外装、外構、設備交換、ハウスクリーニングまで幅広く対応。小さな修繕から大規模な工事までご相談いただけます。'],
    ['04', '迅速・柔軟な対応力', '現地調査からお見積り、施工まで、現場の状況やご要望に合わせて迅速かつ柔軟に対応します。'],
    ['05', '個人・法人・不動産管理会社まで対応', '一般住宅から店舗・法人・物件オーナー・不動産管理会社まで、それぞれの用途・予算・スケージュールに合わせてご提案します。'],
    ['06', '最後まで責任を持った現場管理', '工程・品質・安全・進捗を管理し、施工後の仕上がり確認・清掃・完了報告まで責任を持って対応します。'],
  ],

  en: [
    ['01', 'Reliable Construction Expertise', 'We prioritize safety and quality on every project.'],
    ['02', 'One Company from Start to Finish', 'We handle everything from inspection to completion.'],
    ['03', 'Wide Range of Building Services', 'We handle restoration, renovation, interior, exterior and cleaning.'],
    ['04', 'Fast and Flexible Response', 'We respond quickly according to site conditions and your needs.'],
    ['05', 'For Individuals and Businesses', 'We propose solutions based on purpose, budget and schedule.'],
    ['06', 'Responsible Site Management', 'We remain responsible through completion and final checks.'],
  ],

  zh: [
    ['01', '可靠的施工能力', '始终重视安全与质量。'],
    ['02', '从咨询到完工一站式服务', '从调查到施工、清洁及完工确认均由OSR负责。'],
    ['03', '广泛承接建筑工程', '可承接恢复原状、翻新、室内外及清洁工程。'],
    ['04', '迅速灵活的应对', '根据现场情况与需求迅速应对。'],
    ['05', '个人与法人均可', '根据用途、预算和日程提出方案。'],
    ['06', '负责到底的现场管理', '直到完工确认和清洁均由我们负责。'],
  ],

  vi: [
    ['01', 'Năng lực thi công đáng tin cậy', 'Luôn đặt an toàn và chất lượng lên hàng đầu.'],
    ['02', 'Một đầu mối từ đầu đến cuối', 'OSR xử lý từ khảo sát đến hoàn thành.'],
    ['03', 'Nhiều hạng mục công trình', 'Thi công cải tạo, nội ngoại thất và vệ sinh.'],
    ['04', 'Phản hồi nhanh và linh hoạt', 'Xử lý nhanh theo tình trạng công trình.'],
    ['05', 'Phục vụ cá nhân và doanh nghiệp', 'Đề xuất theo mục đích, ngân sách và lịch trình.'],
    ['06', 'Quản lý có trách nhiệm', 'Chịu trách nhiệm đến khi hoàn tất công trình.'],
  ],
} as const

const NEWS_DATA = {
  jp: [
    {
      date: '2026.08.18',
      cat: '施工情報',
      title: 'リフォーム・原状回復工事のご相談を承っております。',
      link: '#contact',
    },
    {
      date: '2026.08.17',
      cat: '不動産管理会社様',
      title: '物件オーナー様からのご相談を承っております。',
      link: '#contact',
    },
    {
      date: '2026.08.07',
      cat: '採用情報',
      title: '施工スタッフを募集中です。',
      link: '#recruit',
    },
    {
      date: '2026.05.26',
      cat: 'メディア出演',
      title: 'YouTubeチャンネル「令和の虎」に出演しました。',
      link: 'https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFiPLOYbRcco&data=05%7C02%7C%7C667c6cbdfd374a8b585b08defe4a10ea%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C639227791221687326%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=PDEEqJXsYCI27W7V3lVenseN8Ouxcju%2B0uVRnwtVRtA%3D&reserved=0',
    },
  ],

  en: [
    {
      date: '2026.08.18',
      cat: 'Projects',
      title: 'We are accepting consultations for renovation and restoration work.',
      link: '#contact',
    },
    {
      date: '2026.08.17',
      cat: 'Property',
      title: 'We welcome inquiries from property owners and management companies.',
      link: '#contact',
    },
    {
      date: '2026.08.07',
      cat: 'Careers',
      title: 'We are hiring construction staff.',
      link: '#recruit',
    },
    {
      date: '2026.05.26',
      cat: 'Media',
      title: 'We appeared on the YouTube program "Reiwa no Tora".',
      link: 'https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFiPLOYbRcco&data=05%7C02%7C%7C667c6cbdfd374a8b585b08defe4a10ea%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C639227791221716702%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=b8AHljOUrKxyPUsElvR5MUCScjHRDFxQ1VEmeTBIU6c%3D&reserved=0',
    },
  ],

  zh: [
    {
      date: '2026.08.18',
      cat: '施工信息',
      title: '现已接受翻新及恢复原状工程咨询。',
      link: '#contact',
    },
    {
      date: '2026.08.17',
      cat: '物业管理',
      title: '接受物业业主及管理公司的咨询。',
      link: '#contact',
    },
    {
      date: '2026.08.07',
      cat: '招聘',
      title: '正在招聘施工人员。',
      link: '#recruit',
    },
    {
      date: '2026.05.26',
      cat: '媒体',
      title: '出演YouTube节目《令和の虎》。',
      link: 'https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFiPLOYbRcco&data=05%7C02%7C%7C667c6cbdfd374a8b585b08defe4a10ea%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C639227791221739399%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=Ohtr%2FcEuMZYGsLO%2BSLxnARcRlkIdd0wgRIZcmVGKsPU%3D&reserved=0',
    },
  ],

  vi: [
    {
      date: '2026.08.18',
      cat: 'Công trình',
      title: 'Đang tiếp nhận tư vấn về cải tạo và khôi phục hiện trạng.',
      link: '#contact',
    },
    {
      date: '2026.08.17',
      cat: 'BĐS',
      title: 'Tiếp nhận tư vấn từ chủ bất động sản và công ty quản lý.',
      link: '#contact',
    },
    {
      date: '2026.08.07',
      cat: 'Tuyển dụng',
      title: 'Đang tuyển nhân viên thi công.',
      link: '#recruit',
    },
    {
      date: '2026.05.26',
      cat: 'Truyền thông',
      title: 'OSR đã xuất hiện trên chương trình YouTube "Reiwa no Tora".',
      link: 'https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFiPLOYbRcco&data=05%7C02%7C%7C667c6cbdfd374a8b585b08defe4a10ea%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C639227791221763874%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=sB1REGRM7qHv6Xtxd8d9QTquChAXZFBc%2B8%2FCFAlMYTA%3D&reserved=0',
    },
  ],
} as const

export default function App() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState<Lang>('jp')
  const [heroVisible, setHeroVisible] = useState(false)

  const [form, setForm] = useState({
    name: '',
    company: '',
    tel: '',
    email: '',
    service: '',
    message: '',
  })

  const [sent, setSent] = useState(false)

  const t = TEXT[language]

  const NAV_ITEMS = [
    { label: t.nav[0], href: '#services' },
    { label: t.nav[1], href: '#works' },
    { label: t.nav[2], href: '#why-osr' },
    { label: t.nav[3], href: '#message' },
    { label: t.nav[4], href: '#philosophy' },
    { label: t.nav[5], href: '#news' },
    { label: t.nav[6], href: '#recruit' },
    { label: t.nav[7], href: '#business' },
    { label: t.nav[8], href: '#area' },
    { label: t.nav[9], href: '#about' },
  ]

  useEffect(() => {
    const timer = setTimeout(() => setHeroVisible(true), 100)

    const onScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const response = await fetch(
      'https://formspree.io/f/mgawovgb',
      {
        method: 'POST',
        body: new FormData(e.currentTarget),
        headers: {
          Accept: 'application/json',
        },
      }
    )

    if (response.ok) {
      setSent(true)
    }
  }

  return (
    <div
      className="min-h-screen w-full overflow-x-hidden"
      style={{
        background: WHITE,
        color: '#1a1a1a',
        fontFamily: 'Noto Sans JP',
      }}
    >
      {/* HEADER */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: NAVY,
          borderBottom: scrolled
            ? `1px solid ${BORDER}`
            : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 lg:px-12 flex items-center justify-between h-16 lg:h-20">

          <img
            src="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fres.cloudinary.com%2Fwngor8ac%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2F435229df-1a79-4dc2-82df-ed1318396242&data=05%7C02%7C%7Cc78f27792b0942f7b88c08defcf28f24%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C639226315867240539%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=SDwUzdTiJ3nKuTxT7pyD2Pb7wSBoEooKvbyJfV18w8Q%3D&reserved=0"
            alt="株式会社OSR"
            className="h-14 lg:h-20 w-auto"
          />

          <nav className="hidden lg:grid grid-cols-5 gap-x-5 gap-y-2 flex-1 mx-6">
            {NAV_ITEMS.map((n) => (
              <button
                key={n.href}
                type="button"
                className="text-xs whitespace-nowrap"
                style={{
                  color: 'rgba(255,255,255,0.65)',
                }}
                onClick={() => {
                  const target =
                    document.getElementById(
                      n.href.replace('#', '')
                    )

                  target?.scrollIntoView({
                    behavior: 'smooth',
                  })
                }}
              >
                {n.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex flex-col items-end gap-1">
  <div className="flex items-center gap-2 text-xs">
    {[
      ['jp', 'JP'],
      ['en', 'EN'],
      ['zh', '中文'],
      ['vi', 'VI'],
    ].map(([code, label]) => (
      <button
        key={code}
        type="button"
        onClick={() => setLanguage(code as 'jp' | 'en' | 'zh' | 'vi')}
        style={{
          color: language === code ? GOLD : WHITE,
          fontWeight: language === code ? 700 : 400,
        }}
      >
        {label}
      </button>
    ))}
  </div>

  <button
    type="button"
    className="text-[11px] px-6 py－2 border transition-all duration-200"
    style={{
      color: GOLD2,
    borderColor: GOLD,
    background:'transparent',
      fontWeight: 700,
    }}      
    onClick={() => {
      const target = document.getElementById('contact')
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block:'start' })
        }
    }}
            >
            お問い合わせ
  </button>
</div>

          <button
            className="lg:hidden p-2"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            style={{ color: GOLD }}
          >
            ☰
          </button>
        </div>

        {menuOpen && (
          <div
            className="lg:hidden"
            style={{ background: NAVY }}
          >
            <div className="flex justify-center gap-4 py-4">
              {[
                ['jp', 'JP'],
                ['en', 'EN'],
                ['zh', '中文'],
                ['vi', 'VI'],
              ].map(([code, label]) => (
                <button
                  key={code}
                  onClick={() =>
                    setLanguage(code as Lang)
                  }
                  style={{
                    color:
                      language === code
                        ? GOLD
                        : WHITE,
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {NAV_ITEMS.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="block px-6 py-4 border-t text-sm"
                style={{
                  borderColor: BORDER,
                  color: WHITE,
                }}
                onClick={() =>
                  setMenuOpen(false)
                }
              >
                {n.label}
              </a>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <img
          src="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fres.cloudinary.com%2Fhlmgcqgq%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fimage0_rjdt3v&data=05%7C02%7C%7Cc78f27792b0942f7b88c08defcf28f24%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C639226315867285052%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=x1SBxyS8x1sPGCBgs8OL1%2F9poaVb4GXfFszXt2Bsck0%3D&reserved=0"
          className="absolute inset-0 w-full h-full object-cover"
          alt="OSR"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(13,31,53,.92), rgba(13,31,53,.4))',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-5 lg:px-16 pb-24 lg:pb-32">
          <p
            className="text-xs tracking-[.35em] mb-6"
            style={{ color: GOLD }}
          >
            RESTORATION & RENOVATION
          </p>

          <h1
            className="text-3xl sm:text-4xl lg:text-7xl font-bold text-white leading-tight"
          >
            {t.hero1}
            <br />
            {t.hero2}
            <br />

            <span style={{ color: GOLD2 }}>
              {t.hero3}
            </span>
          </h1>

          <p
            className="mt-6 text-sm leading-7 break-keep"
            style={{
              color:
                'rgba(255,255,255,.7)',
            }}
          >
            {t.heroDesc.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>

          
        </div>
      </section>
      
{/* MARQUEE */}
<div
  style={{
    width: "100%",
    overflow: "hidden",
    background: 'linear-gradient(90deg, #b88a2a, #d4af37, #b88a2a)',
    padding: "8px 0",
  }}
>
  <div className="osr-marquee">
    <span>
      原状回復 ｰ RENOVATION ― 内装工事 - 外装工事 - 外構工事 - CLEANING 
    </span>
    <span>
      原状回復 - RENOVATION - 内装工事 - 外装工事 - 外構工事 - CLEANING 
    </span>
     <span>
      原状回復 ｰ RENOVATION ― 内装工事 - 外装工事 - 外構工事 - CLEANING 
    </span>
  </div>
</div>


      {/* SERVICES */}
      <section
        id="services"
        className="py-24 lg:py-32"
        style={{ background: NAVY }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHead
            en="SERVICES"
            main={t.servicesTitle}
            light
          />

          <p
            className="-mt-8 mb-14 text-sm leading-7 max-w-xl"
            style={{
              color:
                'rgba(255,255,255,.55)',
            }}
          >
            {t.servicesLead}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px">
            {SERVICE_DATA[language].map(
              (s) => (
                <div
                  key={s.no}
                  className="p-8"
                  style={{
                    background: NAVY2,
                  }}
                >
                  <img
                    src={s.image}
                    className="w-full h-40 object-cover mb-5"
                    alt={s.title}
                  />

                  <p
                    className="text-xs mb-2"
                    style={{ color: GOLD }}
                  >
                    {s.no}
                  </p>

                  <h3
                    className="font-bold mb-3"
                    style={{ color: WHITE }}
                  >
                    {s.title}
                  </h3>

                  <p
                    className="text-xs leading-6"
                    style={{
                      color:
                        'rgba(255,255,255,.55)',
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* WORKS */}
      <section
        id="works"
        className="py-24 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHead
            en="WORKS"
            main={t.worksTitle}
          />

          <p
            className="-mt-6 mb-10 text-sm leading-7"
            style={{ color: MUTED }}
          >
            {t.worksLead1}
            <br />
            {t.worksLead2}
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            {WORKS_DATA[language].map(
              (w, i) => (
                <div
                  key={i}
                  className="border"
                  style={{
                    borderColor: GRAY,
                  }}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-4">

                    <div>
                      <p
                        className="text-xs font-bold mb-2"
                        style={{ color: GOLD }}
                      >
                        BEFORE
                      </p>

                      <img
                        src={w.before}
                        className="w-full aspect-[4/3] object-cover"
                        alt="BEFORE"
                      />
                    </div>

                    <div>
                      <p
                        className="text-xs font-bold mb-2"
                        style={{ color: GOLD }}
                      >
                        AFTER
                      </p>

                      <img
                        src={w.after}
                        className="w-full aspect-[4/3] object-cover"
                        alt="AFTER"
                      />
                    </div>
                  </div>

                  <div className="p-5 pt-0">
                    <p
                      className="text-xs mb-2"
                      style={{ color: GOLD }}
                    >
                      {w.tag}
                    </p>

                    <h3
                      className="font-bold mb-2"
                      style={{ color: NAVY }}
                    >
                      {w.title}
                    </h3>

                    <p
                      className="text-xs leading-6 mb-3"
                      style={{ color: MUTED }}
                    >
                      {w.description}
                    </p>

                    <p
                      className="text-xs"
                      style={{ color: MUTED }}
                    >
                      {w.content}
                    </p>

                    <p
                      className="text-xs"
                      style={{ color: MUTED }}
                    >
                      {w.area}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* WHY OSR */}
      <section
        id="why-osr"
        className="py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <SectionHead
            en="WHY OSR"
            main={t.whyTitle}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_DATA[language].map(
              ([no, title, text]) => (
                <div
                  key={no}
                  className="p-7 border"
                  style={{
                    borderColor: BORDER,
                  }}
                >
                  <p
                    className="text-sm font-bold mb-4"
                    style={{ color: GOLD }}
                  >
                    {no}
                  </p>

                  <h3
                    className="font-bold mb-3"
                    style={{ color: NAVY }}
                  >
                    {title}
                  </h3>

                  <p
                    className="text-sm leading-7"
                    style={{ color: MUTED }}
                  >
                    {text}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* MESSAGE */}
      <section
        id="message"
        className="relative min-h-screen flex items-center justify-center"
        style={{ background: WHITE }}
      >
        <img
          src="https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/%E7%A4%BE%E9%95%B7%E3%83%A1%E3%83%83%E3%82%BB%E3%83%BC%E3%82%B8%E6%A8%AA%E9%95%B7"
          className="absolute inset-0 w-full h-full object-contain"
          alt={t.messageTitle}
        />

        <div className="absolute bottom-10 left-10">
          <p
            className="text-xs mb-2"
            style={{ color: GOLD }}
          >
            MESSAGE
          </p>

          <h2 className="text-2xl font-bold text-white">
            {t.messageTitle}
          </h2>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section
        id="philosophy"
        className="py-24 px-6"
        style={{ background: OFF }}
      >
        <div className="max-w-7xl mx-auto">
          <SectionHead
            en="PHILOSOPHY"
            main={t.philosophyTitle}
          />

          <div className="grid lg:grid-cols-2 gap-10">
            <div className="p-8 border">
              <p
                className="text-xs mb-4"
                style={{ color: GOLD }}
              >
                CORPORATE PHILOSOPHY
              </p>

              <h3
                className="text-xl font-bold leading-8"
                style={{ color: NAVY }}
              >
                {t.philosophy}
              </h3>
            </div>

            <div className="p-8 border">
              <p
                className="text-xs mb-4"
                style={{ color: GOLD }}
              >
                OUR MISSION
              </p>

              <h3
                className="text-xl font-bold leading-8"
                style={{ color: NAVY }}
              >
                {t.mission}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* NEWS */}
      <section
        id="news"
        className="py-24"
        style={{ background: OFF }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <SectionHead
            en="NEWS"
            main={t.newsTitle}
          />

         <div
  className="divide-y"
  style={{
    borderTop: `1px solid ${GRAY}`,
    borderBottom: `1px solid ${GRAY}`,
  }}
>
  {NEWS_DATA[language].map((n, i) => (
    <a
      key={`${n.date}-${i}`}
      href={n.link}
      target={n.link.startsWith('http') ? '_blank' : undefined}
      rel={n.link.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 py-5"
    >
      <span
        className="text-xs shrink-0"
        style={{ color: MUTED, minWidth: '7rem' }}
      >
        {n.date}
      </span>

      <span
        className="px-2 py-0.5 text-xs shrink-0"
        style={{
          background: `linear-gradient(135deg, ${GOLD} 0%, ${GOLD2} 100%)`,
          color: NAVY,
          minWidth: '6rem',
          textAlign: 'center',
        }}
      >
        {n.cat}
      </span>

      <span
        className="text-sm"
        style={{ color: NAVY }}
      >
        {n.title}
      </span>
    </a>
  ))}
</div>
        </div>
      </section>

      {/* RECRUIT */}
      <section
        id="recruit"
        className="py-24"
        style={{ background: NAVY }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead
            en="RECRUIT"
            main={t.recruitTitle}
            light
          />

          <h3
            className="text-2xl font-bold mb-6"
            style={{ color: WHITE }}
          >
            {t.recruitCatch}
          </h3>

          <p
            className="text-sm leading-8 mb-8"
            style={{
              color:
                'rgba(255,255,255,.7)',
            }}
          >
            {t.recruitText1}
            <br />
            {t.recruitText2}
            <br />
            {t.recruitText3}
          </p>

          <a
            href="#contact"
            className="inline-block border px-8 py-4"
            style={{
              borderColor: GOLD,
              color: WHITE,
            }}
          >
            {t.apply}
          </a>
        </div>
      </section>

      {/* BUSINESS */}
      <section
        id="business"
        className="py-24"
      >
        <div className="max-w-7xl mx-auto px-6">
           <SectionHead
            en="OUR BUSINESS"
            main={t.businessTitle}
          />

          <div className="grid lg:grid-cols-2 gap-8">

            <a
              href="https://www.osr0115.com"
              target="_blank"
              className="p-8 border"
            >
              <img 
                src="https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/%E9%87%8D%E9%87%8F%E9%B3%B6"
                alt="重量鳶事業"
                className="w-full h-55 object-cover mb-5"
                />
                <h3
                className="font-bold mb-3"
                style={{ color: NAVY }}
              >
                {language === 'jp'
                  ? '重量鳶事業'
                  : language === 'zh'
                  ? '重量吊装业务'
                  : language === 'vi'
                  ? 'Thi công thiết bị nặng'
                  : 'Heavy Rigging'}
              </h3>

              <p
                className="text-sm"
                style={{ color: MUTED }}
              >
                重量物・各種機械設備の搬入・据付・撤去など、培ってきた技術と経験を活かした重量工事に対応します。
                {t.details}
              </p>
            </a>

            <a
              href="https://signage.osr-inc.jp"
              target="_blank"
              className="p-8 border"
            >
              <img
                src="https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/d829475d-22f1-490b-8c4a-2b13ede5bb18"
             alt="デジタルサイネージ事業"
                className="w-full h-55 object-cover mb-5"
                />
                <h3
                className="font-bold mb-3"
                style={{ color: NAVY }}
              >
                Digital Signage
              </h3>

              <p
                className="text-sm"
                style={{ color: MUTED }}
              >
                屋内・屋外のさまざまな環境に対応したデジタルサイネージを、用途やご要望に合わせてご提案。機器選定・販売・設置・設定まで、導入をトータルでサポートし、企業や店舗の情報発信・広告・販促の新たな価値を創造します。
                {t.details}
              </p>
            </a>
            
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24"
        style={{ background: NAVY }}
      >
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

          <div>
            <SectionHead
              en="CONTACT"
              main={t.contactTitle}
              light
            />

            <p
              className="text-sm leading-7"
              style={{
                color:
                  'rgba(255,255,255,.55)',
              }}
            >
              {t.contactLead}
            </p>
          </div>

          {sent ? (
            <div className="text-white">
              <h3 className="text-xl font-bold">
                {t.sentTitle}
              </h3>

              <p className="mt-3">
                {t.sentText}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {[
                ['name', t.name, 'text'],
                ['company', t.company, 'text'],
                ['tel', t.tel, 'tel'],
                ['email', t.email, 'email'],
              ].map(([id, label, type]) => (
                <div key={id}>
                  <label
                    className="block text-xs mb-2"
                    style={{
                      color:
                        'rgba(255,255,255,.6)',
                    }}
                  >
                    {label}
                  </label>

                  <input
                    name={id}
                    type={type}
                    value={
                      form[
                        id as keyof typeof form
                      ]
                    }
                    onChange={(e) =>
                      setForm({
                        ...form,
                        [id]: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3"
                    style={{
                      background:
                        'rgba(255,255,255,.05)',
                      color: WHITE,
                      border:
                        `1px solid ${BORDER}`,
                    }}
                  />
                </div>
              ))}

              <div>
                <label
                  className="block text-xs mb-2"
                  style={{
                    color:
                      'rgba(255,255,255,.6)',
                  }}
                >
                  {t.message}
                </label>

                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      message:
                        e.target.value,
                    })
                  }
                  className="w-full px-4 py-3"
                  style={{
                    background:
                      'rgba(255,255,255,.05)',
                    color: WHITE,
                    border:
                      `1px solid ${BORDER}`,
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 font-bold"
                style={{
                  background: GOLD,
                  color: NAVY,
                }}
              >
                {t.submit}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* AREA */}
      <section
        id="area"
        className="py-24"
        style={{ background: OFF }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <SectionHead
            en="AREA"
            main={t.areaTitle}
          />

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            <p
              className="text-sm leading-8"
              style={{ color: MUTED }}
            >
              {t.areaText.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>

            <img
              src="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fres.cloudinary.com%2Fwngor8ac%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fimage0&data=05%7C02%7C%7Cc78f27792b0942f7b88c08defcf28f24%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C639226315867463858%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=5zr04g21ppWOj41zOGdK6u%2FCDCKyajFGX1aSKe3zLPo%3D&reserved=0"
              className="w-full max-w-md"
              alt={t.areaTitle}
            />
          </div>
        </div>
      </section>

      {/* COMPANY */}
      <section
        id="about"
        className="py-24"
        style={{ background: OFF }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 item-center">
<div>
          <SectionHead
            en="COMPANY"
            main={t.companyTitle}
          />

          <table className="w-full max-w-2xl">
            <tbody>
              {[
                ['会社名', '株式会社OSR'],
                ['代表取締役', '大崎 純'],
                ['設立', '2022年3月4日'],
                ['所在地', '埼玉県春日部市豊町6丁目1-2MOTOパラダイスビル'],
                ['TEL', '048-633-4952'],
               ['営業時間','8時～18時'],
                ['建設業許可', '埼玉県知事許可(般-8)第79355号'],
                ['許可業種',　'とび・土工工事業/解体工事業'],
              ].map(([k, v]) => (
                <tr
                  key={k}
                  style={{
                    borderBottom:
                      `1px solid ${GRAY}`,
                  }}
                >
                  <td
                    className="py-4 text-xs w-32"
                    style={{ color: GOLD }}
                  >
                    {k}
                  </td>

                  <td
                    className="py-4 text-xs"
                    style={{ color: NAVY }}
                  >
                    {v}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
</div>
          
<div className="mt-10 lg:mt-0">
  <div className="relative">
    <img
      src="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Fres.cloudinary.com%2Fhlmgcqgq%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2F697c0c4c-4988-43fc-8adc-7c1c3d670217_vynuep&data=05%7C02%7C%7C5f185bfc97b74026618c08defe520e86%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C639227825533482682%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=H7V3gc8YaIH%2Bq6v2BcvkiB2kpOsR4YaIQowh1Ei8G6c%3D&reserved=0"
      alt="施工現場"
      className="w-full object-cover"
      style={{ aspectRatio: '4/3' }}
    />

    <div
      className="absolute bottom-0 left-0 px-5 py-4"
      style={{
        background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY2} 100%)`,
      }}
    >
      <div className="text-2xl font-bold text-white">
        Since 2022
      </div>

      <div
        className="text-xs mt-0.5"
        style={{ color: GOLD }}
      >
        {t.officeArea}
      </div>
    </div>
  </div>
</div>
          
        </div>
      </section>

      {/* FOOTER */}
      <footer
        className="py-12"
        style={{
          background: '#080f1a',
        }}
      >
        <div className="max-w-7xl mx-auto px-6">

          <img
            src="https://res.cloudinary.com/wngor8ac/image/upload/f_auto,q_auto/435229df-1a79-4dc2-82df-ed1318396242"
            className="h-16 mb-5"
            alt="OSR"
          />

          <p
            className="text-xs leading-7"
            style={{
              color:
                'rgba(255,255,255,.3)',
            }}
          >
            〒344-0066
            <br />
            埼玉県春日部市豊町6丁目1-2MOTOパラダイスビル
            <br />
            TEL 048-633-4952
          </p>
        </div>
      </footer>

      {/* FIXED BUTTONS */}
      <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center gap-2 lg:left-auto lg:right-5 lg:w-max">

        <a
          href="tel:0486334952"
          className="flex items-center h-14 px-5 rounded-full bg-white shadow-xl"
          style={{ color: NAVY }}
        >
          {t.phone}
        </a>

        <a
          href="https://na01.safelinks.protection.outlook.com/?url=https%3A%2F%2Flin.ee%2F9p0u2gO&data=05%7C02%7C%7Cc78f27792b0942f7b88c08defcf28f24%7C84df9e7fe9f640afb435aaaaaaaaaaaa%7C1%7C0%7C639226315867595645%7CUnknown%7CTWFpbGZsb3d8eyJFbXB0eU1hcGkiOnRydWUsIlYiOiIwLjAuMDAwMCIsIlAiOiJXaW4zMiIsIkFOIjoiTWFpbCIsIldUIjoyfQ%3D%3D%7C0%7C%7C%7C&sdata=p%2B8cEaJWgF0QP1sa%2FB7xTt62kYtxNWahZJFkAXH1h%2Bk%3D&reserved=0"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center h-14 px-5 rounded-full shadow-xl"
          style={{
            background: '#06C755',
            color: WHITE,
          }}
        >
          {t.line}
        </a>
      </div>
    </div>
  )
}
