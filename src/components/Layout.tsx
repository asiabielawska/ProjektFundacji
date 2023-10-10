type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <div>nawigacja</div>
      <div>{children}</div>
      <div>footer</div>
    </>
  );
};
