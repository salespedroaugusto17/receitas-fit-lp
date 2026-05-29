import { useState, useEffect, useRef } from 'react'

/* ===== Scroll Animation Hook ===== */
function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.animate-on-scroll')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

/* ===== HERO SECTION ===== */
function HeroSection() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__content">
            <div className="hero__badge">
              ✨ Método exclusivo para mulheres
            </div>
            <h1 className="hero__title">
              Desinche, Controle a Vontade de Doces e{' '}
              <span className="highlight">Sinta Seu Corpo Mais Leve</span> 💖
            </h1>
            <p className="hero__subtitle">
              Receitas doces fit + cardápio anti-inchaço pensados para mulheres 
              que querem reduzir o inchaço sem abrir mão do sabor.
            </p>
            <div className="hero__cta-group">
              <a href="#oferta" className="cta-button cta-button--pulse">
                QUERO COMEÇAR AGORA
                <span className="arrow">→</span>
              </a>
              <div className="hero__trust">
                <div className="hero__trust-icons">
                  <span className="hero__trust-icon"></span>
                  <span className="hero__trust-icon"></span>
                  <span className="hero__trust-icon"></span>
                </div>
                Acesso imediato · PDF digital · Garantia total
              </div>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__image-wrapper">
              <div className="hero__image-glow"></div>
              <img 
                src="/hero-mockup.png" 
                alt="Ebook Receitas Doces Fit + Cardápio Anti-Inchaço"
                className="hero__image"
              />
              <div className="hero__float-badge hero__float-badge--top">
                <span className="emoji">🍓</span>
                <span>Receitas Premium</span>
              </div>
              <div className="hero__float-badge hero__float-badge--bottom">
                <span className="emoji">💖</span>
                <span>Menos Inchaço</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== PAIN POINTS ===== */
