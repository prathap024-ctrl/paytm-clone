import { BalanceCard } from "@/components/BalanceCard";
import { Layout } from "@/components/Layout";
import { QuickActions } from "@/components/QuickActions";
import { RecentTransactions } from "@/components/RecentTransactions";
import { useIsMobile } from "@/hooks/use-mobile";

function IndexPage() {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen">
      <Layout>
        <div className="space-y-8 pt-20">
          <BalanceCard />
          <QuickActions />
          <RecentTransactions />

          {!isMobile && (
            <div className="fixed bottom-4 right-4 z-10">
              <div className="bg-primary text-white p-4 rounded-full shadow-lg cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 18.5c0-5.243 2.343-10.113 6.419-13.205a1 1 0 0 1 1.581.808v1.297a13 13 0 0 1-7.652 11.879a1 1 0 0 1-.843-.02A14.95 14.95 0 0 1 5 12c0-2.36.54-4.592 1.504-6.588" />
                  <path d="M8 17.953A15.335 15.335 0 0 1 3.986 7.57a1 1 0 0 1 .693-1.355c.129-.39.315-.075.466-.075h1.291a3 3 0 0 1 2.65 1.596l.27.54a1 1 0 0 1-.847 1.469h-1.054a14.775 14.775 0 0 0 4.85 6.53a3 3 0 0 1 .839 2.7" />
                </svg>
              </div>
            </div>
          )}
        </div>
      </Layout>
    </div>
  );
}

export default IndexPage;
