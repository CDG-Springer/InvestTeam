'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { BarChart2, Globe, Shield, Users, DollarSign, TrendingUp } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function InvestmentTeamLandingPageComponent() {
  const [isNavbarSolid, setIsNavbarSolid] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const updateNavbar = () => {
      if (window.scrollY > 50) {
        setIsNavbarSolid(true)
      } else {
        setIsNavbarSolid(false)
      }
    }

    window.addEventListener('scroll', updateNavbar)
    return () => window.removeEventListener('scroll', updateNavbar)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${isNavbarSolid ? 'bg-white shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-1xl font-bold text-emerald-700 sm:text-1xl">InvestTeam</a>
          <div className="space-x-4 sm:space-x2">
            <a href="#about" className="text-emerald-700 font-bold transition-colors">Sobre</a>
            <a href="#services" className="text-emerald-700 font-bold transition-colors">Serviços</a>
            <a href="#team" className="text-emerald-700 font-bold transition-colors">Time</a>
            <a href="#contact" className="text-emerald-700 font-bold transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://img.freepik.com/fotos-gratis/conceito-de-negocio-com-holografia-grafica_23-2149160929.jpg?t=st=1730686380~exp=1730689980~hmac=54c3317f8b5fe1bbedc50915920abfef4249f76ddf81332895ed6e7d7f282974&w=900" alt="Investment Background" className="object-cover w-full h-full" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-6xl font-bold mb-4">Aumente sua renda com nossos serviços de investimento</h1>
          <p className="text-2xl mb-8">Soluções de investimento personalizadas para alcançar seus objetivos financeiros únicos.</p>
          <div className="space-x-4">
            <Button variant="outline" className="bg-white text-emerald-700 hover:bg-gray-100">
              Our Services
            </Button>
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Start Investing
            </Button>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center text-emerald-700">Sobre o InvestTeam</h2>
          <p className="text-xl text-center max-w-3xl mx-auto text-gray-600">
            InvesTeam é um negócio de investimentos líder com mais de 20 anos de experiência no mercado financeiro. Nosso time de analistas e consultores está comprometido em ajudar você atingir seus objetivos financeiros através de investimentos estratégicos e gestão de portfólio personalizada.
          </p>
        </div>
      </motion.section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-emerald-700">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <BarChart2 className="h-10 w-10 text-emerald-600" />, title: "Gestão de portfólio", description: "Estratégias de investimento personalizadas para atender às suas objetivos financeiros únicos." },
              { icon: <Globe className="h-10 w-10 text-emerald-600" />, title: "Investimentos globais", description: "Acesso a mercados internacionais e oportunidades diversas." },
              { icon: <Shield className="h-10 w-10 text-emerald-600" />, title: "Gerenciamento de riscos", description: "Técnicas avançadas para proteger e crescer seus investimentos." },
              { icon: <Users className="h-10 w-10 text-emerald-600" />, title: "Planejamento de retirada", description: "Seguro para sua futura com soluções de planejamento de retirada avançadas." },
              { icon: <DollarSign className="h-10 w-10 text-emerald-600" />, title: "Otimização de impostos", description: "Maximizar seus resultados com estratégias de otimização de impostos avançadas." },
              { icon: <TrendingUp className="h-10 w-10 text-emerald-600" />, title: "Análise de mercado", description: "Mantenha-se à frente com nossas pesquisas e insights em profundidade." },
            ].map((service, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 p-6"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-emerald-700">Nosso Time de Experiência</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: "Ana Souza", 
                role: "Diretora de Investimentos", 
                image: "https://www.machadomeyer.com.br/images/advogados/AKS2_Ana_Karina_Ede_Souza.jpg" 
              },
              { 
                name: "Carlos Pereira", 
                role: "Consultor Financeiro Sênior", 
                image: "https://ogimg.infoglobo.com.br/in/24741327-293-bc1/FT631A/90462548_SAO-PAULO-SP-30092014-CARLOS-PEREIRAEntrevista-com-o-cientista-politico-Carlos-Pereira-p.jpg" 
              },
              { 
                name: "Mariana Oliveira",
                role: "Especialista em Gestão de Riscos", 
                image: "https://assets.propmark.com.br/uploads/2020/05/pinterest-Mariana-Sensini.jpg" 
              },              
            ].map((member, index) => (
              <motion.div 
                key={index}
                className="bg-gray-100 rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-emerald-700">Clientes em destaque</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { quote: "InvestTeam transformou o meu futuro financeiro. A sua orientação e abordagem personalizadas me deu paz de coração e excelentes resultados.", client: "Sarah J., Empreendedor" },
              { quote: "Trabalhei com InvestTeam há mais de um século, e eles consistentemente entregam resultados excepcionais. Suas estratégias de investimento globais diversificou meu portfólio além de minhas expectativas.", client: "Michael R., Executivo Retido" },
              { quote: "O time de InvestTeam se destaca acima e além. Suas estratégias de otimização de impostos me ajudaram a gastar milhares enquanto maximizar minha crescente de investimentos.", client: "Lisa T., Proprietário de Negócios" },
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-emerald-600">{testimonial.client}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center text-emerald-700">Entre em Contato</h2>
          <form className="max-w-lg mx-auto">
            <div className="mb-6">
              <Input type="text" placeholder="Seu Nome" className="w-full" />
            </div>
            <div className="mb-6">
              <Input type="email" placeholder="Seu Email" className="w-full" />
            </div>
            <div className="mb-6">
              <Textarea placeholder="Sua Mensagem" className="w-full" rows={4} />
            </div>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 InvestTeam. Todos os direitos reservados.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-emerald-400 transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Termos de Serviço</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Contate-nos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}