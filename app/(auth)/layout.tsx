import HeaderBox from "@/components/HeaderBox";
import Image from "next/image";

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <main className="flex min-h-screen w-full justify-between font-inter">
          {children}
          <div className="auth-asset">
            <div>
              {/* <Image src="/icons/auth-image.png" alt="Auth iamge" width={500} height={500} /> */}
              <Image src="/icons/auth-image.png" alt="Auth image" width={'500'} height={500} style={{ width: 'auto', justifyContent: 'center' }} />
              {/* // changed justifyContent from end to center */}


              <h2 style={{ color: '#0179FE ' }} className='header-box-title mt-9 text-center'>B N K R</h2>
              <p className='header-box-subtext mt-2 mx-4 text-center'>Making Banking Effortless, So You Can Focus on What Really Matters.</p>
         
            </div>
          </div>
      </main>
    );
  }  
  