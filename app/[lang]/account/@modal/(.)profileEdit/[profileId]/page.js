import { getDictionary } from "@/app/[lang]/dictionaries/dictionaries";
import { getUserById } from "@/app/actions/UserActions";
import Modal from "@/app/components/Modal";
import ProfileUpdateForm from "@/app/components/account/ProfileUpdateForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function page({ params }) {
  const dict = await getDictionary(params.lang);
  const session = await auth();
  if (!session) redirect("/login");
  const user = await getUserById(params.profileId);
  return (
    <Modal>
      <div className="contain py-16 ">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-">{dict.piu}</h2>
          <p className="text-gray-600 mb-6 text-sm">{dict.uypi}</p>
          <ProfileUpdateForm user={user} lang={params.lang} />
        </div>
      </div>
    </Modal>
  );
}
