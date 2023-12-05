import { Icons } from "@/components/icons";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function TxDetailsPage() {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const { txId } = params;

    navigate(`/dashboard/?txId=${txId}`);
  }, [params, navigate]);

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Icons.spinner className="h-10 w-10 animate-spin" />
    </div>
  );
}

export default TxDetailsPage;
