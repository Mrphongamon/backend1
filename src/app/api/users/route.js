import { NextResponse } from "next/server";

// ================================================================================
// 1. GET Method - สำหรับดึงข้อมูลผู้ใช้
// ================================================================================
/**
 * Route Handler สำหรับ HTTP Method: GET
 * ทำหน้าที่รองรับ Request แบบ GET ที่เข้ามายัง Endpoint นี้
 */
export async function GET() {
  try {
    console.log({ success: true, message: "ดึงข้อมูลผู้ใช้สำเร็จ", status: 200 });

    return NextResponse.json(
      {
        success: true,
        message: "ดึงข้อมูลผู้ใช้สำเร็จ",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}



// ================================================================================
// 2. POST Method - สำหรับเพิ่มข้อมูลผู้ใช้
// ================================================================================
/**
 * Route Handler สำหรับ HTTP Method: POST
 * ทำหน้าที่รองรับ Request แบบ POST ที่ส่งข้อมูลเข้ามาเพื่อเพิ่มผู้ใช้
 */
export async function POST(request) {
  try {
    // หากต้องการรับข้อมูล JSON ที่ส่งมาจากฝั่ง Client สามารถเปิดใช้งานบรรทัดด้านล่างนี้ได้ครับ:
    // const body = await request.json();

    console.log({ success: true, message: "เพิ่มผู้ใช้สำเร็จ", status: 200 });

    return NextResponse.json(
      {
        success: true,
        message: "เพิ่มผู้ใช้สำเร็จ",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "เกิดข้อผิดพลาดภายในเซิร์ฟเวอร์",
        error: error instanceof Error ? error.message : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}

