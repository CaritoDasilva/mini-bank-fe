export class BankOprations {

    title_operation?: string;
    label_operation?: string;
    operation_type?: string;
    amount_to_update?: number;
    isDeposit?: boolean;
    operation_owner?: string | null;
    destination_client_account?: string;

    constructor(type_value: number) {
        this.getFormContent(type_value);
    }

    getFormContent(value: number) {
        if (value === 1) {
            this.title_operation = 'Depósito';
            this.label_operation = 'Monto a depósitar';
            this.operation_type = 'deposit';
            this.isDeposit = true;
            this.amount_to_update = 0;
        }
        if (value === 2) {
            this.title_operation = 'Retiro';
            this.label_operation = 'Monto a retirar';
            this.operation_type = 'withdrawal';
            this.isDeposit = false;
            this.amount_to_update = 0;
        }
        if (value === 3) {
            this.title_operation = 'Transferencias a terceros';
            this.label_operation = 'Monto a transferir';
            this.operation_type = 'transfer';
            this.isDeposit = true;
            this.amount_to_update = 0;
            this.operation_owner = !localStorage.getItem('user') ? '' : localStorage.getItem('user');
            this.destination_client_account = '';
        }

    }
}
