// Cognition SDK
// ---------------------------------------------------

const enum ApiVersion {
  v1 = 'v1'
}

const enum DecisionStatus {
  allow = 'allow',
  review = 'review',
  reject = 'reject'
}

const enum Channel {
  web = 'web',
  desktop = 'desktop',
  app = 'app',
}

const enum LoginStatus {
  success = 'success',
  failure = 'failure'
}

const enum AuthenticationType {
  client_storage = 'client_storage',
  password = 'password',
  two_factor = 'two_factor',
  single_sign_on = 'single_sign_on',
  social_sign_on = 'social_sign_on',
  key = 'key'
}

interface CognitionResponse {
  score: number,
  confidence: number,
  decision: DecisionStatus,
  tokenId: string,
  signals: Array<string>
}

interface CognitionInput {
  eventId?: string;
  dateTime?: Date;
  ipAddress: string;
  login: {
    userId: string;
    channel: Channel;
    usedCaptcha: boolean;
    usedRememberMe?: boolean;
    authenticationType?: AuthenticationType | null;
    status: LoginStatus;
    passwordUpdateTime?: Date;
    userNameUpdateTime?: Date;
  };
  _custom: any;
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
interface CognitionRequestOverrides extends Partial<Omit<CognitionInput, 'login'>> {
  login: Partial<CognitionInput['login']>
}

interface CognitionRequest extends CognitionInput {
  apiKey: string;
  dateTime: Date;
}

export {
  ApiVersion,
  DecisionStatus,
  Channel,
  LoginStatus,
  AuthenticationType,
  CognitionInput,
  CognitionResponse,
  CognitionRequest,
  CognitionRequestOverrides
};
