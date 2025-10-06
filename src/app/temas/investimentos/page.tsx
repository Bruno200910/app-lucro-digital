"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { 
  TrendingUp, 
  ArrowLeft, 
  PlayCircle, 
  FileText, 
  Download,
  CheckCircle,
  Star,
  DollarSign,
  Users,
  Target,
  BarChart3,
  PieChart
} from 'lucide-react'
import Link from 'next/link'

export default function InvestimentosPage() {
  const [completedLessons, setCompletedLessons] = useState<string[]>([])

  const modules = [
    {
      id: 'day-trade',
      title: 'Day Trade Profissional',
      description: 'Técnicas avançadas para operações intraday',
      lessons: [
        'Análise técnica fundamentada',
        'Gerenciamento de risco',
        'Psicologia do trader',
        'Setups de alta probabilidade',
        'Automação de estratégias'
      ],
      duration: '6h 15min',
      difficulty: 'Avançado'
    },
    {
      id: 'crypto',
      title: 'Criptomoedas e DeFi',
      description: 'Investimentos em ativos digitais',
      lessons: [
        'Fundamentos das criptomoedas',
        'Análise de projetos blockchain',
        'DeFi e yield farming',
        'NFTs e metaverso',
        'Segurança em carteiras digitais'
      ],
      duration: '4h 45min',
      difficulty: 'Intermediário'
    },
    {
      id: 'renda-passiva',
      title: 'Renda Passiva Inteligente',
      description: 'Construa patrimônio que gera renda',
      lessons: [
        'Fundos imobiliários (FIIs)',
        'Ações que pagam dividendos',
        'Renda fixa estratégica',
        'REITs internacionais',
        'Diversificação de portfólio'
      ],
      duration: '3h 30min',
      difficulty: 'Iniciante'
    },
    {
      id: 'swing-trade',
      title: 'Swing Trade Lucrativo',
      description: 'Operações de médio prazo',
      lessons: [
        'Identificação de tendências',
        'Pontos de entrada e saída',
        'Análise fundamentalista',
        'Gestão de posições',
        'Backtesting de estratégias'
      ],
      duration: '5h 00min',
      difficulty: 'Intermediário'
    }
  ]

  const tools = [
    { name: 'MetaTrader 5', category: 'Plataforma de Trading', price: 'Gratuito' },
    { name: 'TradingView', category: 'Análise Técnica', price: '$14.95/mês' },
    { name: 'Binance', category: 'Exchange Crypto', price: 'Gratuito' },
    { name: 'Clear Corretora', category: 'Corretora Nacional', price: 'Gratuito' },
    { name: 'Bloomberg Terminal', category: 'Dados Financeiros', price: '$2.000/mês' },
    { name: 'Python/Pandas', category: 'Análise Quantitativa', price: 'Gratuito' }
  ]

  const strategies = [
    {
      name: 'Scalping Automatizado',
      description: 'Operações de alta frequência com algoritmos',
      profitability: '15-25% ao mês',
      riskLevel: 'Alto',
      timeframe: '1-5 minutos'
    },
    {
      name: 'Swing Trade em Ações',
      description: 'Posições de 3-15 dias em blue chips',
      profitability: '8-15% ao mês',
      riskLevel: 'Médio',
      timeframe: '1-4 semanas'
    },
    {
      name: 'Buy and Hold Dividendos',
      description: 'Investimento de longo prazo em pagadoras',
      profitability: '12-18% ao ano',
      riskLevel: 'Baixo',
      timeframe: '1+ anos'
    },
    {
      name: 'Arbitragem Crypto',
      description: 'Diferenças de preço entre exchanges',
      profitability: '5-10% ao mês',
      riskLevel: 'Médio',
      timeframe: 'Minutos/Horas'
    }
  ]

  const portfolios = [
    {
      name: 'Conservador',
      allocation: [
        { asset: 'Renda Fixa', percentage: 60, color: 'bg-blue-500' },
        { asset: 'FIIs', percentage: 25, color: 'bg-green-500' },
        { asset: 'Ações Dividendos', percentage: 15, color: 'bg-purple-500' }
      ],
      expectedReturn: '8-12% ao ano',
      risk: 'Baixo'
    },
    {
      name: 'Moderado',
      allocation: [
        { asset: 'Ações', percentage: 40, color: 'bg-blue-500' },
        { asset: 'FIIs', percentage: 30, color: 'bg-green-500' },
        { asset: 'Renda Fixa', percentage: 20, color: 'bg-purple-500' },
        { asset: 'Crypto', percentage: 10, color: 'bg-orange-500' }
      ],
      expectedReturn: '12-18% ao ano',
      risk: 'Médio'
    },
    {
      name: 'Agressivo',
      allocation: [
        { asset: 'Growth Stocks', percentage: 50, color: 'bg-blue-500' },
        { asset: 'Crypto', percentage: 25, color: 'bg-green-500' },
        { asset: 'Day Trade', percentage: 15, color: 'bg-purple-500' },
        { asset: 'Startups', percentage: 10, color: 'bg-red-500' }
      ],
      expectedReturn: '20-40% ao ano',
      risk: 'Alto'
    }
  ]

  const toggleLesson = (lessonId: string) => {
    setCompletedLessons(prev => 
      prev.includes(lessonId) 
        ? prev.filter(id => id !== lessonId)
        : [...prev, lessonId]
    )
  }

  const totalLessons = modules.reduce((acc, module) => acc + module.lessons.length, 0)
  const progress = (completedLessons.length / totalLessons) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Investimentos e Trading</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Estratégias para multiplicar seu dinheiro</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                <CheckCircle className="w-3 h-3 mr-1" />
                Desbloqueado
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Seu Progresso</h3>
              <span className="text-2xl font-bold text-blue-600">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {completedLessons.length} de {totalLessons} aulas concluídas
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="modules" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="modules">Módulos</TabsTrigger>
            <TabsTrigger value="strategies">Estratégias</TabsTrigger>
            <TabsTrigger value="portfolios">Portfólios</TabsTrigger>
            <TabsTrigger value="tools">Ferramentas</TabsTrigger>
            <TabsTrigger value="resources">Recursos</TabsTrigger>
          </TabsList>

          <TabsContent value="modules" className="space-y-6">
            <div className="grid gap-6">
              {modules.map((module, moduleIndex) => (
                <Card key={module.id} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                            {moduleIndex + 1}
                          </div>
                          {module.title}
                        </CardTitle>
                        <CardDescription className="mt-2">{module.description}</CardDescription>
                      </div>
                      <div className="text-right">
                        <Badge variant="outline" className="mb-2">{module.difficulty}</Badge>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{module.duration}</p>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      {module.lessons.map((lesson, lessonIndex) => {
                        const lessonId = `${module.id}-${lessonIndex}`
                        const isCompleted = completedLessons.includes(lessonId)
                        
                        return (
                          <div 
                            key={lessonIndex}
                            className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                              isCompleted 
                                ? 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800' 
                                : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                            onClick={() => toggleLesson(lessonId)}
                          >
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              isCompleted 
                                ? 'bg-blue-500 text-white' 
                                : 'bg-gray-300 dark:bg-gray-600'
                            }`}>
                              {isCompleted ? (
                                <CheckCircle className="w-4 h-4" />
                              ) : (
                                <PlayCircle className="w-4 h-4" />
                              )}
                            </div>
                            <span className={`flex-1 ${isCompleted ? 'line-through text-gray-500' : ''}`}>
                              {lesson}
                            </span>
                            <span className="text-xs text-gray-500">
                              {Math.floor(Math.random() * 30) + 15} min
                            </span>
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="strategies" className="space-y-6">
            <div className="grid gap-6">
              {strategies.map((strategy, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold">{strategy.name}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{strategy.description}</p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={strategy.riskLevel === 'Alto' ? 'destructive' : strategy.riskLevel === 'Médio' ? 'secondary' : 'default'}
                        >
                          {strategy.riskLevel}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span>Rentabilidade: {strategy.profitability}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-blue-600" />
                        <span>Timeframe: {strategy.timeframe}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="portfolios" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {portfolios.map((portfolio, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <PieChart className="w-5 h-5" />
                      {portfolio.name}
                    </CardTitle>
                    <CardDescription>
                      Retorno esperado: {portfolio.expectedReturn}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        {portfolio.allocation.map((asset, assetIndex) => (
                          <div key={assetIndex} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`w-3 h-3 rounded-full ${asset.color}`} />
                              <span className="text-sm">{asset.asset}</span>
                            </div>
                            <span className="text-sm font-medium">{asset.percentage}%</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex h-2 rounded-full overflow-hidden">
                        {portfolio.allocation.map((asset, assetIndex) => (
                          <div 
                            key={assetIndex}
                            className={asset.color}
                            style={{ width: `${asset.percentage}%` }}
                          />
                        ))}
                      </div>
                      
                      <Badge variant="outline" className="w-full justify-center">
                        Risco: {portfolio.risk}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((tool, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">{tool.name}</h3>
                      <Badge variant="outline">{tool.price}</Badge>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{tool.category}</p>
                    <Button size="sm" className="w-full">
                      <Download className="w-4 h-4 mr-2" />
                      Acessar
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resources" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Planilhas e Calculadoras
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="text-sm">Calculadora de Risco</span>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="text-sm">Planilha de Controle</span>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="text-sm">Backtest Template</span>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Comunidade de Traders
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Acesse nossa comunidade exclusiva com mais de 10.000 traders ativos.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-600">
                    Entrar na Comunidade
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}