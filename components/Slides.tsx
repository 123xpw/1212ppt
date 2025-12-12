
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  Server, 
  Globe, 
  Map, 
  CreditCard, 
  Heart, 
  Users, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Layers, 
  Code, 
  Search,
  Lock,
  FileText,
  Activity,
  ClipboardList
} from 'lucide-react';

// --- SLIDE 1: Title ---
export const TitleSlide: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-full text-center p-12 bg-gradient-to-br from-slate-50 to-slate-100">
    <motion.div 
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-8 p-6 rounded-full bg-steel-blue/10 text-steel-blue"
    >
      <Database size={64} />
    </motion.div>
    <h1 className="text-5xl md:text-7xl font-serif text-slate-900 mb-6 tracking-tight">
      Curio Travel <br/> <span className="text-steel-blue">数据库系统设计</span>
    </h1>
    <div className="h-1 w-24 bg-steel-blue mb-8"></div>
    <h2 className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl">
      基于 MySQL 的旅行数据全生命周期管理方案
    </h2>
    <div className="mt-16 flex flex-col gap-2 text-sm text-slate-400 uppercase tracking-widest font-semibold">
      <span>Database Design Project</span>
      <span>Team: Data Voyagers</span>
    </div>
  </div>
);

// --- SLIDE 2: Problem & Solution ---
export const ProblemSolutionSlide: React.FC = () => (
  <div className="flex flex-col md:flex-row h-full">
    {/* Problem */}
    <div className="flex-1 bg-slate-50 p-12 flex flex-col justify-center border-r border-slate-200">
      <div className="bg-red-50 text-red-600 px-4 py-1 self-start rounded-full text-xs font-bold uppercase tracking-wide mb-6">The Pain Point</div>
      <h3 className="text-3xl font-serif text-slate-800 mb-8">数据孤岛 (Data Silos)</h3>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center shadow-sm">
            <CreditCard className="text-slate-400" />
          </div>
          <div>
            <h4 className="font-bold text-slate-700">记账 App</h4>
            <p className="text-xs text-slate-500">旅行开销独立存储</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center shadow-sm">
             <Map className="text-slate-400" />
          </div>
          <div>
            <h4 className="font-bold text-slate-700">足迹地图</h4>
            <p className="text-xs text-slate-500">地理位置数据分散</p>
          </div>
        </div>

        <div className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
           <div className="w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center shadow-sm">
             <Heart className="text-slate-400" />
          </div>
           <div>
            <h4 className="font-bold text-slate-700">收藏夹 / Notes</h4>
            <p className="text-xs text-slate-500">未来计划无结构化</p>
          </div>
        </div>
      </div>
    </div>

    {/* Solution */}
    <div className="flex-1 bg-white p-12 flex flex-col justify-center relative overflow-hidden">
      <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-steel-blue/5 rounded-full blur-3xl"></div>
      
      <div className="bg-green-50 text-green-600 px-4 py-1 self-start rounded-full text-xs font-bold uppercase tracking-wide mb-6">The Solution</div>
      <h3 className="text-3xl font-serif text-steel-blue mb-8">统一治理 (Unified Governance)</h3>
      <p className="text-slate-600 leading-relaxed mb-8">
        通过构建一个以 <strong>User ID</strong> 为核心的集中式数据库，将"过去的足迹"、"当下的开销"与"未来的愿望"有机链接。
      </p>

      <div className="flex items-center gap-4 p-6 bg-steel-blue/10 rounded-xl border border-steel-blue/20">
        <Server className="text-steel-blue shrink-0" size={32} />
        <div>
           <div className="text-sm font-bold text-slate-800">Centralized MySQL Node</div>
           <div className="text-xs text-slate-500">Seamlessly linking Past, Present, Future</div>
        </div>
      </div>
    </div>
  </div>
);

