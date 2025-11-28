import React from "react";
import PricingCard from "./PricingCard";

const Pricing = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-16">

      <PricingCard
        title="Basic"
        price="499"
        color="#2b2b2b"
        btnColor="#2b2b2b"
        features={[
          "1 Parking Slot",
          "Standard Security",
          "Limited Time Access",
          "Email Support",
          "No Renewal Lock"
        ]}
      />

      <PricingCard
        title="Premium"
        price="899"
        color="#d4a019"
        btnColor="#d4a019"
        features={[
          "2 Parking Slots",
          "24/7 Full Security",
          "Priority Access",
          "Phone & Email Support",
          "Monthly Free Car Wash"
        ]}
      />

      <PricingCard
        title="Elite"
        price="1499"
        color="#2b2b2b"
        btnColor="#2b2b2b"
        features={[
          "Unlimited Parking",
          "Dedicated Parking Spot",
          "Full 24/7 Access",
          "VIP Priority Support",
          "Pickup & Drop Service"
        ]}
      />

    </div>
  );
};

export default Pricing;
