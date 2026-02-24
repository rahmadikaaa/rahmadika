import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    TrendingUp, MapPin, Clock, Cloud, Sparkles, Filter,
    BarChart2, PieChart, Zap, CheckCircle2, ChevronDown, Loader2
} from 'lucide-react';

// ─── Static Data ────────────────────────────────────────────────────────────

const DAILY_EARNINGS = [
    { day: 'Sen', gojek: 185000, grab: 92000 },
    { day: 'Sel', gojek: 210000, grab: 115000 },
    { day: 'Rab', gojek: 165000, grab: 88000 },
    { day: 'Kam', gojek: 240000, grab: 130000 },
    { day: 'Jum', gojek: 295000, grab: 155000 },
    { day: 'Sab', gojek: 320000, grab: 180000 },
    { day: 'Min', gojek: 275000, grab: 145000 },
];

const AREAS = [
    { name: 'Sudirman', orders: 48, lat: 72, lng: 50 },
    { name: 'Kemang', orders: 35, lat: 55, lng: 72 },
    { name: 'Kelapa Gading', orders: 42, lat: 28, lng: 30 },
    { name: 'Tanah Abang', orders: 56, lat: 60, lng: 38 },
    { name: 'Senayan', orders: 31, lat: 68, lng: 62 },
    { name: 'Blok M', orders: 38, lat: 48, lng: 78 },
    { name: 'Grogol', orders: 27, lat: 40, lng: 28 },
    { name: 'Manggarai', orders: 44, lat: 55, lng: 55 },
];

const BUSY_HOURS = [
    { hour: '06', orders: 22 }, { hour: '07', orders: 38 },
    { hour: '08', orders: 62 }, { hour: '09', orders: 45 },
    { hour: '10', orders: 30 }, { hour: '11', orders: 35 },
    { hour: '12', orders: 58 }, { hour: '13', orders: 50 },
    { hour: '14', orders: 28 }, { hour: '15', orders: 32 },
    { hour: '16', orders: 44 }, { hour: '17', orders: 70 },
    { hour: '18', orders: 85 }, { hour: '19', orders: 72 },
    { hour: '20', orders: 55 }, { hour: '21', orders: 40 },
];

const WEATHER = [
    { label: 'Cerah ☀️', value: 55, color: '#F59E0B' },
    { label: 'Mendung 🌥️', value: 25, color: '#64748B' },
    { label: 'Hujan 🌧️', value: 20, color: '#3B82F6' },
];

const AI_TIPS_MOCK = [
    '🚀 Sabtu & Jumat adalah hari terbaik — fokuskan jam online di hari tersebut untuk +30% pendapatan.',
    '📍 Area Tanah Abang & Sudirman memiliki order density tertinggi. Posisikan diri di sana saat jam sibuk 17.00–19.00.',
    '🌤️ Saat hujan, aktifkan ride & food delivery bersamaan — demand naik 40% tapi supply turun, sehingga surge pricing lebih sering muncul.',
];

const fmt = (v: number) =>
    v >= 1000000
        ? `Rp ${(v / 1000000).toFixed(1)}jt`
        : `Rp ${(v / 1000).toFixed(0)}rb`;

// ─── Sub-components ──────────────────────────────────────────────────────────

type Tab = 'earnings' | 'heatmap' | 'hours' | 'weather';

