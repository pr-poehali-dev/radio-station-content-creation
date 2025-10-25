import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [isPlaying, setIsPlaying] = useState(false);

  const schedule = [
    { time: '06:00 - 09:00', show: 'Утреннее шоу', host: 'Анна Смирнова' },
    { time: '09:00 - 12:00', show: 'Non-Stop', host: 'Ольга Миляр' },
    { time: '12:00 - 15:00', show: 'День с тобой', host: 'Елена Петрова' },
    { time: '15:00 - 18:00', show: 'Вечерний драйв', host: 'Михаил Соколов' },
    { time: '18:00 - 21:00', show: 'Топ хиты', host: 'Ольга Иванова' },
    { time: '21:00 - 00:00', show: 'Ночной эфир', host: 'Александр Морозов' },
  ];

  const news = [
    {
      date: '25 октября 2025',
      title: 'Новый сезон утреннего шоу',
      text: 'С понедельника стартует обновленная версия утреннего шоу с новыми рубриками и гостями.',
    },
    {
      date: '24 октября 2025',
      title: 'Конкурс для слушателей',
      text: 'Примите участие в нашем конкурсе и выиграйте билеты на концерт любимых исполнителей.',
    },
    {
      date: '23 октября 2025',
      title: 'Интервью недели',
      text: 'В эфире состоялось эксклюзивное интервью с популярной рок-группой.',
    },
  ];

  const renderHome = () => (
    <div className="space-y-16">
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 animate-fade-in">
        <div className="mb-8">
          <img
            src="https://cdn.poehali.dev/files/5d1745e2-6442-459a-a70a-e9682ce7da87.jpg"
            alt="КонтентМедиаPro"
            className="w-64 h-64 object-contain mx-auto mb-6"
          />
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          КонтентМедиа<span className="text-primary">Pro</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl">
          Твоя музыка. Твой ритм. Твоя радиостанция.
        </p>

        <Card className="bg-card/50 backdrop-blur-sm border-border p-8 max-w-md w-full">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full ${isPlaying ? 'bg-primary animate-pulse' : 'bg-muted'}`} />
              <span className="text-sm font-medium">{isPlaying ? 'В эфире' : 'Оффлайн'}</span>
            </div>
            <span className="text-sm text-muted-foreground">FM 101.5</span>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">Non-Stop</h3>
            <p className="text-sm text-muted-foreground">Ольга Миляр</p>
          </div>

          <Button
            onClick={() => setIsPlaying(!isPlaying)}
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Icon name={isPlaying ? 'Pause' : 'Play'} className="mr-2" size={20} />
            {isPlaying ? 'Пауза' : 'Слушать эфир'}
          </Button>
        </Card>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold mb-12 text-center">Почему мы?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
            <Icon name="Radio" className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">24/7 Эфир</h3>
            <p className="text-muted-foreground">
              Круглосуточное вещание лучшей музыки и программ
            </p>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
            <Icon name="Music" className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Разнообразие жанров</h3>
            <p className="text-muted-foreground">
              От рока до попа — музыка на любой вкус
            </p>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
            <Icon name="Headphones" className="text-primary mb-4" size={32} />
            <h3 className="text-xl font-semibold mb-2">Качественный звук</h3>
            <p className="text-muted-foreground">
              Кристально чистое звучание в HD качестве
            </p>
          </Card>
        </div>
      </section>
    </div>
  );

  const renderSchedule = () => (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Расписание эфира</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {schedule.map((item, index) => (
          <Card
            key={index}
            className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="text-primary font-bold text-lg min-w-[140px]">{item.time}</div>
                <div>
                  <h3 className="text-lg font-semibold">{item.show}</h3>
                  <p className="text-sm text-muted-foreground">Ведущий: {item.host}</p>
                </div>
              </div>
              <Icon name="Radio" className="text-muted-foreground" size={24} />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderNews = () => (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Новости</h2>
      <div className="max-w-3xl mx-auto space-y-6">
        {news.map((item, index) => (
          <Card
            key={index}
            className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all"
          >
            <div className="flex items-start gap-4 mb-4">
              <Icon name="Newspaper" className="text-primary mt-1" size={24} />
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-2">{item.date}</p>
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderContacts = () => (
    <div className="container mx-auto px-4 py-16 animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Свяжитесь с нами</h2>
      <div className="max-w-3xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <Icon name="Phone" className="text-primary mb-4" size={28} />
            <h3 className="text-xl font-semibold mb-2">Телефон</h3>
            <p className="text-muted-foreground">+7 (495) 123-45-67</p>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <Icon name="Mail" className="text-primary mb-4" size={28} />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">info@contentmediapro.ru</p>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <Icon name="MapPin" className="text-primary mb-4" size={28} />
            <h3 className="text-xl font-semibold mb-2">Адрес</h3>
            <p className="text-muted-foreground">Москва, ул. Радио, д. 10</p>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <Icon name="Clock" className="text-primary mb-4" size={28} />
            <h3 className="text-xl font-semibold mb-2">Прием звонков</h3>
            <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
          </Card>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
          <h3 className="text-2xl font-semibold mb-6">Напишите нам</h3>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input placeholder="Ваше имя" className="bg-background/50" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="bg-background/50" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Сообщение</label>
              <Textarea
                placeholder="Ваше сообщение..."
                rows={5}
                className="bg-background/50"
              />
            </div>
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
              <Icon name="Send" className="mr-2" size={20} />
              Отправить
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveSection('home')}>
              <Icon name="Radio" className="text-primary" size={24} />
              <span className="font-bold text-lg">КонтентМедиа<span className="text-primary">Pro</span></span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'schedule', label: 'Эфир', icon: 'Calendar' },
                { id: 'news', label: 'Новости', icon: 'Newspaper' },
                { id: 'contacts', label: 'Контакты', icon: 'Phone' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 transition-colors ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  {item.label}
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <Icon name="Menu" className="text-foreground" size={24} />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {activeSection === 'home' && renderHome()}
        {activeSection === 'schedule' && renderSchedule()}
        {activeSection === 'news' && renderNews()}
        {activeSection === 'contacts' && renderContacts()}
      </main>

      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Radio" className="text-primary" size={20} />
              <span className="font-semibold">КонтентМедиа<span className="text-primary">Pro</span></span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 КонтентМедиаPro. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="https://vk.com/kontentmediapro" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6 text-muted-foreground hover:text-primary cursor-pointer transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.19 14.29h-1.48c-.66 0-.86-.53-2.05-1.73-1.03-1.01-1.49-1.15-1.75-1.15-.36 0-.46.1-.46.58v1.58c0 .43-.14.68-1.25.68-1.85 0-3.89-1.12-5.33-3.21C3.84 9.88 3.4 7.85 3.4 7.4c0-.26.1-.5.58-.5h1.48c.43 0 .6.2.76.66.85 2.37 2.26 4.44 2.85 4.44.22 0 .32-.1.32-.66v-2.56c-.07-1.32-.77-1.43-.77-1.9 0-.21.17-.42.45-.42h2.33c.36 0 .5.2.5.63v3.47c0 .36.16.5.26.5.22 0 .4-.14.82-.56 1.26-1.42 2.17-3.62 2.17-3.62.12-.26.32-.5.75-.5h1.48c.53 0 .65.27.53.63-.21.97-2.24 3.94-2.24 3.94-.19.3-.26.44 0 .77.19.25.8.78 1.21 1.26.74.84 1.31 1.54 1.46 2.03.16.48-.08.73-.56.73z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;