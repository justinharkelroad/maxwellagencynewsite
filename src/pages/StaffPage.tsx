import { useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import StaffHero from "@/components/StaffHero";
import ReferralCTA from "@/components/ReferralCTA";
import Footer from "@/components/Footer";

import { staffMembers } from "@/data/staff";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

const StaffPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const staffMember = staffMembers.find((member) => member.slug === slug);

  if (!staffMember) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <StaffHero
          name={staffMember.name}
          title={staffMember.title}
          location={staffMember.location}
          bio={staffMember.bio}
          phone={staffMember.phone}
          email={staffMember.email}
          imageUrl={
            staffMember.image
              ? staffMember.image.startsWith("/")
                ? encodeURI(staffMember.image)
                : `${SUPABASE_URL}/storage/v1/object/public/staffimages/${encodeURIComponent(staffMember.image)}`
              : undefined
          }
          showStars={staffMember.slug === "star"}
          hideQuoteButton={staffMember.hideQuoteButton}
        />
        {!staffMember.hideQuoteButton && (
          <ReferralCTA staffName={staffMember.name.split(" ")[0]} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default StaffPage;
