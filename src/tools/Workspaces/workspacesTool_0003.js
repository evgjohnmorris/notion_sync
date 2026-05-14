/**
 * Generated Tool: workspacesTool_0003
 * Domain: Workspaces
 * ID: 0003
 */
exports.workspacesTool_0003 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0003:', error);
    throw error;
  }
};
