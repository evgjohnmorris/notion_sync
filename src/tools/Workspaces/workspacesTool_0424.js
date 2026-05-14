/**
 * Generated Tool: workspacesTool_0424
 * Domain: Workspaces
 * ID: 0424
 */
exports.workspacesTool_0424 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0424:', error);
    throw error;
  }
};
