/**
 * Generated Tool: workspacesTool_0801
 * Domain: Workspaces
 * ID: 0801
 */
exports.workspacesTool_0801 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0801:', error);
    throw error;
  }
};
