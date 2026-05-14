/**
 * Generated Tool: workspacesTool_0161
 * Domain: Workspaces
 * ID: 0161
 */
exports.workspacesTool_0161 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0161:', error);
    throw error;
  }
};
