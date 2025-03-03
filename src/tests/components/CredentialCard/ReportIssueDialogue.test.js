import { render } from '@testing-library/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../stories/components/CredentialCard/ReportIssueDialog.stories';

const { Primary: ReportIssueDialog } = composeStories(stories);

describe('components/CredentialCard/ReportIssueDialog', () => {
    it('should render', () => {
        render(<ReportIssueDialog />);
    });
});