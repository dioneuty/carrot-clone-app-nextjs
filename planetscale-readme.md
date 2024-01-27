PlanetScale CLI
PlanetScale은 데이터베이스 이상이며 CLI는 복잡한 명령 이상입니다. pscale 커맨드 라인을 사용하면 branch, deploy 요청 및 기타 PlanetScale 개념을 손쉽게 사용할 수 있습니다.
https://github.com/planetscale/cli

Planet Scale cli 설치 (맥)
터미널에서 아래를 차례대로 실행
1. brew install planetscale/tap/pscale
   (pscale은 Homebrew Tap을 통해 사용할 수 있습니다.)
2. brew install mysql-client (mysql client설치)
3. brew upgrade pscale (최신 버전 업데이트)

Planet Scale cli 설치 (윈도우)
1. Scoop 설치 (Windows용 커맨드 라인 설치 프로그램)
   https://scoop.sh/
2. scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git
3. scoop install pscale mysql
4. scoop update pscale

PlanetScale CLI를 사용하여 데이터베이스를 생성
pscale database create carrot-market --region ap-northeast

DATABASE_URL
mysql://127.0.0.1:3306/carrot-market
IP 주소 127.0.0.1은 localhost 또는 루프백 주소 라고하는 특수 목적의 IPv4 주소 입니다.

Prisma를 통한 MySQL 데이터베이스 서버에 연결
ex) mysql://USER:PASSWORD@HOST:PORT/DATABASE
https://www.prisma.io/docs/concepts/database-connectors/mysql

PlanetScale 프리티어 사용시 한 개의 데이터베이스만 이용 가능
추가로 데이터베이스 생성할 때 Error: This organization is at its limit of 1 free database. 오류 발생