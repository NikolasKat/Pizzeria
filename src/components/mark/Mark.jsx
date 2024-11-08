function Mark(props) {
   const styles = props.description == "discount" ? "bg-red-600" : "bg-black";
   return (
      <div
         className={`absolute w-auto uppercase font-medium p-2 text-white ${styles}`}
      >
         {props.text}
      </div>
   );
}

export default Mark;
