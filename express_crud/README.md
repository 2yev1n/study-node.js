# node express sequelize  MySQL 로 만드는 USER 관리 CRUD

### user 관리

* Create(생성)
  * user 생성 : create
    * id : STRING(15), PK
    * age : INT
    * name : STRING(5)
* Read(읽기)
  * readAll(전체 조회) : findAll
    * createdAt DESC순으로 정리
    * { order: [['createdAt', 'DESC']] }
  * readOne(선택 조회) : findOne
    * { where : {id : id} }
* Update(갱신)
  * update(정보 수정) : update
    * age
    * name
* Delete(삭제)
  * delete(id 삭제) : destroy
    * 선택 삭제 
      * { where : {id : id} }
    * 전체 삭제 
      * { where : {}, truncate : true }

