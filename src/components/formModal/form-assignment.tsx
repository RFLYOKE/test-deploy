"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Assignment } from "@/types/assignment";
import { useGetCustomersQuery } from "@/services/customer.service";
import {
  useGetAllCoordinatorsQuery,
  useGetSalesByCoordinatorIdQuery,
} from "@/services/reference.service";

interface AssignmentFormProps {
  form: Partial<Assignment>;
  setForm: (form: Partial<Assignment>) => void;
  onCancel: () => void;
  onSubmit: () => void;
  isLoading?: boolean;
}

export default function AssignmentForm({
  form,
  setForm,
  onCancel,
  onSubmit,
  isLoading = false,
}: AssignmentFormProps) {
  const isEdit = !!form.id;

  // ✅ Get data
  const { data: customerResponse, isLoading: loadingCustomers } =
    useGetCustomersQuery({
      page: 1,
      paginate: 1000,
    });

  const customers = customerResponse?.data ?? [];

  const { data: coordinators = [], isLoading: loadingCoordinators } =
    useGetAllCoordinatorsQuery();

  const { data: sales = [], isLoading: loadingSales } =
    useGetSalesByCoordinatorIdQuery(form.coordinator_id!, {
      skip: !form.coordinator_id,
    });

  return (
    <div className="bg-white dark:bg-zinc-900 rounded-lg p-6 w-full max-w-md space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">
          {isEdit ? "Edit Assignment" : "Tambah Assignment"}
        </h2>
        <Button variant="ghost" onClick={onCancel} aria-label="Tutup">
          ✕
        </Button>
      </div>

      <div className="flex flex-col gap-4">
        {/* Customer Select */}
        <div className="flex flex-col gap-y-1">
          <Label>Customer</Label>
          <select
            value={form.customer_id ?? ""}
            onChange={(e) =>
              setForm({ ...form, customer_id: Number(e.target.value) })
            }
            disabled={loadingCustomers}
            className="border rounded-md px-3 py-2 text-sm bg-white dark:bg-zinc-800"
          >
            <option value="">Pilih Customer</option>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.first_name} {customer.last_name} ({customer.email})
              </option>
            ))}
          </select>
        </div>

        {/* Coordinator Select */}
        <div className="flex flex-col gap-y-1">
          <Label>Koordinator</Label>
          <select
            value={form.coordinator_id ?? ""}
            onChange={(e) => {
              const id = Number(e.target.value);
              setForm({ ...form, coordinator_id: id, sales_id: undefined });
            }}
            disabled={loadingCoordinators}
            className="border rounded-md px-3 py-2 text-sm bg-white dark:bg-zinc-800"
          >
            <option value="">Pilih Koordinator</option>
            {coordinators.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} ({c.email})
              </option>
            ))}
          </select>
        </div>

        {/* Sales Select */}
        <div className="flex flex-col gap-y-1">
          <Label>Sales</Label>
          <select
            value={form.sales_id ?? ""}
            onChange={(e) =>
              setForm({ ...form, sales_id: Number(e.target.value) })
            }
            disabled={loadingSales}
            className="border rounded-md px-3 py-2 text-sm bg-white dark:bg-zinc-800"
          >
            <option value="">Pilih Sales</option>
            {sales.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name} ({s.email})
              </option>
            ))}
          </select>
        </div>

        {/* Assignment Date */}
        <div className="flex flex-col gap-y-1">
          <Label>Tanggal Penugasan</Label>
          <Input
            type="date"
            value={form.assignment_date ?? ""}
            onChange={(e) =>
              setForm({ ...form, assignment_date: e.target.value })
            }
          />
        </div>

        {/* Status */}
        <div className="flex flex-col gap-y-1">
          <Label>Status</Label>
          <select
            value={form.status ?? ""}
            onChange={(e) =>
              setForm({ ...form, status: Number(e.target.value) })
            }
            className="border border-input bg-background rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
          >
            <option value="" disabled>
              Pilih Status
            </option>
            <option value={0}>Pending</option>
            <option value={1}>In Progress</option>
            <option value={2}>Completed</option>
          </select>
        </div>
      </div>

      <div className="pt-4 flex justify-end gap-2">
        <Button variant="outline" onClick={onCancel} disabled={isLoading}>
          Batal
        </Button>
        <Button onClick={onSubmit} disabled={isLoading}>
          {isLoading ? "Loading..." : isEdit ? "Perbarui" : "Simpan"}
        </Button>
      </div>
    </div>
  );
}
