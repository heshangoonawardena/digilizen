import AddLicenseForm from "@/components/forms/addLicense";
import { Button } from "@/components/ui/button";
import { Save, UserCheck } from "lucide-react";

const NewLicense = () => {
  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Issue New License</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="gap-2">
            <UserCheck className="h-4 w-4" />
            Verify Citizen
          </Button>
          <Button className="gap-2">
            <Save className="h-4 w-4" />
            Save Draft
          </Button>
        </div>
      </div>

      <AddLicenseForm />
    </div>
  );
};
export default NewLicense;
