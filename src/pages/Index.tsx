import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: "Lightbulb",
      title: "Реставрация фар",
      description: "Профессиональная полировка и восстановление помутневших фар с возвращением заводской прозрачности"
    },
    {
      icon: "Zap",
      title: "Ретрофит LED-модулями",
      description: "Модернизация оптики современными светодиодными модулями известных брендов для улучшения освещения"
    },
    {
      icon: "Droplet",
      title: "Устранение запотеваний",
      description: "Полная герметизация фар с устранением причин образования конденсата внутри оптики"
    },
    {
      icon: "Sparkles",
      title: "Антихром деталей",
      description: "Затемнение декоративных хромированных элементов фары для стильного внешнего вида"
    },
    {
      icon: "Wrench",
      title: "Замена линз",
      description: "Установка оригинальных или качественных аналоговых линз с полной настройкой светового потока"
    },
    {
      icon: "Shield",
      title: "Тюнинг автооптики",
      description: "Комплексная модернизация: от замены модулей до создания уникального дизайна оптики"
    }
  ];

  const portfolio = [
    {
      image: "https://cdn.poehali.dev/files/b960b2dc-f9b8-4ecc-90b4-da407347de6a.jpg",
      title: "Студия TOP LIGHT STUDIO",
      description: "Профессиональное оборудование и современный интерьер"
    },
    {
      image: "https://cdn.poehali.dev/files/70d2a746-95c3-4914-b5ed-de73ada7c816.jpg",
      title: "Диагностика фар",
      description: "Точная настройка светового потока на профессиональном оборудовании"
    },
    {
      image: "https://cdn.poehali.dev/files/af0da8e1-ab86-4efd-9726-ad2a3ffa536e.jpg",
      title: "Работа с Toyota",
      description: "Профессиональный подход к каждой детали"
    },
    {
      image: "https://cdn.poehali.dev/files/d9a04235-7e5c-4fc7-8cb8-bde26a4af79b.jpg",
      title: "Качественное освещение",
      description: "Специализированное помещение для работы с оптикой"
    },
    {
      image: "https://cdn.poehali.dev/files/1a856f96-a197-4c14-b891-bb49a8937939.jpg",
      title: "Subaru Legacy",
      description: "Результат профессиональной работы"
    },
    {
      image: "https://cdn.poehali.dev/files/0e66fe61-f419-4e2e-b960-0b3bbf5eb988.jpg",
      title: "Детальная работа",
      description: "Восстановление прозрачности и блеска фар"
    }
  ];

  const prices = [
    { service: "Реставрация фар (пара)", price: "от 3 000 ₽" },
    { service: "Ретрофит LED-модулями", price: "от 15 000 ₽" },
    { service: "Устранение запотевания (одна фара)", price: "от 2 500 ₽" },
    { service: "Антихром декоративных деталей", price: "от 2 000 ₽" },
    { service: "Замена линз (пара)", price: "от 8 000 ₽" },
    { service: "Комплексная модернизация оптики", price: "от 20 000 ₽" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Icon name="Lightbulb" className="text-primary" size={28} />
            <span className="text-xl font-extrabold">Top Light Studio</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
            <a href="#prices" className="text-sm font-medium hover:text-primary transition-colors">Прайс</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-r from-black via-black/90 to-primary py-20 md:py-32">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ремонт и тюнинг автооптики
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Более 7 лет опыта в реставрации и модернизации фар. Работаем с автомобилями от 2000 года выпуска. Качество, надежность и гарантия на все услуги.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на ремонт
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Бесплатная консультация
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      <section id="services" className="py-16 md:py-24">
        <div className="container px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Специализируемся исключительно на автосвете. Используем только качественные материалы известных брендов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-16 md:py-24 bg-secondary/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Примеры выполненных работ — результат, который говорит сам за себя
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="prices" className="py-16 md:py-24">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Прайс-лист</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Прозрачные цены без скрытых доплат
            </p>
          </div>
          <Card className="max-w-3xl mx-auto border-2">
            <CardContent className="p-0">
              <div className="divide-y">
                {prices.map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-6 hover:bg-secondary/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <Icon name="CheckCircle" className="text-primary" size={20} />
                      <span className="font-medium">{item.service}</span>
                    </div>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <p className="text-center text-muted-foreground mt-6">
            *Точная стоимость определяется после осмотра автомобиля
          </p>
        </div>
      </section>

      <section id="contacts" className="py-16 md:py-24 bg-secondary/50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Свяжитесь с нами</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Оставьте заявку и получите бесплатную консультацию
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input 
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Сообщение</label>
                    <Textarea 
                      placeholder="Опишите вашу проблему..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={18} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Новосибирск, ул. Волочаевская, д. 49 к1</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (923) 700-04-63</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Вс: 9:00 - 21:00</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-8">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Lightbulb" className="text-primary" size={24} />
              <span className="font-bold">Ремонт Фар</span>
            </div>
            <p className="text-sm text-gray-400">© 2024 Все права защищены</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;