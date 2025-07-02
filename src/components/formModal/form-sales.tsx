"use client";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Sales } from "@/types/sales";
import { useState } from "react";
import {
  useGetAllCoordinatorsQuery,
  useGetUnassignedSalesQuery,
} from "@/services/reference.service";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"; // dari ShadCN

interface SalesFormProps {
  form: Partial<Sales>;
  setForm: (form: Partial<Sales>) => void;
  onCancel: () => void;
  onSubmit: () => void;
}

export default function SalesForm({
  form,
  setForm,
  onCancel,
  onSubmit,
}: SalesFormProps) {
  const [isEdit] = useState(!!form.sales_id);

  const {
    data: coordinators = [],
    isLoading: loadingCoordinators,
    isError: errorCoordinators,
  } = useGetAllCoordinatorsQuery();

  const {
    data: unassignedSales = [],
    isLoading: loadingSales,
    isError: errorSales,
  } = useGetUnassignedSalesQuery();

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 w-full max-w-md space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">
          {isEdit ? "Edit Sales" : "Tambah Sales"}
        </h2>
        <Button variant="ghost" onClick={onCancel} aria-label="Tutup">
          ✕
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        {/* SALES SELECT */}
        <div className="flex flex-col gap-y-1">
          <Label>Sales</Label>
          <Select
            value={form.sales_id ? String(form.sales_id) : ""}
            onValueChange={(value) =>
              setForm({ ...form, sales_id: Number(value) })
            }
            disabled={loadingSales || errorSales}
          >
            <SelectTrigger className="w-full bg-white dark:bg-zinc-800">
              <SelectValue placeholder="Pilih Sales" />
            </SelectTrigger>
            <SelectContent>
              {unassignedSales.length > 0 ? (
                unassignedSales.map((s) => (
                  <SelectItem key={s.id} value={String(s.id)}>
                    {s.name} ({s.email})
                  </SelectItem>
                ))
              ) : (
                <SelectItem disabled value="-">
                  Tidak ada sales tersedia
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>

        {/* COORDINATOR SELECT */}
        <div className="flex flex-col gap-y-1">
          <Label>Koordinator</Label>
          <Select
            value={form.coordinator_id ? String(form.coordinator_id) : ""}
            onValueChange={(value) =>
              setForm({ ...form, coordinator_id: Number(value) })
            }
            disabled={loadingCoordinators || errorCoordinators}
          >
            <SelectTrigger className="w-full bg-white dark:bg-zinc-800">
              <SelectValue placeholder="Pilih Koordinator" />
            </SelectTrigger>
            <SelectContent>
              {coordinators.length > 0 ? (
                coordinators.map((c) => (
                  <SelectItem key={c.id} value={String(c.id)}>
                    {c.name} ({c.email})
                  </SelectItem>
                ))
              ) : (
                <SelectItem disabled value="-">
                  Tidak ada sales tersedia
                </SelectItem>
              )}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="pt-4 flex justify-end gap-2">
        <Button variant="outline" onClick={onCancel}>
          Batal
        </Button>
        <Button onClick={onSubmit}>{isEdit ? "Perbarui" : "Simpan"}</Button>
      </div>
    </div>
  );
}
