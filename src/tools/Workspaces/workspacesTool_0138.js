/**
 * Generated Tool: workspacesTool_0138
 * Domain: Workspaces
 * ID: 0138
 */
exports.workspacesTool_0138 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.users.me(params);
    return response;
  } catch (error) {
    console.error('Error in workspacesTool_0138:', error);
    throw error;
  }
};
