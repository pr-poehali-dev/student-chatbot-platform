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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-100">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        
        <section className="text-center py-16 md:py-24 animate-fade-in">
          <div className="inline-block mb-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
            <span className="text-white font-bold text-sm tracking-wider">ЭКОСИСТЕМА СЕРВИСОВ ДЛЯ СТУДЕНТОВ</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Самая трудная сессия<br />— это ЖИЗНЬ
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Телеграм-бот, который упростит твою студенческую жизнь
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Icon name="Send" size={24} className="mr-2" />
            Открыть в Telegram
          </Button>
        </section>

        <section className="py-16 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800">
              Функции бота
            </h2>
            <p className="text-lg text-gray-600">
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
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-gray-800">
              Преимущества
            </h2>
            <p className="text-lg text-gray-600">
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

        <section className="py-16 text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-3xl p-12 md:p-16 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Начни использовать бота прямо сейчас!
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
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

        <footer className="py-8 text-center text-gray-600 text-sm">
          <p>© 2025 Студенческий бот. Создано студентами для студентов</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
