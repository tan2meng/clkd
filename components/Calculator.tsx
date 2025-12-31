import React, { useState, useEffect } from 'react';
import { CalculatorState } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const Calculator: React.FC = () => {
  const [data, setData] = useState<CalculatorState>({
    rent: 15000,
    labor: 25000,
    utilities: 3000,
    marketing: 2000,
    avgTicket: 35,
    foodCostPercent: 35,
  });

  const [result, setResult] = useState<{
    fixedCost: number;
    breakEvenOrders: number;
    breakEvenRevenue: number;
    marginPerOrder: number;
  }>({ fixedCost: 0, breakEvenOrders: 0, breakEvenRevenue: 0, marginPerOrder: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }));
  };

  useEffect(() => {
    const fixedCost = data.rent + data.labor + data.utilities + data.marketing;
    const marginPercent = (100 - data.foodCostPercent) / 100;
    const marginPerOrder = data.avgTicket * marginPercent;
    
    // Avoid division by zero
    const breakEvenOrders = marginPerOrder > 0 ? Math.ceil(fixedCost / marginPerOrder) : 0;
    const breakEvenRevenue = breakEvenOrders * data.avgTicket;

    setResult({
      fixedCost,
      breakEvenOrders,
      breakEvenRevenue,
      marginPerOrder
    });
  }, [data]);

  // Generate chart data
  const chartData = [];
  const step = Math.max(100, Math.ceil(result.breakEvenOrders / 5));
  for (let i = 0; i <= result.breakEvenOrders * 1.5; i += step) {
    const variableCost = data.avgTicket * (data.foodCostPercent / 100);
    const totalCost = result.fixedCost + (variableCost * i);
    const revenue = data.avgTicket * i;
    
    chartData.push({
      orders: i,
      cost: totalCost,
      revenue: revenue,
    });
  }

  return (
    <div className="pb-8 space-y-6">
      {/* Result Card */}
      <div className="glass-panel rounded-[32px] p-8 relative overflow-hidden shadow-glow">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-accentPink/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
        
        <div className="relative z-10 text-center">
            <h2 className="text-secondary/50 text-sm font-bold uppercase tracking-widest mb-4">盈亏平衡点 (月)</h2>
            <div className="inline-block relative">
                <span className="text-6xl font-black text-primary drop-shadow-sm">{result.breakEvenOrders.toLocaleString()}</span>
                <span className="absolute -right-8 bottom-2 text-sm font-bold text-secondary/40">单</span>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white/40 rounded-2xl p-4 border border-white/60">
                    <span className="block text-xs text-secondary/50 font-bold uppercase mb-1">目标营业额</span>
                    <span className="block text-xl font-black text-secondary">¥{result.breakEvenRevenue.toLocaleString()}</span>
                </div>
                <div className="bg-white/40 rounded-2xl p-4 border border-white/60">
                    <span className="block text-xs text-secondary/50 font-bold uppercase mb-1">日标单量</span>
                    <span className="block text-xl font-black text-secondary">{(result.breakEvenOrders/30).toFixed(0)} <span className="text-sm font-medium opacity-50">单</span></span>
                </div>
            </div>
        </div>
      </div>

      {/* Input Form */}
      <div className="glass-card rounded-[32px] p-6">
        <h3 className="font-bold text-secondary text-lg mb-6 flex items-center">
            <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mr-3">
                <span className="text-xl">⚙️</span>
            </span>
            成本配置
        </h3>
        
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <InputGroup label="房租 (月)" name="rent" value={data.rent} onChange={handleChange} />
              <InputGroup label="人工 (月)" name="labor" value={data.labor} onChange={handleChange} />
              <InputGroup label="水电杂费" name="utilities" value={data.utilities} onChange={handleChange} />
              <InputGroup label="营销推广" name="marketing" value={data.marketing} onChange={handleChange} />
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent my-2"></div>
            <div className="grid grid-cols-2 gap-4">
              <InputGroup label="客单价" name="avgTicket" value={data.avgTicket} onChange={handleChange} highlight />
              <InputGroup label="食材成本 %" name="foodCostPercent" value={data.foodCostPercent} onChange={handleChange} highlight />
            </div>
        </div>
      </div>

      {/* Chart */}
      <div className="glass-card rounded-[32px] p-6 h-80">
        <h3 className="font-bold text-secondary/70 text-sm mb-4">财务推演</h3>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 10, right: 10, bottom: 20, left: 0 }}>
            <CartesianGrid stroke="rgba(109, 40, 217, 0.05)" strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="orders" stroke="#A78BFA" fontSize={10} tickLine={false} axisLine={false} />
            <YAxis stroke="#A78BFA" fontSize={10} tickLine={false} axisLine={false} tickFormatter={(v) => `${v/1000}k`} />
            <Tooltip 
              contentStyle={{ 
                  borderRadius: '16px', 
                  border: '1px solid rgba(255,255,255,0.8)', 
                  background: 'rgba(255,255,255,0.9)',
                  boxShadow: '0 10px 30px -10px rgba(109, 40, 217, 0.2)' 
              }}
            />
            <Legend verticalAlign="top" iconType="circle" wrapperStyle={{paddingBottom: '20px'}} />
            <Line type="monotone" dataKey="revenue" name="营业额" stroke="#8B5CF6" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="cost" name="总成本" stroke="#EC4899" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const InputGroup = ({ label, name, value, onChange, highlight }: any) => {
    return (
        <div>
            <label className="block text-[10px] font-bold text-secondary/40 uppercase tracking-widest mb-2 ml-1">{label}</label>
            <div className="relative">
                <input 
                    type="number" 
                    name={name} 
                    value={value} 
                    onChange={onChange} 
                    className={`w-full bg-white/50 border border-white rounded-2xl py-3 px-4 font-bold text-secondary focus:ring-4 focus:ring-primary/10 focus:border-primary/30 transition-all outline-none ${highlight ? 'text-primary' : ''}`}
                />
            </div>
        </div>
    );
};

export default Calculator;