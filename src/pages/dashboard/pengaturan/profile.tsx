import FormComponent from "@/components/AtributComponent/PengaturanAkun/Profile/FormComponent";
import ProfileHeaderComponent from "@/components/AtributComponent/PengaturanAkun/Profile/ProfileHeaderComponent";
import BlankLayout from "@/components/Layouts/BlankLayout";

const Profile = () => {
  return (
    <>
      <ProfileHeaderComponent />
      <FormComponent />
    </>
  );
};

Profile.getLayout = (page: any) => {
  return <BlankLayout>{page}</BlankLayout>;
};
export default Profile;
