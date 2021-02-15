export class Account {
    // name: string;
    client_rut: string;
    amount: number;
    historial: Historial[]

    constructor(client_rut: string, amount: number, historial: Historial[]) {
        this.client_rut = client_rut;
        this.amount = amount;
        this.historial = historial;
    }
}

export class Historial {
    operation_type: string;
    operation_amount: number;
    successful_operation: boolean;
    operation_owner: string;

    constructor(operation_type: string, operation_amount: number, successful_operation: boolean, operation_owner: string) {
        this.operation_amount = operation_amount;
        this.operation_type = operation_type;
        this.operation_owner = operation_owner;
        this.successful_operation = successful_operation;

    }
}