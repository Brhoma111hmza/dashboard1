const firebaseConfig = {
  apiKey: "AIzaSyDeqHPCe__G-5tHV8I61y_9YvS9elmtIX0",
  authDomain: "sham-webs.firebaseapp.com",
  projectId: "sham-webs",
  storageBucket: "sham-webs.appspot.com",
  messagingSenderId: "636838916676",
  appId: "1:636838916676:web:eddbc42046466ccdea8211",
  measurementId: "G-1DYDKQDJ04"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// تحميل البيانات من Firestore وعرضها في الجدول
db.collection("signups").orderBy("timestamp", "desc").get()
  .then((querySnapshot) => {
    const tableBody = document.querySelector("#dataTable tbody");
    let index = 1;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${index}</td>
        <td>${data.phone}</td>
        <td>${new Date(data.timestamp).toLocaleString("ar-EG")}</td>
      `;

      tableBody.appendChild(row);
      index++;
    });
  })
  .catch((error) => {
    console.error("❌ فشل تحميل البيانات:", error);
  });
