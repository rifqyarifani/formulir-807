import { z } from 'zod';

export const dokumenSchema = z.object({
    noDokumen: z.string().min(1).max(255),
    npwp: z.string().min(1).max(255),
    namaWp: z.string().min(1).max(255),
    jenisBerkasId: z.string().min(1).max(255),
    noDusId: z.string().min(1).max(255)
  });

export const userSchema = z.object({
  username: z.string().min(1).max(255),
  role: z.string().min(1).max(255),
  password: z.string().min(1).max(255)
})

export const jenisBerkasSchema = z.object({
  nama: z.string().min(1).max(255)
})

export const dusSchema = z.object({
  noDus: z.string().min(1).max(255),
  noRak: z.string().min(1).max(255)
})