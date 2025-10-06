"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { 
  DollarSign, 
  TrendingUp, 
  Target, 
  Heart, 
  Brain, 
  Zap, 
  Wallet,
  CreditCard,
  Download,
  Lock,
  CheckCircle,
  Star,
  ArrowRight,
  Shield,
  Activity
} from 'lucide-react'
import Link from 'next/link'

interface Theme {
  id: string
  title: string
  description: string
  icon: any
  price: number
  isPurchased: boolean
  color: string
  examples: string[]
  route: string
  content: {
    strategies: string[]
    tools: string[]
    earnings: string
  }
}

export default function DigitalProductsApp() {
  const [balance, setBalance] = useState(0)
  const [themes, setThemes] = useState<Theme[]>([
    {
      id: 'money-online',
      title: 'Ganhar Dinheiro Online',
      description: 'Métodos comprovados para gerar renda na internet',
      icon: DollarSign,
      price: 20,
      isPurchased: false,
      color: 'from-green-500 to-emerald-600',
      examples: ['Afiliados', 'Dropshipping', 'PLR'],
      route: '/temas/ganhar-dinheiro',
      content: {
        strategies: [
          'Marketing de Afiliados: Como escolher produtos lucrativos',
          'Dropshipping: Montando sua loja sem estoque',
          'PLR: Vendendo produtos com direitos de revenda',
          'Infoprodutos: Criando cursos digitais',
          'E-commerce: Estratégias de conversão'
        ],
        tools: ['Hotmart', 'Monetizze', 'Shopify', 'WordPress', 'Canva'],
        earnings: 'R$ 2.000 - R$ 50.000/mês'
      }
    },
    {
      id: 'investments',
      title: 'Investimentos e Trading',
      description: 'Estratégias para multiplicar seu dinheiro',
      icon: TrendingUp,
      price: 20,
      isPurchased: false,
      color: 'from-blue-500 to-cyan-600',
      examples: ['Day Trade', 'Criptomoedas', 'Renda Passiva'],
      route: '/temas/investimentos',
      content: {
        strategies: [
          'Day Trade: Técnicas de análise técnica',
          'Swing Trade: Operações de médio prazo',
          'Criptomoedas: Como investir com segurança',
          'Renda Fixa: Construindo patrimônio',
          'Fundos Imobiliários: Renda passiva mensal'
        ],
        tools: ['MetaTrader', 'TradingView', 'Binance', 'Clear', 'XP Investimentos'],
        earnings: 'R$ 1.000 - R$ 100.000/mês'
      }
    },
    {
      id: 'marketing',
      title: 'Marketing Digital',
      description: 'Domine o tráfego pago e orgânico',
      icon: Target,
      price: 20,
      isPurchased: false,
      color: 'from-purple-500 to-pink-600',
      examples: ['Anúncios', 'Social Media', 'SEO'],
      route: '/temas/marketing',
      content: {
        strategies: [
          'Facebook Ads: Campanhas que convertem',
          'Google Ads: Dominando o tráfego pago',
          'SEO: Rankeando no Google organicamente',
          'Social Media: Crescendo nas redes sociais',
          'Email Marketing: Automações que vendem'
        ],
        tools: ['Facebook Business', 'Google Ads', 'SEMrush', 'Mailchimp', 'Hootsuite'],
        earnings: 'R$ 3.000 - R$ 80.000/mês'
      }
    },
    {
      id: 'fitness',
      title: 'Emagrecimento e Fitness',
      description: 'Transforme vidas e lucre com saúde',
      icon: Heart,
      price: 20,
      isPurchased: false,
      color: 'from-red-500 to-orange-600',
      examples: ['Dietas', 'Receitas Fitness', 'Treinos'],
      route: '/temas/fitness',
      content: {
        strategies: [
          'Consultoria Online: Atendimento personalizado',
          'Planos Alimentares: Criando dietas eficazes',
          'Treinos Caseiros: Programas sem equipamentos',
          'Receitas Fitness: E-books de receitas saudáveis',
          'Coaching Nutricional: Acompanhamento completo'
        ],
        tools: ['MyFitnessPal', 'Canva', 'Zoom', 'WhatsApp Business', 'Instagram'],
        earnings: 'R$ 2.500 - R$ 40.000/mês'
      }
    },
    {
      id: 'relationships',
      title: 'Relacionamento e Conquista',
      description: 'Ajude pessoas a encontrarem o amor',
      icon: Heart,
      price: 20,
      isPurchased: false,
      color: 'from-pink-500 to-rose-600',
      examples: ['Sedução', 'Reconquistar Ex', 'Casamento'],
      route: '/temas/relacionamentos',
      content: {
        strategies: [
          'Coaching de Relacionamentos: Consultoria 1:1',
          'Cursos de Sedução: Técnicas de conquista',
          'Terapia de Casal: Salvando relacionamentos',
          'E-books Românticos: Guias práticos',
          'Workshops Online: Eventos ao vivo'
        ],
        tools: ['Zoom', 'Hotmart', 'Instagram', 'YouTube', 'Canva'],
        earnings: 'R$ 2.000 - R$ 35.000/mês'
      }
    },
    {
      id: 'productivity',
      title: 'Produtividade e Desenvolvimento',
      description: 'Desenvolva uma mentalidade vencedora',
      icon: Brain,
      price: 20,
      isPurchased: false,
      color: 'from-indigo-500 to-purple-600',
      examples: ['Hábitos', 'Rotina', 'Mentalidade'],
      route: '/temas/produtividade',
      content: {
        strategies: [
          'Coaching de Vida: Transformação pessoal',
          'Cursos de Hábitos: Mudança comportamental',
          'Mentalidade Milionária: Mindset de sucesso',
          'Produtividade: Técnicas de alta performance',
          'Palestras Motivacionais: Eventos inspiradores'
        ],
        tools: ['Notion', 'Todoist', 'Zoom', 'Canva', 'YouTube'],
        earnings: 'R$ 3.000 - R$ 60.000/mês'
      }
    },
    {
      id: 'ai-automation',
      title: 'IA e Automação',
      description: 'Use inteligência artificial para escalar',
      icon: Zap,
      price: 20,
      isPurchased: false,
      color: 'from-yellow-500 to-orange-600',
      examples: ['IA para Negócios', 'Criação de Conteúdo', 'Automação'],
      route: '/temas/ia-automacao',
      content: {
        strategies: [
          'Automação de Vendas: Chatbots inteligentes',
          'Criação de Conteúdo: IA para posts e vídeos',
          'Análise de Dados: Insights automatizados',
          'Atendimento ao Cliente: Suporte 24/7',
          'Consultoria em IA: Implementação empresarial'
        ],
        tools: ['ChatGPT', 'Zapier', 'Make', 'Notion AI', 'Midjourney'],
        earnings: 'R$ 5.000 - R$ 120.000/mês'
      }
    }
  ])

  const purchaseTheme = (themeId: string) => {
    setThemes(prev => prev.map(theme => 
      theme.id === themeId 
        ? { ...theme, isPurchased: true }
        : theme
    ))
    setBalance(prev => prev + 20)
  }

  const withdrawBalance = () => {
    if (balance > 0) {
      alert(`Saque de €${balance} solicitado! O valor será transferido para sua conta bancária em até 2 dias úteis.`)
      setBalance(0)
    }
  }

  const purchasedCount = themes.filter(theme => theme.isPurchased).length
  const totalEarnings = purchasedCount * 20

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Digital Pro
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Produtos Digitais Lucrativos</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Card className="p-3">
                <div className="flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Saldo</p>
                    <p className="font-bold text-green-600">€{balance}</p>
                  </div>
                </div>
              </Card>
              
              <Button 
                onClick={withdrawBalance}
                disabled={balance === 0}
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                <Download className="w-4 h-4 mr-2" />
                Sacar
              </Button>

              <Link href="/admin">
                <Button variant="outline" size="sm">
                  <Shield className="w-4 h-4 mr-2" />
                  Admin
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{purchasedCount}/7</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Temas Desbloqueados</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">€{totalEarnings}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total Investido</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{Math.round((purchasedCount / 7) * 100)}%</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Progresso</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Progress value={(purchasedCount / 7) * 100} className="mb-8" />

        {/* Themes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => {
            const IconComponent = theme.icon
            
            return (
              <Card key={theme.id} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 bg-gradient-to-r ${theme.color} rounded-xl flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    
                    {theme.isPurchased ? (
                      <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Desbloqueado
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="flex items-center gap-1">
                        <Lock className="w-3 h-3" />
                        €{theme.price}
                      </Badge>
                    )}
                  </div>
                  
                  <CardTitle className="text-xl">{theme.title}</CardTitle>
                  <CardDescription>{theme.description}</CardDescription>
                  
                  <div className="flex flex-wrap gap-1 mt-2">
                    {theme.examples.map((example, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  {theme.isPurchased ? (
                    <div className="space-y-3">
                      <Link href={theme.route}>
                        <Button className={`w-full bg-gradient-to-r ${theme.color} hover:opacity-90`}>
                          Acessar Conteúdo
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                      
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full">
                            <Activity className="w-4 h-4 mr-2" />
                            Preview Rápido
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-3">
                              <div className={`w-10 h-10 bg-gradient-to-r ${theme.color} rounded-lg flex items-center justify-center`}>
                                <IconComponent className="w-5 h-5 text-white" />
                              </div>
                              {theme.title}
                            </DialogTitle>
                            <DialogDescription>
                              Conteúdo completo para dominar {theme.title.toLowerCase()}
                            </DialogDescription>
                          </DialogHeader>
                          
                          <Tabs defaultValue="strategies" className="mt-6">
                            <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="strategies">Estratégias</TabsTrigger>
                              <TabsTrigger value="tools">Ferramentas</TabsTrigger>
                              <TabsTrigger value="earnings">Potencial</TabsTrigger>
                            </TabsList>
                            
                            <TabsContent value="strategies" className="mt-6">
                              <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Estratégias Comprovadas</h3>
                                <div className="grid gap-3">
                                  {theme.content.strategies.map((strategy, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                      <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-xs font-bold text-blue-600">{index + 1}</span>
                                      </div>
                                      <p className="text-sm">{strategy}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="tools" className="mt-6">
                              <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Ferramentas Recomendadas</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                  {theme.content.tools.map((tool, index) => (
                                    <div key={index} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
                                      <p className="font-medium text-sm">{tool}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </TabsContent>
                            
                            <TabsContent value="earnings" className="mt-6">
                              <div className="space-y-4">
                                <h3 className="text-lg font-semibold">Potencial de Ganhos</h3>
                                <div className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 rounded-lg border border-green-200 dark:border-green-800">
                                  <div className="flex items-center gap-3">
                                    <DollarSign className="w-8 h-8 text-green-600" />
                                    <div>
                                      <p className="text-2xl font-bold text-green-600">{theme.content.earnings}</p>
                                      <p className="text-sm text-green-700 dark:text-green-400">Potencial mensal</p>
                                    </div>
                                  </div>
                                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                                    Baseado em dados de profissionais ativos no mercado. Resultados podem variar conforme dedicação e implementação das estratégias.
                                  </p>
                                </div>
                              </div>
                            </TabsContent>
                          </Tabs>
                        </DialogContent>
                      </Dialog>
                    </div>
                  ) : (
                    <Button 
                      onClick={() => purchaseTheme(theme.id)}
                      className="w-full"
                      variant="outline"
                    >
                      <CreditCard className="w-4 h-4 mr-2" />
                      Desbloquear por €{theme.price}
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Footer Info */}
        <Card className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/10 dark:to-purple-900/10 border-blue-200 dark:border-blue-800">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Como Funciona</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-600">1</span>
                </div>
                <p className="font-medium">Escolha um Tema</p>
                <p className="text-gray-600 dark:text-gray-400">Selecione o nicho que mais te interessa</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center">
                  <span className="font-bold text-purple-600">2</span>
                </div>
                <p className="font-medium">Pague €20</p>
                <p className="text-gray-600 dark:text-gray-400">Desbloqueie o conteúdo completo</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                  <span className="font-bold text-green-600">3</span>
                </div>
                <p className="font-medium">Saque os Ganhos</p>
                <p className="text-gray-600 dark:text-gray-400">O valor fica disponível para saque</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}