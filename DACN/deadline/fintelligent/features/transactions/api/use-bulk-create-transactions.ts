import { toast } from "sonner"
import { InferRequestType, InferResponseType } from "hono"
import { useMutation, useQueryClient } from "@tanstack/react-query" 

import { client } from "@/lib/hono"

type ResponseType = InferResponseType<typeof client.api.transactions["bulk-create"]["$post"]>
type ResquestType = InferRequestType<typeof client.api.transactions["bulk-create"]["$post"]>["json"]
    
export const useBulkCreateTransactions = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation<
        ResponseType,
        Error,
        ResquestType
    >({
        mutationFn: async (json) => {
            const response = await client.api.transactions["bulk-create"]["$post"]({json})
            return await response.json();
        },
        onSuccess: () => {
            toast.success("Transactions created")
            queryClient.invalidateQueries({ queryKey: ["transactions"]});
            queryClient.invalidateQueries({ 
                queryKey: [
                    "summary"
                ]});
        },
        onError: () => {
            toast.error("Faild to create transactions")
        },
    });
    return mutation
}




