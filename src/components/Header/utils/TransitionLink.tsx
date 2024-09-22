'use client';
import Link, { LinkProps } from 'next/link';
import React, { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

interface TransitionLinkProps extends LinkProps {
  children: ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({
  children,
  href,
  ...props
}: TransitionLinkProps) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const content = document.querySelector('.content-wrapper');

    await sleep(500);

    content?.classList.add('page-transition');

    await sleep(500);

    content?.classList.remove('page-transition');

    router.push(href);
  };

  return (
    <Link onClick={handleTransition} href={href} {...props}>
      {children}
    </Link>
  );
};

export default TransitionLink;
