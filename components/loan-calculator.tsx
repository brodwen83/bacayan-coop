"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export function LoanCalculator() {
  const [amount, setAmount] = useState(10000);
  const [interest, setInterest] = useState(10);
  const [months, setMonths] = useState(12);

  const monthlyRate = interest / 100 / 12;
  const monthlyPayment =
    (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months)) || 0;

  return (
    <Card className="max-w-xl mx-auto">
      <CardContent className="space-y-4 p-6">
        <div className="grid gap-2">
          <Label htmlFor="amount">Loan Amount</Label>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="interest">Interest Rate (%)</Label>
          <Input
            id="interest"
            type="number"
            value={interest}
            onChange={(e) => setInterest(parseFloat(e.target.value))}
          />
        </div>

        <div className="grid gap-2">
          <Label htmlFor="months">Loan Term (Months)</Label>
          <Input
            id="months"
            type="number"
            value={months}
            onChange={(e) => setMonths(parseInt(e.target.value))}
          />
        </div>

        <div className="pt-4 text-center">
          <h4 className="text-xl font-bold">Monthly Payment</h4>
          <p className="text-2xl text-primary font-semibold">
            ₱{monthlyPayment.toFixed(2)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