function TabButton({ label, icon, active, onClick }: {
    label: string; icon: React.ReactNode; active: boolean; onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${active
                ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/40'
                : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/60 border border-transparent'
                }`}
        >
            {icon}
            {label}
        </button>
    );
}

// Daily Earnings bar chart (pure CSS/SVG-like)
function EarningsChart({ showTips, onGetTips, tipsLoading }: {
    showTips: boolean;
    onGetTips: () => void;
    tipsLoading: boolean;
}) {
    const maxVal = Math.max(...DAILY_EARNINGS.map(d => d.gojek + d.grab));
    return (
        <div className="space-y-4">
            <div className="flex items-end gap-2 h-36">
                {DAILY_EARNINGS.map((d, i) => {
                    const total = d.gojek + d.grab;
                    const gH = (d.gojek / maxVal) * 100;
                    const grH = (d.grab / maxVal) * 100;
                    return (
                        <div key={d.day} className="flex-1 flex flex-col items-center gap-1 group">
                            <div className="w-full flex flex-col justify-end gap-0.5" style={{ height: '112px' }}>
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    transition={{ delay: i * 0.06, duration: 0.5, ease: 'easeOut' }}
                                    style={{ height: `${grH}%`, originY: 1 }}
                                    className="w-full bg-green-500/60 rounded-t-sm"
                                    title={`Grab: ${fmt(d.grab)}`}
                                />
                                <motion.div
                                    initial={{ scaleY: 0 }}
                                    animate={{ scaleY: 1 }}
                                    transition={{ delay: i * 0.06 + 0.05, duration: 0.5, ease: 'easeOut' }}
                                    style={{ height: `${gH}%`, originY: 1 }}
                                    className="w-full bg-cyan-500/70 rounded-t-sm group-hover:bg-cyan-400/80 transition-colors"
                                    title={`Gojek: ${fmt(d.gojek)}`}
                                />
                            </div>
                            <span className="text-[10px] text-slate-500 font-mono">{d.day}</span>
                            <span className="text-[9px] text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">{fmt(total)}</span>
                        </div>
                    );
                })}
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1"><span className="w-3 h-2 rounded bg-cyan-500/70 inline-block" />Gojek</span>
                <span className="flex items-center gap-1"><span className="w-3 h-2 rounded bg-green-500/60 inline-block" />Grab</span>
                <div className="ml-auto">
                    <motion.button
                        onClick={onGetTips}
                        disabled={tipsLoading}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 text-white text-xs font-bold shadow-lg shadow-purple-500/20 disabled:opacity-60"
                    >
                        {tipsLoading
                            ? <><Loader2 size={12} className="animate-spin" /> Menganalisis...</>
                            : <><Sparkles size={12} /> Dapatkan Tips AI</>
                        }
                    </motion.button>
                </div>
            </div>

            <AnimatePresence>
                {showTips && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 rounded-xl bg-gradient-to-br from-violet-900/30 to-purple-900/20 border border-purple-500/30 space-y-2"
                    >
                        <p className="text-purple-300 font-bold text-xs flex items-center gap-1.5 mb-3">
                            <Sparkles size={13} /> Rekomendasi Gemini AI
                        </p>
                        {AI_TIPS_MOCK.map((tip, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.15 }}
                                className="flex items-start gap-2 text-xs text-slate-300"
                            >
                                <CheckCircle2 size={12} className="text-purple-400 mt-0.5 flex-shrink-0" />
                                {tip}
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

// Area Heatmap scatter simulation
function HeatmapChart() {
    const maxOrders = Math.max(...AREAS.map(a => a.orders));
    return (
        <div className="relative bg-slate-950/60 rounded-xl border border-slate-800 overflow-hidden" style={{ height: 200 }}>
            {/* Grid lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
            {AREAS.map((area, i) => {
                const size = 18 + (area.orders / maxOrders) * 28;
                const intensity = area.orders / maxOrders;
                const r = Math.round(intensity * 255);
                const g = Math.round((1 - intensity) * 200 + 60);
                return (
                    <motion.div
                        key={area.name}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 0.85 }}
                        transition={{ delay: i * 0.08 + 0.2, type: 'spring' }}
                        className="absolute flex items-center justify-center cursor-pointer group"
                        style={{
                            left: `${area.lng}%`,
                            top: `${area.lat}%`,
                            width: size,
                            height: size,
                            marginLeft: -size / 2,
                            marginTop: -size / 2,
                        }}
                    >
                        <div
                            className="w-full h-full rounded-full animate-pulse"
                            style={{ backgroundColor: `rgba(${r}, ${g}, 80, 0.6)`, boxShadow: `0 0 ${size / 2}px rgba(${r}, ${g}, 80, 0.35)` }}
                        />
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 px-2 py-1 rounded text-[9px] text-white whitespace-nowrap z-10">
                            {area.name}: {area.orders} order/hr
                        </div>
                        <span className="absolute text-[8px] font-bold text-white/80">{area.orders}</span>
                    </motion.div>
                );
            })}
            <div className="absolute bottom-2 right-3 text-[9px] text-slate-600">Hover area untuk detail</div>
        </div>
    );
}

// Busy Hours bar chart
function BusyHoursChart() {
    const maxOrders = Math.max(...BUSY_HOURS.map(h => h.orders));
    return (
        <div className="space-y-2">
            <div className="flex items-end gap-1 h-32">
                {BUSY_HOURS.map((h, i) => {
                    const pct = (h.orders / maxOrders) * 100;
                    const isPeak = h.orders >= 60;
                    return (
                        <div key={h.hour} className="flex-1 flex flex-col items-center gap-0.5 group">
                            <motion.div
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ delay: i * 0.04, ease: 'easeOut' }}
                                style={{ height: `${pct}%`, originY: 1 }}
                                className={`w-full rounded-t-sm transition-colors ${isPeak ? 'bg-orange-500/80 group-hover:bg-orange-400' : 'bg-slate-600/70 group-hover:bg-slate-500'
                                    }`}
                            />
                            <span className="text-[8px] text-slate-600 font-mono">{h.hour}</span>
                        </div>
                    );
                })}
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1"><span className="w-3 h-2 rounded bg-orange-500/80 inline-block" />Jam Puncak</span>
                <span className="flex items-center gap-1"><span className="w-3 h-2 rounded bg-slate-600/70 inline-block" />Normal</span>
                <span className="ml-auto text-slate-500 text-[10px]">Peak: 17.00 – 19.00 WIB</span>
            </div>
        </div>
    );
}

// Weather influence pie chart (pure SVG)
function WeatherChart() {
    const total = WEATHER.reduce((s, w) => s + w.value, 0);
    let cumAngle = 0;
    const svgSize = 140;
    const cx = svgSize / 2;
    const cy = svgSize / 2;
    const r = 52;
    const ri = 28;

    const slices = WEATHER.map(w => {
        const angle = (w.value / total) * 360;
        const startAngle = cumAngle;
        cumAngle += angle;
        const toRad = (a: number) => ((a - 90) * Math.PI) / 180;
        const x1 = cx + r * Math.cos(toRad(startAngle));
        const y1 = cy + r * Math.sin(toRad(startAngle));
        const x2 = cx + r * Math.cos(toRad(startAngle + angle));
        const y2 = cy + r * Math.sin(toRad(startAngle + angle));
        const xi1 = cx + ri * Math.cos(toRad(startAngle));
        const yi1 = cy + ri * Math.sin(toRad(startAngle));
        const xi2 = cx + ri * Math.cos(toRad(startAngle + angle));
        const yi2 = cy + ri * Math.sin(toRad(startAngle + angle));
        const large = angle > 180 ? 1 : 0;
        const d = `M${xi1},${yi1} L${x1},${y1} A${r},${r},0,${large},1,${x2},${y2} L${xi2},${yi2} A${ri},${ri},0,${large},0,${xi1},${yi1} Z`;
        return { ...w, d, angle };
    });

    return (
        <div className="flex items-center gap-4">
            <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`} className="flex-shrink-0">
                {slices.map((s, i) => (
                    <motion.path
                        key={s.label}
                        d={s.d}
                        fill={s.color}
                        opacity={0.85}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.85 }}
                        transition={{ delay: i * 0.2 }}
                        className="hover:opacity-100 transition-opacity cursor-pointer"
                    />
                ))}
            </svg>
            <div className="space-y-2 flex-1">
                {WEATHER.map(w => (
                    <div key={w.label} className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: w.color }} />
                        <span className="text-xs text-slate-300 flex-1">{w.label}</span>
                        <span className="text-xs font-bold text-slate-200">{w.value}%</span>
                    </div>
                ))}
                <p className="text-[10px] text-slate-500 pt-1 border-t border-slate-800 mt-2">
                    Hujan ↑ surge 40% — aktifkan semua layanan saat hujan.
                </p>
            </div>
        </div>
    );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export const ProjectOjolBoost: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('earnings');
    const [showTips, setShowTips] = useState(false);
    const [tipsLoading, setTipsLoading] = useState(false);
    const [activeFilter, setActiveFilter] = useState({ area: 'Semua', weather: 'Semua', app: 'Semua' });

    const totalWeekly = DAILY_EARNINGS.reduce((s, d) => s + d.gojek + d.grab, 0);
    const totalOrders = AREAS.reduce((s, a) => s + a.orders, 0);

    const handleGetTips = () => {
        setTipsLoading(true);
        setShowTips(false);
        setTimeout(() => {
            setTipsLoading(false);
            setShowTips(true);
        }, 2000);
    };

    const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
        { id: 'earnings', label: 'Pendapatan', icon: <TrendingUp size={13} /> },
        { id: 'heatmap', label: 'Area Hotspot', icon: <MapPin size={13} /> },
        { id: 'hours', label: 'Jam Sibuk', icon: <Clock size={13} /> },
        { id: 'weather', label: 'Cuaca', icon: <Cloud size={13} /> },
    ];

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg">
            {/* Header */}
            <div className="p-6 border-b border-slate-800">
                <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                        <BarChart2 className="text-cyan-400" size={22} />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-xl font-bold text-white">OjolBoost Dashboard</h3>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-violet-500/15 text-violet-400 border border-violet-500/25 flex items-center gap-1">
                                <Sparkles size={9} /> AI-Powered
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm mt-1">
                            Dasbor analitik mobile-first untuk pengemudi ojol — integrasikan data & tingkatkan penghasilan.
                        </p>
                    </div>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Gemini API'].map(t => (
                        <span key={t} className="px-2.5 py-1 rounded-md text-[10px] font-mono font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                            {t}
                        </span>
                    ))}
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-3 gap-3">
                    {[
                        { label: 'Total Mingguan', value: fmt(totalWeekly), icon: <TrendingUp size={14} className="text-cyan-400" />, color: 'cyan' },
                        { label: 'Total Order/hr', value: `${totalOrders} order`, icon: <Zap size={14} className="text-orange-400" />, color: 'orange' },
                        { label: 'Area Terbaik', value: 'Tanah Abang', icon: <MapPin size={14} className="text-green-400" />, color: 'green' },
                    ].map(s => (
                        <div key={s.label} className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50 text-center">
                            <div className="flex justify-center mb-1">{s.icon}</div>
                            <div className="text-sm font-bold text-white">{s.value}</div>
                            <div className="text-[9px] text-slate-500">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Filters */}
            <div className="px-6 py-3 border-b border-slate-800 bg-slate-950/40 flex flex-wrap items-center gap-2">
                <Filter size={12} className="text-slate-500" />
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mr-1">Filter:</span>
                {(['Semua', 'Sudirman', 'Kemang', 'Tanah Abang'] as const).map(opt => (
                    <button
                        key={opt}
                        onClick={() => setActiveFilter(f => ({ ...f, area: opt }))}
                        className={`px-2.5 py-1 rounded text-[10px] font-semibold transition-all ${activeFilter.area === opt
                            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                            : 'text-slate-500 hover:text-slate-300 border border-transparent hover:border-slate-700'
                            }`}
                    >
                        {opt}
                    </button>
                ))}
                <div className="ml-auto">
                    <div className="relative inline-flex items-center gap-1 px-2.5 py-1 rounded border border-slate-700 text-[10px] text-slate-400 bg-slate-800/50 cursor-pointer hover:border-slate-600 transition-colors">
                        App: {activeFilter.app} <ChevronDown size={10} />
                    </div>
                </div>
            </div>

            {/* Tab nav */}
            <div className="px-6 pt-4 flex gap-2 flex-wrap">
                {tabs.map(t => (
                    <TabButton key={t.id} label={t.label} icon={t.icon} active={activeTab === t.id} onClick={() => setActiveTab(t.id)} />
                ))}
            </div>

            {/* Tab content */}
            <div className="p-6 min-h-[300px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {activeTab === 'earnings' && (
                            <>
                                <h4 className="text-sm font-bold text-slate-300 mb-4 flex items-center gap-2">
                                    <TrendingUp size={14} className="text-cyan-400" />
                                    Pendapatan Harian (Minggu Ini)
                                </h4>
                                <EarningsChart showTips={showTips} onGetTips={handleGetTips} tipsLoading={tipsLoading} />
                            </>
                        )}
                        {activeTab === 'heatmap' && (
                            <>
                                <h4 className="text-sm font-bold text-slate-300 mb-4 flex items-center gap-2">
                                    <MapPin size={14} className="text-red-400" />
                                    Peta Area Hotspot (Order Density)
                                </h4>
                                <HeatmapChart />
                                <p className="text-[10px] text-slate-500 mt-3 text-center">Ukuran & warna lingkaran = jumlah order per jam. Merah = tertinggi.</p>
                            </>
                        )}
                        {activeTab === 'hours' && (
                            <>
                                <h4 className="text-sm font-bold text-slate-300 mb-4 flex items-center gap-2">
                                    <Clock size={14} className="text-orange-400" />
                                    Distribusi Order per Jam (Rata-rata Harian)
                                </h4>
                                <BusyHoursChart />
                            </>
                        )}
                        {activeTab === 'weather' && (
                            <>
                                <h4 className="text-sm font-bold text-slate-300 mb-4 flex items-center gap-2">
                                    <Cloud size={14} className="text-blue-400" />
                                    Pengaruh Cuaca terhadap Total Order
                                </h4>
                                <WeatherChart />
                            </>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-slate-800 bg-slate-950/40 flex items-center justify-between">
                <span className="text-[10px] text-slate-600">Data bersumber dari simulasi — siap dihubungkan ke backend API</span>
                <div className="flex items-center gap-1.5 text-[10px] text-violet-400">
                    <Sparkles size={10} /> Powered by Gemini API
                </div>
            </div>
        </div>
    );
};
