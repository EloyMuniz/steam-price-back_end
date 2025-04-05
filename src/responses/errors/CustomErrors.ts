export class BaseError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
    }
}

export class BadRequestError extends BaseError {
    constructor(message: string = 'Requisição inválida', statusCode: number = 400) {
        super(message, statusCode);
    }
}

export class UnauthorizedError extends BaseError {
    constructor(message: string = 'Acesso não autorizado. Faça login para continuar.', statusCode: number = 401) {
        super(message, statusCode);
    }
}

export class ForbiddenError extends BaseError {
    constructor(message: string = 'Você não tem permissão para acessar este recurso.', statusCode: number = 403) {
        super(message, statusCode);
    }
}

export class NotFoundError extends BaseError {
    constructor(message: string = 'O recurso solicitado não foi encontrado.', statusCode: number = 404) {
        super(message, statusCode);
    }
}

export class ConflictError extends BaseError {
    constructor(message: string = 'Conflito de dados. O recurso já existe.', statusCode: number = 409) {
        super(message, statusCode);
    }
}

export class InternalServerError extends BaseError {
    constructor(message: string = 'Erro interno do servidor. Tente novamente mais tarde.', statusCode: number = 500) {
        super(message, statusCode);
    }
}

export class BadGatewayError extends BaseError {
    constructor(message: string = 'O servidor recebeu uma resposta inválida ao tentar processar sua solicitação. Por favor, tente novamente em alguns minutos.', statusCode: number = 502) {
        super(message, statusCode);
    }
}