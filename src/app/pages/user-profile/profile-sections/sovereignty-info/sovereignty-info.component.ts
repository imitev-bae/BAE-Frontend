import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

interface SovereigntyObjective {
  code: string;
  label: string;
  score: string | null;
}

@Component({
  selector: 'sovereignty-info',
  templateUrl: './sovereignty-info.component.html'
})
export class SovereigntyInfoComponent {
  objectives: SovereigntyObjective[] = [
    { code: 'SOV-1', label: 'PROFILE._sov_strategic', score: null },
    { code: 'SOV-2', label: 'PROFILE._sov_legal', score: null },
    { code: 'SOV-3', label: 'PROFILE._sov_data_ai', score: null },
    { code: 'SOV-4', label: 'PROFILE._sov_operational', score: null },
    { code: 'SOV-5', label: 'PROFILE._sov_supply_chain', score: null },
    { code: 'SOV-6', label: 'PROFILE._sov_technology', score: null },
    { code: 'SOV-7', label: 'PROFILE._sov_security', score: null },
    { code: 'SOV-8', label: 'PROFILE._sov_environmental', score: null }
  ];
  sovereigntyScore: string | null = null;
  overallSeal: string | null = null;
  showOnPublicProfile: boolean = false;

  get hasAssessment(): boolean {
    return this.sovereigntyScore != null;
  }

  get frameworkUrl(): string {
    return environment.SOVEREIGNTY_FRAMEWORK_URL;
  }

  togglePublicProfile() {
    if (!this.hasAssessment) return;
    this.showOnPublicProfile = !this.showOnPublicProfile;
  }
}
