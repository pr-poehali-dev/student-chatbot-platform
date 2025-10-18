import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  const universities = [
    {
      name: "РГЭУ (РИНХ)",
      fullName: "Ростовский государственный экономический университет",
      images: [
        "https://cdn.poehali.dev/files/ec41ab0e-0804-4261-b0fe-2d48180f496c.jpg",
        "https://cdn.poehali.dev/files/40d41b81-9010-402c-ac46-d349950e8f27.png",
        "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/3d8fd62d-c031-4694-ad67-81cffb90b7b6.jpg"
      ]
    },
    {
      name: "ЮФУ",
      fullName: "Южный федеральный университет",
      images: [
        "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/2135267d-39a8-4441-b8e8-e36ba5122c74.jpg",
        "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/732e077c-b135-4fdb-ad1d-2da3fef214aa.jpg",
        "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/5fbffb17-ac95-4a32-87c3-e6b79a77e5c0.jpg"
      ]
    },
    {
      name: "ДГТУ",
      fullName: "Донской государственный технический университет",
      images: [
        "https://cdn.poehali.dev/files/abedafc2-e9b8-4eae-8249-35b2a5ed0436.jpg",
        "https://cdn.poehali.dev/files/00554a9c-e72f-455a-911e-1895fdde8042.jpg",
        "https://cdn.poehali.dev/files/2f06ca75-0688-4edb-8fe9-19970387bc81.jpg",
        "https://cdn.poehali.dev/files/63b79e69-3097-4521-bf1e-eb2df0759297.jpg"
      ]
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: number]: number }>({
    0: 0,
    1: 0,
    2: 0
  });

  const nextImage = (universityIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [universityIndex]: (prev[universityIndex] + 1) % universities[universityIndex].images.length
    }));
  };

  const prevImage = (universityIndex: number) => {
    setCurrentImageIndex(prev => ({
      ...prev,
      [universityIndex]: prev[universityIndex] === 0 
        ? universities[universityIndex].images.length - 1 
        : prev[universityIndex] - 1
    }));
  };

  const features = [
    {
      icon: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/3d8fd62d-c031-4694-ad67-81cffb90b7b6.jpg",
      title: "Поиск жилья",
      description: "Найди квартиру или комнату для аренды рядом с университетом"
    },
    {
      icon: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/f7581e72-1c3e-45a9-a910-9bf67fac6aa1.jpg",
      title: "Поиск соседа",
      description: "Найди соседа по комнате среди студентов твоего вуза"
    },
    {
      icon: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/2135267d-39a8-4441-b8e8-e36ba5122c74.jpg",
      title: "Работа и подработка",
      description: "Вакансии и временные подработки специально для студентов"
    },
    {
      icon: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/732e077c-b135-4fdb-ad1d-2da3fef214aa.jpg",
      title: "Расписание",
      description: "Доступ к актуальному учебному расписанию в одно касание"
    },
    {
      icon: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/5fbffb17-ac95-4a32-87c3-e6b79a77e5c0.jpg",
      title: "Виртуальные туры 360°",
      description: "Познакомься с университетом в онлайн формате"
    },
    {
      icon: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/82ea371c-1bc5-4414-b263-700b84ff315d.jpg",
      title: "Скидки и акции",
      description: "Эксклюзивные студенческие скидки и специальные предложения"
    },
    {
      icon: "PartyPopper",
      title: "Мероприятия",
      description: "Внутривузовские события и городские мероприятия"
    },
    {
      icon: "Sparkles",
      title: "AI-помощник",
      description: "Ответы на вопросы об учёбе и досуге от искусственного интеллекта"
    },
    {
      icon: "Gamepad2",
      title: "Мини-игры",
      description: "Развлекайся между парами и находи новых друзей"
    }
  ];

  const benefits = [
    {
      emoji: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/3d8fd62d-c031-4694-ad67-81cffb90b7b6.jpg",
      title: "Всё в одном месте",
      description: "Не нужно искать информацию в разных источниках"
    },
    {
      emoji: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/f7581e72-1c3e-45a9-a910-9bf67fac6aa1.jpg",
      title: "Быстрый доступ",
      description: "Вся нужная информация всегда под рукой в Telegram"
    },
    {
      emoji: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/2135267d-39a8-4441-b8e8-e36ba5122c74.jpg",
      title: "Общение",
      description: "Находи друзей и единомышленников прямо в боте"
    },
    {
      emoji: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/732e077c-b135-4fdb-ad1d-2da3fef214aa.jpg",
      title: "Для студентов",
      description: "Создано студентами специально для студентов"
    }
  ];

  const stickers = [
    {
      url: "https://cdn.poehali.dev/files/fdfc3cf7-f2a6-4b9f-948e-42ce8daacef0.png",
      name: "Выпускницы"
    },
    {
      url: "https://cdn.poehali.dev/files/8c40b67b-ae42-4469-975c-51de43695c39.png",
      name: "Оправдан"
    },
    {
      url: "https://cdn.poehali.dev/files/a75f16d6-f7d3-45ec-a504-a699f34c414d.png",
      name: "Модама"
    },
    {
      url: "https://cdn.poehali.dev/files/0fee06bb-c31e-42f2-9c1c-d6c78db64527.png",
      name: "Зачени"
    }
  ];

  const testimonials = [
    {
      name: "Алина К.",
      university: "МГУ, 2 курс",
      text: "Нашла комнату через бота за 2 дня! Соседка оказалась с моего потока, теперь вместе ходим на пары",
      avatar: "https://cdn.poehali.dev/files/cfd00d5e-cdb1-4e33-b17b-bf35a3a52e51.png"
    },
    {
      name: "Максим Р.",
      university: "СПбГУ, 3 курс",
      text: "AI-помощник реально выручает перед экзаменами. Объясняет лучше некоторых преподов, не шучу!",
      avatar: "https://cdn.poehali.dev/files/cfd00d5e-cdb1-4e33-b17b-bf35a3a52e51.png"
    },
    {
      name: "Дарья М.",
      university: "МГТУ, 1 курс",
      text: "Виртуальный тур помог определиться с университетом ещё до поступления. Стикеры вообще огонь",
      avatar: "https://cdn.poehali.dev/files/cfd00d5e-cdb1-4e33-b17b-bf35a3a52e51.png"
    },
    {
      name: "Игорь В.",
      university: "ВШЭ, 4 курс",
      text: "Подработку нашёл через бота, график гибкий, платят хорошо. Все вакансии проверенные, без скама",
      avatar: "https://cdn.poehali.dev/files/cfd00d5e-cdb1-4e33-b17b-bf35a3a52e51.png"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      setShowScrollTop(currentScrollY > 400);
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
      
      setLastScrollY(currentScrollY);

      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      const timeout = setTimeout(() => {
        setShowMenu(false);
      }, 3000);

      setScrollTimeout(timeout);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [lastScrollY, scrollTimeout]);

  const bgClass = theme === 'dark' 
    ? 'bg-cover bg-center bg-no-repeat' 
    : 'bg-gradient-to-br from-purple-50 via-white to-pink-50';

  const textClass = theme === 'dark' ? 'text-white' : 'text-purple-900';
  const cardBgClass = theme === 'dark' ? 'bg-white/10 backdrop-blur-md border-white/20' : 'bg-white border-purple-200';
  const navBgClass = theme === 'dark' ? 'bg-white/10 backdrop-blur-md border-white/20' : 'bg-white/90 backdrop-blur-md border-purple-200';

  return (
    <div 
      className={`min-h-screen ${bgClass}`} 
      style={theme === 'dark' ? {backgroundImage: 'url(https://cdn.poehali.dev/files/289dddc2-d94b-40d5-88f7-cd7f4a221249.jpg)'} : {}}
    >
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBgClass} border-b ${showMenu ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className={`text-3xl ${textClass} font-medium`} style={{fontFamily: 'Pacifico, cursive'}}>Зацени</h1>
              <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-white/20 hover:bg-white/30' : 'bg-purple-100 hover:bg-purple-200'}`}
                aria-label="Переключить тему"
              >
                <Icon name={theme === 'dark' ? 'Sun' : 'Moon'} size={20} className={theme === 'dark' ? 'text-yellow-300' : 'text-purple-600'} />
              </button>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('functions')} className={`${textClass} hover:text-purple-400 transition-colors font-medium`}>
                Функции
              </button>
              <button onClick={() => scrollToSection('benefits')} className={`${textClass} hover:text-purple-400 transition-colors font-medium`}>
                Преимущества
              </button>
              <button onClick={() => scrollToSection('stickers')} className={`${textClass} hover:text-purple-400 transition-colors font-medium`}>
                Стикеры
              </button>
              <button onClick={() => scrollToSection('reviews')} className={`${textClass} hover:text-purple-400 transition-colors font-medium`}>
                Отзывы
              </button>
              <a href="https://t.me/ZacenikaBot" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="sm" 
                  className={`font-bold rounded-full transition-all duration-500 animate-color-shift ${
                    theme === 'dark' 
                      ? 'bg-white text-purple-600 hover:bg-purple-50' 
                      : 'bg-purple-600 text-white hover:bg-purple-700'
                  }`}
                >
                  Открыть бота
                </Button>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-7xl pt-24">
        <section className="text-center py-16 md:py-24 animate-fade-in">
          <div className={`inline-block mb-6 px-6 py-2 ${cardBgClass} rounded-full border`}>
            <span className={`${textClass} font-bold text-sm tracking-wider`}>ЭКОСИСТЕМА СЕРВИСОВ ДЛЯ СТУДЕНТОВ</span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-black mb-4 ${textClass} leading-tight drop-shadow-lg animate-title-wave`}>
            Самая трудная сессия<br />— это ЖИЗНЬ
          </h1>
          <p className={`md:text-3xl font-bold ${textClass} mb-6 drop-shadow-md italic text-2xl`}>
            Студентам от студентов!
          </p>
          <p className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-white/90' : 'text-purple-700'} mb-8 max-w-3xl mx-auto drop-shadow-md`}>
            Телеграм-бот, который упростит твою студенческую жизнь
          </p>
          <a href="https://t.me/ZacenikaBot" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg" 
              className={`text-lg px-12 py-6 rounded-full font-bold shadow-2xl hover:shadow-xl transition-all hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-white text-purple-600 hover:bg-purple-50'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              <Icon name="Send" className="mr-2" size={24} />
              Открыть в Telegram
            </Button>
          </a>
        </section>

        <section id="tour" className="py-16 scroll-mt-24">
          <h2 className={`text-4xl md:text-5xl font-black text-center mb-12 ${textClass} animate-title-wave`}>
            Виртуальный тур по университету
          </h2>
          <Card className={`${cardBgClass} p-4 overflow-hidden`}>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe 
                src="https://rsue.ru/tour/tour.html"
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                title="Виртуальный тур"
                allowFullScreen
              />
            </div>
          </Card>
        </section>

        <section id="universities" className="py-16 scroll-mt-24">
          <h2 className={`text-4xl md:text-5xl font-black text-center mb-4 ${textClass} animate-title-wave`}>
            Виртуальные
          </h2>
          <h2 className={`text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-title-wave`}>
            ТУРЫ
          </h2>
          <p className={`text-center ${theme === 'dark' ? 'text-white/70' : 'text-purple-600'} mb-12 text-lg`}>
            По главным университетам Ростова-на-Дону
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {universities.map((uni, idx) => (
              <Card key={idx} className={`${cardBgClass} overflow-hidden group hover:scale-105 transition-transform duration-300`}>
                <div className="relative aspect-[4/3]">
                  <img 
                    src={uni.images[currentImageIndex[idx]]} 
                    alt={uni.name}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => prevImage(idx)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <Icon name="ChevronLeft" size={24} className="text-purple-600" />
                  </button>
                  <button
                    onClick={() => nextImage(idx)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <Icon name="ChevronRight" size={24} className="text-purple-600" />
                  </button>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {uni.name}
                  </h3>
                  <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-purple-600'}`}>
                    {uni.fullName}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="functions" className="py-16 scroll-mt-24">
          <h2 className={`text-4xl md:text-5xl font-black text-center mb-12 ${textClass} animate-title-wave`}>
            Функции бота
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className={`${cardBgClass} p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl group`}
              >
                <div className="flex flex-col items-center text-center">
                  {feature.icon.startsWith('http') ? (
                    <img src={feature.icon} alt={feature.title} className="w-16 h-16 object-cover rounded-2xl mb-4 shadow-lg" />
                  ) : (
                    <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform">
                      <Icon name={feature.icon as any} size={32} className="text-white" />
                    </div>
                  )}
                  <h3 className={`text-xl font-bold mb-2 ${textClass}`}>{feature.title}</h3>
                  <p className={`${theme === 'dark' ? 'text-white/70' : 'text-purple-600'}`}>{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="benefits" className="py-16 scroll-mt-24">
          <h2 className={`text-4xl md:text-5xl font-black text-center mb-12 ${textClass} animate-title-wave`}>
            Почему ЗаЦени?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index} 
                className={`${cardBgClass} p-8 text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              >
                <img src={benefit.emoji} alt={benefit.title} className="w-20 h-20 mx-auto mb-4 rounded-full shadow-lg" />
                <h3 className={`text-xl font-bold mb-2 ${textClass}`}>{benefit.title}</h3>
                <p className={`${theme === 'dark' ? 'text-white/70' : 'text-purple-600'}`}>{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="stickers" className="py-16 scroll-mt-24">
          <h2 className={`text-4xl md:text-5xl font-black text-center mb-4 ${textClass} animate-title-wave`}>
            Эксклюзивные стикеры
          </h2>
          <p className={`text-center ${theme === 'dark' ? 'text-white/70' : 'text-purple-600'} mb-12 text-lg`}>
            Получи уникальный набор стикеров в боте
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {stickers.map((sticker, index) => (
              <Card 
                key={index} 
                className={`${cardBgClass} p-6 hover:scale-110 transition-all duration-300 hover:shadow-2xl cursor-pointer`}
              >
                <img 
                  src={sticker.url} 
                  alt={sticker.name}
                  className="w-full aspect-square object-contain"
                />
              </Card>
            ))}
          </div>
          <div className="text-center">
            <a href="https://t.me/ZacenikaBot" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className={`text-lg px-12 py-6 rounded-full font-bold shadow-2xl hover:shadow-xl transition-all hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-white text-purple-600 hover:bg-purple-50'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                Получить стикеры в боте
              </Button>
            </a>
          </div>
        </section>

        <section id="reviews" className="py-16 scroll-mt-24">
          <h2 className={`text-4xl md:text-5xl font-black text-center mb-12 ${textClass} animate-title-wave`}>
            Отзывы студентов
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className={`${cardBgClass} p-6 hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center flex-shrink-0">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-bold ${textClass} mb-1`}>{testimonial.name}</h4>
                    <p className={`text-sm ${theme === 'dark' ? 'text-white/60' : 'text-purple-500'} mb-3`}>{testimonial.university}</p>
                    <p className={`${theme === 'dark' ? 'text-white/80' : 'text-purple-700'}`}>{testimonial.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 text-center">
          <Card className={`${cardBgClass} p-12 shadow-2xl`}>
            <h2 className={`text-4xl md:text-5xl font-black mb-6 ${textClass} animate-title-wave`}>
              Готов упростить студенческую жизнь?
            </h2>
            <p className={`text-xl ${theme === 'dark' ? 'text-white/80' : 'text-purple-700'} mb-8`}>
              Присоединяйся к тысячам студентов уже сегодня!
            </p>
            <a href="https://t.me/ZacenikaBot" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className={`text-lg px-12 py-6 rounded-full font-bold shadow-2xl hover:shadow-xl transition-all hover:scale-105 ${
                  theme === 'dark'
                    ? 'bg-white text-purple-600 hover:bg-purple-50'
                    : 'bg-purple-600 text-white hover:bg-purple-700'
                }`}
              >
                <Icon name="Send" className="mr-2" size={24} />
                Открыть бота
              </Button>
            </a>
          </Card>
        </section>

        <section className="py-12">
          <h2 className={`text-3xl md:text-4xl font-black text-center mb-4 ${textClass} animate-title-wave`}>
            При поддержке
          </h2>
          <p className={`text-center ${theme === 'dark' ? 'text-white/70' : 'text-purple-600'} mb-8 text-lg`}>
            Проект реализуется при поддержке Фонда содействия развитию малых форм предприятий в научно-технической сфере (Программа «Студенческий стартап»)
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <a 
              href="https://fasie.ru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group hover:scale-110 transition-all duration-300"
            >
              <img 
                src="https://cdn.poehali.dev/files/231ac3e7-6fc6-4ab9-b0a0-95807af431bc.png" 
                alt="Фонд содействия инновациям"
                className="h-24 md:h-32 drop-shadow-xl group-hover:drop-shadow-2xl transition-all object-scale-down"
              />
            </a>
            <a 
              href="https://univertechpred.ru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group hover:scale-110 transition-all duration-300"
            >
              <img 
                src="https://cdn.poehali.dev/files/1e84ebb2-2584-421a-90ef-dcaf955d7c2f.png" 
                alt="Платформа университетского технологического предпринимательства"
                className="h-24 md:h-32 object-contain drop-shadow-xl group-hover:drop-shadow-2xl transition-all"
              />
            </a>
          </div>
        </section>

        <footer className={`py-8 text-center ${theme === 'dark' ? 'text-white/70' : 'text-purple-600'} text-sm`}>
          <p>© 2025 ЗаЦени. Создано студентами для студентов</p>
        </footer>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-4 rounded-full shadow-2xl hover:shadow-xl transition-all duration-500 hover:scale-110 z-50 animate-bounce-in ${
              theme === 'dark'
                ? 'bg-purple-600/30 hover:bg-purple-600/50 backdrop-blur-md border-2 border-purple-400/50'
                : 'bg-purple-100/50 hover:bg-purple-200/70 backdrop-blur-md border-2 border-purple-300'
            }`}
            aria-label="Наверх"
          >
            <Icon name="ArrowUp" size={24} className={theme === 'dark' ? 'text-white' : 'text-purple-600'} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Index;