/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MetadataRenderAdminCheck0817,
  MetadataRenderAdminCheck0817Interface,
} from "../../MetadataRenderAdminCheck.sol/MetadataRenderAdminCheck0817";

const _abi = [
  {
    inputs: [],
    name: "Access_OnlyAdmin",
    type: "error",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212206a77a4810f093268f2667d13caea3d1d4c0dcebfcddf7d30b3aced26d9dbb6b264736f6c63430008110033";

type MetadataRenderAdminCheck0817ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MetadataRenderAdminCheck0817ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MetadataRenderAdminCheck0817__factory extends ContractFactory {
  constructor(...args: MetadataRenderAdminCheck0817ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MetadataRenderAdminCheck0817> {
    return super.deploy(
      overrides || {}
    ) as Promise<MetadataRenderAdminCheck0817>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MetadataRenderAdminCheck0817 {
    return super.attach(address) as MetadataRenderAdminCheck0817;
  }
  override connect(signer: Signer): MetadataRenderAdminCheck0817__factory {
    return super.connect(signer) as MetadataRenderAdminCheck0817__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MetadataRenderAdminCheck0817Interface {
    return new utils.Interface(_abi) as MetadataRenderAdminCheck0817Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MetadataRenderAdminCheck0817 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MetadataRenderAdminCheck0817;
  }
}