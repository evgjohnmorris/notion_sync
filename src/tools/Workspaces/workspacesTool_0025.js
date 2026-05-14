/**
 * Generated Tool: workspacesTool_0025
 * Domain: Workspaces
 * ID: 0025
 */
exports.workspacesTool_0025 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0025:', error);
    throw error;
  }
};
