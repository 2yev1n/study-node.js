# node express sequelize MySQL 로 만드는 POST 관리 CRUD

### DB

* post-id : INTEGER, PK, UQ, Al, NN
* writer : VARCHAR(45), NN
* title : VARCHAR(30)
* content : TEXT
* filed : VARCHAR(10)
* picture : VARCHAR(50)
* createdAt : DATETIME, NN
* updatedAt : DATETIME, NN

### POST 관리

* CREATE(생성)
  * 게시글 생성 : createPost
    * post-id : Al(자동증가 · 생성)
    * writer
    * title
    * content
    * filed
    * picture

* READ(조회)
  * 내가 게시한 전체 게시물 조회 : findPostAll
    * writer로 request 받아서 확인
  * 선택한 게시물 조회 : findOnePost
    * post-id로 request 받아서 확인
* UPDATE(갱신) 
  * 제목, 내용, 분야 변경 : updatePost
    * post-id로 request 받아서 변경
* DELETE(삭제)
  * 게시글 삭제 : deletePost
    * post-id로 request 받아서 삭제
