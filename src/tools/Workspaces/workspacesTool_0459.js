/**
 * Generated Tool: workspacesTool_0459
 * Domain: Workspaces
 * ID: 0459
 */
exports.workspacesTool_0459 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0459:', error);
    throw error;
  }
};
