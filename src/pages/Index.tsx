import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useEffect, useState } from "react";

const Index = () => {
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
      text: "Нашла комнату через бота за 2 дня! Соседка оказалась с моего потока, теперь вместе ходим на пары 😊",
      avatar: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/11868910-3fc3-4a92-9f43-8cbbd6fdf477.jpg"
    },
    {
      name: "Максим Р.",
      university: "СПбГУ, 3 курс",
      text: "AI-помощник реально выручает перед экзаменами. Объясняет лучше некоторых преподов, не шучу!",
      avatar: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/a119ae64-c774-40c5-8930-21a268561294.jpg"
    },
    {
      name: "Дарья М.",
      university: "МГТУ, 1 курс",
      text: "Виртуальный тур помог определиться с университетом ещё до поступления. Стикеры вообще огонь 🔥",
      avatar: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/4a5823f8-99d8-48ff-94a8-c428722d017e.jpg"
    },
    {
      name: "Игорь В.",
      university: "ВШЭ, 4 курс",
      text: "Подработку нашёл через бота, график гибкий, платят хорошо. Все вакансии проверенные, без скама",
      avatar: "https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/70436462-bb72-4b43-a47b-eefbfe7b152a.jpg"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const [showScrollTop, setShowScrollTop] = useState(false);

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
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://cdn.poehali.dev/files/289dddc2-d94b-40d5-88f7-cd7f4a221249.jpg)'}}>
      <nav className="sticky top-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="container mx-auto px-4 py-4 max-w-7xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-semibold text-white" style={{fontFamily: 'Pacifico, cursive'}}>Зацени</h1>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('functions')} className="text-white hover:text-purple-400 transition-colors font-medium">
                Функции
              </button>
              <button onClick={() => scrollToSection('benefits')} className="text-white hover:text-purple-400 transition-colors font-medium">
                Преимущества
              </button>
              <button onClick={() => scrollToSection('stickers')} className="text-white hover:text-purple-400 transition-colors font-medium">
                Стикеры
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-white hover:text-purple-400 transition-colors font-medium">
                Отзывы
              </button>
              <Button size="sm" className="bg-white text-purple-600 hover:bg-purple-50 font-bold rounded-full">
                Открыть бота
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <section className="text-center py-16 md:py-24 animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <span className="text-white font-bold text-sm tracking-wider">ЭКОСИСТЕМА СЕРВИСОВ ДЛЯ СТУДЕНТОВ</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-4 text-white leading-tight drop-shadow-lg">
            Самая трудная сессия<br />— это ЖИЗНЬ
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-white mb-6 drop-shadow-md italic">
            Студентам от студентов!
          </p>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto drop-shadow-md">
            Телеграм-бот, который упростит твою студенческую жизнь
          </p>
          <Button 
            size="lg" 
            className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold"
          >
            <Icon name="Send" size={24} className="mr-2" />
            Открыть в Telegram
          </Button>
        </section>

        <section id="functions" className="py-16 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white drop-shadow-lg">
              Функции бота
            </h2>
            <p className="text-lg text-white/90">
              Всё необходимое для комфортной студенческой жизни
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 bg-white/80 backdrop-blur-sm border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-scale-in"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                  {feature.icon.startsWith('http') ? (
                    <img src={feature.icon} alt={feature.title} className="w-full h-full object-contain" />
                  ) : (
                    <Icon name={feature.icon} size={28} className="text-purple-600" />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="benefits" className="py-16 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white drop-shadow-lg">
              Преимущества
            </h2>
            <p className="text-lg text-white/90">
              Почему студенты выбирают наш бот
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className="p-8 text-center bg-gradient-to-br from-white to-purple-50 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl hover:scale-105 animate-scale-in"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="w-20 h-20 mx-auto mb-4">
                  <img src={benefit.emoji} alt={benefit.title} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section id="stickers" className="py-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white drop-shadow-lg">
              Уникальные стикеры
            </h2>
            <p className="text-lg text-white/90">
              Выражай эмоции студенческой жизни через крутые стикеры!
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <Card className="bg-white/90 backdrop-blur-sm p-8 md:p-12 border-2 border-purple-200">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="flex flex-wrap justify-center items-center gap-4 p-4">
                  {stickers.map((sticker, index) => (
                    <div 
                      key={index}
                      className="w-40 h-40 animate-scale-in hover:scale-125 transition-transform duration-300 cursor-pointer"
                      style={{animationDelay: `${0.15 * index}s`}}
                    >
                      <img 
                        src={sticker.url} 
                        alt={sticker.name}
                        className="w-full h-full object-contain drop-shadow-xl"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="text-3xl font-black mb-4 text-gray-800">
                    Пак эксклюзивных стикеров
                  </h3>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Более <span className="font-bold text-purple-600">50 уникальных стикеров</span>, которые передают настроение студенческой жизни! От радости выпускного до ночных бдений перед экзаменом.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Эксклюзивный дизайн от студентов для студентов</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Постоянное пополнение коллекции новыми стикерами</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                      <span className="text-gray-700">Доступны бесплатно прямо в боте</span>
                    </li>
                  </ul>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full md:w-auto"
                  >
                    <Icon name="Download" size={24} className="mr-2" />
                    Получить стикеры в боте
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="reviews" className="py-16 animate-fade-in" style={{animationDelay: '0.7s'}}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              Отзывы студентов
            </h2>
            <p className="text-lg text-white/90">
              Что говорят те, кто уже пользуется ботом
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-6 bg-white/90 backdrop-blur-sm border-2 border-purple-200 hover:border-purple-400 transition-all duration-300 hover:shadow-xl animate-scale-in"
                style={{animationDelay: `${0.1 * index}s`}}
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{testimonial.name}</h3>
                    <p className="text-sm text-purple-600 mb-3">{testimonial.university}</p>
                    <p className="text-gray-700 leading-relaxed">{testimonial.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 text-center animate-fade-in" style={{animationDelay: '0.8s'}}>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white drop-shadow-lg">
              Начни использовать бота прямо сейчас!
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Присоединяйся к тысячам студентов, которые уже упростили свою жизнь
            </p>
            <Button 
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold"
            >
              <Icon name="Send" size={24} className="mr-2" />
              Открыть бота
            </Button>
          </div>
        </section>

        <section className="py-16 animate-fade-in" style={{animationDelay: '0.9s'}}>
          <Card className="bg-white/95 backdrop-blur-sm p-8 md:p-12 border-2 border-purple-200 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black mb-4 text-gray-800">
                О проекте
              </h2>
            </div>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base md:text-lg">
                Проект создан при поддержке Федерального государственного учреждения "Фонд содействия развитию малых форм предприятий в научно-технической сфере в рамках программы "Студенческий стартап" федерального проекта "Платформа университетского технологического предпринимательства"
              </p>
              <div className="flex flex-wrap items-center justify-center gap-8 pt-6">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md">
                  <div className="text-gray-800 font-bold text-sm">
                    ФОНД СОДЕЙСТВИЯ<br />ИННОВАЦИЯМ
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-md">
                  <div className="text-purple-600 font-bold text-sm">
                    ПЛАТФОРМА<br />УНИВЕРСИТЕТСКОГО<br />ТЕХНОЛОГИЧЕСКОГО<br />ПРЕДПРИНИМАТЕЛЬСТВА
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        <footer className="py-8 text-center text-white/70 text-sm">
          <p>© 2025 ЗаЦени. Создано студентами для студентов</p>
        </footer>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white p-4 rounded-full shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 animate-fade-in"
            aria-label="Наверх"
          >
            <Icon name="ArrowUp" size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Index;