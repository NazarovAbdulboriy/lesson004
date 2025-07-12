import { useRef, useState } from "react";

const Header = () => {
  console.log("Header render");

  // STATE bilan inputlar
  const [fname, setFname] = useState("");
  const [surname, setSurname] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");

  // REF bilan inputlar (hammasi l bilan!)
  const lFnameRef = useRef(null);
  const lSurnameRef = useRef(null);
  const lBirthDateRef = useRef(null);
  const lEmailRef = useRef(null);
  const lPhoneRef = useRef(null);
  const lIdRef = useRef(null);

  const [users, setUsers] = useState([]);

  const handleClick = () => {
    const user = {
      // STATE inputlar
      fname,
      surname,
      birthDate,
      email,
      phone,
      id,

      // REF inputlar
      lFname: lFnameRef.current.value,
      lSurname: lSurnameRef.current.value,
      lBirthDate: lBirthDateRef.current.value,
      lEmail: lEmailRef.current.value,
      lPhone: lPhoneRef.current.value,
      lId: lIdRef.current.value,
    };

    console.log(user);
    setUsers([...users, user]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-600 p-4">
      <div className="bg-white p-10 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Registration</h2>

        <h4 className="text-lg font-semibold mb-2">STATE bilan inputlar</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            value={fname}
            onChange={(e) => setFname(e.target.value)}
            type="text"
            placeholder="Name (state)"
            className="border border-gray-300 rounded-md p-3"
          />
          <input
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            type="text"
            placeholder="Surname (state)"
            className="border border-gray-300 rounded-md p-3"
          />
          <input
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            type="date"
            className="border border-gray-300 rounded-md p-3"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email (state)"
            className="border border-gray-300 rounded-md p-3"
          />
          <input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
            placeholder="Phone (state)"
            className="border border-gray-300 rounded-md p-3"
          />
          <input
            value={id}
            onChange={(e) => setId(e.target.value)}
            type="text"
            placeholder="ID (state)"
            className="border border-gray-300 rounded-md p-3"
          />
        </div>

        <h4 className="text-lg font-semibold mb-2">REF bilan inputlar (l bilan!)</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            ref={lFnameRef}
            type="text"
            placeholder="Name (ref)"
            className="border border-gray-300 rounded-md p-3"
          />
          <input
            ref={lSurnameRef}
            type="text"
            placeholder="Surname (ref)"
            className="border border-gray-300 rounded-md p-3"
          />
          <input
            ref={lBirthDateRef}
            type="date"
            className="border border-gray-300 rounded-md p-3"
          />
          <input
            ref={lEmailRef}
            type="email"
            placeholder="Email (ref)"
            className="border border-gray-300 rounded-md p-3"
          />
          <input
            ref={lPhoneRef}
            type="tel"
            placeholder="Phone (ref)"
            className="border border-gray-300 rounded-md p-3"
          />
          <input
            ref={lIdRef}
            type="text"
            placeholder="ID (ref)"
            className="border border-gray-300 rounded-md p-3"
          />
        </div>

        <button
          onClick={handleClick}
          className="bg-gray-600 text-white px-6 py-3 rounded-md hover:bg-gray-700"
        >
          Qo‘shish
        </button>

        <ul className="space-y-2">
          {users.map((user, index) => (
            <li key={index} className="text-sm">
              <b>STATE:</b> {user.fname} | {user.surname} | {user.birthDate} |{" "}
              {user.email} | {user.phone} | {user.id} <br />
              <b>REF (l bilan):</b> {user.lFname} | {user.lSurname} | {user.lBirthDate} |{" "}
              {user.lEmail} | {user.lPhone} | {user.lId}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
