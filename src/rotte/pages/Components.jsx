import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";
import StatCard from "../components/StatCard";
import InputField from "../components/InputField";
import TextArea from "../components/TextArea";
import SelectField from "../components/SelectField";
import Alert from "../components/Alert";
import Modal from "../components/Modal";
import Spinner from "../components/Spinner";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import PromoBanner from "../components/PromoBanner";

import {
  Sparkles, ShoppingBag, Info, User as UserIcon,
  Smile, Layers, BookOpen, TrendingUp, Tag, Truck, Star
} from "lucide-react";

const MAROON = "#7B1C1C";
const MAROON_DARK = "#5A1313";
const MAROON_MUTED = "#F9EFEF";
const BROWN = "#8B5E2A";
const BROWN_DARK = "#3D2509";
const BORDER = "#EDD9B8";

// ============================================================================= //
// REUSABLE SECTION WRAPPER — matches Promos/Loyalty page card style
// ============================================================================= //
function Section({ number, name, description, category, children }) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: 16,
      border: "1px solid #EEE",
      overflow: "hidden",
      marginBottom: 20,
      boxShadow: "0 4px 18px rgba(139,94,42,0.03)",
    }}>
      {/* Card Header */}
      <div style={{
        padding: "16px 22px",
        borderBottom: "1px solid #F5F5F5",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 12,
        flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 28, height: 28, borderRadius: 8,
            background: MAROON_MUTED, color: MAROON,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 11, fontWeight: 900,
          }}>{number}</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, color: BROWN_DARK, display: "flex", alignItems: "center", gap: 6 }}>
              <BookOpen size={13} style={{ color: BROWN }} />
              {name}
            </div>
            <div style={{ fontSize: 11, color: "#999", marginTop: 2 }}>{description}</div>
          </div>
        </div>
        <span style={{
          background: "#FFFBF5", color: BROWN,
          border: `1px solid ${BORDER}`,
          padding: "3px 10px", borderRadius: 20,
          fontSize: 10, fontWeight: 800,
          textTransform: "uppercase", letterSpacing: 0.5
        }}>
          {category}
        </span>
      </div>
      {/* Card Body */}
      <div style={{ padding: "20px 22px" }}>
        {children}
      </div>
    </div>
  );
}

// Small label for groups within a section
function Label({ children }) {
  return (
    <div style={{
      fontSize: 10, fontWeight: 800, color: "#CCC",
      textTransform: "uppercase", letterSpacing: 0.6,
      marginBottom: 10,
    }}>{children}</div>
  );
}

