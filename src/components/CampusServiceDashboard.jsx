import React, { useMemo, useState } from 'react';
import services from '../data/campusServices.json';

const categoryOptions = [...new Set(services.map((item) => item.category))];
const statusOptions = [...new Set(services.map((item) => item.status))];
const formatCurrency = (value) =>
  value === 0
    ? 'Gratis'
    : new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0,
      }).format(value);

const getStatusBadge = (status) => {
  if (status === 'Tersedia') {
    return 'bg-emerald-100 text-emerald-700';
  }

  return 'bg-rose-100 text-rose-700';
};

const CampusServiceDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('Semua');
  const [statusFilter, setStatusFilter] = useState('Semua');
  const [viewMode, setViewMode] = useState('guest');

  const filteredServices = useMemo(() => {
    return services.filter((service) => {
      const isMatchedSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase());
      const isMatchedCategory = categoryFilter === 'Semua' || service.category === categoryFilter;
      const isMatchedStatus = statusFilter === 'Semua' || service.status === statusFilter;

      return isMatchedSearch && isMatchedCategory && isMatchedStatus;
    });
  }, [searchTerm, categoryFilter, statusFilter]);

  const statCards = [
    { label: 'Total Layanan', value: services.length },
    { label: 'Hasil Filter', value: filteredServices.length },
    {
      label: 'Status Tersedia',
      value: filteredServices.filter((item) => item.status === 'Tersedia').length,
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-3xl border border-orange-100 bg-gradient-to-br from-white via-orange-50/30 to-slate-50 p-5 shadow-[0_15px_45px_rgba(2,6,23,0.08)] sm:p-7">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Campus Service Hub
            </h2>
            <p className="mt-1 text-sm text-slate-600 sm:text-base">
              20 data layanan kampus dengan tampilan Guest dan Admin.
            </p>
          </div>

          <div className="inline-flex rounded-xl bg-white p-1 shadow-sm ring-1 ring-slate-200">
            <button
              type="button"
              onClick={() => setViewMode('guest')}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                viewMode === 'guest'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Guest View
            </button>
            <button
              type="button"
              onClick={() => setViewMode('admin')}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                viewMode === 'admin'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Admin View
            </button>
          </div>
        </div>

        <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {statCards.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-slate-200 bg-white/90 px-4 py-3 shadow-sm backdrop-blur"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{stat.label}</p>
              <p className="mt-1 text-2xl font-extrabold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-3">
          <input
            type="text"
            placeholder="Search layanan..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-800 outline-none ring-orange-500/40 transition focus:border-orange-400 focus:ring-4"
          />

          <select
            value={categoryFilter}
            onChange={(event) => setCategoryFilter(event.target.value)}
            className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-800 outline-none ring-orange-500/40 transition focus:border-orange-400 focus:ring-4"
          >
            <option value="Semua">Filter Kategori</option>
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={statusFilter}
            onChange={(event) => setStatusFilter(event.target.value)}
            className="h-11 rounded-xl border border-slate-300 bg-white px-3 text-sm text-slate-800 outline-none ring-orange-500/40 transition focus:border-orange-400 focus:ring-4"
          >
            <option value="Semua">Filter Status</option>
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        {viewMode === 'guest' ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="group overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(255,95,31,0.2)]"
              >
                <div className="relative overflow-hidden bg-slate-950">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-44 w-full object-cover opacity-90 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow">
                    {service.category}
                  </div>
                </div>

                <div className="space-y-3 px-5 pb-6 pt-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Service #{service.id}
                    </span>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusBadge(service.status)}`}
                    >
                      {service.status}
                    </span>
                  </div>

                  <h3 className="line-clamp-2 min-h-12 px-0.5 text-lg font-extrabold leading-6 text-slate-900">
                    {service.name}
                  </h3>

                  <div className="rounded-2xl border border-orange-100 bg-orange-50/60 px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-orange-700">Lokasi</p>
                    <p className="mt-1 pr-1 text-sm font-medium leading-relaxed text-slate-700">
                      {service.location.building}, Lantai {service.location.floor} ({service.location.room})
                    </p>

                    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-orange-700">
                      Jadwal
                    </p>
                    <p className="mt-1 pr-1 text-sm font-medium leading-relaxed text-slate-700">
                      {service.schedule.day} - {service.schedule.start} s/d {service.schedule.end}
                    </p>
                  </div>

                  <div className="mx-1 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 rounded-2xl bg-slate-950 px-5 py-3 text-sm">
                    <span className="truncate font-bold text-orange-300">{formatCurrency(service.price)}</span>
                    <span className="rounded-full bg-slate-800 px-2.5 py-1 font-semibold text-white">
                      ⭐ {service.rating}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="sticky top-0 bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-700">
                    ID
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-700">
                    Nama Layanan
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-700">
                    Kategori
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-700">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-700">
                    Lokasi
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-700">
                    Kontak
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide text-slate-700">
                    Harga
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {filteredServices.map((service) => (
                  <tr key={service.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3 text-sm text-slate-700">{service.id}</td>
                    <td className="px-4 py-3 text-sm font-semibold text-slate-900">{service.name}</td>
                    <td className="px-4 py-3 text-sm text-slate-700">{service.category}</td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      <span
                        className={`rounded-full px-2.5 py-1 text-xs font-semibold ${getStatusBadge(service.status)}`}
                      >
                        {service.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">
                      {service.location.building} {service.location.room}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-700">{service.contact.email}</td>
                    <td className="px-4 py-3 text-sm font-medium text-slate-700">
                      {formatCurrency(service.price)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {filteredServices.length === 0 && (
          <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
            Data tidak ditemukan. Coba ubah kata kunci pencarian atau filter.
          </p>
        )}
      </div>
    </section>
  );
};

export default CampusServiceDashboard;
