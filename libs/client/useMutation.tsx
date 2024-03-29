import {useState} from "react";

interface UseMutationState {
  loading: boolean;
  data?: object;
  error?: object;
}
type UseMutationResult = [(data: any) => void, UseMutationState];

export default function useMutation(url: string):UseMutationResult {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined|any>(undefined);
  const [error, setError] = useState<undefined|any>(undefined);

  function mutation(data: any){
    setLoading(true);
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data),
    }).then((response)=> response.json().catch(() => {}))
      .then(json => setData((json))) //setData로 간소화 가능
      .catch(json => setError(json)) //setError로 간소화 가능
      .finally(() => setLoading(false));
  }

  return [mutation, {loading, data, error}];
}