function PainSection() {
  const pains = [
    {
      icon: '😔',
      title: 'Barriga inchada o dia todo',
      text: 'Aquela sensação de estufamento que não passa, que faz você se sentir desconfortável com qualquer roupa.',
    },
    {
      icon: '💧',
      title: 'Retenção líquida',
      text: 'O corpo pesado, as pernas inchadas, a sensação de que nada está funcionando mesmo quando você se esforça.',
    },
    {
      icon: '🍫',
      title: 'Compulsão por doces',
      text: 'A vontade incontrolável que aparece depois do almoço ou à noite — e a culpa que vem logo depois.',
    },
    {
      icon: '😞',
      title: 'Sensação de peso constante',
      text: 'Acordar já se sentindo pesada, sem disposição, sem vontade de se olhar no espelho.',
    },
    {
      icon: '👗',
      title: 'Roupas apertadas',
      text: 'Evitar aquela calça jeans, aquele vestido, porque o inchaço faz tudo parecer desconfortável.',
    },
    {
      icon: '💔',
      title: 'Autoestima abalada',
      text: 'Quando o corpo não responde ao esforço, a motivação cai e a autoestima vai junto.',
    },
  ]

  return (
    <section className="section pain-section" id="dores">
      <div className="container">
        <div className="text-center">
          <span className="section-label animate-on-scroll">💭 Você se identifica?</span>
          <h2 className="section-title animate-on-scroll">
            Se você vive assim, <em>não está sozinha</em>
          </h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            Milhares de mulheres enfrentam esses desafios todos os dias. A boa notícia é que existe um caminho mais leve.
          </p>
        </div>
        <div className="pain__grid stagger-children">
          {pains.map((pain, i) => (
            <div key={i} className="pain__card animate-on-scroll">
              <div className="pain__icon">{pain.icon}</div>
              <h3 className="pain__card-title">{pain.title}</h3>
              <p className="pain__card-text">{pain.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== WHAT YOU GET ===== */
function WhatsInsideSection() {
  const items = [
    {
      title: 'Receitas Doces Fit',
      desc: 'Sobremesas deliciosas e saudáveis para matar a vontade de doce sem culpa.',
    },
    {
      title: 'Cardápio Anti-Inchaço',
      desc: 'Plano alimentar estratégico para reduzir inchaço e retenção líquida.',
    },
    {
      title: 'Hábitos Premium',
      desc: 'Rotina de autocuidado com dicas de hidratação, sono e constância.',
    },
    {
      title: 'Hidratação Inteligente',
      desc: 'Como usar a água a seu favor para desinchar e acelerar resultados.',
    },
    {
      title: 'Sobremesas Low Calorie',
      desc: 'Receitas com poucas calorias que satisfazem sem pesar na balança.',
    },
    {
      title: 'Receitas Rápidas',
      desc: 'Todas as receitas são práticas, com poucos ingredientes e preparo simples.',
    },
  ]

  return (
    <section className="section whats-inside" id="conteudo">
      <div className="container">
        <div className="text-center">
          <span className="section-label animate-on-scroll">📖 O que você vai encontrar</span>
          <h2 className="section-title animate-on-scroll">
            Tudo pensado para <em>sua rotina</em>
          </h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            Um guia completo que combina sabor, saúde e praticidade para transformar sua relação com a alimentação.
          </p>
        </div>
        <div className="whats__grid stagger-children">
          {items.map((item, i) => (
            <div key={i} className="whats__item animate-on-scroll">
              <div className="whats__check">✓</div>
              <div>
                <div className="whats__item-title">{item.title}</div>
                <div className="whats__item-desc">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== RECIPES SHOWCASE ===== */
function RecipesSection() {
  const recipes = [
    { emoji: '🍫', name: 'Mousse Fit de Chocolate', meta: 'Cremoso · Low calorie · 10 min' },
    { emoji: '🍓', name: 'Gelatina Cremosa de Morango', meta: 'Refrescante · Proteica · 5 min' },
    { emoji: '🥤', name: 'Mousse Proteica', meta: 'Saciedade · Leve · 8 min' },
    { emoji: '🍌', name: 'Banana Assada com Canela', meta: 'Reconfortante · Simples · 15 min' },
    { emoji: '🍪', name: 'Trufas de Cacau', meta: 'Indulgente · Saudável · 12 min' },
    { emoji: '🍰', name: 'Doce Low Calorie', meta: 'Sem culpa · Fit · 10 min' },
  ]

  return (
    <section className="section recipes" id="receitas">
      <div className="container">
        <div className="text-center">
          <span className="section-label animate-on-scroll">🍰 Receitas Premium</span>
          <h2 className="section-title animate-on-scroll">
            Doces que <em>cuidam de você</em>
          </h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            Cada receita foi pensada para ser deliciosa, prática e aliada do seu objetivo de desinchar.
          </p>
        </div>
        <div className="recipes__showcase">
          <div className="recipes__image-wrapper animate-on-scroll">
            <img 
              src="/recipes-showcase.png" 
              alt="Receitas doces fit"
              className="recipes__image"
            />
          </div>
          <div className="recipes__list stagger-children">
            {recipes.map((recipe, i) => (
              <div key={i} className="recipe__card animate-on-scroll">
                <span className="recipe__emoji">{recipe.emoji}</span>
                <div className="recipe__info">
                  <div className="recipe__name">{recipe.name}</div>
                  <div className="recipe__meta">{recipe.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== BENEFITS ===== */
function BenefitsSection() {
  const benefits = [
    { icon: '🪶', title: 'Sensação de Leveza', text: 'Sinta seu corpo mais leve já nos primeiros dias seguindo o cardápio.' },
    { icon: '✨', title: 'Menos Inchaço', text: 'Reduza o inchaço abdominal com alimentos estratégicos e hidratação.' },
    { icon: '💧', title: 'Menos Retenção', text: 'Diga adeus à retenção líquida com hábitos simples e eficazes.' },
    { icon: '🍬', title: 'Menos Compulsão', text: 'As receitas fit satisfazem a vontade de doce sem gerar mais compulsão.' },
    { icon: '💆‍♀️', title: 'Mais Bem-Estar', text: 'Quando o corpo desincha, a disposição e a energia voltam naturalmente.' },
    { icon: '💖', title: 'Mais Autoestima', text: 'Sentir-se bem no próprio corpo transforma seu dia a dia e sua confiança.' },
  ]

  return (
    <section className="section benefits" id="beneficios">
      <div className="container">
        <div className="text-center">
          <span className="section-label animate-on-scroll">💎 Benefícios reais</span>
          <h2 className="section-title animate-on-scroll">
            O que muda quando você <em>desincha</em>
          </h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            Pequenas mudanças, grandes resultados. Sinta a diferença no seu corpo e na sua rotina.
          </p>
        </div>
        <div className="benefits__grid stagger-children">
          {benefits.map((b, i) => (
            <div key={i} className="benefit__card animate-on-scroll">
              <div className="benefit__icon">{b.icon}</div>
              <h3 className="benefit__title">{b.title}</h3>
              <p className="benefit__text">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== MEAL PLAN ===== */
function MealPlanSection() {
  const meals = [
    {
      icon: '🌅',
      label: 'Manhã',
      desc: 'Chá de gengibre com limão, omelete leve com espinafre, frutas frescas com sementes de chia.',
    },
    {
      icon: '☀️',
      label: 'Almoço',
      desc: 'Proteína magra grelhada, salada verde com pepino e hortelã, arroz integral e legumes no vapor.',
    },
    {
      icon: '🍵',
      label: 'Lanche',
      desc: 'Gelatina cremosa de morango, chá anti-inchaço, frutas com canela e mel de abelha.',
    },
    {
      icon: '🌙',
      label: 'Jantar',
      desc: 'Sopa leve de legumes, proteína magra, salada com azeite de oliva e ervas frescas.',
    },
  ]

  return (
    <section className="section meal-plan" id="cardapio">
      <div className="container">
        <div className="text-center">
          <span className="section-label animate-on-scroll">🗓️ Cardápio Anti-Inchaço</span>
          <h2 className="section-title animate-on-scroll">
            Seu dia <em>pensado para desinchar</em>
          </h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            Um cardápio estratégico que combina alimentos anti-inflamatórios para reduzir o inchaço desde a manhã.
          </p>
        </div>
        <div className="meal-plan__wrapper">
          <div className="meal-plan__image animate-on-scroll">
            <img 
              src="/meal-plan.png" 
              alt="Cardápio anti-inchaço" 
            />
          </div>
          <div className="meal-plan__timeline stagger-children">
            {meals.map((meal, i) => (
              <div key={i} className="meal__slot animate-on-scroll">
                <div className="meal__time-icon">{meal.icon}</div>
                <div className="meal__details">
                  <div className="meal__time-label">{meal.label}</div>
                  <div className="meal__description">{meal.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== HABITS ===== */
function HabitsSection() {
  const habits = [
    {
      emoji: '💧',
      title: 'Hidratação Inteligente',
      text: 'Beba pelo menos 2L de água por dia com limão e gengibre.',
    },
    {
      emoji: '😴',
      title: 'Sono Reparador',
      text: 'Durma de 7 a 8 horas para o corpo se regenerar e desinchar.',
    },
    {
      emoji: '📅',
      title: 'Constância',
      text: 'Pequenas ações repetidas todo dia trazem os maiores resultados.',
    },
    {
      emoji: '🌸',
      title: 'Autocuidado Diário',
      text: 'Reserve um tempo para você. Seu corpo e mente agradecem.',
    },
  ]

  return (
    <section className="section habits" id="habitos">
      <div className="container">
        <div className="text-center">
          <span className="section-label animate-on-scroll">🌿 Hábitos Premium</span>
          <h2 className="section-title animate-on-scroll">
            A rotina que <em>transforma</em>
          </h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            Além das receitas, estes hábitos premium potencializam seus resultados e elevam seu bem-estar.
          </p>
        </div>
        <div className="habits__grid stagger-children">
          {habits.map((h, i) => (
            <div key={i} className="habit__card animate-on-scroll">
              <span className="habit__emoji">{h.emoji}</span>
              <h3 className="habit__title">{h.title}</h3>
              <p className="habit__text">{h.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== SOCIAL PROOF ===== */
function SocialProofSection() {
  const testimonials = [
    {
      text: 'Em poucos dias já me senti muito menos inchada. O cardápio é super fácil de seguir e as receitas são deliciosas! 💖',
      name: 'Camila R.',
      info: 'Sentiu diferença em 5 dias',
      initials: 'CR',
    },
    {
      text: 'As sobremesas mataram minha vontade de doce sem culpa nenhuma. A mousse de chocolate é divina, parece doce de verdade!',
      name: 'Juliana M.',
      info: 'Perdeu a compulsão por doces',
      initials: 'JM',
    },
    {
      text: 'Minha barriga desincho muito depois que comecei a seguir o cardápio. Estou mais leve, mais disposta e me sentindo linda! ✨',
      name: 'Ana Paula S.',
      info: 'Reduziu inchaço abdominal',
      initials: 'AS',
    },
    {
      text: 'Eu achava que nunca ia conseguir parar de comer doces ruins. Essas receitas são tão gostosas que nem sinto falta!',
      name: 'Fernanda L.',
      info: 'Trocou doces industrializados',
      initials: 'FL',
    },
    {
      text: 'O melhor investimento que fiz em mim mesma. Por R$14,90 recebi um material que vale muito mais. Recomendo demais!',
      name: 'Beatriz C.',
      info: 'Começou há 2 semanas',
      initials: 'BC',
    },
    {
      text: 'Minha retenção líquida diminuiu muito. Acordo mais leve, as roupas estão mais confortáveis. Estou amando cada dia! 💕',
      name: 'Mariana T.',
      info: 'Menos retenção em 7 dias',
      initials: 'MT',
    },
  ]

  return (
    <section className="section social-proof" id="depoimentos">
      <div className="container">
        <div className="text-center">
          <span className="section-label animate-on-scroll">💬 Depoimentos reais</span>
          <h2 className="section-title animate-on-scroll">
            Mulheres que já <em>transformaram</em> sua rotina
          </h2>
          <p className="section-subtitle mx-auto animate-on-scroll">
            Veja o que elas estão dizendo sobre a experiência com o ebook.
          </p>
        </div>
        <div className="testimonials__grid stagger-children">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial__card animate-on-scroll">
              <div className="testimonial__stars">★★★★★</div>
              <div className="testimonial__quote">"</div>
              <p className="testimonial__text">{t.text}</p>
              <div className="testimonial__author">
                <div className="testimonial__avatar">{t.initials}</div>
                <div>
                  <div className="testimonial__name">{t.name}</div>
                  <div className="testimonial__info">{t.info}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== OFFER ===== */
function OfferSection() {
  const features = [
    { icon: '⚡', text: 'Acesso imediato' },
    { icon: '📱', text: 'Compatível com celular' },
    { icon: '📄', text: 'PDF digital' },
    { icon: '🍰', text: 'Receitas práticas' },
    { icon: '🔒', text: 'Compra 100% segura' },
  ]

  return (
    <section className="section offer" id="oferta">
      <div className="container">
        <div className="offer__box animate-on-scroll">
          <div className="offer__badge">Oferta especial</div>
          <h2 className="offer__product-name">
            Receitas Doces Fit + Cardápio Anti-Inchaço 💖
          </h2>
          <div className="offer__features">
            {features.map((f, i) => (
              <div key={i} className="offer__feature">
                <span className="offer__feature-icon">{f.icon}</span>
                {f.text}
              </div>
            ))}
          </div>
          <div className="offer__price-wrapper">
            <div className="offer__price-from">De R$ 47,00</div>
            <div className="offer__price">
              <span className="offer__price-currency">R$</span>
              14
              <span className="offer__price-cents">,90</span>
            </div>
          </div>
          <a href="#" className="cta-button cta-button--pulse">
            QUERO ME SENTIR MAIS LEVE
            <span className="arrow">→</span>
          </a>
          <div className="offer__guarantee">
            <span className="offer__guarantee-icon">🛡️</span>
            Satisfação garantida · Acesso vitalício
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== FAQ ===== */
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      q: 'Como recebo o ebook?',
      a: 'Após a confirmação do pagamento, você recebe o link de acesso diretamente no seu e-mail. O acesso é imediato, em formato PDF.',
    },
    {
      q: 'Funciona no celular?',
      a: 'Sim! O ebook é em formato PDF, compatível com qualquer dispositivo — celular, tablet ou computador.',
    },
    {
      q: 'Quanto tempo tenho acesso?',
      a: 'O acesso é vitalício! Uma vez que você baixa o PDF, ele é seu para sempre. Pode consultar quando quiser.',
    },
    {
      q: 'Preciso fazer dieta restritiva?',
      a: 'Não! O cardápio anti-inchaço é baseado em uma alimentação equilibrada e saudável, sem restrições extremas. É sobre escolhas inteligentes.',
    },
    {
      q: 'As receitas são difíceis de fazer?',
      a: 'De jeito nenhum! Todas as receitas são práticas, com poucos ingredientes e preparo rápido. Perfeitas para o dia a dia corrido.',
    },
  ]

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="text-center">
          <span className="section-label animate-on-scroll">❓ Dúvidas Frequentes</span>
          <h2 className="section-title animate-on-scroll">
            Tudo o que você precisa <em>saber</em>
          </h2>
        </div>
        <div className="faq__list">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className={`faq__item animate-on-scroll ${openIndex === i ? 'faq__item--open' : ''}`}
            >
              <button 
                className="faq__question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                id={`faq-question-${i}`}
              >
                {faq.q}
                <span className="faq__icon">+</span>
              </button>
              <div className="faq__answer" role="region" aria-labelledby={`faq-question-${i}`}>
                <div className="faq__answer-inner">{faq.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ===== FINAL CTA ===== */
function FinalCTASection() {
  return (
    <section className="section final-cta" id="final-cta">
      <div className="container">
        <div className="final-cta__content">
          <span className="section-label animate-on-scroll">💖 Comece hoje</span>
          <h2 className="final-cta__title animate-on-scroll">
            Seu corpo responde melhor quando você cria <em>constância</em> 💖
          </h2>
          <p className="final-cta__subtitle animate-on-scroll">
            O primeiro passo é sempre o mais importante. Faça por você.
          </p>
          <div className="animate-on-scroll">
            <a href="#oferta" className="cta-button cta-button--pulse">
              COMEÇAR AGORA
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ===== FOOTER ===== */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__text">
          © {new Date().getFullYear()} Receitas Doces Fit. Todos os direitos reservados.
          <br />
          Este produto não substitui orientação médica ou nutricional profissional.
        </p>
      </div>
    </footer>
  )
}

/* ===== APP ===== */
export default function App() {
  useScrollAnimation()

  return (
    <>
      <HeroSection />
      <PainSection />
      <WhatsInsideSection />
      <RecipesSection />
      <BenefitsSection />
      <MealPlanSection />
      <HabitsSection />
      <SocialProofSection />
      <OfferSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </>
  )
}
