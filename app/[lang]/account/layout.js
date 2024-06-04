export const metadata = {
  title: "Account Information",
  description: "E-commerce website for your home appliances",
};
export default function Layout({ children, modal }) {
  return (
    <>
      {modal}
      {children}
    </>
  );
}
