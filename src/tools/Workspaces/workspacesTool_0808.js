/**
 * Generated Tool: workspacesTool_0808
 * Domain: Workspaces
 * ID: 0808
 */
exports.workspacesTool_0808 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0808:', error);
    throw error;
  }
};
