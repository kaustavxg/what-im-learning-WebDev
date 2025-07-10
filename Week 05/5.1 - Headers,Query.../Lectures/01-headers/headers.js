//! =============== HTTP HEADERS =================

/*

# SOURCE: https://petal-estimate-4e9.notion.site/Headers-b92c5116f5cb44a0afae98ecbb786d46

## What are HTTP Headers?
1. Key-value pairs exchanged between client and server
2. HTTP headers convey METADATA about the request/response

## What is Metadata?
Metadata = Data about data (actual content ke baare mein extra information)

## Real-world Example:
Parcel delivery analogy:
┌─────────────────────────────┐
│ Box Labels (Metadata):      │
│ • Fragile                   │
│ • Deliver before 10 AM      │
│ • From: Kaustav             │
│ • To: Mumbai                │
│ • Weight: 2kg               │
└─────────────────────────────┘

📦 Box ke andar jo item hai = ACTUAL DATA
📝 Box pe likhi details(fragile, deliver, from, etc......) = METADATA (HTTP headers ka yahi kaam)

## HTTP Context Example:

Request:
GET /home HTTP/1.1
Host: example.com
Content-Type: application/json
Authorization: Bearer abc123
User-Agent: Mozilla/5.0

Breaking it down:
┌─────────────────────────────────────────────────────────────────┐
│ Header Name          │ Purpose                                  │
├─────────────────────────────────────────────────────────────────┤
│ Host                 │ Kaunsi website ka request hai            │
│ Content-Type         │ Data ka format kya hai (JSON/HTML/etc)   │
│ Authorization        │ User authenticated hai ya nahi           │
│ User-Agent           │ Kaunsa browser/app use kar raha hai      │
└─────────────────────────────────────────────────────────────────┘


## Request Headers
the headers the client sends out in the request are known as request headers


## Response Headers
the headers that the server response to the client 

## Key Point:
Headers mein actual webpage ya data nahi hota
Headers sirf batate hain ki data ko kaise handle karna hai

Think of it as:
• Letter = Actual content
• Envelope address/stamps = Headers (metadata)

*/

