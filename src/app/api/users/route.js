import { NextResponse } from "next/server";
import db from '@/app/lib/db';

// ================================================================================
// 1. GET Method - สำหรับดึงข้อมูลผู้ใช้จากฐานข้อมูล
// ================================================================================
/**
 * Route Handler สำหรับ HTTP Method: GET
 * ทำหน้าที่ดึงข้อมูลผู้ใช้ทั้งหมด (เลือกเฉพาะคอลัมน์ที่ไม่เป็นความลับ เช่น ไม่เอา password)
 */
export async function GET() {
  try {
    // ดึงข้อมูลตามโครงสร้างจริงของตาราง tbl_users (ละเว้น password เพื่อความปลอดภัย)
    const [rows] = await db.query(
      'SELECT id, firstname, fullname, lastname, username, status, created_at, updated_at FROM tbl_users'
    );

    return NextResponse.json({
      success: true,
      message: "ดึงข้อมูลผู้ใช้สำเร็จ",
      total: rows.length,
      data: rows,
    }, { status: 200 });

  } catch (error) {
    console.error('Database query error:', error);
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
    let body = {};
    
    // ตรวจสอบว่ามี Content-Type และมี Body ส่งมาหรือไม่
    const text = await request.text();
    if (text) {
      body = JSON.parse(text);
    } else {
      return NextResponse.json(
        { success: false, message: "กรุณาส่งข้อมูล JSON มาใน Body" },
        { status: 400 } // ใช้ 400 Bad Request แทน 500
      );
    }

    console.log("Received data:", body);

    // TODO: ทำคำสั่ง INSERT ลงฐานข้อมูลตรงนี้

    return NextResponse.json(
      { success: true, message: "เพิ่มผู้ใช้สำเร็จ" },
      { status: 200 }
    );
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json(
      {
        success: false,
        message: "รูปแบบข้อมูล JSON ไม่ถูกต้อง",
        error: error.message,
      },
      { status: 400 }
    );
  }
}