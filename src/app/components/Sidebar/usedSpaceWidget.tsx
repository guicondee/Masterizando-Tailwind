export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-green-50 px-4 py-5">
      <div className="space-y-1">
        <span className="text-sm/5 font-medium text-green-700">Used space</span>
        <p className="text-sm/5 text-green-500">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-green-200">
        <div className="h-2 w-4/5 rounded-full bg-green-600" />
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="text-sm font-medium text-green-500 hover:text-green-600"
        >
          Dismiss
        </button>
        <button
          type="button"
          className="text-sm font-medium text-green-700 hover:text-green-900"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  );
}
