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
  const [mapFilter, setMapFilter] = useState<'all' | 'universities' | 'dormitories' | 'places'>('all');

  const universities = [
    {
      name: "РГЭУ (РИНХ)",
      fullName: "Ростовский государственный экономический университет",
      url: "https://rsue.ru",
      images: [
        "https://cdn.poehali.dev/files/ec41ab0e-0804-4261-b0fe-2d48180f496c.jpg",
        "https://cdn.poehali.dev/files/07bf9d16-a910-44ca-bf8a-74a0d5602593.jpg",
        "https://cdn.poehali.dev/files/151f986e-98c8-4f4e-bd00-776855ea2935.jpg",
        "https://cdn.poehali.dev/files/68e9e6c6-b597-4940-a328-3bcd231197bc.jpg"
      ]
    },
    {
      name: "ЮФУ",
      fullName: "Южный федеральный университет",
      url: "https://sfedu.ru",
      images: [
        "https://cdn.poehali.dev/files/2798458e-d19c-4dde-95b0-9f5612030816.jpg",
        "https://cdn.poehali.dev/files/12d23679-f5fc-45ef-9d43-a802c31bd85a.jpg",
        "https://cdn.poehali.dev/files/085b1910-2457-4454-a0ae-07a8c93217ca.jpg",
        "https://cdn.poehali.dev/files/56f97731-b83c-4f46-889f-59bf1f380250.jpg"
      ]
    },
    {
      name: "ДГТУ",
      fullName: "Донской государственный технический университет",
      url: "https://donstu.ru",
      images: [
        "https://cdn.poehali.dev/files/e4eda722-b5a3-464e-b5a0-2e9173cda895.jpg",
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
      icon: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/4669879d-fb3c-4e65-8750-ff1f0bea1a37.jpg",
      title: "Поиск жилья",
      description: "Найди квартиру или комнату для аренды рядом с университетом"
    },
    {
      icon: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/7cee3b13-0474-4f7b-8e53-6ed2468a644e.jpg",
      title: "Поиск соседа",
      description: "Найди соседа по комнате среди студентов твоего вуза"
    },
    {
      icon: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/9610fc65-027f-4fe5-8193-5d2d049fb187.jpg",
      title: "Работа и подработка",
      description: "Вакансии и временные подработки специально для студентов"
    },
    {
      icon: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/eefe42af-e033-4983-9b94-b98f2513ca4e.jpg",
      title: "Расписание",
      description: "Доступ к актуальному учебному расписанию в одно касание"
    },
    {
      icon: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/629139d6-a12b-4526-9db4-e4bb8c942d6d.jpg",
      title: "Виртуальные туры 360°",
      description: "Познакомься с университетом в онлайн формате"
    },
    {
      icon: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/47baf918-d86c-4cac-a02d-167f91332a5f.jpg",
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
      emoji: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/a44fb203-18b2-4c5c-88ee-0917bddea8be.jpg",
      title: "Всё в одном месте",
      description: "Не нужно искать информацию в разных источниках"
    },
    {
      emoji: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/3e91bc5e-7f66-4d2d-a04e-76679f6fd30e.jpg",
      title: "Быстрый доступ",
      description: "Вся нужная информация всегда под рукой в Telegram"
    },
    {
      emoji: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/ce89ee93-f1c4-4b91-8647-10da906e9b45.jpg",
      title: "Общение",
      description: "Находи друзей и единомышленников прямо в боте"
    },
    {
      emoji: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/e8dd6ef3-bcf4-44e4-81ba-cdd408ce6001.jpg",
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
      avatar: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/c96c95fe-20b4-40b0-8152-89312881a4ff.jpg"
    },
    {
      name: "Максим Р.",
      university: "СПбГУ, 3 курс",
      text: "AI-помощник реально выручает перед экзаменами. Объясняет лучше некоторых преподов, не шучу!",
      avatar: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/c96c95fe-20b4-40b0-8152-89312881a4ff.jpg"
    },
    {
      name: "Дарья М.",
      university: "МГТУ, 1 курс",
      text: "Виртуальный тур помог определиться с университетом ещё до поступления. Стикеры вообще огонь",
      avatar: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/c96c95fe-20b4-40b0-8152-89312881a4ff.jpg"
    },
    {
      name: "Игорь В.",
      university: "ВШЭ, 4 курс",
      text: "Подработку нашёл через бота, график гибкий, платят хорошо. Все вакансии проверенные, без скама",
      avatar: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/c96c95fe-20b4-40b0-8152-89312881a4ff.jpg"
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
  const smallTextClass = theme === 'dark' ? 'text-white/70' : 'text-black';
  const cardBgClass = theme === 'dark' ? 'bg-white/10 backdrop-blur-md border-white/20' : 'bg-white border-purple-200';
  const navBgClass = theme === 'dark' ? 'bg-white/10 backdrop-blur-md border-white/20' : 'bg-white/90 backdrop-blur-md border-purple-200';

  return (
    <div 
      className={`min-h-screen ${bgClass}`} 
      style={theme === 'dark' ? {backgroundImage: 'url(https://cdn.poehali.dev/files/289dddc2-d94b-40d5-88f7-cd7f4a221249.jpg)'} : {}}
    >
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBgClass} border-b ${showMenu ? 'translate-y-0' : '-translate-y-full'}`}
        onMouseEnter={() => setShowMenu(true)}
      >
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
              <button onClick={() => scrollToSection('functions')} className={`${textClass} hover:text-purple-500 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 font-medium`}>
                Функции
              </button>
              <button onClick={() => scrollToSection('benefits')} className={`${textClass} hover:text-purple-500 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 font-medium`}>
                Преимущества
              </button>
              <button onClick={() => scrollToSection('stickers')} className={`${textClass} hover:text-purple-500 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 font-medium`}>
                Стикеры
              </button>
              <button onClick={() => scrollToSection('reviews')} className={`${textClass} hover:text-purple-500 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.8)] transition-all duration-300 font-medium`}>
                Отзывы
              </button>
              <a href="https://t.me/ZacenikaBot" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="sm" 
                  className={`font-bold rounded-full transition-all duration-300 ${
                    theme === 'dark' 
                      ? 'bg-white text-purple-600 hover:bg-purple-500 hover:text-white active:bg-purple-700 active:scale-95' 
                      : 'bg-purple-600 text-white hover:bg-purple-500 active:bg-purple-800 active:scale-95'
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
          <h1 className={`text-5xl md:text-7xl font-black mb-4 leading-tight drop-shadow-lg animate-title-wave ${
            theme === 'dark' 
              ? 'text-white' 
              : 'bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 bg-clip-text text-transparent'
          }`}>
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

        <section id="functions" className="py-16 scroll-mt-24">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-white animate-title-wave">
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
                  <p className={`${smallTextClass}`}>{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="universities" className="py-16 scroll-mt-24">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-white animate-title-wave">
            Виртуальный тур по университету
          </h2>


          <div className="grid md:grid-cols-3 gap-8">
            {universities.map((uni, idx) => (
              <Card key={idx} className={`${cardBgClass} overflow-hidden group hover:scale-105 transition-transform duration-300`}>
                <div className="relative aspect-[4/3]">
                  <img 
                    src={uni.images[currentImageIndex[idx]]} 
                    alt={uni.name}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                  <button
                    onClick={() => prevImage(idx)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  >
                    <Icon name="ChevronLeft" size={24} className="text-white" />
                  </button>
                  <button
                    onClick={() => nextImage(idx)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg transition-all hover:scale-110"
                  >
                    <Icon name="ChevronRight" size={24} className="text-white" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {uni.images.map((_, imgIdx) => (
                      <button
                        key={imgIdx}
                        onClick={() => setCurrentImageIndex(prev => ({ ...prev, [idx]: imgIdx }))}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentImageIndex[idx] === imgIdx 
                            ? 'bg-white w-6' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <a 
                    href={uni.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <h3 className={`text-2xl font-black ${theme === 'dark' ? 'text-white' : 'text-purple-600'} hover:text-purple-300 transition-colors mb-2`}>
                      {uni.name}
                    </h3>
                  </a>
                  <p className={`text-sm ${smallTextClass}`}>
                    {uni.fullName}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="map" className="py-16 scroll-mt-24">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-white animate-title-wave">
            Интерактивная карта Ростова-на-Дону
          </h2>

          <Card className={`${cardBgClass} p-4 overflow-hidden shadow-2xl`}>
            <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Adc8e5a3f1e2b4c6d9a8b7c6d5e4f3a2b&amp;source=constructor&amp;z=12&amp;ll=39.723098%2C47.222078"
                width="100%"
                height="100%"
                frameBorder="0"
                className="rounded-lg"
                title="Карта Ростова-на-Дону для студентов"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              <button
                onClick={() => setMapFilter('universities')}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  mapFilter === 'universities'
                    ? theme === 'dark'
                      ? 'bg-purple-600 text-white shadow-lg scale-105'
                      : 'bg-purple-600 text-white shadow-lg scale-105'
                    : theme === 'dark'
                      ? 'bg-white/10 text-white hover:bg-white/20'
                      : 'bg-purple-100 text-purple-900 hover:bg-purple-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <span>Университеты</span>
                </div>
              </button>
              <button
                onClick={() => setMapFilter('dormitories')}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  mapFilter === 'dormitories'
                    ? theme === 'dark'
                      ? 'bg-purple-600 text-white shadow-lg scale-105'
                      : 'bg-purple-600 text-white shadow-lg scale-105'
                    : theme === 'dark'
                      ? 'bg-white/10 text-white hover:bg-white/20'
                      : 'bg-purple-100 text-purple-900 hover:bg-purple-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span>Общежития</span>
                </div>
              </button>
              <button
                onClick={() => setMapFilter('places')}
                className={`px-6 py-3 rounded-full font-bold transition-all duration-300 ${
                  mapFilter === 'places'
                    ? theme === 'dark'
                      ? 'bg-purple-600 text-white shadow-lg scale-105'
                      : 'bg-purple-600 text-white shadow-lg scale-105'
                    : theme === 'dark'
                      ? 'bg-white/10 text-white hover:bg-white/20'
                      : 'bg-purple-100 text-purple-900 hover:bg-purple-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span>Студенческие места</span>
                </div>
              </button>
            </div>
          </Card>
        </section>



        <section id="benefits" className="py-16 scroll-mt-24">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-white animate-title-wave">
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
                <p className={`${smallTextClass}`}>{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="stickers" className="py-16 scroll-mt-24">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-4 text-white animate-title-wave">
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
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12 text-white animate-title-wave">
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
                    <p className={`text-sm ${smallTextClass} mb-3`}>{testimonial.university}</p>
                    <p className={`${smallTextClass}`}>{testimonial.text}</p>
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
          <Card className="bg-white p-12 shadow-2xl">
            <h2 className="md:text-5xl font-semibold mb-8 text-center animate-title-wave text-[#000000] text-5xl">
              О проекте
            </h2>
            <p className="text-center mb-12 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-[#000000]">
              Проект создан при поддержке Федерального государственного учреждения "Фонд содействия развитию малых форм предприятий в научно-технической сфере в рамках программы "Студенческий стартап" федерального проекта "Платформа университетского технологического предпринимательства"
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
                  className="h-16 md:h-20 drop-shadow-xl group-hover:drop-shadow-2xl transition-all object-scale-down"
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
          </Card>
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