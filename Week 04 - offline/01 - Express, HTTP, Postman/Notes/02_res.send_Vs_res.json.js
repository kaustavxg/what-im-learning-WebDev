// ======================= res.send() =======================

/*
! Ye ek general-purpose method hai. Isse kuch bhi bhej sakte ho — 
! string, number, object, array, HTML, etc.
*/

res.send("Hello Kaustav");            // text bhej diya
res.send({ user: "Kaustav" });        // object bheja, Express khud hi JSON mein convert karega

// Agar string bhejoge jo JSON jaisa dikhta ho,
// to Express usko res.send() mein JSON nahi maanega

res.send('{"msg": "hanji hanji"}');   // ⚠️ Yeh as a plain text jayega, JSON nahi

// ! WHYYYY ?
/*
! Yeh dikhta toh JSON jaisa hai, lekin yeh string hai.
! Express jab res.send() use karta hai, toh:
    1. Pehle data ka type check karta hai.
    2. Agar type string hai → Content-Type ko 'text/html' ya 'text/plain' set karta hai.
    3. Isliye browser ya API receiver isko JSON nahi maanega,
       sirf ek normal text string maan lega.
*/

// ======================= res.JSON() =======================

// ! Ye specifically JSON bhejne ke liye hai. Isme hamesha object ya array bhejna hota hai.

res.json({ user: "Kaustav" });    // Proper JSON response
res.json([1, 2, 3]);              // JSON array bhej diya



