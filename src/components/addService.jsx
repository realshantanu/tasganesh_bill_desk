import axios from "axios";
import React, {useState, useEffect} from "react";



export default function AddService() {

  const [serviceId, setServiceId] = useState(null);
  const [serviceName, setServiceName] = useState(null);
  const [serviceUnit, setServiceUnit] = useState(null);
  useEffect(() => {
    axios.get("http://localhost:5000/api/new/service/number")
    .then((response) => {
      setServiceId(response.data.serviceNumber);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [serviceId]);

  const addService = () => {
    const service = {
      id: serviceId,
      service_name: serviceName,
      item_unit: serviceUnit,
    };
    axios.post("http://localhost:5000/api/add/service", service)
    .then((response) => {
      console.log(response.data);
      alert("Service added successfully");
    })
    .catch((error) => {
      console.log(error);
    });
  }


  return (
    <>
      <div class="w-full max-w-md mx-auto">
        <div
          class="rounded-lg border bg-card text-card-foreground shadow-sm"
          data-v0-t="card"
        >
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
              Add Service to Database
            </h3>
            <p class="text-sm text-muted-foreground">
              Enter the details of the new service you want to add.
            </p>
          </div>
          <div class="p-6">
            <form class="grid gap-4">
              <div class="grid gap-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="serviceId"
                >
                  Service ID
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="serviceId"
                  disabled
                  type="text"
                  value={serviceId}
                />
              </div>
              <div class="grid gap-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="serviceName"
                >
                  Service Name
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="serviceName"
                  placeholder="Enter service name"
                  type="text"
                  onChange={(e) => setServiceName(e.target.value)}
                />
              </div>
              <div class="grid gap-2">
                <label
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  for="serviceUnit"
                >
                  Service Unit
                </label>
                <input
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="serviceUnit"
                  placeholder="Enter service unit"
                  type="text"
                  onChange={(e) => setServiceUnit(e.target.value)}
                />
              </div>
            </form>
          </div>
          <div class="flex items-center p-6">
            <div class="flex justify-end">
              <button
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-black text-white hover:bg-black/90 h-10 px-4 py-2"
                type="submit"
                onClick={addService}
              >
                Add Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
