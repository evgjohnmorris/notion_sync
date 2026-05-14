/**
 * Generated Tool: workspacesTool_0905
 * Domain: Workspaces
 * ID: 0905
 */
exports.workspacesTool_0905 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0905:', error);
    throw error;
  }
};
