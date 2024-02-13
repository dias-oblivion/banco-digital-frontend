export function Container({ children }: React.PropsWithChildren) {
  return (
    <div className="flex flex-col h-screen w-screen bg-backgroundPrimary font-inter text-zinc-50">
      {children}
    </div>
  );
}