// --- SLIDE 3: Architecture (ERD) ---
export const ArchitectureSlide: React.FC = () => (
  <div className="h-full flex flex-col p-12 relative">
    <div className="mb-4">
      <h3 className="text-2xl font-serif text-slate-900">Core Architecture: Star Schema</h3>
      <p className="text-slate-500">以用户为核心的星型拓扑结构，集成审计日志。</p>
    </div>

    <div className="flex-1 relative flex items-center justify-center">
        {/* Background Grid */}
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-4 opacity-5">
            {Array.from({length: 72}).map((_,i) => <div key={i} className="border border-slate-400 rounded-sm"></div>)}
        </div>

        {/* Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
            <motion.line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#4682B4" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
            <motion.line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#4682B4" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
            <motion.line x1="50%" y1="50%" x2="50%" y2="80%" stroke="#4682B4" strokeWidth="2" strokeDasharray="5,5" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }} />
            {/* Line to Audit Log */}
            <motion.line x1="50%" y1="50%" x2="80%" y2="70%" stroke="#94A3B8" strokeWidth="1" strokeDasharray="2,2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 1.5 }} />
        </svg>

        {/* Center Node */}
        <div className="z-10 bg-steel-blue text-white w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-xl shadow-steel-blue/30 border-4 border-white">
            <Users size={32} />
            <span className="font-bold mt-2">USERS</span>
            <span className="text-[10px] opacity-80">PK: user_id</span>
        </div>

        {/* Nodes */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            className="absolute top-[20%] left-[20%] w-48 bg-white p-4 rounded-lg shadow-lg border-t-4 border-slate-400"
        >
            <div className="flex items-center gap-2 mb-2 text-slate-700 font-bold"><Map size={16}/> Travel_Footprints</div>
            <div className="text-xs text-slate-500 font-mono space-y-1">
                <p>PK: id</p>
                <p className="text-steel-blue">FK: user_id</p>
                <p>visit_date</p>
                <p>location_data</p>
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1 }}
            className="absolute top-[20%] right-[20%] w-48 bg-white p-4 rounded-lg shadow-lg border-t-4 border-green-500"
        >
            <div className="flex items-center gap-2 mb-2 text-slate-700 font-bold"><CreditCard size={16}/> Expenses</div>
            <div className="text-xs text-slate-500 font-mono space-y-1">
                <p>PK: id</p>
                <p className="text-steel-blue">FK: user_id</p>
                <p>amount</p>
                <p>category</p>
            </div>
        </motion.div>

        <motion.div 
             initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.2 }}
            className="absolute bottom-[15%] w-48 bg-white p-4 rounded-lg shadow-lg border-t-4 border-red-400"
        >
            <div className="flex items-center gap-2 mb-2 text-slate-700 font-bold"><Heart size={16}/> Wishlist</div>
            <div className="text-xs text-slate-500 font-mono space-y-1">
                <p>PK: id</p>
                <p className="text-steel-blue">FK: user_id</p>
                <p>priority_level</p>
                <p>status</p>
            </div>
        </motion.div>

        {/* Audit Log Node */}
        <motion.div 
             initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.6 }}
            className="absolute bottom-[20%] right-[10%] w-40 bg-slate-100 p-3 rounded border border-slate-300"
        >
            <div className="flex items-center gap-2 mb-1 text-slate-600 text-sm font-bold"><ClipboardList size={14}/> Audit_Log</div>
             <p className="text-[10px] text-slate-400">Stores trigger actions</p>
        </motion.div>

        {/* Floating Public Data Node */}
        <motion.div 
             initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }}
            className="absolute top-[50%] left-[10%] w-40 bg-slate-50 p-3 rounded border border-dashed border-slate-300"
        >
            <div className="flex items-center gap-2 mb-1 text-slate-500 text-sm font-bold"><Globe size={14}/> Destinations</div>
             <p className="text-[10px] text-slate-400">Public Lookup Table</p>
        </motion.div>

    </div>
  </div>
);

