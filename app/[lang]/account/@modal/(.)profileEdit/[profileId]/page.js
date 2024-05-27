import { getUserById } from "@/app/actions/UserActions";
import Modal from "@/app/components/Modal";
import ProfileUpdateForm from "@/app/components/account/ProfileUpdateForm";

export default async function page({ params }) {
  const user = await getUserById(params.profileId);
  return (
    <Modal>
      <div className="contain py-16 ">
        <div className="max-w-lg mx-auto shadow px-6 py-7 rounded overflow-hidden">
          <h2 className="text-2xl uppercase font-medium mb-">
            Profile Information Update
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            Update your profile information
          </p>
          <ProfileUpdateForm user={user} />
        </div>
      </div>
    </Modal>
  );
}
