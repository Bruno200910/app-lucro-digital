"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Shield, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Eye,
  Settings,
  Download,
  CreditCard,
  BarChart3,
  Calendar,
  Search,
  Filter
} from 'lucide-react'

interface User {
  id: string
  name: string
  email: string
  purchasedThemes: string[]
  totalSpent: number
  joinDate: string
  lastActive: string
}

interface Transaction {
  id: string
  userId: string
  userName: string
  themeId: string
  themeName: string
  amount: number
  date: string
  status: 'completed' | 'pending' | 'failed'
}

export default function AdminPage() {
  const [users] = useState<User[]>([
    {
      id: '1',
      name: 'João Silva',
      email: 'joao@email.com',
      purchasedThemes: ['money-online', 'investments', 'marketing'],
      totalSpent: 60,
      joinDate: '2024-01-15',
      lastActive: '2024-01-20'
    },
    {
      id: '2',
      name: 'Maria Santos',
      email: 'maria@email.com',
      purchasedThemes: ['fitness', 'relationships'],
      totalSpent: 40,
      joinDate: '2024-01-10',
      lastActive: '2024-01-19'
    },
    {
      id: '3',
      name: 'Pedro Costa',
      email: 'pedro@email.com',
      purchasedThemes: ['money-online', 'ai-automation', 'productivity', 'marketing'],
      totalSpent: 80,
      joinDate: '2024-01-05',
      lastActive: '2024-01-20'
    }
  ])

  const [transactions] = useState<Transaction[]>([
    {
      id: '1',
      userId: '1',
      userName: 'João Silva',
      themeId: 'money-online',
      themeName: 'Ganhar Dinheiro Online',
      amount: 20,
      date: '2024-01-20',
      status: 'completed'
    },
    {
      id: '2',
      userId: '2',
      userName: 'Maria Santos',
      themeId: 'fitness',
      themeName: 'Emagrecimento e Fitness',
      amount: 20,
      date: '2024-01-19',
      status: 'completed'
    },
    {
      id: '3',
      userId: '3',
      userName: 'Pedro Costa',
      themeId: 'ai-automation',
      themeName: 'IA e Automação',
      amount: 20,
      date: '2024-01-18',
      status: 'pending'
    }
  ])

  const totalRevenue = transactions
    .filter(t => t.status === 'completed')
    .reduce((acc, t) => acc + t.amount, 0)

  const totalUsers = users.length
  const activeUsers = users.filter(u => {
    const lastActive = new Date(u.lastActive)
    const threeDaysAgo = new Date()
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)
    return lastActive > threeDaysAgo
  }).length

  const themeStats = [
    { name: 'Ganhar Dinheiro Online', purchases: 15, revenue: 300 },
    { name: 'Investimentos e Trading', purchases: 12, revenue: 240 },
    { name: 'Marketing Digital', purchases: 18, revenue: 360 },
    { name: 'Emagrecimento e Fitness', purchases: 10, revenue: 200 },
    { name: 'Relacionamento', purchases: 8, revenue: 160 },
    { name: 'Produtividade', purchases: 14, revenue: 280 },
    { name: 'IA e Automação', purchases: 20, revenue: 400 }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  Admin Dashboard
                </h1>
                <p className="text-sm text-gray-600 dark:text-gray-400">Painel de Controle</p>
              </div>
            </div>
            
            <Badge className="bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400">
              <Shield className="w-3 h-3 mr-1" />
              Acesso Restrito
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">€{totalRevenue}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Receita Total</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{totalUsers}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Total de Usuários</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{activeUsers}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Usuários Ativos</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{transactions.length}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Transações</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="users">Usuários</TabsTrigger>
            <TabsTrigger value="transactions">Transações</TabsTrigger>
            <TabsTrigger value="themes">Temas</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Revenue Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Receita por Tema</CardTitle>
                  <CardDescription>Performance de vendas por categoria</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {themeStats.map((theme, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium">{theme.name}</span>
                            <span className="text-sm text-gray-600">€{theme.revenue}</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" 
                              style={{ width: `${(theme.revenue / 400) * 100}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Atividade Recente</CardTitle>
                  <CardDescription>Últimas transações e atividades</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {transactions.slice(0, 5).map((transaction) => (
                      <div key={transaction.id} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                          <CreditCard className="w-4 h-4 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{transaction.userName}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">{transaction.themeName}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-bold">€{transaction.amount}</p>
                          <Badge 
                            variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {transaction.status}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Gerenciar Usuários</CardTitle>
                    <CardDescription>Lista completa de usuários registrados</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <Input placeholder="Buscar usuários..." className="pl-10 w-64" />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {users.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{user.email}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm font-medium">€{user.totalSpent}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {user.purchasedThemes.length} temas
                          </p>
                        </div>
                        
                        <Badge variant="outline">
                          Ativo
                        </Badge>
                        
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Histórico de Transações</CardTitle>
                <CardDescription>Todas as transações realizadas na plataforma</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {transactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                          <CreditCard className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">{transaction.userName}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{transaction.themeName}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="font-bold">€{transaction.amount}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {new Date(transaction.date).toLocaleDateString('pt-BR')}
                          </p>
                        </div>
                        
                        <Badge 
                          variant={
                            transaction.status === 'completed' ? 'default' : 
                            transaction.status === 'pending' ? 'secondary' : 'destructive'
                          }
                        >
                          {transaction.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="themes" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Performance dos Temas</CardTitle>
                <CardDescription>Estatísticas detalhadas de cada tema</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {themeStats.map((theme, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <h3 className="font-medium mb-2">{theme.name}</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Vendas:</span>
                            <span className="font-bold">{theme.purchases}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span>Receita:</span>
                            <span className="font-bold text-green-600">€{theme.revenue}</span>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full" 
                              style={{ width: `${(theme.purchases / 20) * 100}%` }}
                            />
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Configurações Gerais</CardTitle>
                  <CardDescription>Configurações da plataforma</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="theme-price">Preço por Tema (€)</Label>
                    <Input id="theme-price" type="number" defaultValue="20" />
                  </div>
                  
                  <div>
                    <Label htmlFor="commission">Taxa de Comissão (%)</Label>
                    <Input id="commission" type="number" defaultValue="10" />
                  </div>
                  
                  <div>
                    <Label htmlFor="min-withdrawal">Saque Mínimo (€)</Label>
                    <Input id="min-withdrawal" type="number" defaultValue="50" />
                  </div>
                  
                  <Button className="w-full">
                    <Settings className="w-4 h-4 mr-2" />
                    Salvar Configurações
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Relatórios</CardTitle>
                  <CardDescription>Gerar relatórios detalhados</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Relatório de Vendas (PDF)
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Lista de Usuários (CSV)
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="w-4 h-4 mr-2" />
                    Transações (Excel)
                  </Button>
                  
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Relatório Mensal
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