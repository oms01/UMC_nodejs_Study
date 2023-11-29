import express from "express";
import asyncHandler from 'express-async-handler';
import { userSignin } from "../controllers/user.controller.js";

export const userRouter = express.Router();
/**
 * @swagger
 * paths:
 *   /user/signin:
 *     post:
 *       tags:
 *         - User
 *       summary: 회원가입
 *       parameters:
 *       - name: signIn
 *         in: body
 *         required: true
 *         schema:
 *           properties:
 *             email:
 *               type: string
 *               description: 유저 이메일
 *               example: swaggerTest@mail.com
 *             name:
 *               type: string
 *               description: 유저 이름
 *               example: swagger
 *             gender:
 *               type: string
 *               description: 유저 성별
 *               example: M
 *             birthYear:
 *               type: integer
 *               description: 생일 년도
 *               example: 2000
 *             birthMonth:
 *               type: integer
 *               description: 생일 월
 *               example: 1
 *             birthDay:
 *               type: integer
 *               description: 생일 일
 *               example: 31
 *             addr:
 *               type: string
 *               description: 주소
 *               example: swagger Test address
 *             specAddr:
 *               type: string
 *               description: 상세 주소
 *               example: swagger Test specAddr
 *             phone:
 *               type: string
 *               description: 전화 번호
 *               example: 010-0000-0000
 *             prefer:
 *               type: array
 *               description: 선호 카테고리 번호
 *               example: [1, 3, 5]
 *       responses:
 *         '200':
 *           description: 회원 가입 성공!
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: integer
 *                 example: 200
 *               isSuccess:
 *                 type: boolean
 *                 example: true
 *               code:
 *                 type: integer
 *                 example: 2000
 *               message:
 *                 type: string
 *                 example: "success!"
 *               data:
 *                 type: object
 *                 example: {
 *                   "email": "swaggerTest@mail.com",
 *                   "name": "swagger",
 *                   "preferCategory": [
 *                     "한식",
 *                     "일식"
 *                   ]
 *                 }
 *                 
 *         '400':
 *           description: 잘못된 요청
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: integer
 *                 example: 400
 *               isSuccess:
 *                 type: boolean
 *                 example: false
 *               code:
 *                 type: integer
 *                 example: COMMON001
 *               message:
 *                 type: string
 *                 example: 잘못된 요청입니다
 * 
 *         '500':
 *           description: 서버 에러
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: integer
 *                 example: 500
 *               isSuccess:
 *                 type: boolean
 *                 example: false
 *               code:
 *                 type: integerQ
 *                 example: COMMON000
 *               message:
 *                 type: string
 *                 example: 서버 에러, 관리자에게 문의 바랍니다.
 */
userRouter.post('/signin', asyncHandler(userSignin));