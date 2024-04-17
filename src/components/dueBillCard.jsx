export default function DueBillCard() {
    const dummy = [
      {
        billno: "1203/23-24",
        name: "John Doe",
        amount: 1000,
        dueDate: "2021-12-31",
        status: "Unpaid",
      },
      {
        billno: "1204/23-24",
        name: "John Doe",
        amount: 1000,
        dueDate: "2021-12-31",
        status: "Unpaid",
      },
      {
        billno: "1205/23-24",
        name: "John Doe",
        amount: 1000,
        dueDate: "2021-12-31",
        status: "Unpaid",
      },
    ];
  
    // Calculate total due amount
    const totalDue = dummy.reduce((total, item) => total + item.amount, 0);
  
    return (
      <>
        <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900">
              Due Bills
            </h5>
          </div>
          <div className="flow-root">
            <ul role="list" className="divide-y divide-gray-200">
              {dummy.map((item, index) => (
                <li key={index} className="py-3 sm:py-4">
                  <div className="flex items-center">
                    <div className="flex-1 min-w-0 ms-4">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Bill No: {item.billno}
                        </p>
                      <p className="text-sm text-gray-500 truncate">
                        Due Date: {item.dueDate}
                      </p>
                      <p className="text-sm text-gray-500 truncate">
                        Status: {item.status}
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                      ${item.amount}
                    </div>
                  </div>
                </li>
              ))}
              <li className="py-3 sm:py-4">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">Total Due:</span>
                  <span className="font-semibold text-gray-900">${totalDue}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
  