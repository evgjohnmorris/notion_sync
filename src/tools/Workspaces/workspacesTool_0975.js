/**
 * Generated Tool: workspacesTool_0975
 * Domain: Workspaces
 * ID: 0975
 */
exports.workspacesTool_0975 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0975:', error);
    throw error;
  }
};
