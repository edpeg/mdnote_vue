export const BackEndCode = {
    // 0  操作成功
    SUCCESS: 0,

    // 10xx  用户业务逻辑错误
    USER_NOT_LOGIN: 1000,
    USER_NAME_ILLEGAL: 1001,
    USER_ID_NOT_EXIST: 1002,
    USER_PASSWORD_LENGTH_ILLEGAL: 1003,
    USER_NAME_PRESENCE: 1004,
    USER_LOGGEN_IN: 1005,
    USER_NO_PERMISSION: 1006,
    USER_PASSWORD_FAIL: 1007,

    // 11xx 笔记业务逻辑错误
    NOTE_SAVE_FAIL: 1101,
    NOTE_FAIL: 1102,

    // 12xx 文件上传失败
    FILE_CONTENT_EMPTY: 1200,
    FILE_NAME_FALL: 1201,
    QI_NIU_FILE_UPLOAD_FALL: 1202,
    FILE_READ_FALL: 1203,
    FILE_SAVE_FALL: 1204,
    FILE_HASH_COLLISION_TOO_MUCH: 1205,
    FILE_EXTENSION_EMPTY: 1206,
    FILE_EXTENSION_FORMAT_INACCURACY: 1207,

    // 90xx  内网服务错误
    INTERNAL_ELASTIC_CONNECT_FAIL: 9000,
    INTERNAL_MYSQ_CONNECT_FAIL: 9001,
    INTERNAL_REDIS_CONNECT_FAIL: 9002,
    INTERNAL_SERVICE_CONNECT_FAIL: 9003,
    INTERNAL_SPRING_DATA_CONNECT_FAIL: 9004,
    INTERNAL_ELASTIC_NO_DATA: 9005,

    // 91xx  内网服务执行错误
    INTERNAL_MYSQL_SQL_EXEC_FAIL: 9100,
    INTERNAL_ELASTIC_QUDRY_DSL_EXEC_FAIL: 9101,

    // 101xx 公网服务错误
    EXTERNAL_QINIUYUN_CONNECT_FAIL: 10100,

    // 104xx 客户端请求错误
    CLIENT_IP_NOT_ALLOWED: 10403,
    CLIENT_REQUEST_ENTITY_TOO_LARGE: 10413,

    // 105XX 服务器异常状态
    SERVER_INTERNAL_ERROR: 10500,
    SERVER_MAINTENANCE: 10550,

    // 106xx 网络接口错误

    // 未知错误
    UNKNOWN: 99999
}

export class MkdownNoteError {
    constructor(error, code) {
        this.error = error
        this.code = code
    }
}