/**
 * Generated Tool: workspacesTool_0950
 * Domain: Workspaces
 * ID: 0950
 */
exports.workspacesTool_0950 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0950:', error);
    throw error;
  }
};
