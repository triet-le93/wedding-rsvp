const SaveTheDate = () => {
  return (
    <div className="bg-wedding-bg flex items-center justify-center mb-6 font-satisfy p-4">
      <div className="max-w-md p-8 bg-wedding-bg shadow-wedding rounded-lg text-center">
        <h1 className="text-3xl md:text-4xl text-wedding-text font-semibold mb-4">Save the Date</h1>
        <p className="text-wedding-text mb-4">You are invited to the wedding of</p>
        <div className="bg-wedding-secondary max-w-screen p-4 mb-4 text-white">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Lê Nguyễn Minh Triết</h2>
          <p className="text-xl md:text-2xl font-semibold mb-2">&</p>
          <h2 className="text-2xl md:text-3xl font-semibold">Nguyễn Ngọc Linh</h2>
        </div>
        <p className="text-wedding-text mb-4">Monday, 11th November 2024</p>
        <p className="text-wedding-text mb-4">5:00 PM onwards</p>
      </div>
    </div>
  );
}

export default SaveTheDate;
