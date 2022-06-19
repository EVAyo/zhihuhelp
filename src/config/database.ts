import path from 'path'
class Database {
  static readonly version = '1.0.1'
  static readonly uri: string = path.resolve(__dirname, `../../zhihu_v${Database.version}.sqlite`)
}
export default Database
