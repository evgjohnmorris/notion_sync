/**
 * Generated Tool: workspacesTool_0967
 * Domain: Workspaces
 * ID: 0967
 */
exports.workspacesTool_0967 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0967:', error);
    throw error;
  }
};
