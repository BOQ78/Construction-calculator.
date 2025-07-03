
"use client"

import { Calculator } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Home() {
  const [area, setArea] = useState<number>(0)
  const [floors, setFloors] = useState<number>(1)
  const [totalCost, setTotalCost] = useState<number>(0)

  useEffect(() => {
    const costPerSqm = 1200
    const total = area * floors * costPerSqm
    setTotalCost(total)
  }, [area, floors])

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-6">
        <div className="flex items-center gap-2 text-blue-600">
          <Calculator className="w-6 h-6" />
          <h1 className="text-2xl font-bold">حاسبة تكاليف البناء</h1>
        </div>
        <div className="space-y-4">
          <div>
            <Label>المساحة (م²)</Label>
            <Input
              type="number"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              placeholder="مثال: 200"
            />
          </div>
          <div>
            <Label>عدد الأدوار</Label>
            <Input
              type="number"
              value={floors}
              onChange={(e) => setFloors(Number(e.target.value))}
              min={1}
              max={10}
            />
          </div>
        </div>
        <div className="text-lg font-semibold text-gray-700">
          التكلفة التقديرية:{" "}
          <span className="text-red-600">
            {totalCost.toLocaleString("ar-SA")} ريال
          </span>
        </div>
        <Button className="w-full" disabled>
          تحميل التقرير (لاحقًا)
        </Button>
      </div>
    </main>
  )
}
