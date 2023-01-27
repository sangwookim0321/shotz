import React, {useState, useEffect, useMemo} from 'react'
import {auth} from "../index.js"; // firebase에서 auth를 받아옴
import {db} from '../index.js'

// AuthContext Provider 생성
export const AuthContext = React.createContext(); 

// AuthProvider 생성 후 auth정보를 user에 담아 전체 컴포넌트(app.js를통해) 배포
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    //사용자의 인증 상태가 변화할때 동작하는 함수 > setUser에 넣음
    auth.onAuthStateChanged(setUser)
  }, [user]);

  // 아이템 list
  const [list, setList] = useState([]);
  const [noticelist, setNoticeList] = useState([]);

  // firestore 의 컬렉션 product를 ref에 담음
  const dataList = db.collection("product")
  const noticeDataList = db.collection("notice")

  // onSnapshot함수를 통해 파라미터로 들어온 결과값(Snapshot)을
  // forEach 반복문으로 Snapshot의 상세 데이터값을 돌려 결과값 doc를 items 배열에 push를 통해 넣음
  function getData(){
    dataList.onSnapshot((Snapshot) => {
        const data = Snapshot.docs.map(doc => ({
          ...doc.data(),
          id: doc.id
        }));
        setList(data)
    })
}

  function getNoticeData(){
    noticeDataList.onSnapshot((Snapshot) => {
      const data = Snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }));
      setNoticeList(data)
  })
}

  useMemo(() => {
    getData();
    getNoticeData();
  }, [])

  return (
    <AuthContext.Provider value={{ user:user, list:list, noticelist:noticelist }}>{children}</AuthContext.Provider>
  );
};