// --- SLIDE 4: Data Integrity ---
export const IntegritySlide: React.FC = () => (
  <div className="h-full flex flex-col p-12 bg-white relative overflow-hidden">
     
     {/* Background Decoration */}
     <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <ShieldCheck size={400} className="text-steel-blue" />
     </div>

     <div className="mb-8 z-10">
        <h3 className="text-3xl font-serif text-slate-900 mb-2">数据完整性设计 (Data Integrity)</h3>
        <p className="text-steel-blue text-lg">基于外键约束与级联删除的自动化治理</p>
    </div>

    <div className="flex gap-12 items-center flex-1 z-10">
        {/* Left: Concepts */}
        <div className="flex-1 space-y-6">
            <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="p-6 bg-slate-50 rounded-xl border-l-4 border-steel-blue shadow-sm"
            >
                <h4 className="text-slate-800 font-bold mb-2 flex items-center gap-2">
                     <Lock size={18} className="text-steel-blue"/> Foreign Key Constraints
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                    确保数据之间强关联。无法创建属于"不存在用户"的账单。杜绝僵尸数据产生。
                </p>
            </motion.div>

            <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="p-6 bg-red-50 rounded-xl border-l-4 border-red-500 shadow-sm"
            >
                <h4 className="text-red-900 font-bold mb-2 flex items-center gap-2">
                    <Zap size={18} className="text-red-500"/> ON DELETE CASCADE
                </h4>
                <p className="text-red-800/80 text-sm leading-relaxed">
                    应用层无需编写复杂的清除逻辑。当 Users 表中的记录被删除时，数据库引擎自动擦除所有关联足迹。
                </p>
            </motion.div>
        </div>

        {/* Right: Code Editor */}
        <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex-1"
        >
            <div className="bg-[#1E1E1E] rounded-lg shadow-2xl overflow-hidden font-mono text-sm border border-slate-200">
                <div className="bg-[#2D2D2D] px-4 py-3 flex justify-between items-center border-b border-black/50">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-xs text-slate-500">schema.sql</span>
                </div>
                <div className="p-8 leading-relaxed text-slate-300">
                    <p><span className="text-purple-400">CREATE TABLE</span> Expenses (</p>
                    <p className="pl-6">id <span className="text-blue-400">INT PRIMARY KEY</span>,</p>
                    <p className="pl-6">amount <span className="text-blue-400">DECIMAL</span>(10,2),</p>
                    <p className="pl-6">user_id <span className="text-blue-400">INT</span>,</p>
                    <p className="pl-6 text-slate-500 italic mt-2 mb-1">-- 核心约束: 级联删除</p>
                    <p className="pl-6"><span className="text-purple-400">FOREIGN KEY</span> (user_id)</p>
                    <p className="pl-10"><span className="text-purple-400">REFERENCES</span> Users(id)</p>
                    
                    <div className="relative inline-block w-full">
                        <motion.div 
                            initial={{ width: 0 }} 
                            animate={{ width: '100%' }} 
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="absolute inset-0 bg-yellow-500/20 -mx-2 rounded"
                        />
                        <p className="pl-10 text-yellow-300 font-bold mt-1">
                            <span className="text-purple-400">ON DELETE CASCADE</span>
                        </p>
                    </div>
                    <p>);</p>
                </div>
            </div>
        </motion.div>
    </div>
  </div>
);

