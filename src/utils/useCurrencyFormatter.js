import React from "react";

export default function useCurrencyFormatter() {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "vnd",
    });
    return formatter;
}
