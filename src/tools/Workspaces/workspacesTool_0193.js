/**
 * Generated Tool: workspacesTool_0193
 * Domain: Workspaces
 * ID: 0193
 */
exports.workspacesTool_0193 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0193:', error);
    throw error;
  }
};
