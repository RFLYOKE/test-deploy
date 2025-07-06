"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Combobox } from "@/components/ui/combo-box";
import { Customer } from "@/types/customer";
import { User } from "@/types/user";

import { useGetAllSalesQuery } from "@/services/reference.service";
import { useGetWilayahKerjaQuery } from "@/services/wilayahkerja.service";
import { useGetBranchesQuery } from "@/services/cabang.service";
import { useGetBanksQuery } from "@/services/bank.service";
import { useGetCabangBankMitrasQuery } from "@/services/cabangbankmitra.service";
import { WilayahKerja } from "@/types/wilayah-kerja";
import { Branch } from "@/types/branch";
import { Bank } from "@/types/bank";
import { CabangBankMitra } from "@/types/cabangbankmitra";

interface CustomerFormProps {
  form: Partial<Customer>;
  setForm: (data: Partial<Customer>) => void;
  onCancel: () => void;
  onSubmit: () => void;
  editingId: number | null;
  isLoading?: boolean;
}

export default function CustomerForm({
  form,
  setForm,
  onCancel,
  onSubmit,
  editingId,
  isLoading = false,
}: CustomerFormProps) {
  const username = `${form.first_name || ""} ${form.last_name || ""}`.trim();
  const isEdit = !!editingId;

  const [wilayahKerjaSearch, setWilayahKerjaSearch] = useState("");
  const [cabangSearch, setCabangSearch] = useState("");
  const [bankSearch, setBankSearch] = useState("");
  const [mitraCabangSearch, setMitraCabangSearch] = useState("");
  const [salesSearch, setSalesSearch] = useState("");

  const {
    data: wilayahKerjaResponse,
    isLoading: loadingWilayahKerja,
    isError: errorWilayahKerja,
  } = useGetWilayahKerjaQuery({
    page: 1,
    search: wilayahKerjaSearch,
    paginate: 10,
  });

  const wilayahKerjaList = wilayahKerjaResponse?.data ?? [];

  const {
    data: cabangResponse,
    isLoading: loadingCabang,
    isError: errorCabang,
  } = useGetBranchesQuery({ page: 1, search: cabangSearch, paginate: 10 });
  const cabangList = cabangResponse?.data ?? [];

  const {
    data: bankResponse,
    isLoading: loadingBanks,
    isError: errorBanks,
  } = useGetBanksQuery({ page: 1, search: bankSearch, paginate: 10 });
  const bankList = bankResponse?.data ?? [];

  const {
    data: mitraCabangResponse,
    isLoading: loadingMitraCabang,
    isError: errorMitraCabang,
  } = useGetCabangBankMitrasQuery({
    page: 1,
    search: mitraCabangSearch,
    paginate: 10,
  });
  const mitraCabangList = mitraCabangResponse?.data ?? [];

  const {
    data: salesList = [],
    isLoading: loadingSales,
    isError: errorSales,
  } = useGetAllSalesQuery({ search: salesSearch, paginate: 10 });

  const formatNumber = (value: string | number | null | undefined) => {
    if (value === null || value === undefined || value === "") return "";
    const raw =
      typeof value === "number"
        ? value
        : Number(value.toString().replace(/\D/g, ""));
    if (isNaN(raw)) return "";
    return raw.toLocaleString("id-ID");
  };

  const unformatNumber = (formatted: string) => {
    return Number(formatted.replace(/\./g, ""));
  };

  return (
    <div className="p-4">
      <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 w-full space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">
            {isEdit ? "Edit Pelanggan" : "Tambah Pelanggan Baru"}
          </h2>
          <Button variant="ghost" onClick={onCancel} aria-label="Tutup">
            ✕
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* --- Relational Combobox Fields --- */}
          <div className="flex flex-col gap-y-1">
            <Label htmlFor="wilayah_kerja_id">Wilayah Kerja</Label>
            <Combobox<WilayahKerja>
              value={form.wilayah_kerja_id ?? null}
              onChange={(id) => setForm({ ...form, wilayah_kerja_id: id })}
              onSearchChange={setWilayahKerjaSearch}
              data={wilayahKerjaList ?? []}
              getOptionLabel={(item) => item.name}
              placeholder={
                loadingWilayahKerja ? "Loading..." : "Pilih Wilayah Kerja"
              }
              isLoading={loadingWilayahKerja}
            />
            {errorWilayahKerja && (
              <p className="text-sm text-red-500 mt-1">
                Gagal memuat wilayah kerja.
              </p>
            )}
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="cabang_id">Cabang</Label>
            <Combobox<Branch>
              value={form.cabang_id ?? null}
              onChange={(id) => setForm({ ...form, cabang_id: id })}
              onSearchChange={setCabangSearch}
              data={cabangList}
              getOptionLabel={(item) => item.name}
              placeholder={loadingCabang ? "Loading..." : "Pilih Cabang"}
              isLoading={loadingCabang}
            />
            {errorCabang && (
              <p className="text-sm text-red-500 mt-1">Gagal memuat cabang.</p>
            )}
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="bank_id">Bank</Label>
            <Combobox<Bank>
              value={form.bank_id ?? null}
              onChange={(id) => setForm({ ...form, bank_id: id })}
              onSearchChange={setBankSearch}
              data={bankList}
              getOptionLabel={(item) => item.name}
              placeholder={loadingBanks ? "Loading..." : "Pilih Bank"}
              isLoading={loadingBanks}
            />
            {errorBanks && (
              <p className="text-sm text-red-500 mt-1">Gagal memuat bank.</p>
            )}
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="cabang_bank_mitra_id">Cabang Bank Mitra</Label>
            <Combobox<CabangBankMitra>
              value={form.cabang_bank_mitra_id ?? null}
              onChange={(id) => setForm({ ...form, cabang_bank_mitra_id: id })}
              onSearchChange={setMitraCabangSearch}
              data={mitraCabangList}
              getOptionLabel={(item) => item.name}
              placeholder={
                loadingMitraCabang ? "Loading..." : "Pilih Cabang Bank Mitra"
              }
              isLoading={loadingMitraCabang}
            />
            {errorMitraCabang && (
              <p className="text-sm text-red-500 mt-1">
                Gagal memuat cabang bank mitra.
              </p>
            )}
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="sales_id">Sales</Label>
            <Combobox<User>
              value={form.sales_id ?? null}
              onChange={(id) => setForm({ ...form, sales_id: id })}
              onSearchChange={setSalesSearch}
              data={salesList}
              getOptionLabel={(user: User) =>
                `${user.name}${user.email ? ` (${user.email})` : ""}`
              }
              placeholder={loadingSales ? "Loading..." : "Pilih Sales"}
              isLoading={loadingSales}
            />
            {errorSales && (
              <p className="text-sm text-red-500 mt-1">
                Gagal memuat data sales.
              </p>
            )}
          </div>

          {/* --- Personal Info --- */}
          <div className="flex flex-col gap-y-1">
            <Label htmlFor="salutation">Salutation</Label>
            <Input
              id="salutation"
              value={form.salutation || ""}
              onChange={(e) => setForm({ ...form, salutation: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="salutation">Job Title</Label>
            <Input
              id="job_title"
              value={form.job_title || ""}
              onChange={(e) => setForm({ ...form, job_title: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="first_name">Nama Depan</Label>
            <Input
              id="first_name"
              value={form.first_name || ""}
              onChange={(e) => setForm({ ...form, first_name: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="last_name">Nama Belakang</Label>
            <Input
              id="last_name"
              value={form.last_name || ""}
              onChange={(e) => setForm({ ...form, last_name: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="username">Username (Otomatis)</Label>
            <Input
              id="username"
              value={username}
              readOnly
              className="bg-gray-100"
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={form.email || ""}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="phone">Nomor Telepon</Label>
            <Input
              id="phone"
              type="tel"
              value={form.phone || ""}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-y-1 col-span-1 md:col-span-2">
            <Label htmlFor="address">Alamat</Label>
            <Input
              id="address"
              value={form.address || ""}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="postal_code">Kode Pos</Label>
            <Input
              id="postal_code"
              value={form.postal_code || ""}
              onChange={(e) =>
                setForm({ ...form, postal_code: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="latitude">Latitude</Label>
            <Input
              id="latitude"
              type="number"
              step="any"
              value={form.latitude ?? ""}
              onChange={(e) =>
                setForm({ ...form, latitude: Number(e.target.value) })
              }
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="longitude">Longitude</Label>
            <Input
              id="longitude"
              type="number"
              step="any"
              value={form.longitude ?? ""}
              onChange={(e) =>
                setForm({ ...form, longitude: Number(e.target.value) })
              }
            />
          </div>

          {/* --- Loan Info --- */}
          <div className="flex flex-col gap-y-1">
            <Label htmlFor="reference_date">Tanggal Referensi</Label>
            <Input
              id="reference_date"
              type="date"
              value={form.reference_date || ""}
              onChange={(e) =>
                setForm({ ...form, reference_date: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="disbursement_date">Tanggal Pencairan</Label>
            <Input
              id="disbursement_date"
              type="date"
              value={form.disbursement_date || ""}
              onChange={(e) =>
                setForm({ ...form, disbursement_date: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="cif">No. CIF</Label>
            <Input
              id="cif"
              value={form.cif || ""}
              onChange={(e) => setForm({ ...form, cif: e.target.value })}
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="loan_account_number">No. Rekening Pinjaman</Label>
            <Input
              id="loan_account_number"
              value={form.loan_account_number || ""}
              onChange={(e) =>
                setForm({ ...form, loan_account_number: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="plafond">Plafond</Label>
            <Input
              id="plafond"
              type="text"
              inputMode="numeric"
              value={formatNumber(form.plafond)}
              onChange={(e) =>
                setForm({ ...form, plafond: unformatNumber(e.target.value) })
              }
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="remaining_loan">Sisa Pinjaman</Label>
            <Input
              id="remaining_loan"
              type="text"
              inputMode="numeric"
              value={formatNumber(form.remaining_loan)}
              onChange={(e) =>
                setForm({
                  ...form,
                  remaining_loan: unformatNumber(e.target.value),
                })
              }
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="net_receipt">Terima Bersih</Label>
            <Input
              id="net_receipt"
              type="text"
              inputMode="numeric"
              value={formatNumber(form.net_receipt)}
              onChange={(e) =>
                setForm({
                  ...form,
                  net_receipt: unformatNumber(e.target.value),
                })
              }
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="time_period">Jangka Waktu</Label>
            <Input
              id="time_period"
              type="number"
              value={form.time_period ?? ""}
              onChange={(e) =>
                setForm({ ...form, time_period: Number(e.target.value) })
              }
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="loan_type">Jenis Pinjaman</Label>
            <select
              id="loan_type"
              value={form.loan_type || ""}
              onChange={(e) => setForm({ ...form, loan_type: e.target.value })}
              className="w-full border rounded-md px-3 py-2 text-sm bg-white dark:bg-zinc-800"
              required
            >
              <option value="" disabled hidden>
                -- Pilih Jenis Pinjaman --
              </option>
              <option value="WN">WN (PRAPURNA)</option>
              <option value="WM">WM (PURNA)</option>
            </select>
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="loan_product">Produk Pinjaman</Label>
            <Input
              id="loan_product"
              value={form.loan_product || ""}
              onChange={(e) =>
                setForm({ ...form, loan_product: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="rm_name">Nama RM</Label>
            <Input
              id="rm_name"
              value={form.rm_name || ""}
              onChange={(e) => setForm({ ...form, rm_name: e.target.value })}
            />
          </div>

          {/* Changed to file upload */}
          <div className="flex flex-col gap-y-1">
            <Label htmlFor="disbursement_files">File Pencairan (PDF)</Label>
            <Input
              id="disbursement_files"
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setForm({ ...form, disbursement_files: file });
              }}
            />
            {form.disbursement_files instanceof File && (
              <p className="text-sm text-zinc-600">
                {form.disbursement_files.name}
              </p>
            )}
            {/* Display current file if it's a string (e.g., from existing data) */}
            {typeof form.disbursement_files === "string" &&
              form.disbursement_files && (
                <p className="text-sm text-zinc-600">
                  Current file:{" "}
                  <a
                    href={form.disbursement_files}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Link
                  </a>
                </p>
              )}
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="payrol">Juru Bayar</Label>
            <Input
              id="payrol"
              value={form.payrol || ""}
              onChange={(e) => setForm({ ...form, payrol: e.target.value })}
            />
          </div>

          {/* --- Flags --- */}
          <div className="flex flex-col gap-y-1">
            <Label htmlFor="customer_file_flag">
              Apakah Berkas Nasabah Sudah di Flagging?
            </Label>
            <select
              id="customer_file_flag"
              value={form.customer_file_flag ? "true" : "false"}
              onChange={(e) =>
                setForm({
                  ...form,
                  customer_file_flag: e.target.value === "true",
                })
              }
              className="w-full border rounded-md px-3 py-2 text-sm bg-white dark:bg-zinc-800"
            >
              <option value="true">Sudah Terflagging</option>
              <option value="false">Belum Terflagging</option>
            </select>
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="attachment_form_flag">
              Status Lampiran Form Flagging
            </Label>
            <select
              id="attachment_form_flag"
              value={form.attachment_form_flag ? "true" : "false"}
              onChange={(e) =>
                setForm({
                  ...form,
                  attachment_form_flag: e.target.value === "true",
                })
              }
              className="w-full border rounded-md px-3 py-2 text-sm bg-white dark:bg-zinc-800"
            >
              <option value="true">Ada Lampiran</option>
              <option value="false">Tidak Ada Lampiran</option>
            </select>
          </div>

          {/* Changed to file upload */}
          <div className="flex flex-col gap-y-1">
            <Label htmlFor="attacthment_form">
              File Lampiran Form Flagging (PDF)
            </Label>
            <Input
              id="attacthment_form"
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setForm({ ...form, attacthment_form: file });
              }}
            />
            {form.attacthment_form instanceof File && (
              <p className="text-sm text-zinc-600">
                {form.attacthment_form.name}
              </p>
            )}
            {typeof form.attacthment_form === "string" &&
              form.attacthment_form && (
                <p className="text-sm text-zinc-600">
                  Current file:{" "}
                  <a
                    href={form.attacthment_form}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    Link
                  </a>
                </p>
              )}
          </div>

          <div className="flex flex-col gap-y-1">
            <Label htmlFor="mutation_flag">
              Jika purna, apakah sudah mutasi?
            </Label>
            <select
              id="mutation_flag"
              value={form.mutation_flag ? "true" : "false"}
              onChange={(e) =>
                setForm({
                  ...form,
                  mutation_flag: e.target.value === "true",
                })
              }
              className="w-full border rounded-md px-3 py-2 text-sm bg-white dark:bg-zinc-800"
            >
              <option value="true">Sudah Mutasi</option>
              <option value="false">Tidak Mutasi (Bukan Purna)</option>
            </select>
          </div>

          {/* Changed to file upload */}
          <div className="flex flex-col gap-y-1">
            <Label htmlFor="mutation_files">
              File Mutasi (Jika Nasabah Lintas/Take Over)
            </Label>
            <Input
              id="mutation_files"
              type="file"
              accept="application/pdf"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                setForm({ ...form, mutation_files: file });
              }}
            />
            {form.mutation_files instanceof File && (
              <p className="text-sm text-zinc-600">
                {form.mutation_files.name}
              </p>
            )}
            {typeof form.mutation_files === "string" && form.mutation_files && (
              <p className="text-sm text-zinc-600">
                Current file:{" "}
                <a
                  href={form.mutation_files}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Link
                </a>
              </p>
            )}
          </div>

          {/* --- Status --- */}
          <div className="flex flex-col gap-y-1">
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              className="w-full border rounded-md px-3 py-2 text-sm bg-white dark:bg-zinc-800"
              value={form.status === true ? "true" : "false"}
              onChange={(e) =>
                setForm({ ...form, status: e.target.value === "true" })
              }
            >
              <option value="true">Aktif</option>
              <option value="false">Tidak Aktif</option>
            </select>
          </div>

          <div className="pt-4 flex justify-end gap-2 col-span-1 md:col-span-2">
            <Button variant="outline" onClick={onCancel} disabled={isLoading}>
              Batal
            </Button>
            <Button onClick={onSubmit} disabled={isLoading}>
              {isLoading ? "Loading..." : isEdit ? "Perbarui" : "Simpan"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