// =============================================================================
// MAIN PAGE
// =============================================================================
export default function ComponentsPage() {
  const [activeTab, setActiveTab] = useState("basic");
  const [btnLoading, setBtnLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [alertVisible, setAlertVisible] = useState(true);
  const [inputText, setInputText] = useState("");
  const [selectVal, setSelectVal] = useState("");

  const tabs = [
    { id: "basic",    label: "Basic Components" },
    { id: "layout",   label: "Layout & Sections" },
    { id: "data",     label: "Data Display" },
    { id: "form",     label: "Form & Inputs" },
    { id: "feedback", label: "Feedback & Modals" },
  ];

  const tableHeaders = ["ID", "Nama Kue", "Kategori", "Harga", "Status"];
  const tableRows = [
    ["ROT-001", "Roti Manis Cokelat", "Roti Manis", "Rp 8.000",  <Badge type="success">Tersedia</Badge>],
    ["ROT-002", "Brownies Panggang",  "Cake",       "Rp 45.000", <Badge type="success">Tersedia</Badge>],
    ["ROT-003", "Croissant Almond",   "Pastry",     "Rp 18.000", <Badge type="danger">Habis</Badge>],
  ];

  return (
    <div style={{ background: "#F7F7F7", minHeight: "100vh", paddingBottom: 40, fontFamily: "Barlow, Inter, sans-serif" }}>

      {/* ── PAGE HEADER ── */}
      <PageHeader title="Component Library" breadcrumb={["Dashboard", "Components"]}>
        <button style={{
          display: "flex", alignItems: "center", gap: 8,
          background: MAROON, color: "#fff",
          border: "none", borderRadius: 8,
          padding: "9px 18px", fontSize: 13, fontWeight: 700, cursor: "default"
        }}>
          <Layers size={13} /> 18 Komponen Aktif
        </button>
      </PageHeader>

      {/* ── TAB NAVIGATION ── */}
      <div style={{
        display: "flex", gap: 8, flexWrap: "wrap",
        background: "#fff", padding: "12px 16px",
        borderRadius: 14, border: "1px solid #EEE",
        marginBottom: 20,
      }}>
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: "7px 16px", borderRadius: 20,
              fontSize: 12, fontWeight: 700, cursor: "pointer", border: "none",
              background: activeTab === tab.id ? MAROON : "#F5F5F5",
              color:      activeTab === tab.id ? "#fff"  : "#666",
              transition: "all 0.15s",
            }}
          >{tab.label}</button>
        ))}
      </div>

      {/* ================================================================== */}
      {/* TAB 1 · BASIC COMPONENTS                                           */}
      {/* ================================================================== */}
      {activeTab === "basic" && (
        <div>
          {/* ── BUTTON ── */}
          <Section number="01" name="Button Component" description="Tombol aksi dengan 4 varian, 3 ukuran, dan status loading." category="Basic">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <Label>Varian (Solid · Outline · Ghost · Danger)</Label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  <Button type="primary">Primary</Button>
                  <Button type="primary" variant="outline">Outline</Button>
                  <Button type="primary" variant="ghost">Ghost</Button>
                  <Button type="danger">Danger</Button>
                </div>
              </div>
              <div>
                <Label>Ukuran (sm · md · lg)</Label>
                <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10 }}>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                </div>
              </div>
              <div>
                <Label>Simulasi Loading Interaktif</Label>
                <Button
                  type="primary"
                  isLoading={btnLoading}
                  icon={Sparkles}
                  onClick={() => { setBtnLoading(true); setTimeout(() => setBtnLoading(false), 2000); }}
                >
                  {btnLoading ? "Memuat Data..." : "Klik untuk Simulasi"}
                </Button>
              </div>
            </div>
          </Section>

          {/* ── BADGE ── */}
          <Section number="02" name="Badge Component" description="Label status warna untuk menandai kondisi data secara instan." category="Basic">
            <Label>5 Variasi Warna Status</Label>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <Badge type="neutral">Neutral</Badge>
              <Badge type="success">Tersedia</Badge>
              <Badge type="warning">Menunggu</Badge>
              <Badge type="danger">Habis</Badge>
              <Badge type="info">Diproses</Badge>
            </div>
          </Section>

          {/* ── AVATAR ── */}
          <Section number="03" name="Avatar Component" description="Foto profil bulat dengan fallback inisial nama jika gambar gagal dimuat." category="Basic">
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <Label>Dengan Gambar (sm · md · lg)</Label>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Admin" size="sm" />
                  <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Admin" size="md" />
                  <Avatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150" alt="Admin" size="lg" />
                </div>
              </div>
              <div>
                <Label>Fallback Inisial Huruf (sm · md · lg)</Label>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <Avatar name="Admin Rotte" size="sm" />
                  <Avatar name="Budi Santoso" size="md" />
                  <Avatar name="Siti Rahma"  size="lg" />
                </div>
              </div>
            </div>
          </Section>
        </div>
      )}

      {/* ================================================================== */}
      {/* TAB 2 · LAYOUT & SECTIONS                                          */}
      {/* ================================================================== */}
      {activeTab === "layout" && (
        <div>
          {/* ── HERO ── */}
          <Section number="04" name="HeroSection Component" description="Banner sambutan utama halaman dengan tombol ajakan aksi." category="Section">
            <HeroSection
              title="Portal CRM Rotte Bakery"
              description="Kelola data pelanggan, pantau statistik harian, dan kendalikan promosi cabang dalam satu dasbor terpadu."
              ctaText="Buka Dashboard"
              onCtaClick={() => alert("Menuju Dashboard!")}
            />
          </Section>

          {/* ── FEATURE ── */}
          <Section number="05" name="FeatureSection Component" description="Grid tiga kolom yang menyajikan poin keunggulan layanan." category="Section">
            <FeatureSection
              title="Keunggulan CRM Rotte"
              subtitle="Tiga pilar utama operasional toko roti modern."
              features={[
                { icon: ShoppingBag, title: "Manajemen Real-time",  description: "Pantau pesanan roti dari seluruh cabang secara instan." },
                { icon: Star,        title: "Poin Loyalitas",        description: "Reward otomatis untuk meningkatkan transaksi berulang." },
                { icon: TrendingUp,  title: "Laporan Omzet",         description: "Diagram statistik bulanan tanpa hitung manual." },
              ]}
            />
          </Section>

          {/* ── PROMO BANNER ── */}
          <Section number="06" name="PromoBanner Component" description="Spanduk promosi dengan kode kupon yang dapat disalin langsung." category="Section">
            <PromoBanner
              title="Diskon 25% Hari Kemerdekaan!"
              description="Berlaku untuk pembelian Roti Tawar Gandum di semua outlet."
              code="MERDEKA25"
              ctaText="Klaim Kupon"
              onClaimClick={() => {}}
            />
          </Section>
        </div>
      )}

      {/* ================================================================== */}
      {/* TAB 3 · DATA DISPLAY                                               */}
      {/* ================================================================== */}
      {activeTab === "data" && (
        <div>
          {/* ── STAT CARD ── */}
          <Section number="07" name="StatCard Component" description="Kartu ringkasan statistik bisnis dengan indikator tren naik/turun." category="Data Display">
            <Label>3 Variasi Warna Tema (gold · red · green)</Label>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <StatCard title="Total Pendapatan"  value="Rp 128.5 Jt"  icon={ShoppingBag} change="15.4%" isPositive={true}  color="gold"  />
              <StatCard title="Pesanan Batal"     value="14 Transaksi"  icon={Info}         change="2.8%"  isPositive={false} color="red"   />
              <StatCard title="Pelanggan Baru"    value="1.420 Jiwa"   icon={UserIcon}     change="8.2%"  isPositive={true}  color="green" />
            </div>
          </Section>

          {/* ── PRODUCT CARD ── */}
          <Section number="08" name="ProductCard Component" description="Kartu katalog produk roti lengkap dengan foto, harga, dan rating." category="Data Display">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: 16 }}>
              <ProductCard
                title="Roti Tawar Gandum"
                price={16000}
                image="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"
                rating={4.8}
                badgeText="Terlaris"
                badgeType="success"
                onClick={() => alert("Roti Tawar dipilih")}
              />
              <ProductCard
                title="Chocolate Fudge Cake"
                price={185000}
                image="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400"
                rating={4.9}
                badgeText="Spesial"
                badgeType="warning"
                onClick={() => alert("Cake dipilih")}
              />
              <ProductCard
                title="Croissant Butter"
                price={12000}
                image="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400"
                rating={4.5}
                badgeText="Stok Tipis"
                badgeType="danger"
                onClick={() => alert("Croissant dipilih")}
              />
            </div>
          </Section>

          {/* ── TABLE ── */}
          <Section number="09" name="Table Component" description="Tabel data responsif dengan header terstandarisasi dan status loading terintegrasi." category="Data Display">
            <div style={{ overflowX: "auto" }}>
              <Table headers={tableHeaders} rows={tableRows} />
            </div>
          </Section>
        </div>
      )}

      {/* ================================================================== */}
      {/* TAB 4 · FORM & INPUTS                                              */}
      {/* ================================================================== */}
      {activeTab === "form" && (
        <div>
          {/* ── INPUT FIELD ── */}
          <Section number="10" name="InputField Component" description="Kotak input teks satu baris dengan ikon, label, dan pesan error bawaan." category="Form">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
              <InputField
                label="Nama Pelanggan"
                placeholder="Masukkan nama lengkap..."
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                icon={UserIcon}
              />
              <InputField
                label="Email (Simulasi Error)"
                placeholder="email@contoh.com"
                value="budi-salah"
                icon={Info}
                error="Alamat email tidak valid."
              />
            </div>
          </Section>

          {/* ── SELECT FIELD ── */}
          <Section number="11" name="SelectField Component" description="Dropdown menu pilihan untuk memilih satu opsi dari daftar yang tersedia." category="Form">
            <div style={{ maxWidth: 340 }}>
              <SelectField
                label="Kategori Member"
                value={selectVal}
                onChange={e => setSelectVal(e.target.value)}
                options={[
                  { value: "gold",   label: "Gold Member (Diskon 10%)" },
                  { value: "silver", label: "Silver Member (Diskon 5%)" },
                  { value: "bronze", label: "Bronze Member (Diskon 2%)" },
                ]}
              />
            </div>
          </Section>

          {/* ── TEXT AREA ── */}
          <Section number="12" name="TextArea Component" description="Kolom input teks multi-baris untuk catatan atau deskripsi panjang." category="Form">
            <div style={{ maxWidth: 480 }}>
              <TextArea
                label="Catatan Pengiriman Khusus"
                placeholder="Contoh: Roti ditaruh di box teras depan rumah..."
                rows={3}
              />
            </div>
          </Section>
        </div>
      )}

      {/* ================================================================== */}
      {/* TAB 5 · FEEDBACK & MODALS                                          */}
      {/* ================================================================== */}
      {activeTab === "feedback" && (
        <div>
          {/* ── ALERT ── */}
          <Section number="13" name="Alert Component" description="Banner notifikasi instan (warning · success · danger) yang dapat ditutup secara dinamis." category="Feedback">
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {alertVisible
                ? <Alert
                    type="warning"
                    message="Stok Tepung Gandum menipis. Harap lakukan pembelian ke supplier."
                    onClose={() => setAlertVisible(false)}
                  />
                : <Button type="primary" variant="outline" onClick={() => setAlertVisible(true)}>
                    Tampilkan Alert Kembali
                  </Button>
              }
              <Alert type="success" message="Data pelanggan baru berhasil tersimpan ke sistem." />
              <Alert type="danger"  message="Koneksi terputus. Gagal menyimpan perubahan produk." />
            </div>
          </Section>

          {/* ── MODAL ── */}
          <Section number="14" name="Modal Component" description="Dialog popup overlay terpusat dengan efek blur latar belakang otomatis." category="Feedback">
            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
              <Button type="primary" onClick={() => setShowModal(true)}>
                Buka Dialog Modal
              </Button>
              <span style={{ fontSize: 12, color: "#AAA" }}>Klik tombol untuk membuka popup konfirmasi</span>
            </div>

            <Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Konfirmasi Pendaftaran Produk">
              <div style={{ padding: "4px 0" }}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 12,
                  background: MAROON_MUTED, padding: 16, borderRadius: 12,
                  border: `1px solid ${BORDER}`, marginBottom: 20
                }}>
                  <Smile style={{ color: MAROON, flexShrink: 0 }} size={28} />
                  <p style={{ margin: 0, fontSize: 13, color: BROWN_DARK, lineHeight: 1.5 }}>
                    Apakah Anda yakin ingin mendaftarkan produk ini ke database seluruh cabang Rotte Bakery?
                  </p>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
                  <Button type="primary" variant="outline" onClick={() => setShowModal(false)}>Batalkan</Button>
                  <Button type="primary" onClick={() => { alert("Tersimpan!"); setShowModal(false); }}>Ya, Simpan</Button>
                </div>
              </div>
            </Modal>
          </Section>

          {/* ── SPINNER ── */}
          <Section number="15" name="Spinner Component" description="Animasi putaran loading untuk menandakan proses berlangsung di latar belakang." category="Feedback">
            <Label>3 Ukuran Variasi (sm · md · lg)</Label>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <div style={{ textAlign: "center" }}>
                <Spinner size="sm" />
                <div style={{ fontSize: 10, color: "#AAA", marginTop: 8 }}>Small</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Spinner size="md" />
                <div style={{ fontSize: 10, color: "#AAA", marginTop: 8 }}>Medium</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <Spinner size="lg" />
                <div style={{ fontSize: 10, color: "#AAA", marginTop: 8 }}>Large</div>
              </div>
            </div>
          </Section>
        </div>
      )}
    </div>
  );
}
