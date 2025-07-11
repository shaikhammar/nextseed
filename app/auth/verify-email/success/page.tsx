export default async function Page() {
  return (
    <div className='flex flex-col gap-4 m-10 justify-center items-center'>
      <div>
        <h1 className='text-primary text-3xl font-semibold'>Success</h1>
      </div>

      <p className='text-muted-foreground'>
        Success! We have re-sent you a verification email. Please check your
        inbox.
      </p>
    </div>
  );
}
