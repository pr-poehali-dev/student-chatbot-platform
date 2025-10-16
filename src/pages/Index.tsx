import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const features = [
    {
      icon: "Home",
      title: "Поиск жилья",
      description: "Найди квартиру или комнату для аренды рядом с университетом"
    },
    {
      icon: "Users",
      title: "Поиск соседа",
      description: "Найди соседа по комнате среди студентов твоего вуза"
    },
    {
      icon: "Briefcase",
      title: "Работа и подработка",
      description: "Вакансии и временные подработки специально для студентов"
    },
    {
      icon: "Calendar",
      title: "Расписание",
      description: "Доступ к актуальному учебному расписанию в одно касание"
    },
    {
      icon: "Video",
      title: "Виртуальные туры 360°",
      description: "Познакомься с университетом в онлайн формате"
    },
    {
      icon: "Tag",
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
      emoji: "🎯",
      title: "Всё в одном месте",
      description: "Не нужно искать информацию в разных источниках"
    },
    {
      emoji: "⚡",
      title: "Быстрый доступ",
      description: "Вся нужная информация всегда под рукой в Telegram"
    },
    {
      emoji: "🤝",
      title: "Общение",
      description: "Находи друзей и единомышленников прямо в боте"
    },
    {
      emoji: "🎓",
      title: "Для студентов",
      description: "Создано студентами специально для студентов"
    }
  ];

  const stickers = [
    {
      url: "https://cdn.poehali.dev/files/fdfc3cf7-f2a6-4b9f-948e-42ce8daacef0.png",
      name: "Выпускницы",
      position: "top-10 -left-8 rotate-12",
      size: "w-32"
    },
    {
      url: "https://cdn.poehali.dev/files/8c40b67b-ae42-4469-975c-51de43695c39.png",
      name: "Оправдан",
      position: "top-32 -right-6 -rotate-6",
      size: "w-28"
    },
    {
      url: "https://cdn.poehali.dev/files/4d01ec0a-80bd-4831-8710-40311fdf57e2.png",
      name: "Какого маракуйя",
      position: "bottom-32 -left-10 rotate-6",
      size: "w-36"
    },
    {
      url: "https://cdn.poehali.dev/files/a75f16d6-f7d3-45ec-a504-a699f34c414d.png",
      name: "Модама",
      position: "bottom-10 -right-8 -rotate-12",
      size: "w-32"
    },
    {
      url: "https://cdn.poehali.dev/files/0fee06bb-c31e-42f2-9c1c-d6c78db64527.png",
      name: "Зачени",
      position: "top-1/2 -right-12 rotate-3",
      size: "w-28"
    }
  ];

  const testimonials = [
    {
      name: "Алина К.",
      university: "МГУ, 2 курс",
      text: "Нашла комнату через бота за 2 дня! Соседка оказалась с моего потока, теперь вместе ходим на пары 😊",
      avatar: "👩‍🎓"
    },
    {
      name: "Максим Р.",
      university: "СПбГУ, 3 курс",
      text: "AI-помощник реально выручает перед экзаменами. Объясняет лучше некоторых преподов, не шучу!",
      avatar: "👨‍💻"
    },
    {
      name: "Дарья М.",
      university: "МГТУ, 1 курс",
      text: "Виртуальный тур помог определиться с университетом ещё до поступления. Стикеры вообще огонь 🔥",
      avatar: "👩‍🔬"
    },
    {
      name: "Игорь В.",
      university: "ВШЭ, 4 курс",
      text: "Подработку нашёл через бота, график гибкий, платят хорошо. Все вакансии проверенные, без скама",
      avatar: "👨‍🎓"
    }
  ];

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(https://cdn.poehali.dev/files/289dddc2-d94b-40d5-88f7-cd7f4a221249.jpg)'}}>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        <section className="text-center py-16 md:py-24 animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
            <span className="text-white font-bold text-sm tracking-wider">ЭКОСИСТЕМА СЕРВИСОВ ДЛЯ СТУДЕНТОВ</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 text-white leading-tight drop-shadow-lg">
            Самая трудная сессия<br />— это ЖИЗНЬ
          </h1>
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

        <section className="py-16 animate-fade-in" style={{animationDelay: '0.2s'}}>
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
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={feature.icon} size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 animate-fade-in" style={{animationDelay: '0.4s'}}>
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
                <div className="text-6xl mb-4">{benefit.emoji}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="py-16 animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white">
              Уникальные стикеры
            </h2>
            <p className="text-lg text-white/90">
              Выражай эмоции студенческой жизни через крутые стикеры!
            </p>
          </div>
          <div className="relative max-w-4xl mx-auto h-[600px] flex items-center justify-center">
            <div className="relative z-10">
              <img 
                src="https://cdn.poehali.dev/projects/62575a67-7810-4b1f-b202-5c98c8b37b75/files/4b9e728c-c91e-42c0-bdb1-7444907e04cb.jpg"
                alt="Телефон"
                className="w-64 md:w-80 h-auto drop-shadow-2xl"
              />
            </div>
            {stickers.map((sticker, index) => (
              <div 
                key={index}
                className={`absolute ${sticker.position} ${sticker.size} animate-scale-in hover:scale-125 transition-transform duration-300 cursor-pointer z-20`}
                style={{animationDelay: `${0.15 * index}s`}}
              >
                <img 
                  src={sticker.url} 
                  alt={sticker.name}
                  className="w-full h-auto drop-shadow-xl"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
              Более 50 эксклюзивных стикеров доступны в боте! Скачай пак и делись настроением в чатах
            </p>
            <Button 
              size="lg"
              className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-bold"
            >
              <Icon name="Sticker" size={24} className="mr-2" />
              Скачать стикеры
            </Button>
          </div>
        </section>

        <section className="py-16 animate-fade-in" style={{animationDelay: '0.7s'}}>
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
                  <div className="text-5xl">{testimonial.avatar}</div>
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

        <footer className="py-8 text-center text-white/70 text-sm">
          <p>© 2025 Студенческий бот. Создано студентами для студентов</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;