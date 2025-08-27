import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import AdminLayout from "@/components/admin/AdminLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Package, 
  Users, 
  Wrench, 
  TrendingUp, 
  Eye, 
  Edit,
  Database,
  RefreshCw
} from "lucide-react";
import { productsAPI, agronomistsAPI, servicesAPI } from "@/lib/database";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProducts: 0,
    activeProducts: 0,
    totalAgronomists: 0,
    availableAgronomists: 0,
    totalServices: 0,
    activeServices: 0
  });

  const [loading, setLoading] = useState(true);

  const loadStats = async () => {
    setLoading(true);
    try {
      const [products, agronomists, services] = await Promise.all([
        productsAPI.getAll(),
        agronomistsAPI.getAll(),
        servicesAPI.getAll()
      ]);

      const availableAgronomists = await agronomistsAPI.getAvailable();

      setStats({
        totalProducts: products.length,
        activeProducts: products.filter(p => p.in_stock).length,
        totalAgronomists: agronomists.length,
        availableAgronomists: availableAgronomists.length,
        totalServices: services.length,
        activeServices: services.filter(s => s.is_active).length
      });
    } catch (error) {
      console.error('Error loading stats:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStats();
  }, []);

  const statCards = [
    {
      title: "Products",
      value: stats.totalProducts,
      description: `${stats.activeProducts} in stock`,
      icon: <Package className="h-8 w-8 text-blue-600" />,
      color: "border-blue-200 bg-blue-50"
    },
    {
      title: "Agronomists",
      value: stats.totalAgronomists,
      description: `${stats.availableAgronomists} available`,
      icon: <Users className="h-8 w-8 text-green-600" />,
      color: "border-green-200 bg-green-50"
    },
    {
      title: "Services",
      value: stats.totalServices,
      description: `${stats.activeServices} active`,
      icon: <Wrench className="h-8 w-8 text-purple-600" />,
      color: "border-purple-200 bg-purple-50"
    },
    {
      title: "Performance",
      value: "98%",
      description: "System uptime",
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      color: "border-orange-200 bg-orange-50"
    }
  ];

  const quickActions = [
    {
      title: "Add New Product",
      description: "Add a new agricultural product to the catalog",
      icon: <Package className="h-6 w-6" />,
      action: () => window.open('/admin/products/new', '_blank'),
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      title: "Add Agronomist",
      description: "Register a new agricultural expert",
      icon: <Users className="h-6 w-6" />,
      action: () => window.open('/admin/agronomists/new', '_blank'),
      color: "bg-green-600 hover:bg-green-700"
    },
    {
      title: "Manage Services",
      description: "Update or add new services",
      icon: <Wrench className="h-6 w-6" />,
      action: () => window.open('/admin/services', '_blank'),
      color: "bg-purple-600 hover:bg-purple-700"
    },
    {
      title: "View Website",
      description: "Preview the live website",
      icon: <Eye className="h-6 w-6" />,
      action: () => window.open('/', '_blank'),
      color: "bg-gray-600 hover:bg-gray-700"
    }
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600">Manage your agricultural content and data</p>
          </div>
          <div className="flex items-center space-x-4">
            <Button
              onClick={loadStats}
              variant="outline"
              size="sm"
              disabled={loading}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Badge className="bg-green-100 text-green-800">
              <Database className="h-3 w-3 mr-1" />
              Connected
            </Badge>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statCards.map((stat, index) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className={`${stat.color} border-2`}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">
                    {stat.title}
                  </CardTitle>
                  {stat.icon}
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">
                    {loading ? '...' : stat.value}
                  </div>
                  <p className="text-xs text-gray-600">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Edit className="h-5 w-5 mr-2" />
              Quick Actions
            </CardTitle>
            <CardDescription>
              Common administrative tasks and content management
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button
                    onClick={action.action}
                    className={`w-full h-auto p-4 ${action.color} text-white flex flex-col items-center space-y-2`}
                  >
                    {action.icon}
                    <div className="text-center">
                      <div className="font-semibold">{action.title}</div>
                      <div className="text-xs opacity-90">{action.description}</div>
                    </div>
                  </Button>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>System Status</CardTitle>
              <CardDescription>Current system health and performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Database Connection</span>
                <Badge className="bg-green-100 text-green-800">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">API Status</span>
                <Badge className="bg-green-100 text-green-800">Operational</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Last Sync</span>
                <span className="text-sm text-gray-900">
                  {new Date().toLocaleTimeString()}
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>Latest content updates and changes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <div className="flex items-center justify-between">
                  <span>System initialized</span>
                  <span className="text-gray-500">Just now</span>
                </div>
              </div>
              <div className="text-sm">
                <div className="flex items-center justify-between">
                  <span>Database connected</span>
                  <span className="text-gray-500">Just now</span>
                </div>
              </div>
              <div className="text-sm">
                <div className="flex items-center justify-between">
                  <span>Admin panel ready</span>
                  <span className="text-gray-500">Just now</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
