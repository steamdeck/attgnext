import fs from 'fs';
import path from 'path';

export interface BackupInfo {
  id: string;
  filePath: string;
  timestamp: Date;
  originalContent: string;
  description?: string;
}

export class BackupSystem {
  private backupDir: string;
  
  constructor() {
    // Only set the directory if we're in a runtime environment
    if (typeof window === 'undefined') {
      this.backupDir = path.join(process.cwd(), 'backups');
      this.ensureBackupDir();
    } else {
      this.backupDir = '';
    }
  }

  private ensureBackupDir() {
    if (typeof window !== 'undefined') return;
    
    if (!fs.existsSync(this.backupDir)) {
      fs.mkdirSync(this.backupDir, { recursive: true });
    }
  }

  async createBackup(filePath: string, description?: string): Promise<BackupInfo> {
    // Return empty backup info if we're in a client-side environment
    if (typeof window !== 'undefined') {
      return {
        id: '',
        filePath,
        timestamp: new Date(),
        originalContent: '',
        description
      };
    }
    
    try {
      const fullPath = path.join(process.cwd(), filePath);
      const originalContent = fs.readFileSync(fullPath, 'utf-8');
      
      const backupId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const backupInfo: BackupInfo = {
        id: backupId,
        filePath,
        timestamp: new Date(),
        originalContent,
        description
      };

      const backupFilePath = path.join(this.backupDir, `${backupId}.json`);
      fs.writeFileSync(backupFilePath, JSON.stringify(backupInfo, null, 2));

      return backupInfo;
    } catch (error) {
      console.error('Error creating backup:', error);
      throw error;
    }
  }

  async restoreBackup(backupId: string): Promise<boolean> {
    try {
      const backupFilePath = path.join(this.backupDir, `${backupId}.json`);
      const backupData = fs.readFileSync(backupFilePath, 'utf-8');
      const backup: BackupInfo = JSON.parse(backupData);

      const fullPath = path.join(process.cwd(), backup.filePath);
      fs.writeFileSync(fullPath, backup.originalContent, 'utf-8');

      return true;
    } catch (error) {
      console.error('Error restoring backup:', error);
      return false;
    }
  }

  async getBackups(): Promise<BackupInfo[]> {
    try {
      const files = fs.readdirSync(this.backupDir);
      const backups: BackupInfo[] = [];

      for (const file of files) {
        if (file.endsWith('.json')) {
          const backupFilePath = path.join(this.backupDir, file);
          const backupData = fs.readFileSync(backupFilePath, 'utf-8');
          const backup: BackupInfo = JSON.parse(backupData);
          backup.timestamp = new Date(backup.timestamp);
          backups.push(backup);
        }
      }

      return backups.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
    } catch (error) {
      console.error('Error getting backups:', error);
      return [];
    }
  }

  async deleteBackup(backupId: string): Promise<boolean> {
    try {
      const backupFilePath = path.join(this.backupDir, `${backupId}.json`);
      fs.unlinkSync(backupFilePath);
      return true;
    } catch (error) {
      console.error('Error deleting backup:', error);
      return false;
    }
  }
}

export const backupSystem = new BackupSystem();
