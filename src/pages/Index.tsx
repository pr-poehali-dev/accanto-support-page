import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'team', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Accanto</h1>
            <div className="hidden md:flex gap-8">
              {[
                { id: 'hero', label: 'Главная' },
                { id: 'about', label: 'О проекте' },
                { id: 'team', label: 'О нас' },
                { id: 'services', label: 'Услуги' },
                { id: 'contact', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block p-4 rounded-full bg-accent mb-4">
              <Icon name="Heart" size={48} className="text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Мы здесь, чтобы вас выслушать
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Accanto — это пространство без осуждения, где вы можете быть собой и получить поддержку
            </p>
            <div className="flex gap-4 justify-center pt-6">
              <Button 
                size="lg" 
                className="rounded-full text-lg px-8"
                onClick={() => scrollToSection('contact')}
              >
                Связаться с нами
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="rounded-full text-lg px-8"
                onClick={() => scrollToSection('about')}
              >
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 px-4 bg-accent/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О проекте Accanto</h2>
            <p className="text-lg text-muted-foreground">
              Место, где каждый может быть услышан
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name="Users" className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Наша миссия</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Помочь людям справиться с одиночеством через искреннее общение и поддержку. 
                  Мы создаём безопасное пространство для разговоров.
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" className="text-secondary" size={24} />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Наш подход</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы не психологи и не юристы — мы нейтральное общество, которое просто слушает. 
                  Без советов, без осуждения, только поддержка.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="team" className="py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Кто мы</h2>
            <p className="text-lg text-muted-foreground">
              Два человека, которые хотят делать мир чуточку теплее
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 mx-auto mb-6 flex items-center justify-center">
                <Icon name="User" size={64} className="text-primary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Елизавета</h3>
              <p className="text-muted-foreground mb-4">Со-основатель Accanto</p>
              <p className="text-muted-foreground leading-relaxed">
                Верит в силу человеческого общения и в то, что каждый заслуживает быть услышанным. 
                Создала этот проект, чтобы дарить людям тепло и понимание.
              </p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 mx-auto mb-6 flex items-center justify-center">
                <Icon name="User" size={64} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-semibold mb-2">Кирилл</h3>
              <p className="text-muted-foreground mb-4">Со-основатель Accanto</p>
              <p className="text-muted-foreground leading-relaxed">
                Понимает, как важно иметь того, кто выслушает без осуждения. 
                Стремится помочь людям почувствовать себя менее одинокими в этом мире.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 bg-accent/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Наши услуги</h2>
            <p className="text-lg text-muted-foreground">
              Мы предлагаем поддержку в разных форматах
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Card className="border-2 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Телефонные разговоры</h3>
                <p className="text-muted-foreground">
                  Личная беседа по телефону, где вы можете поделиться тем, что на душе
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:shadow-lg transition-all hover:-translate-y-1">
              <CardContent className="pt-6 text-center">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageSquare" className="text-secondary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Переписка</h3>
                <p className="text-muted-foreground">
                  Общение в удобном для вас темпе через мессенджеры или почту
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="mt-12 p-8 bg-card rounded-2xl border-2">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                <Icon name="Info" className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Важно знать</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Мы не заменяем профессиональную психологическую или медицинскую помощь. 
                  Наша цель — предоставить дружескую поддержку и безопасное пространство для общения. 
                  В случае серьёзных проблем мы рекомендуем обратиться к специалистам.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Мы всегда рады помочь и выслушать вас
            </p>
          </div>
          <Card className="border-2 shadow-lg">
            <CardContent className="pt-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:hello@accanto.ru" className="text-primary hover:underline">
                      hello@accanto.ru
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors">
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Телефон</h3>
                    <a href="tel:+79001234567" className="text-primary hover:underline">
                      +7 (900) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-accent/50 hover:bg-accent transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Telegram</h3>
                    <a href="https://t.me/accanto" className="text-primary hover:underline">
                      @accanto
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 p-6 bg-primary/5 rounded-xl text-center">
                <p className="text-muted-foreground">
                  Все обращения конфиденциальны. Мы отвечаем обычно в течение 24 часов.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 bg-muted/30 border-t border-border">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Heart" className="text-primary" size={24} />
            <h3 className="text-2xl font-bold">Accanto</h3>
          </div>
          <p className="text-muted-foreground mb-2">
            Мы рядом, когда вам это нужно
          </p>
          <p className="text-sm text-muted-foreground">
            © 2025 Accanto. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}