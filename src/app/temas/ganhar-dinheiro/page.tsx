"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { 
  DollarSign, 
  ArrowLeft, 
  PlayCircle, 
  FileText, 
  Download,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Target
} from 'lucide-react'
import Link from 'next/link'

export default function GanharDinheiroPage() {
  const [completedLessons, setCompletedLessons] = useState<string[]>([])

  const modules = [
    {
      id: 'afiliados',
      title: 'Marketing de Afiliados Avançado',
      description: 'Domine as estratégias que geram R$ 10k+ por mês',
      lessons: [
        'Como escolher produtos que convertem',
        'Criando funis de vendas que funcionam',
        'Tráfego orgânico para afiliados',
        'Automação de vendas com email marketing',
        'Análise de métricas e otimização'
      ],
      duration: '4h 30min',
      difficulty: 'Intermediário'
    },
    {
      id: 'dropshipping',
      title: 'Dropshipping Lucrativo',
      description: 'Monte sua loja virtual sem estoque',
      lessons: [
        'Pesquisa de produtos vencedores',
        'Criando uma loja que converte',
        'Fornecedores confiáveis no AliExpress',
        'Facebook Ads para dropshipping',
        'Atendimento ao cliente automatizado'
      ],
      duration: '3h 45min',
      difficulty: 'Iniciante'
    },
    {
      id: 'plr',
      title: 'Produtos PLR de Alto Valor',
      description: 'Venda produtos com direitos de revenda',
      lessons: [
        'O que são produtos PLR e como funcionam',
        'Onde encontrar PLR de qualidade',
        'Customizando produtos PLR',
        'Estratégias de precificação',
        'Criando sua própria linha PLR'
      ],
      duration: '2h 15min',
      difficulty: 'Iniciante'
    },
    {
      id: 'infoprodutos',
      title: 'Criação de Infoprodutos',
      description: 'Transforme seu conhecimento em dinheiro',
      lessons: [
        'Validando sua ideia de curso',
        'Estruturando conteúdo educacional',
        'Gravação e edição profissional',
        'Plataformas de hospedagem',
        'Lançamento e vendas'
      ],
      duration: '5h 20min',
      difficulty: 'Avançado'
    }
  ]

  const tools = [
    { name: 'Hotmart', category: 'Plataforma de Vendas', price: 'Gratuito' },
    { name: 'Monetizze', category: 'Afiliados', price: 'Gratuito' },
    { name: 'Shopify', category: 'E-commerce', price: '$29/mês' },
    { name: 'WordPress', category: 'Website', price: 'Gratuito' },
    { name: 'Canva Pro', category: 'Design', price: '$12/mês' },
    { name: 'Mailchimp', category: 'Email Marketing', price: '$10/mês' }
  ]

  const caseStudies = [
    {
      name: 'João Silva',
      niche: 'Afiliado Hotmart',
      earnings: 'R$ 25.000/mês',
      time: '8 meses',
      strategy: 'YouTube + Email Marketing'
    },
    {
      name: 'Maria Santos',
      niche: 'Dropshipping',
      earnings: 'R$ 18.000/mês',
      time: '6 meses',
      strategy: 'Facebook Ads + Instagram'
    },
    {
      name: 'Pedro Costa',
      niche: 'Infoprodutos',
      earnings: 'R$ 35.000/mês',
      time: '12 meses',
      strategy: 'Curso Online + Mentoria'
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
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10">
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
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold">Ganhar Dinheiro Online</h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Métodos comprovados para gerar renda</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400">
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
              <span className="text-2xl font-bold text-green-600">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="mb-2" />
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {completedLessons.length} de {totalLessons} aulas concluídas
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="modules" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="modules">Módulos</TabsTrigger>
            <TabsTrigger value="tools">Ferramentas</TabsTrigger>
            <TabsTrigger value="cases">Casos de Sucesso</TabsTrigger>
            <TabsTrigger value="resources">Recursos</TabsTrigger>
          </TabsList>

          <TabsContent value="modules" className="space-y-6">
            <div className="grid gap-6">
              {modules.map((module, moduleIndex) => (
                <Card key={module.id} className="overflow-hidden">
                  <CardHeader className="bg-gradient-to-r from-green-500/10 to-emerald-500/10">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
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
                                ? 'bg-green-50 dark:bg-green-900/10 border-green-200 dark:border-green-800' 
                                : 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                            }`}
                            onClick={() => toggleLesson(lessonId)}
                          >
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              isCompleted 
                                ? 'bg-green-500 text-white' 
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
                              {Math.floor(Math.random() * 20) + 10} min
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

          <TabsContent value="cases" className="space-y-6">
            <div className="grid gap-6">
              {caseStudies.map((case_study, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                          {case_study.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-semibold">{case_study.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{case_study.niche}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">{case_study.earnings}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">em {case_study.time}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Target className="w-4 h-4 text-blue-600" />
                      <span>Estratégia: {case_study.strategy}</span>
                    </div>
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
                    E-books Exclusivos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="text-sm">Guia Completo de Afiliados</span>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="text-sm">Templates de Email Marketing</span>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <span className="text-sm">Checklist de Lançamento</span>
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
                    Comunidade Exclusiva
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Acesse nossa comunidade privada no Telegram com mais de 5.000 empreendedores digitais.
                  </p>
                  <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600">
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