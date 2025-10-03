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
      image: "https://cdn.poehali.dev/files/072d8e0a-0ac9-47fd-bee1-c5649b1bc338.JPG",
      title: "Студия TOP LIGHT STUDIO",
      description: "Профессиональное оборудование и современный интерьер"
    },
    {
      image: "https://cdn.poehali.dev/files/e3585f83-4873-4491-b143-c95707b2af03.JPG",
      title: "Subaru Legacy",
      description: "Профессиональная студия с современным оборудованием"
    },
    {
      image: "https://cdn.poehali.dev/files/2eeaa30d-7779-4df5-b735-80ea30d625da.JPG",
      title: "Диагностика фар",
      description: "Точная настройка светового потока на профессиональном оборудовании"
    },
    {
      image: "https://cdn.poehali.dev/files/7136f84d-aeeb-4193-a528-90faf35f54c8.JPG",
      title: "Детализация процесса",
      description: "Крупный план процесса восстановления оптики"
    },
    {
      image: "https://cdn.poehali.dev/files/9d674785-3bd4-4af2-a19e-3401165fa9d6.JPG",
      title: "Subaru в работе",
      description: "Комплексная диагностика и восстановление"
    },
    {
      image: "https://cdn.poehali.dev/files/b6e851c7-410e-4978-9a7d-bb82ee193c63.JPG",
      title: "Сравнение до/после",
      description: "Фары до и после реставрации - видимый результат"
    },
    {
      image: "https://cdn.poehali.dev/files/e1b38b31-e531-4e8c-bf04-54c2daa41909.JPG",
      title: "Детали оптики",
      description: "Работа с внутренними компонентами фары"
    },
    {
      image: "https://cdn.poehali.dev/files/c60be40a-30f4-4009-bb23-1532339396b0.JPG",
      title: "Измерительное оборудование",
      description: "Профессиональная диагностика светового пучка"
    },
    {
      image: "https://cdn.poehali.dev/files/aa6eca3c-3f97-47d2-b726-3c3450b0c6cb.JPG",
      title: "Студия изнутри",
      description: "Современное рабочее пространство"
    },
    {
      image: "https://cdn.poehali.dev/files/41f5430a-c191-4c4c-88f6-391a996a701b.JPG",
      title: "Toyota в работе",
      description: "Профессиональный подход к каждому авто"
    },
    {
      image: "https://cdn.poehali.dev/files/eff6328a-f033-4f40-b206-61501fd0c108.JPG",
      title: "Детальный вид фары",
      description: "Крупный план восстановленной оптики"
    },
    {
      image: "https://cdn.poehali.dev/files/2f421669-0166-49b6-affb-d884e096a3e0.JPG",
      title: "Toyota 4Runner",
      description: "Результат профессиональной работы"
    },
    {
      image: "https://cdn.poehali.dev/files/0de87865-614e-4bc4-b096-2588e89c1fb4.JPG",
      title: "Criline D8 модули",
      description: "Современные LED-модули для ретрофита"
    },
    {
      image: "https://cdn.poehali.dev/files/99bcf066-f3ce-490d-ab13-93dc2d605322.JPG",
      title: "Детали для покраски",
      description: "Подготовка элементов к антихромированию"
    },
    {
      image: "https://cdn.poehali.dev/files/82e0485e-4c83-42d6-8909-59e29d30cd79.JPG",
      title: "Разобранная фара",
      description: "Этапы разборки для глубокой реставрации"
    },
    {
      image: "https://cdn.poehali.dev/files/a1f77aae-2853-425c-8854-5cfc897411d5.JPG",
      title: "Toyota Corolla",
      description: "Восстановление прозрачности фар"
    },
    {
      image: "https://cdn.poehali.dev/files/ed2e2ba0-c56d-4d85-9335-c39466bfcfa4.JPG",
      title: "Результат работы",
      description: "Идеальный блеск восстановленной оптики"
    },
    {
      image: "https://cdn.poehali.dev/files/7997aa80-e168-4821-a8ec-b114c761c973.JPG",
      title: "Внутренние компоненты",
      description: "Детальная работа с модулями фары"
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

      <section className="py-16 md:py-24 bg-black text-white">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наша работа в видео</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Смотрите процесс восстановления фар — от разборки до результата
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="aspect-video rounded-lg overflow-hidden bg-zinc-900">
              <iframe 
                src="https://vk.com/video_ext.php?oid=-232516806&id=456239017&hash=c8f1ae4bc66ef9de" 
                width="100%" 
                height="100%" 
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" 
                frameBorder="0" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden bg-zinc-900">
              <iframe 
                src="https://vk.com/video_ext.php?oid=-232516806&id=456239018&hash=7ebd37f3c4b6d8a3" 
                width="100%" 
                height="100%" 
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" 
                frameBorder="0" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden bg-zinc-900">
              <iframe 
                src="https://vk.com/video_ext.php?oid=-232516806&id=456239019&hash=a2f5e8d9b3c7f6a1" 
                width="100%" 
                height="100%" 
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" 
                frameBorder="0" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden bg-zinc-900">
              <iframe 
                src="https://vk.com/video_ext.php?oid=-232516806&id=456239020&hash=d4c9a7e2b5f8d3a6" 
                width="100%" 
                height="100%" 
                allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;" 
                frameBorder="0" 
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
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