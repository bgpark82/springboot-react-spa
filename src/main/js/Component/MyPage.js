import React from 'react'
import {Route, Link} from 'react-router-dom'


export default function MyPage() {
  return (
    <div>
        <Link to="/mypage/register">회원가입</Link>
        <Link to="/mypage/login">로그인</Link>
    </div>
  )
}

