/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FindOneDogRequest = {
  id: string;
};

/** @internal */
export const FindOneDogRequest$inboundSchema: z.ZodType<
  FindOneDogRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type FindOneDogRequest$Outbound = {
  id: string;
};

/** @internal */
export const FindOneDogRequest$outboundSchema: z.ZodType<
  FindOneDogRequest$Outbound,
  z.ZodTypeDef,
  FindOneDogRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FindOneDogRequest$ {
  /** @deprecated use `FindOneDogRequest$inboundSchema` instead. */
  export const inboundSchema = FindOneDogRequest$inboundSchema;
  /** @deprecated use `FindOneDogRequest$outboundSchema` instead. */
  export const outboundSchema = FindOneDogRequest$outboundSchema;
  /** @deprecated use `FindOneDogRequest$Outbound` instead. */
  export type Outbound = FindOneDogRequest$Outbound;
}

export function findOneDogRequestToJSON(
  findOneDogRequest: FindOneDogRequest,
): string {
  return JSON.stringify(
    FindOneDogRequest$outboundSchema.parse(findOneDogRequest),
  );
}

export function findOneDogRequestFromJSON(
  jsonString: string,
): SafeParseResult<FindOneDogRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FindOneDogRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FindOneDogRequest' from JSON`,
  );
}
