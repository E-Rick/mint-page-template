/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace MerkleData {
  export type MerkleEntryStruct = {
    user: string;
    maxMint: BigNumberish;
    mintPrice: BigNumberish;
    proof: BytesLike[];
  };

  export type MerkleEntryStructOutput = [
    string,
    BigNumber,
    BigNumber,
    string[]
  ] & {
    user: string;
    maxMint: BigNumber;
    mintPrice: BigNumber;
    proof: string[];
  };

  export type TestDataStruct = {
    entries: MerkleData.MerkleEntryStruct[];
    root: BytesLike;
  };

  export type TestDataStructOutput = [
    MerkleData.MerkleEntryStructOutput[],
    string
  ] & { entries: MerkleData.MerkleEntryStructOutput[]; root: string };
}

export interface MerkleDataInterface extends utils.Interface {
  functions: {
    "data(string)": FunctionFragment;
    "getTestSetByName(string)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "data" | "getTestSetByName"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "data", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getTestSetByName",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "data", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getTestSetByName",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MerkleData extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MerkleDataInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    data(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string] & { root: string }>;

    getTestSetByName(
      name: string,
      overrides?: CallOverrides
    ): Promise<[MerkleData.TestDataStructOutput]>;
  };

  data(arg0: string, overrides?: CallOverrides): Promise<string>;

  getTestSetByName(
    name: string,
    overrides?: CallOverrides
  ): Promise<MerkleData.TestDataStructOutput>;

  callStatic: {
    data(arg0: string, overrides?: CallOverrides): Promise<string>;

    getTestSetByName(
      name: string,
      overrides?: CallOverrides
    ): Promise<MerkleData.TestDataStructOutput>;
  };

  filters: {};

  estimateGas: {
    data(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTestSetByName(
      name: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    data(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTestSetByName(
      name: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}