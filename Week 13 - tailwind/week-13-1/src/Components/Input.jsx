export const Input = ({
    onClick, 
    type, 
    placeholder,
    onDone
 }) => {

  return (
    <div
      onClick={onClick}
      className="rounded-xl text-xl text-white bg-[#1f366d] "
    >
      <input
        type={type}
        placeholder={placeholder}
        className="bg-transparent outline-none text-white placeholder-gray-400 w-full px-20 py-3"
        onChange={(e) => {
            const value = e.target.value
            console.log(`date selected: ${value}`);
            
            if(value && value.trim() !== "") 
                onDone();
        }}
      />
    </div>
  );
};
