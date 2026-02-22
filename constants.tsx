
import React from 'react';
import { 
  FileCheck, 
  Users, 
  Layers, 
  Stamp, 
  ShieldCheck, 
  Workflow
} from 'lucide-react';

export const SIGNFLOW_MANUAL_KNOWLEDGE = `
MANUAL PENGGUNAAN SIGNFLOW AI (REVISI 2025)

1. PENDAHULUAN
SignFlow AI adalah penyedia layanan sertifikat elektronik terpercaya dan tanda tangan digital yang memiliki kekuatan hukum sesuai regulasi KOMINFO.

2. PENDAFTARAN AKUN (PENTING)
A. Syarat Pendaftaran:
1. Berusia minimal 17 tahun.
2. Memiliki KTP (Kartu Tanda Penduduk).
3. Memiliki alamat email dan nomor telepon yang aktif.

B. Proses Pendaftaran:
1. Buka website SignFlow AI melalui browser.
2. Klik tombol 'Sign Up'.
3. Masukkan email, buat password (minimal 9 karakter, huruf besar, kecil, angka, karakter spesial).
4. Klik verifikasi Captcha dan tekan 'Sign Up'.
5. Aktivasi Akun: Cek email dari SignFlow AI dan klik tombol 'Aktivasi Sekarang!!!'.
6. Log In menggunakan email dan password yang didaftarkan.

C. Verifikasi Identitas (KYC):
1. Setelah login, lakukan 'Verifikasi Identitas' pada dashboard.
2. Unggah foto KTP (NIK dan Nama akan terisi otomatis).
3. Masukkan nomor telepon dan masukkan kode OTP yang diterima melalui SMS.
4. Lakukan pengambilan swafoto (Selfie) sesuai instruksi.
5. Baca dan setujui Dokumen Privacy Policy & Owner Agreement.
6. Klik 'Finish' dan tunggu persetujuan Registration Authority (RA).

3. FITUR UTAMA
- Solo-Sign: Tanda tangan mandiri.
- Multi-Flow: Penandatanganan paralel.
- Sequence-Sign: Alur berjenjang (Pihak A -> B -> C).
- Smart Meterai: Integrasi e-Meterai PERURI.
- Rekey: Pembaruan kunci sertifikat (dilakukan 30 hari sebelum expired).
- Revoke: Pencabutan sertifikat elektronik.

4. MASALAH PENDAFTARAN (FAQ)
Jika tidak bisa mendaftar, pastikan:
- Usia sudah 17 tahun ke atas.
- Foto KTP jelas (tidak blur).
- Email belum pernah terdaftar sebelumnya.
- Kode OTP dimasukkan dengan benar.
- Koneksi internet stabil dan izin kamera browser aktif.

5. DUKUNGAN TEKNIS
Email: support@signflow.ai
Phone: (031) 8910919

6. INFORMASI UMUM & KONTAK
- [cite_start]**Deskripsi**: ezSign adalah penyedia layanan sertifikat elektronik terpercaya dan tanda tangan digital yang memiliki kekuatan hukum dan berinduk pada KOMINFO[cite: 11].
- **Kontak Bantuan**: 
  - [cite_start]Email: helpdesk@ezsign.id [cite: 3]
  - [cite_start]Telepon: +62 31-8910919 / (031) 8910919 [cite: 3, 5]
  - [cite_start]Website: https://app.ezsign.id/ [cite: 84]

7. PRODUK & JENIS AKUN
- **Jenis Akun**: 
  - [cite_start]**Personal**: Dimiliki individu untuk keperluan personal[cite: 25].
  - [cite_start]**Corporate**: Untuk pegawai/pihak yang mewakili posisi tertentu di perusahaan[cite: 26].
- [cite_start]**Produk Utama**: Sertifikat Elektronik, Tanda Tangan Elektronik, e-Meterai, dan Timestamp[cite: 28, 29, 31, 32].

8. TIPE TANDA TANGAN (SIGNING)
- [cite_start]**Single Sign**: Tanda tangan dilakukan sendiri oleh satu orang[cite: 34].
- [cite_start]**Parallel Sign**: Tanda tangan oleh lebih dari satu orang tanpa urutan tertentu[cite: 35].
- [cite_start]**Hierarchy Sign**: Tanda tangan oleh lebih dari satu orang secara berurutan (bertingkat)[cite: 36].
- [cite_start]**Ask From Others**: Meminta pihak lain untuk menandatangani tanpa melibatkan diri sendiri[cite: 39].

9. PENDAFTARAN & VERIFIKASI (AKUN PERSONAL)
- [cite_start]**Syarat Pendaftaran**: Berusia minimal 17 tahun, memiliki KTP, alamat email, dan nomor telepon aktif[cite: 56, 57].
- [cite_start]**Alur Pendaftaran**: Sign Up via web -> Verifikasi Email -> Login[cite: 58, 63, 64].
- [cite_start]**Batasan Akun Baru**: Setelah login awal, akun HANYA dapat digunakan untuk proses e-Meterai[cite: 65].
- [cite_start]**Verifikasi Identitas (KYC)**: Untuk akses fitur penuh, wajib upload KTP, verifikasi OTP telepon, swafoto, dan menyetujui dokumen kebijakan[cite: 66, 67, 69, 70, 71]. [cite_start]Setelah itu, tunggu persetujuan dari RA (Registration Authority) ezSign[cite: 73].
- [cite_start]**Penolakan Sertifikat**: Jika ditolak (data tidak valid), pengguna harus mendaftar ulang menggunakan data yang valid dan sesuai KTP[cite: 80, 81]. [cite_start]Jika ada data yang tidak sesuai padahal sudah disetujui, segera email ke helpdesk@ezsign.id[cite: 78].

10. SALDO & PEMBAYARAN
- [cite_start]**Sistem Pembayaran**: Prabayar (Top Up saldo sebelum digunakan)[cite: 47].
- [cite_start]**Jenis Saldo**: ezSign Balance (untuk tanda tangan) dan e-Meterai Balance[cite: 94].
- [cite_start]**Metode Pembayaran**: Mandiri, CIMB, Permata, BNI, BRIVA, dan BCA[cite: 97, 103].
- [cite_start]**Faktur/Invoice**: Dapat diunduh pada menu Billing di Dashboard[cite: 106].

11. PANDUAN PENGGUNAAN DOKUMEN
- [cite_start]**Format Dokumen yang Didukung**: JPEG, JPG, PDF, DOC, DOCX, XLS, XLSX[cite: 110].
- [cite_start]**Batas Ukuran Dokumen**: Maksimal 10 MB[cite: 118].
- [cite_start]**Keamanan Penandatanganan**: Proses finalisasi tanda tangan harus menggunakan input kode OTP[cite: 116, 134].
- **Fitur Pendukung Dokumen**:
  - [cite_start]**Modify Position**: Mengizinkan penerima mengatur ulang posisi tanda tangannya sendiri[cite: 129].
  - [cite_start]**Sign on Document dengan Password**: Bisa menandatangani dokumen yang diproteksi password tanpa menghilangkan proteksi tersebut[cite: 41].
`;

export const FEATURES = [
  {
    id: 'solo',
    title: 'Solo-Sign',
    description: 'Tanda tangan mandiri instan untuk dokumen personal dengan verifikasi identitas real-time.',
    icon: <FileCheck className="w-6 h-6 text-cyan-500" />
  },
  {
    id: 'multiflow',
    title: 'Multi-Flow',
    description: 'Kolaborasi tim dalam penandatanganan dokumen secara paralel tanpa hambatan urutan.',
    icon: <Users className="w-6 h-6 text-cyan-500" />
  },
  {
    id: 'sequence',
    title: 'Sequence-Sign',
    description: 'Otomatisasi alur kerja persetujuan bertingkat yang rapi dan terukur sesuai struktur organisasi.',
    icon: <Workflow className="w-6 h-6 text-cyan-500" />
  },
  {
    id: 'smartmeterai',
    title: 'Smart Meterai',
    description: 'Integrasi meterai elektronik resmi untuk keabsahan hukum dokumen digital perusahaan Anda.',
    icon: <Stamp className="w-6 h-6 text-cyan-500" />
  }
];

export const APP_CONFIG = {
  primaryColor: '#020617',
  accentColor: '#06b6d4',
};
