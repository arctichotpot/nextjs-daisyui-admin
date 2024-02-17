"use client";

import { ReactNode, CSSProperties, useState, useEffect } from "react";

type Props = {
  children?: ReactNode;
  items: { label: string | ReactNode; value: string }[];
  value?: string;
  onChange?: (value: string | any) => void;
  className?: string;
  style?: CSSProperties;
};

export const TabBox = ({
  children,
  items,
  onChange,
  className,
  value,
}: Props) => {
  const [active, setActive] = useState<string>(value as string);

  useEffect(() => {
    setActive(value as string);
  }, [value]);

  const handleChange = (value: string) => {
    setActive(value);
    onChange && onChange(value);
  };

  return (
    <div role="tablist" className={`tabs tabs-boxed ${className}`}>
      {/* {children} */}

      {items.map((item) => (
        <a
          role="tab"
          key={item.value}
          onClick={() => handleChange(item.value)}
          className={`tab ${item.value === active ? "tab-active" : ""}`}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
};
