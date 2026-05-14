/**
 * Generated Tool: workspacesTool_0813
 * Domain: Workspaces
 * ID: 0813
 */
exports.workspacesTool_0813 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0813:', error);
    throw error;
  }
};