// --- SLIDE 5: Triggers ---
export const TriggersSlide: React.FC = () => (
    <div className="h-full flex flex-col p-8 md:p-12">
        <div className="mb-6">
            <h3 className="text-2xl font-serif text-slate-900">Automation: Database Triggers</h3>
            <p className="text-slate-500">Business Logic & Audit Logging (A, B, C, D)</p>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-4 flex-1">
            {/* Trigger A: Hot Destination */}
            <motion.div 
                initial={{ opacity: 0, x: -20, y: -20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{delay: 0.1}}
                className="bg-yellow-50 rounded-xl p-5 border border-yellow-200 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-2 opacity-10"><Zap size={60} className="text-yellow-600"/></div>
                <div className="text-xs font-bold text-yellow-700 uppercase mb-1">Trigger A</div>
                <h4 className="font-bold text-slate-800 mb-2">Hot Destination Discovery</h4>
                <div className="text-[10px] font-mono text-slate-600 space-y-1 bg-white/60 p-2 rounded">
                    <p><span className="text-purple-600">AFTER INSERT ON</span> wishlist</p>
                    <p className="text-slate-500">// Check if 2nd distinct user</p>
                    <p>IF (count(distinct user_id) == 1) THEN</p>
                    <p className="pl-2 text-green-700">INSERT INTO audit_log 'HOT_DESTINATION'</p>
                    <p className="pl-2">payload: &#123;dest_id, name, user_count: 2&#125;</p>
                </div>
            </motion.div>

            {/* Trigger B: Active User */}
            <motion.div 
                initial={{ opacity: 0, x: 20, y: -20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{delay: 0.2}}
                className="bg-green-50 rounded-xl p-5 border border-green-200 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-2 opacity-10"><Activity size={60} className="text-green-600"/></div>
                <div className="text-xs font-bold text-green-700 uppercase mb-1">Trigger B</div>
                <h4 className="font-bold text-slate-800 mb-2">Active User Identification</h4>
                 <div className="text-[10px] font-mono text-slate-600 space-y-1 bg-white/60 p-2 rounded">
                    <p><span className="text-purple-600">AFTER INSERT ON</span> travel_footprints</p>
                    <p className="text-slate-500">// Check if 6th record</p>
                    <p>IF (count(*) == 5) THEN</p>
                    <p className="pl-2 text-green-700">INSERT INTO audit_log 'ACTIVE_USER'</p>
                    <p className="pl-2">payload: &#123;user_id, count: 6&#125;</p>
                </div>
            </motion.div>

            {/* Trigger C: Wishlist Audit */}
            <motion.div 
                 initial={{ opacity: 0, x: -20, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{delay: 0.3}}
                 className="bg-slate-50 rounded-xl p-5 border border-slate-200 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-2 opacity-10"><Heart size={60} className="text-slate-600"/></div>
                <div className="text-xs font-bold text-slate-500 uppercase mb-1">Trigger C</div>
                <h4 className="font-bold text-slate-800 mb-2">Wishlist Lifecycle Audit</h4>
                <div className="text-[10px] font-mono text-slate-600 space-y-1 bg-white/60 p-2 rounded">
                    <p><span className="text-purple-600">AFTER UPDATE ON</span> wishlist</p>
                    <p className="text-slate-500">// Logic 1: Priority Change</p>
                    <p>IF (OLD.priority != NEW.priority) -> 'UPDATE_PRIORITY'</p>
                    <p className="text-slate-500 mt-1">// Logic 2: Realized</p>
                    <p>IF (Pending -> Realized) -> 'WISHLIST_REALIZED'</p>
                </div>
            </motion.div>

             {/* Trigger D: Expenses Audit */}
             <motion.div 
                 initial={{ opacity: 0, x: 20, y: 20 }} animate={{ opacity: 1, x: 0, y: 0 }} transition={{delay: 0.4}}
                 className="bg-slate-50 rounded-xl p-5 border border-slate-200 relative overflow-hidden"
            >
                <div className="absolute top-0 right-0 p-2 opacity-10"><CreditCard size={60} className="text-slate-600"/></div>
                <div className="text-xs font-bold text-slate-500 uppercase mb-1">Trigger D</div>
                <h4 className="font-bold text-slate-800 mb-2">Expenses Audit Trail</h4>
                <div className="text-[10px] font-mono text-slate-600 space-y-1 bg-white/60 p-2 rounded">
                    <p><span className="text-purple-600">AFTER INSERT/UPDATE/DELETE ON</span> expenses</p>
                    <ul className="list-disc list-inside pl-1 text-slate-700">
                        <li>INSERT -> 'EXPENSE_CREATED'</li>
                        <li>UPDATE -> 'EXPENSE_UPDATED' (if changed)</li>
                        <li>DELETE -> 'EXPENSE_DELETED'</li>
                    </ul>
                    <p className="text-[9px] text-slate-400 mt-1">Logs full JSON payloads for history</p>
                </div>
            </motion.div>
        </div>
    </div>
);

// --- SLIDE 6: Views ---
export const ViewsSlide: React.FC = () => (
    <div className="h-full flex flex-col p-8 md:p-12 bg-slate-50">
         <div className="mb-6 text-center">
            <h3 className="text-2xl font-serif text-slate-900">Data Abstraction Layer: Views</h3>
            <p className="text-slate-500">Decoupling schema complexity from frontend logic.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
            
            {/* View 1 */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col"
            >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4"><Users size={20}/></div>
                <h4 className="font-bold text-slate-800 text-sm mb-1">User_Travel_Wishlist_Overview</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-wide mb-4">用户旅行与愿望清单总览视图</p>
                <div className="flex-1 bg-slate-50 rounded p-3 text-[10px] font-mono text-slate-600 overflow-hidden">
                    <p className="mb-1 font-bold">Fields Included:</p>
                    <ul className="space-y-1 list-disc list-inside">
                        <li>User Profile</li>
                        <li>travel_footprints</li>
                        <li>wishlist</li>
                        <li>Destination Info</li>
                        <li>Wish Fulfilled?</li>
                    </ul>
                </div>
                <p className="mt-3 text-[10px] text-slate-500 italic">应用: 展示用户“已经去 + 想去”整体画像</p>
            </motion.div>

             {/* View 2 */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col"
            >
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mb-4"><Zap size={20}/></div>
                <h4 className="font-bold text-slate-800 text-sm mb-1">Hot_Destinations_View</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-wide mb-4">热门目的地视图</p>
                 <div className="flex-1 bg-slate-50 rounded p-3 text-[10px] font-mono text-slate-600 overflow-hidden">
                    <p className="mb-1 font-bold">Fields Included:</p>
                    <ul className="space-y-1 list-disc list-inside">
                        <li>destination_id</li>
                        <li>destination name</li>
                        <li>user_count</li>
                        <li>country</li>
                        <li>best_season</li>
                        <li>budget_level</li>
                    </ul>
                </div>
                 <p className="mt-3 text-[10px] text-slate-500 italic">应用: 目的地热度统计 (Linked to Trigger A)</p>
            </motion.div>

             {/* View 3 */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col"
            >
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-4"><Activity size={20}/></div>
                <h4 className="font-bold text-slate-800 text-sm mb-1">Active_User_Overview</h4>
                <p className="text-[10px] text-slate-400 uppercase tracking-wide mb-4">用户活跃度视图</p>
                <div className="flex-1 bg-slate-50 rounded p-3 text-[10px] font-mono text-slate-600 overflow-hidden">
                    <p className="mb-1 font-bold">Fields Included:</p>
                    <ul className="space-y-1 list-disc list-inside">
                        <li>user_id</li>
                        <li>username</li>
                        <li>footprint_count</li>
                        <li>active_status (Yes/No)</li>
                    </ul>
                </div>
                <p className="mt-3 text-[10px] text-slate-500 italic">应用: 发现高活跃用户 (Linked to Trigger B)</p>
            </motion.div>

        </div>
    </div>
);

// --- SLIDE 7: Performance ---
export const PerformanceSlide: React.FC = () => (
    <div className="h-full flex flex-col p-12">
        <div className="mb-10">
            <h3 className="text-2xl font-serif text-slate-900">Performance Optimization</h3>
            <p className="text-slate-500">Stored Procedures & Strategic Indexing.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1">
            
            {/* Strategy 1: Stored Procedures */}
            <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm relative overflow-hidden group hover:border-purple-200 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-5"><Code size={120} /></div>
                
                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center text-purple-600"><Code size={16}/></div>
                    Stored Procedure
                </h4>
                
                <div className="space-y-4">
                    <div className="text-sm font-semibold text-slate-700">User Travel Budget Report (用户旅行预算报告)</div>
                    <div className="bg-slate-50 p-4 rounded border border-slate-100 font-mono text-xs text-slate-600">
                        <span className="text-purple-600">CALL</span> Get_Travel_Budget_Report(user_id);
                    </div>
                    <ul className="text-xs text-slate-600 space-y-2 ml-1 list-disc list-inside">
                        <li><strong>Input:</strong> user_id</li>
                        <li><strong>Output:</strong> Total Amount / Count <span className="bg-purple-50 px-1 rounded text-purple-700 font-bold">per Category</span></li>
                        <li className="text-slate-400 italic">Scalable to Month/Year statistics</li>
                    </ul>
                </div>
            </div>

             {/* Strategy 2: Indexing */}
             <div className="p-8 bg-white border border-slate-200 rounded-xl shadow-sm relative overflow-hidden group hover:border-blue-200 transition-colors">
                <div className="absolute top-0 right-0 p-4 opacity-5"><Search size={120} /></div>

                <h4 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600"><Search size={16}/></div>
                    Index Strategy
                </h4>

                <div className="space-y-2 text-xs">
                    <div className="bg-slate-50 p-3 rounded border border-slate-100 font-mono text-slate-600 space-y-2">
                        <div>
                            <p className="text-[10px] text-slate-400 mb-0.5">Core (Trigger Support)</p>
                            <p>wishlist(destination_id, user_id)</p>
                            <p>travel_footprints(user_id)</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-slate-400 mb-0.5">Audit Analysis</p>
                            <p>audit_log(action)</p>
                            <p>audit_log(target_table, target_id)</p>
                        </div>
                        <div>
                             <p className="text-[10px] text-slate-400 mb-0.5">General Query</p>
                            <p>wishlist(destination_id)</p>
                            <p>expenses(user_id)</p>
                            <p>travel_footprints(user_id, date)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- SLIDE 8: Conclusion ---
export const ConclusionSlide: React.FC = () => (
    <div className="h-full flex flex-col items-center justify-center p-12 bg-steel-blue text-white text-center">
        <h2 className="text-4xl font-serif mb-12">Summary</h2>
        
        <div className="grid grid-cols-3 gap-8 max-w-4xl w-full">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                className="flex flex-col items-center gap-4"
            >
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Layers size={32} />
                </div>
                <h3 className="text-xl font-bold">Integration</h3>
                <p className="text-sm text-blue-100">Breaking data silos with a unified schema.</p>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                className="flex flex-col items-center gap-4"
            >
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <Zap size={32} />
                </div>
                <h3 className="text-xl font-bold">Automation</h3>
                <p className="text-sm text-blue-100">Triggers driving business logic automatically.</p>
            </motion.div>

             <motion.div 
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                className="flex flex-col items-center gap-4"
            >
                <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                    <FileText size={32} />
                </div>
                <h3 className="text-xl font-bold">Intelligence</h3>
                <p className="text-sm text-blue-100">Views and Procedures empowering analysis.</p>
            </motion.div>
        </div>

        <div className="mt-16 opacity-60 font-serif italic">
            Thank you.
        </div>
    </div>
);
