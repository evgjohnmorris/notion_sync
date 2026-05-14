/**
 * Generated Tool: workspacesTool_0346
 * Domain: Workspaces
 * ID: 0346
 */
exports.workspacesTool_0346 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0346:', error);
    throw error;
  }
};
