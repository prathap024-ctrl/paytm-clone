class ApiResponse {
  constructor(statusCode, message = "success") {
    this.statusCode = statusCode;
    this.message = message;
    this.data = this.data;
    this.success = statusCode < 400;
  }
}
export { ApiResponse };
